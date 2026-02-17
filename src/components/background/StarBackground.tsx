"use client";

import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const STAR_COUNT = 5000;

const StarField = (props: any) => {
    const ref = useRef<any>(null);

    // FIX: Must be STAR_COUNT * 3 (x, y, z for each star)
    const sphere = useMemo(() => {
        const data = new Float32Array(STAR_COUNT * 3);
        random.inSphere(data, { radius: 1.2 });
        return data;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const StarBackground = () => {
    return (
        <div className="w-full h-auto fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarField />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};
