
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';


// Inline style object for the regal gold text effect
const regalGoldText = {
    background: REGAL_GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0px 5px rgba(255, 215, 0, 0.4))', // Gold shadow for shine
};


const New: React.FC = () => {
    return (
        <>
            <h3
                className="text-4xl font-serif mt-4 tracking-wider"
                style={regalGoldText}
            >
                title
            </h3>
        </>
    );
}

export default New;