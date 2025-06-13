import { motion } from "framer-motion";
import type { SwitchProps } from "./types";

export default function SwitchView({
  current,
  toggle,
  isAnimating,

  disabled = false,
}: SwitchProps) {
  return (
    <motion.button
      className={`flex w-20 h-10"  rounded-full p-2 transition-all duration-100 ${
        current.trackBg
      } ${
        isAnimating || disabled
          ? "pointer-events-none opacity-50"
          : "cursor-pointer"
      }`}
      onClick={toggle}
      layout
      transition={{
        duration: 0.12,
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
      whileTap={!isAnimating && !disabled ? { scale: 0.95 } : {}}
      disabled={disabled}
    >
      <motion.div
        className={`rounded-full flex items-center justify-center ${current.knobSize} ${current.knobTranslate} bg-white shadow-md`}
        layout
        transition={{
          duration: 0.12,
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      >
        <motion.div
          className={`rounded-full ${current.knobInnerSize} ${current.knobInnerBg}`}
          layout
          transition={{
            duration: 0.12,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </motion.button>
  );
}
