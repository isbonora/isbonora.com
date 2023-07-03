"use client";

// TODO: Don't load this until the user scrolls over it on desktop.
// TODO: Make optional for mobile. Have a splash screen with a button to load it.

// FIXME: Getting 'ReferenceError: self is not defined' error when building for production.

import Sketchfab from "@sketchfab/viewer-api";
import { useRef } from "react";

export default function ModelViewer({ model_id }: { model_id: string }) {
  const myFrame = useRef<HTMLDivElement>(null);

  function onViewerSuccess(api: any) {
    console.log("Viewer API success");
  }

  if (myFrame.current) {
    const iframe = myFrame.current.firstElementChild;

    const client = new Sketchfab(iframe);

    client.init(model_id, {
      animation_autoplay: 1,
      autostart: 1,
      autospin:0.2,
      ui_infos: 0,
      ui_watermark: 0,
      ui_settings: 0,
      ui_vr: 0,
      ui_inspector: 0,
      ui_stop: 0,
      ui_animations: 0,
      ui_controls: 0,
      ui_general_controls: 0,
      ui_help: 0,
      ui_hint: 0,
      ui_loading: 0,
      dnt: 1,
      // Loading bar and other accent bits
      ui_color: "0f172a",
      transparent: 1,
      success: onViewerSuccess,
      error: function onError(error: any) {
        alert("Viewer Error");
        console.log(error);
      },
    });
  }

  return (
    <div ref={myFrame} className="off-width">
      <iframe
        src=""
        allow="fullscreen"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        style={{
          width: "100%",
          height: "calc(80vh)",
        }}
      ></iframe>
    </div>
  );
}
