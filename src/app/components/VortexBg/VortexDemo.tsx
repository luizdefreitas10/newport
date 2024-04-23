import React from "react";
import { Vortex } from "../VortexBg/VortexBg";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        baseHue={2000}
        backgroundColor="green"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      ></Vortex>
    </div>
  );
}
