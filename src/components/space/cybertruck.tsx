import React, { useRef, useEffect, useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Cybertruck(props: any) {
    const group = useRef();
    //@ts-ignore
    const { nodes, materials, animations } = useLoader(GLTFLoader, "/tesla_cybertruck/scene.gltf");
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0, 49.99, -87.28]}
                        rotation={[0.01, 0, 0]}
                        scale={[106.41, 106.41, 106.41]}
                    >
                        <mesh
                            material={materials["Material.012"]}
                            geometry={nodes.Cap_interior000_Material012_0.geometry}
                        />
                        <mesh
                            material={materials["Material.004"]}
                            geometry={nodes.Cap_interior000_Material004_0.geometry}
                        />
                    </group>
                    <group
                        position={[-100.04, -76.06, -170.34]}
                        rotation={[Math.PI, 0, Math.PI]}
                        scale={[127.61, 101.17, 101.17]}
                    >
                        <mesh
                            material={materials.Black}
                            geometry={nodes.wheel002_Black_0.geometry}
                        />
                        <mesh material={materials.Gray} geometry={nodes.wheel002_Gray_0.geometry} />
                    </group>
                    <group
                        position={[100.04, -76.06, -170.34]}
                        rotation={[0, 0, 0]}
                        scale={[127.61, 101.17, 101.17]}
                    >
                        <mesh
                            material={materials.Black}
                            geometry={nodes.wheel003_Black_0.geometry}
                        />
                        <mesh material={materials.Gray} geometry={nodes.wheel003_Gray_0.geometry} />
                    </group>
                    <group
                        position={[-100.04, -79.37, 203.76]}
                        rotation={[Math.PI, 0, Math.PI]}
                        scale={[113.43, 89.93, 89.93]}
                    >
                        <mesh
                            material={materials.Black}
                            geometry={nodes.wheel001_Black_0.geometry}
                        />
                        <mesh material={materials.Gray} geometry={nodes.wheel001_Gray_0.geometry} />
                    </group>
                    <group
                        position={[100.04, -79.37, 203.76]}
                        rotation={[0, 0, 0]}
                        scale={[113.43, 89.93, 89.93]}
                    >
                        <mesh material={materials.Black} geometry={nodes.wheel_Black_0.geometry} />
                        <mesh material={materials.Gray} geometry={nodes.wheel_Gray_0.geometry} />
                    </group>
                    <group
                        position={[-0.02, -14.85, -56.31]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.012"]}
                            geometry={nodes.object014_Material012_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.03, 31.91, 71.32]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.005"]}
                            geometry={nodes.object013_Material005_0.geometry}
                        />
                    </group>
                    <group
                        position={[0.78, -31.89, 5.68]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.006"]}
                            geometry={nodes.object012_Material006_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.04, 33.69, -181.06]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.014"]}
                            geometry={nodes.object011_Material014_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.44, 23.44, -285.99]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.002"]}
                            geometry={nodes.object010_Material002_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.04, -9.69, 106.9]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.013"]}
                            geometry={nodes.object008_Material013_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.04, -12.66, 174.75]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.001"]}
                            geometry={nodes.object007_Material001_0.geometry}
                        />
                        <mesh
                            material={materials["Material.003"]}
                            geometry={nodes.object007_Material003_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.04, -17.53, 67.36]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.011"]}
                            geometry={nodes.object006_Material011_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.04, 30.18, 65.51]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials.FM_Windglass_dark}
                            geometry={nodes.object002_FM_Windglass_dark_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.04, -9.64, 5.53]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.009"]}
                            geometry={nodes.object001_Material009_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.05, -21.63, 31.39]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.007"]}
                            geometry={nodes.object_Material007_0.geometry}
                        />
                    </group>
                    <group
                        position={[-0.01, -1.33, -5.07]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[99.11, 99.11, 99.11]}
                    >
                        <mesh
                            material={materials["Material.015"]}
                            geometry={nodes.object003_Material015_0.geometry}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}
