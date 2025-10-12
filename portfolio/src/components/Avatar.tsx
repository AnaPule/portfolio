// src/components/Avatar.tsx
import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Group,
  MeshStandardMaterial,
  MeshBasicMaterial,
  LineBasicMaterial,
  Line,
  Color,
  BufferGeometry,
  Float32BufferAttribute,
  SkinnedMesh,
  Mesh
} from "three";
import type { GLTF } from "three-stdlib";

// Extend the JSX catalog with Three.js elements
extend({ Line });

// Type definitions for your glasses GLB
type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh | SkinnedMesh | Group;
  };
  materials: {
    [key: string]: MeshStandardMaterial;
  };
};

type CyberGlassesProps = JSX.IntrinsicElements["group"] & {
  // Add any custom props if needed
};

// This component MUST be used inside <Canvas>
function CyberGlasses(props: CyberGlassesProps) {
  const group = useRef<Group>(null!);
  const glassesRef = useRef<THREE.Group>(null);

  const { nodes } = useGLTF("/glasses.glb") as GLTFResult;

  const leftLineRef = useRef<Line>(null!);
  const rightLineRef = useRef<Line>(null!);

  const lineMaterial = useMemo(() => new LineBasicMaterial({
    color: new Color('#00ff00'),
    linewidth: 2,
    transparent: true,
    opacity: 0.8
  }), []);

  const cyberpunkMaterial = useMemo(() => new MeshBasicMaterial({
    color: new Color('#8a2be2'),
    emissive: new Color('#8a2be2'),
    emissiveIntensity: 1.5,
    transparent: true,
    opacity: 0.7,
    fog: false,
  }) as MeshBasicMaterial, []);

  const lensMaterial = useMemo(() => new MeshBasicMaterial({
    color: new Color('#00ffff'),
    emissive: new Color('#00ffff'),
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.3,
    fog: false,
  }) as MeshBasicMaterial, []);

  // This useFrame hook is now properly inside a Canvas component
  useFrame((state, delta) => {
    if (glassesRef.current) {
      glassesRef.current.rotation.y += delta * 0.5;
      glassesRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }

    const time = state.clock.getElapsedTime() * 0.5;
    const radius = 0.6;

    if (leftLineRef.current) {
      leftLineRef.current.position.x = Math.sin(time) * radius;
      leftLineRef.current.position.y = Math.cos(time) * radius;
      leftLineRef.current.rotation.z += 0.01;
    }
    if (rightLineRef.current) {
      rightLineRef.current.position.x = Math.cos(time) * radius;
      rightLineRef.current.position.y = Math.sin(time) * radius;
      rightLineRef.current.rotation.z -= 0.01;
    }
  });

  useEffect(() => {
    group.current.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        if (mesh.name.toLowerCase().includes('lens')) {
          mesh.material = lensMaterial;
        } else {
          mesh.material = cyberpunkMaterial;
        }
        if (mesh.material.transparent) {
          mesh.material.needsUpdate = true;
        }
      }
    });
  }, [nodes, cyberpunkMaterial, lensMaterial]);

  const createLineGeometry = () => {
    const points = [];
    for (let i = 0; i < 50; i++) {
      points.push(
        Math.cos(i * 0.1) * 0.1,
        Math.sin(i * 0.1) * 0.1,
        i * 0.01
      );
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(points, 3));
    return geometry;
  };

  const lineGeometry = useMemo(() => createLineGeometry(), []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Render the loaded glasses model */}
        {Object.values(nodes).map((node: any, index: number) => {
          if (node.isMesh) {
            return (
              <mesh
                key={node.uuid || index}
                geometry={node.geometry}
                material={node.material}
              />
            );
          }
          return null;
        })}

        {Object.keys(nodes).length > 0 && (
          <>
            {/* Left Lens Line */}
            <primitive
              object={new Line(lineGeometry, lineMaterial)}
              ref={leftLineRef}
              position={[0.5, 0.05, 0.1]}
            />
            {/* Right Lens Line */}
            <primitive
              object={new Line(lineGeometry, lineMaterial)}
              ref={rightLineRef}
              position={[-0.5, 0.05, 0.1]}
            />
          </>
        )}
      </group>
    </group>
  );
}

// Main Avatar component that wraps everything in Canvas
export default function Avatar() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />

        {/* CyberGlasses is now properly inside Canvas */}
        <CyberGlasses />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/glasses.glb");