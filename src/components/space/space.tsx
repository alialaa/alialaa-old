import React, { useRef, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import Effects from "./effects";
import Stars from "./stars";
import Earth from "./Earth";
import Text from "./Text";

function Camera({ mouse }: { mouse: React.RefObject<[number, number]> }) {
    const { camera } = useThree();
    useFrame(() => {
        if (!mouse.current) return;
        camera.position.x += 0.15 * ((1 - mouse.current[0]) * 0.2 - camera.position.x);
        camera.position.y += 0.15 * (mouse.current[1] * 1 - camera.position.y);
        camera.lookAt(0, 0, 0);
    });
    return null;
}

function Light() {
    return (
        <>
            {/* <pointLight 
        // shadow-mapSize-width={2048}
        // shadow-mapSize-height={2048} 
        // castShadow 
        ref={light} 
        color={'#fff'}
        intensity={1} 
        position={[10, 20, 10]} 
      /> */}
            <directionalLight
                // shadow-mapSize-width={2048}
                // shadow-mapSize-height={2048}
                // castShadow
                intensity={0.6}
                position={[1, 0.5, 0]}
            />
        </>
    );
}

function Space() {
    const [down, set] = useState<boolean>(false);
    const [night, setNight] = useState<boolean>(false);
    const mouse = useRef<[number, number]>([0, 0]);
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
        mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
    }, []);
    if (typeof window === "undefined") return null; //don't render during SSR
    return (
        <>
            <div style={{ height: "700px" }}>
                <Canvas
                    // style={{backgroundColor: '#010a1f'}}
                    pixelRatio={window.devicePixelRatio}
                    camera={{ position: [0, 0, 2000], near: 0.01, far: 10000, fov: 40 }}
                    onMouseUp={() => set(false)}
                    onMouseDown={() => set(true)}
                    onMouseMove={onMouseMove}
                    // shadowMap
                    onCreated={({ gl, camera }) => {
                        // gl.gammaFactor = 2.2;
                        // gl.gammaOutput = true;
                        // gl.physicallyCorrectLights = true;
                        // gl.toneMapping = THREE.ACESFilmicToneMapping
                        // gl.outputEncoding = THREE.sRGBEncoding
                        camera.lookAt(0, 0, 0);
                        gl.setClearColor(new THREE.Color("#030008"));
                    }}
                >
                    <Camera mouse={mouse} />
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
                        {/* <pointLight distance={6100} intensity={50} color="white" /> */}
                    </mesh>
                    <Stars />
                    <Suspense fallback={null}>
                        <Earth down={down} night={night} />
                    </Suspense>
                    <Suspense fallback={null}>
                        <group position={[400, -100, -400]}>
                            <Text size={30} position={[0, 0, 0]}>
                                {" Hello, I'm Ali"}
                            </Text>
                            <Text size={20} position={[0, -200, 0]}>
                                A Front-end Web Developer
                            </Text>
                        </group>
                    </Suspense>
                    {/* <Effects down={down} /> */}
                </Canvas>
            </div>
            <button onClick={() => setNight(!night)} style={{ position: "absolute", bottom: 0 }}>
                toggle
            </button>
            {/* <div style={{position: 'absolute', bottom: '10%', right: '20%'}}>
      <h1 style={{color: '#fff'}}>Hello, I'm Ali</h1>
    </div> */}
        </>
    );
}

export default Space;
