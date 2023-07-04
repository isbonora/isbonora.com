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
          <Annotation position={[-0.1, 1.36, -0.7]} title='Handle' body="The handle provides quick and manual overide in the event of device confusion or failure" />
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

  return (
    <group position={position}>
      <Html occlude={true} as="div" distanceFactor={1} zIndexRange={[1, 0]}>
        <div
          onMouseDown={() => setClicked(!clicked)}
          className="w-12 h-12 mx-auto text-sm text-center bg-white rounded-full cursor-pointer outline outline-1 animate-ping"
          style={{
            opacity: clicked ? 1 : 0.3,
          }}
        >
          <span className="py-auto"></span>
        </div>
        {/* On click event, show tab full of infomation */}
      </Html>
      {clicked && (
        <Html as="div" zIndexRange={[2, 1]}>
          <div className="absolute z-10 flex flex-col w-64 gap-2 pb-2 text-sm bg-slate-100">
            <div className="flex justify-between px-2 py-1 bg-slate-300">
              <div className="">{title}</div>
              <div className="" onClick={() => setClicked(!clicked)}>
                X
              </div>
            </div>
            <div className="px-2">{body}</div>
          </div>
        </Html>
      )}
    </group>
  );
}
