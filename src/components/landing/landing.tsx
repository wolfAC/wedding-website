export default function Landing() {
  return (
    <section className="relative w-full lg:w-[65%] min-h-screen pt-16">
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
          w-full h-[calc(100vh-64px)]
          object-cover
          pointer-events-none
        "
      />
    </section>
  );
}
