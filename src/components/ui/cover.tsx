import { motion, SVGMotionProps } from "framer-motion";
import React from "react";
import { cn } from "./utils";

interface BeamProps extends SVGMotionProps<SVGSVGElement> {
  className?: string;
  duration: number;
  delay?: number;
  hovered: boolean;
  width?: number;
}

export const Beam: React.FC<BeamProps> = ({
  className = "",
  duration,
  delay = 0,
  hovered,
  width = 600,
  initial,
  animate,
  transition,
}) => {
  const id = React.useId();

  return (
    <motion.svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      initial={initial} // ✅ Pass motion props explicitly
      animate={animate}
      transition={transition}
    >
      <motion.path d={`M0 0.5H${width}`} stroke={`url(#svgGradient-${id})`} />
      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: hovered ? "-10%" : "-5%" }}
          animate={{ x1: "110%", x2: hovered ? "100%" : "105%" }}
          transition={{
            duration: hovered ? 0.5 : duration,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: delay,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
