import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float time = uTime * 0.15;
    
    // Create multiple layers of noise for organic motion
    float n1 = snoise(uv * 2.0 + time * 0.5);
    float n2 = snoise(uv * 3.0 - time * 0.3 + n1 * 0.5);
    float n3 = snoise(uv * 1.5 + time * 0.2 + n2 * 0.3);
    
    float finalNoise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
    
    // Colors
    vec3 black = vec3(0.0, 0.0, 0.0);
    vec3 deepBlue = vec3(0.043, 0.118, 1.0); // #0b1eff
    vec3 electricBlue = vec3(0.0, 0.4, 1.0);
    vec3 purple = vec3(0.5, 0.0, 1.0);
    
    // Mix colors based on noise
    vec3 color = mix(black, deepBlue, smoothstep(-0.5, 0.5, finalNoise));
    color = mix(color, electricBlue, smoothstep(0.2, 0.8, n2));
    color = mix(color, purple, smoothstep(0.4, 1.0, n3) * 0.5);
    
    // Add some subtle glow/brightness
    color *= 0.8 + 0.2 * sin(time + finalNoise);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const GradientPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) }
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={[size.width, size.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

export const ShaderGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ background: '#000' }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 90 }}
        dpr={[1, 2]}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <GradientPlane />
      </Canvas>
    </div>
  );
};

export default ShaderGradient;
