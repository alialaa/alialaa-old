import React, { useRef, useState, useCallback, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import Effects from "./effects";
import Stars from "./stars";
import Earth from "./Earth";
import Text from "./Text";
import { NavigationItemType } from "@utils";
import { useMedia } from "@hooks";

function Camera({
    mouse,
    animations
}: {
    mouse: React.RefObject<[number, number]>;
    animations: boolean;
}) {
    const { camera } = useThree();
    useEffect(() => {
        console.log(animations);
        if (!animations && mouse.current) {
            camera.position.x = 0;
            camera.position.y = 0;
            camera.lookAt(0, 0, 0);
        }
    }, [animations]);
    useFrame(() => {
        if (!animations) return;
        if (!mouse.current) return;
        camera.position.x += 0.15 * ((1 - mouse.current[0]) * 0.2 - camera.position.x);
        camera.position.y += 0.15 * (mouse.current[1] * 1 - camera.position.y);
        camera.lookAt(0, 0, 0);
    });
    return null;
}

function Light() {
    return <directionalLight intensity={0.6} position={[1, 0.5, 0]} />;
}

function Space({
    page,
    night,
    animations
}: {
    page: NavigationItemType | undefined;
    night: boolean;
    animations: boolean;
}) {
    const [down, set] = useState<boolean>(false);
    const mouse = useRef<[number, number]>([0, 0]);
    const isSmall = useMedia(`screen and (max-width: ${890 / 16}em)`);
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
        mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
    }, []);
    if (typeof window === "undefined") return null; //don't render during SSR
    return (
        <Canvas
            resize={
                (window as any).ResizeObserver
                    ? { debounce: { resize: 1000, scroll: 0 } }
                    : undefined
            }
            pixelRatio={window.devicePixelRatio}
            camera={{ position: [0, 0, 2000], near: 0.01, far: 10000, fov: 40 }}
            onMouseUp={() => set(false)}
            onMouseDown={() => set(true)}
            onMouseMove={onMouseMove}
            onCreated={({ gl, camera }) => {
                camera.lookAt(0, 0, 0);
                gl.setClearColor(new THREE.Color("#030008"));
            }}
        >
            <Stars />
            {!isSmall && (
                <>
                    <Camera mouse={mouse} animations={animations} />
                    <ambientLight intensity={0.03} />
                    <Light />
                    <pointLight
                        intensity={0.9}
                        position={[400, 400, -1000]}
                        color={new THREE.Color("#270a57")}
                    />
                    <mesh scale={[40, 40, 40]} position={[1400, 800, -1000]}>
                        <sphereBufferGeometry attach="geometry" args={[4, 32, 32]} />
                        <meshBasicMaterial attach="material" color="#FFFF99" fog={false} />
                    </mesh>
                    {page && page.to === "/" && (
                        <Suspense fallback={null}>
                            <Earth down={down} night={night} />
                        </Suspense>
                    )}
                    <Suspense fallback={null}>
                        <group position={[400, -100, -400]}>
                            <Text size={30} position={[0, 0, 0]}>
                                {"Hello, I'm Ali"}
                            </Text>
                            <Text size={20} position={[0, -200, 0]}>
                                A Front-end Web Developer
                            </Text>
                        </group>
                    </Suspense>
                    <Effects down={down} animations={animations} />
                </>
            )}
        </Canvas>
    );
}

export default Space;
