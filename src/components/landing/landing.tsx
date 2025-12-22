import useWindowSize from "@/hooks/useWindowSize";

export default function Landing() {
  const windowSize = useWindowSize();
  console.log(windowSize, "windowSize");

  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  const getVideoScale = () => {
    const { height, width } = windowSize;

    const minH = 600;
    const maxH = 900;

    const minW = 360;
    const maxW = 1440;

    const minScale = 1.2;
    const maxScale = 1.5;

    const heightRatio = clamp((height - minH) / (maxH - minH), 0, 1);

    const widthRatio = clamp((width - minW) / (maxW - minW), 0, 1);

    const blendedRatio = (heightRatio + widthRatio) / 2;

    return minScale + blendedRatio * (maxScale - minScale);
  };

  return (
    <section className="h-screen w-full lg:w-[65%] relative overflow-hidden">
      <video
        src="/video/Invitation.webm"
        autoPlay
        muted
        playsInline
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{
          transform: `scale(${getVideoScale()})`,
        }}
        className="absolute top-14 inset-0 w-full h-full object-[50%_39%] lg:inset-1 pointer-events-none transition-transform duration-300"
      />
    </section>
  );
}
