"use client";

// TODO: Don't load this until the user scrolls over it on desktop.
// TODO: Make optional for mobile. Have a splash screen with a button to load it.

// FIXME: Getting 'ReferenceError: self is not defined' error when building for production.

import { Canvas } from "@react-three/fiber";
import {
  Center,
  Html,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

export default function ModelViewer() {
  return (
    <div
      className="off-width bg-slate-50"
      style={{
        height: "80vh",
      }}
    >
      <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
        <group position={[0, -1, 0]}>
          <Center top>
            <LoadedModel />
          </Center>
          <Annotation
            position={[-0.1, 1.36, -0.7]}
            title="Handle"
            body="The handle provides quick and manual overide in the event of device confusion or failure"
          />
          {/* <AccumulativeShadows
            temporal
            frames={100}
            color="orange"
            colorBlend={2}
            toneMapped={true}
            alphaTest={0.9}
            opacity={2}
            scale={12}
          >
            <RandomizedLight
              amount={8}
              radius={4}
              ambient={0.5}
              intensity={1}
              position={[5, 5, -10]}
              bias={0.001}
            />
          </AccumulativeShadows> */}
        </group>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

// Import model from GLB file
function LoadedModel() {
  const gltf = useGLTF("/projects/reflection_flag_compressed.glb");
  return <primitive object={gltf.scene} dispose={null} />;
}

// Create annotation
function Annotation({
  position,
  title,
  body,
}: {
  position: [number, number, number];
  title: string;
  body: string;
}) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Html occlude={true} as="div" distanceFactor={1} zIndexRange={[1, 0]}>
        <div
          onMouseDown={() => setClicked(!clicked)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-16 h-16 mx-auto text-sm text-center bg-blue-200 rounded-full cursor-pointer outline outline-blue-300"
          style={{
            opacity: hovered ? 1 : 0.8,
          }}
        >
          <span className="py-auto"></span>
        </div>
      {/* On click event, show tab full of infomation */}
      </Html>
      {clicked && (
        <Html zIndexRange={[2, 1]}>
          <div
            className="absolute top-0 left-0 z-0 w-full"
            onClick={() => setClicked(false)}
          ></div>
          <div
            className="absolute z-10 flex flex-col w-64 gap-2 pb-2 text-sm bg-slate-100 outline outline-slate-200"
            onClick={() => setClicked(false)}
            title="click to close"
          >
            <div className="flex items-center justify-between px-2 py-1 bg-slate-200">
              <div className="text-lg font-light">{title}</div>
            </div>
            <div className="px-2 leading-relaxed">{body}</div>
          </div>
        </Html>
      )}
    </group>
  );
}
