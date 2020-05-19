import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { extend, useThree, useFrame, ReactThreeFiber } from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";
import { VignetteShader } from "three/examples/jsm/shaders/VignetteShader";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import { BadTVShader } from "./post/bad-tv-shader";
import { StaticShader } from "./post/static-shader";
import { GlitchPass } from "./post/glitch-pass";

extend({
    EffectComposer,
    ShaderPass,
    RenderPass,
    AfterimagePass,
    FilmPass,
    UnrealBloomPass,
    BloomPass,
    GlitchPass
});

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            effectComposer: ReactThreeFiber.Object3DNode<EffectComposer, typeof EffectComposer>;
            renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>;
            unrealBloomPass: ReactThreeFiber.Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>;
            shaderPass: ReactThreeFiber.Object3DNode<ShaderPass, typeof ShaderPass>;
            glitchPass: ReactThreeFiber.Object3DNode<any, any>;
            filmPass: ReactThreeFiber.Object3DNode<FilmPass, typeof FilmPass>;
        }
    }
}

type EffectsProps = {
    down: boolean;
    animations: boolean;
};

export default function Effects({ down, animations }: EffectsProps) {
    const composer = useRef<EffectComposer>(null);
    const badTV = useRef<ShaderPass>();
    const staticShader = useRef<ShaderPass>();
    const { scene, gl, size, camera } = useThree();
    const [aspect] = useState(() => new THREE.Vector2(size.width, size.height));
    // const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size]);
    useEffect(() => {
        void composer?.current?.setSize(size.width, size.height);
    }, [size]);
    useFrame(() => {
        if (badTV.current) {
            // @ts-ignore
            badTV.current.uniforms["time"].value += 0.1;
        }
        if (staticShader.current) {
            // @ts-ignore
            staticShader.current.uniforms["time"].value += 0.1;
        }
        composer?.current?.render();
    }, 2);
    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <unrealBloomPass attachArray="passes" args={[aspect, 0.5, 0.9, 0]} />
            <shaderPass
                attachArray="passes"
                args={[VignetteShader]}
                uniforms-offset-value={0.7}
                uniforms-darkness-value={1}
                renderToScreen
            />
            {animations && (
                <filmPass
                    attachArray="passes"
                    args={down ? [0.6, 0.3, 658, 0] : [0.12, 0.17, 550, 0]}
                />
            )}
            {animations && <glitchPass attachArray="passes" factor={down ? 1 : 0} />}
            {!down && animations && (
                <>
                    <shaderPass
                        ref={badTV}
                        attachArray="passes"
                        args={[BadTVShader]}
                        uniforms-distortion-value={0.07}
                        uniforms-distortion2-value={0.05}
                        uniforms-speed-value={0.08}
                        uniforms-rollSpeed-value={0}
                        renderToScreen
                    />
                    <shaderPass
                        ref={staticShader}
                        attachArray="passes"
                        args={[StaticShader]}
                        uniforms-amount-size={0.03}
                        uniforms-amount-value={0.03}
                        renderToScreen
                    />
                </>
            )}
            {down && animations && (
                <>
                    <shaderPass
                        ref={badTV}
                        attachArray="passes"
                        args={[BadTVShader]}
                        uniforms-distortion-value={down ? 2 : 0.05}
                        uniforms-distortion2-value={down ? 2 : 0.05}
                        uniforms-speed-value={0.4}
                        uniforms-rollSpeed-value={down ? 0.7 : 0}
                        renderToScreen
                    />

                    <shaderPass
                        attachArray="passes"
                        args={[RGBShiftShader]}
                        uniforms-amount-value={down ? 0.01 : 0}
                        renderToScreen
                    />
                    <shaderPass
                        ref={staticShader}
                        attachArray="passes"
                        args={[StaticShader]}
                        uniforms-amount-size={down ? 0.2 : 0.05}
                        uniforms-amount-value={down ? 0.1 : 0.04}
                        renderToScreen
                    />
                </>
            )}
        </effectComposer>
    );
}
