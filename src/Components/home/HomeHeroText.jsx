import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="text-white font-[lau3] pt-8 text-center relative">

      <div className="text-[9vw] uppercase leading-[8vw]">
        L'étincelle
      </div>


      <div className="flex justify-center items-center text-[9vw] uppercase leading-[8vw]">
        qui
        <div className="h-[7vw] w-[15vw] -mt-3 rounded-full overflow-hidden mx-2">
          <Video />
        </div>
        génère
      </div>


      <div className="text-[9vw] uppercase leading-[8vw] relative inline-block">
        la{" "}
        <span className="relative inline-block">
          créativité

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="150"
              cy="50"
              rx="220"
              ry="40"
              fill="none"
              stroke="rgb(190 242 100)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: "rotate(-5deg)",
                transformOrigin: "center",
                strokeDasharray: 880,
                strokeDashoffset: 880,
                animation: "drawCircle 2s ease forwards",
              }}
            />
          </svg>
        </span>
      </div>

      <style>{`
        @keyframes drawCircle {
          from {
            stroke-dashoffset: 880;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeHeroText;
