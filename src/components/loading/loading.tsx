export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#faf7f2]">
      <div className="flex flex-col items-center gap-4">
        <img src="/icons/logo3.png" className="w-20 h-20" alt="logo" />
        <p className="font-serif text-[#d4af37] text-lg tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}
