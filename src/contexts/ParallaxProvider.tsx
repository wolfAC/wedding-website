import { MotionValue, useMotionValue, useSpring } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { ParallaxContext } from "./parallaxContext";

interface ParallaxProviderProps {
  children: ReactNode;
}

export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  // Raw motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth Framer Motion springs
  const x: MotionValue<number> = useSpring(rawX, {
    stiffness: 50,
    damping: 20,
  });
  const y: MotionValue<number> = useSpring(rawY, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    let mounted = true;

    // iOS motion permission
    const requestIOSPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        // @ts-expect-error iOS specific
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          // @ts-expect-error fix
          const res = await DeviceOrientationEvent.requestPermission();
          console.error("iOS DeviceOrientation permission response:", res);
        } catch (err) {
          console.error("iOS DeviceOrientation permission error:", err);
        }
      }
    };
    requestIOSPermission();

    // Device orientation (iOS + mobile)
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (!mounted) return;
      if (e.beta == null || e.gamma == null) return;

      const newX = e.gamma / 25;
      const newY = e.beta / 35;
      rawX.set(newX);
      rawY.set(newY);
    };

    // Device motion (Android + some browsers)
    const handleMotion = (e: DeviceMotionEvent) => {
      if (!mounted) return;
      console.log("DeviceMotionEvent fired:", e);

      if (
        !e.rotationRate &&
        !e.acceleration &&
        !e.accelerationIncludingGravity
      ) {
        console.log("No rotation or acceleration data yet");
        return;
      }

      let newX = 0;
      let newY = 0;

      if (e.rotationRate) {
        newX = (e.rotationRate.gamma ?? 0) / 10;
        newY = (e.rotationRate.beta ?? 0) / 10;
      } else if (e.acceleration) {
        newX = (e.acceleration.x ?? 0) / 2;
        newY = (e.acceleration.y ?? 0) / 2;
      } else if (e.accelerationIncludingGravity) {
        newX = (e.accelerationIncludingGravity.x ?? 0) / 2;
        newY = (e.accelerationIncludingGravity.y ?? 0) / 2;
      }

      rawX.set(newX);
      rawY.set(newY);
    };

    // Desktop mouse movement
    const handleMouse = (e: MouseEvent) => {
      if (!mounted) return;
      const newX = (e.clientX / window.innerWidth - 0.5) * 20;
      const newY = (e.clientY / window.innerHeight - 0.5) * 20;
      rawX.set(newX);
      rawY.set(newY);
    };

    // Touch movement fallback (mobile devices)
    const handleTouch = (e: TouchEvent) => {
      if (!mounted) return;
      const touch = e.touches[0];
      if (!touch) return;
      const newX = (touch.clientX / window.innerWidth - 0.5) * 20;
      const newY = (touch.clientY / window.innerHeight - 0.5) * 20;
      rawX.set(newX);
      rawY.set(newY);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("deviceorientation", handleOrientation);
    window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      mounted = false;
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("devicemotion", handleMotion);
      window.removeEventListener("touchmove", handleTouch);
      console.log("ParallaxProvider unmounted, listeners removed");
    };
  }, [rawX, rawY]);

  return (
    <ParallaxContext.Provider value={{ x, y }}>
      {children}
    </ParallaxContext.Provider>
  );
}
