"use client";

import React, { ReactNode } from "react";

interface GlowingEffectProps {
    children: ReactNode;
}

const GlowingEffect: React.FC<GlowingEffectProps> = ({ children }) => {
    return (
        <div className="group/card relative w-72 p-6 m-4 rounded-2xl bg-black/70 backdrop-blur-md border-2 border-purple-900 overflow-hidden transition-all duration-300">

        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/card:border-purple-500 pointer-events-none group-hover/card:shadow-[0_0_20px_4px_rgba(168,85,247,0.5)] transition-all duration-300" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default GlowingEffect;