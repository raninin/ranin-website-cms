"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"logo" | "bar" | "exit">("logo");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only show once per session
    if (sessionStorage.getItem("ranin-preloader-shown")) return;

    sessionStorage.setItem("ranin-preloader-shown", "1");
    setShow(true);
    document.body.style.overflow = "hidden";

    // Phase timeline
    const t1 = setTimeout(() => setPhase("bar"), 300);
    const t2 = setTimeout(() => setPhase("exit"), 2500);
    const t3 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ranin-navy"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              phase !== "logo"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Image
              src="/ranin-logo.png"
              alt="Ranin International"
              width={200}
              height={58}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 h-[2px] w-48 overflow-hidden bg-white/10 sm:w-56">
            <motion.div
              className="h-full bg-ranin-accent"
              initial={{ width: "0%" }}
              animate={
                phase === "bar" || phase === "exit"
                  ? { width: "100%" }
                  : { width: "0%" }
              }
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
