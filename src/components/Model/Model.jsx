import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, Html } from '@react-three/drei';

const Model = () => {
  // Load your GLTF model from the public folder
  const { scene } = useGLTF('/untitled.glb'); // Adjust the path to your model
  const modelRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate the model around the Y-axis
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.8} />;
};

const AnimatedText = () => {
  const textRef = useRef();

  // Animate the 3D text (rotate and move it)
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.001; // Rotate the text around the Y-axis
      textRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5; // Up and down motion
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 2, 0]} // Position above the model
      fontSize={1} // Adjust size as needed
      color="#FF5733" // Set the color of the text
    >
      Bite Me!!
    </Text>
  );
};

const ModelWrapper = () => {
  return (
    <Canvas>
      <ambientLight intensity={2.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Render your loaded model */}
      <Suspense fallback={<Html><div>Loading model...</div></Html>}>
        <Model />
        <AnimatedText /> {/* 3D animated text */}
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
};

export default ModelWrapper;
