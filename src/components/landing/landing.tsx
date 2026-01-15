import useWindowSize from "@/hooks/useWindowSize";

export default function Landing() {
  const windowSize = useWindowSize();
  console.log(windowSize, "windowSize");

  return (
    <section
      className="relative w-full overflow-hidden lg:w-[65%] pt-16"
      style={{ height: "100vh" }}
    >
      <video
        src="/video/Invitation.webm"
        autoPlay
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onContextMenu={(e) => e.preventDefault()}
        className="
      absolute top-16 left-0
      w-full h-[calc(100%-64px)]
      object-cover
      pointer-events-none
    "
      />
    </section>
  );
}
