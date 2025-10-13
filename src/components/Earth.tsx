import React from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Canvas, useLoader } from '@react-three/fiber';
import { Briefcase, Crown, Sparkles } from 'lucide-react';
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei';


const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37';

const regalGoldText = {
    background: REGAL_GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0px 5px rgba(255, 215, 0, 0.4))',
};

// --- Texture Map URLs
const EARTH_MAP_URL = 'https://unpkg.com/three-globe@2.30.0/example/img/earth-water.png';
const CONTINENT_LINES_URL = 'https://unpkg.com/three-globe@2.30.0/example/img/earth-topology.png';

const Earth: React.FC = () => {
    const earthRef = React.useRef<THREE.Mesh>(null)

    // Load the two necessary textures
    const [earthMap, linesMap] = useLoader(THREE.TextureLoader, [
        EARTH_MAP_URL,
        CONTINENT_LINES_URL,
    ]);

    // Set wrapping to repeat the texture correctly around the sphere
    earthMap.wrapS = THREE.RepeatWrapping;
    earthMap.wrapT = THREE.RepeatWrapping;
    linesMap.wrapS = THREE.RepeatWrapping;
    linesMap.wrapT = THREE.RepeatWrapping;

    return (
        <Float
            speed={0.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
        >
            <group>

                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#0A0A0A" // Dark base
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                {/* main earth sphere */}
                <mesh ref={earthRef}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        map={earthMap}
                        color={REGAL_GOLD_GRADIENT}
                        emissive={REGAL_GOLD_GRADIENT}
                        emissiveIntensity={0.5}
                        metalness={0.8}
                        roughness={0.8}
                        opacity={0.6}
                        transparent
                    />
                </mesh>

                <mesh>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshStandardMaterial
                        emissiveMap={linesMap}
                        emissive={GOLD_HEX}
                        emissiveIntensity={10}
                        map={linesMap}
                        color={GOLD_HEX}
                        metalness={0.2}
                        roughness={0.7}
                        opacity={0.8}
                        side={THREE.FrontSide}
                    />
                </mesh>
            </group>
        </Float>
    );
}

// 3D Model Container Component
const ModelContainer: React.FC = () => {
    return (
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-0.5 border-[#D4AF37] shadow-2xl"
            style={{
                boxShadow: `0 0 20px rgba(212, 175, 55, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.3)`,
            }}
        >
            <Canvas
                camera={{ position: [0.6, 0.6, 2.2], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 3, 5]} 
          intensity={0.8}
          color="#F9F295"
          castShadow
        />
        <pointLight 
          position={[-3, -1, 2]} 
          intensity={0.3}
          color="#60A5FA"
        />

                <Earth />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI}
                    minPolarAngle={0}
                    autoRotate
                    autoRotateSpeed={1.5}
                    enableDamping
                    dampingFactor={0.03}
                />

                <Environment preset="night" />
            </Canvas>
        </div>
    );
}

export default ModelContainer;