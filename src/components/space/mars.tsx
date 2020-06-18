import { TextureLoader } from "three";
import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import marsImg from "@images/2k_mars.jpg";
import Cybertruck from "./cybertruck";

export default function Mars() {
    const ref = useRef();

    const [mars] = useLoader<any>(TextureLoader, [marsImg]);
    return (
        <>
            <Cybertruck
                scale={[1, 1, 1]}
                rotation={[0, -Math.PI / 3, 0]}
                position={[300, 0, 1000]}
            />
            <group ref={ref} scale={[100, 100, 100]} position={[-800, -400, -800]}>
                <mesh>
                    <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
                    <meshStandardMaterial
                        attach="material"
                        map={mars}
                        roughness={1}
                        transparent
                        opacity={1}
                    />
                </mesh>
            </group>
        </>
    );
}
