import * as THREE from "three";
import React, { useMemo } from "react";
import { useLoader, useUpdate, ReactThreeFiber } from "react-three-fiber";

interface TextProps extends ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group> {
    children: string;
    vAlign?: string;
    hAlign?: string;
    size?: number;
}
export default function Text({
    children,
    vAlign = "center",
    hAlign = "center",
    size = 1,
    ...props
}: TextProps) {
    const font = useLoader(THREE.FontLoader, "/visby.json");
    const config = useMemo(
        () => ({
            font,
            size: 40,
            height: 100,
            curveSegments: 8,
            bevelSegments: 8,
            bevelEnabled: true,
            bevelThickness: 30,
            bevelSize: 1.5,
            bevelOffset: 0
        }),
        [font]
    );
    const mesh = useUpdate(
        (self: { [key: string]: any }) => {
            const size = new THREE.Vector3();
            self.geometry.computeBoundingBox();
            self.geometry.boundingBox.getSize(size);
            self.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
            self.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
        },
        [children]
    );
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh}>
                <textGeometry attach="geometry" args={[children, config]} />
                <meshNormalMaterial attach="material" />
            </mesh>
        </group>
    );
}
