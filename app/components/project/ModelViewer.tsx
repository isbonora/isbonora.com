"use client";


// TODO: Make optional for mobile. Have a splash screen with a button to load it.
// TODO: Make annotation content richer. Able images and links.
// TODO: When one annotation opens, close the others.

import { Canvas } from "@react-three/fiber";
import {
  Center,
  Html,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";

import { useState, useEffect, useRef } from "react";

export default function ModelViewer() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [annotationActive, setAnnotationActive] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);

  // Only load the model when the user scrolls over it.
  // Uses the IntersectionObserver API to check where the user has scrolled to.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  // ---------------

  return (
    <div
      ref={ref}
      className="off-width bg-slate-50"
      style={{
        height: "80vh",
      }}
    >
      {isIntersecting && (
        <Canvas shadows camera={{ position: [5, 1.5, 5], fov: 25 }}>
          <group position={[0, -1, 0]}>
            <Center top>
              <LoadedModel />
            </Center>

            <Annotation
              position={[-0.12, 2.2, -0.7]}
              title="Mast"
              body="The mast is the main body of the device. It houses the LED matrix that reflects the AMR's perception of the user."
              setAnnotationActive={setAnnotationActive}
            />
            <Annotation
              position={[-0.12, 1.32, -0.7]}
              title="Handle"
              body="The handle provides quick and manual overide in the event of device confusion or failure"
              setAnnotationActive={setAnnotationActive}
            />
          </group>
          <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            autoRotate={!annotationActive}
            autoRotateSpeed={1}
          />
          <Environment preset="city" />
        </Canvas>
      )}
    </div>
  );
}

// Import model from GLB file
function LoadedModel() {
  const gltf = useGLTF("/projects/reflection_flag_compressed.glb");
  return <primitive object={gltf.scene} dispose={null} />;
}

// Create annotation
// TODO: When an annotation is active. We should stop the auto rotation.
function Annotation({
  position,
  title,
  body,
  setAnnotationActive,
}: {
  position: [number, number, number];
  title: string;
  body: string;
  setAnnotationActive: (active: boolean) => void;
}) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // When the annotation is clicked, mark the annotation as active.
  useEffect(() => {
    setAnnotationActive(clicked);
  }, [clicked, setAnnotationActive]);

  return (
    <group position={position}>
      {/* Button that static shows on the device. */}
      <Html
        occlude={true}
        as="div"
        distanceFactor={1}
        zIndexRange={[1, 0]}
        center
      >
        <div
          onMouseDown={() => setClicked(!clicked)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="mx-auto text-sm text-center transition-all bg-blue-200 border-4 border-blue-300 rounded-full cursor-pointer w-28 h-28 lg:w-16 lg:h-16 hover:w-28 hover:h-28"
          style={{
            opacity: hovered ? 1 : 0.8,
          }}
        ></div>
      {/* On click event, show tab full of information */}
      </Html>
      {clicked && (
        // Main content of the annotation
        <Html zIndexRange={[2, 1]}>
          <div
            className="absolute top-0 left-0 z-0 w-full bg-red-500"
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
