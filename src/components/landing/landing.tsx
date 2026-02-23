import useWindowSize from "@/hooks/useWindowSize";

export default function Landing() {
  const { width } = useWindowSize();
  return (
    <section
      className={`relative w-full min-h-screen ${width < 1024 ? "pt-16" : "pt-14"}`}
    >
      {width < 1024 ? (
        <video
          src="/video/Invitation.webm"
          autoPlay
          muted
          playsInline
          controls={false}
          draggable={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          className="
        absolute top-16 left-0
        w-full h-[calc(100vh-64px)]
        object-cover
        pointer-events-none
      "
        />
      ) : (
        <div className="w-full flex justify-center items-center h-[calc(100vh-58px)]">
          <img
            src="/images/Invitation.webp"
            alt="Invitation"
            className="h-full absolute top-14 scale-110"
          />
        </div>
      )}
    </section>
  );
}
