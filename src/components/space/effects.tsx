import { Vector2 } from "three";
import React, { useRef, useState, useEffect } from "react";
import { extend, useThree, useFrame, ReactThreeFiber } from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { VignetteShader } from "three/examples/jsm/shaders/VignetteShader";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import { GlitchPass } from "./post/glitch-pass";

extend({
    EffectComposer,
    ShaderPass,
    RenderPass,
    UnrealBloomPass,
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
        }
    }
}

type EffectsProps = {
    down: boolean;
    animations: boolean;
};

export default function Effects({ down, animations }: EffectsProps) {
    const composer = useRef<EffectComposer>(null);
    const { scene, gl, size, camera } = useThree();
    const [aspect] = useState(() => new Vector2(size.width, size.height));
    useEffect(() => {
        void composer?.current?.setSize(size.width, size.height);
    }, [size]);
    useFrame(() => {
        composer?.current?.render();
    }, 2);
    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <unrealBloomPass attachArray="passes" args={[aspect, 0.6, 0.9, 0]} />
            <shaderPass
                attachArray="passes"
                args={[VignetteShader]}
                uniforms-offset-value={0.7}
                uniforms-darkness-value={1}
                renderToScreen
            />
            {animations && <glitchPass attachArray="passes" factor={down ? 1 : 0} />}
            {down && animations && (
                <>
                    <shaderPass
                        attachArray="passes"
                        args={[RGBShiftShader]}
                        uniforms-amount-value={down ? 0.01 : 0}
                        renderToScreen
                    />
                </>
            )}
        </effectComposer>
    );
}
