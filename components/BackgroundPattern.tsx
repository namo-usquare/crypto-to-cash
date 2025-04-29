import React from 'react';
import { GridPattern } from '@/public/images/Grid_1';
/**
 * BackgroundPattern component that renders an SVG grid pattern
 * @returns JSX.Element
 */
export const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute left-[10%] inset-0 z-0 opacity-100">

   {GridPattern}
      {/* <div
        className="absolute h-40 w-40 rounded-full bg-green-500/20 blur-3xl"
        style={{ top: "50%", left: "50%" }}
      />
      <div
        className="absolute h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"
        style={{ top: "40%", right: "10%" }}
      /> */}
    </div>
  );
}; 