export default function Landing() {
  return (
    <section className="h-[95vh] lg:h-screen w-full lg:w-[65%] relative overflow-hidden">
      <video
        src="/video/Invitation.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        className="absolute top-14 inset-0 w-full h-full object-cover lg:object-[50%_30%] lg:inset-1 pointer-events-none"
      />
    </section>
  );
}
