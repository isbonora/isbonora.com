"use client";


// TODO: Make optional for mobile. Have a splash screen with a button to load it.
// TODO: Make annotation content richer. Able images and links.
// TODO: When one annotation opens, close the others.
// TODO: enable paremeters to be passed to thie model viewer component.
//          - arrays for annotations
//          - model path

import { Canvas } from "@react-three/fiber";
import {
  Center,
  Html,
  OrbitControls,
  Environment,
  useGLTF,
  useProgress,
} from "@react-three/drei";

import { useState, useEffect, useRef, Suspense } from "react";

// Define the props that can be passed to the component.
interface ModelViewerProps {
  className?: string;
  model_path: string;
  annotations?: AnnotationProps[];
}

interface AnnotationProps {
  position: [number, number, number];
  title: string;
  body: string;
}


// Main exported function
export default function ModelViewer({ className, model_path, annotations }: ModelViewerProps) {
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
      className={className}
    > 
    
      {/* Draws a hint when any annotation is active. */}
      {annotationActive && (
        <div className="absolute z-20 text-xs font-light transition opacity-50 bottom-4 text-slate-400 left-4">
          hint: click the annotation to close
        </div>
      )}

      {isIntersecting ? (
        <Canvas shadows camera={{ position: [5, 1.5, 5], fov: 25 }}>
          {/* Essentially an await, whilst the model is loaded from the .GLB and the client has to download it. */}
          <Suspense fallback={<Loader />}>
            <group position={[0, -1, 0]}>
              <Center top>
                <LoadedModel model_path={model_path} />
              </Center>

              {/* Annotations. Loops through provided array of annotations */}
              {annotations &&
                annotations.length > 0 && annotations.map((annotation) => (
                  <Annotation
                    key={annotation.title}
                    position={annotation.position}
                    title={annotation.title}
                    body={annotation.body}
                    setAnnotationActive={setAnnotationActive}
                  />
                ))}
            </group>
            <OrbitControls
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              autoRotate={!annotationActive}
              autoRotateSpeed={0.5}
            />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      ) : (
        // Shows until the user scrolls over the model view. if the client is a decent computer.

        <div className="flex items-center justify-center h-full">
          <div className="text-lg text-center">Tap to load 3D model</div>
        </div>
      )}
    </div>
  );
}

// Import model from GLB file
function LoadedModel({ model_path }: { model_path: string }) {
  const gltf = useGLTF(model_path);
  return <primitive object={gltf.scene} dispose={null} />;
}

// Loading screen
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <div className="px-4 py-5 text-2xl font-light text-slate-500 animate-pulse">
        {Math.round(progress)}%
      </div>
    </Html>
  );
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
          className="mx-auto text-sm text-center transition-all bg-blue-200 border-4 border-blue-300 rounded-full cursor-pointer w-28 h-28 lg:w-18 lg:h-18 hover:w-28 hover:h-28"
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
