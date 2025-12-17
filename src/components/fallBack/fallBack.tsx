export default function FallBack() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2] px-6">
      <div className="max-w-md text-center bg-white rounded-xl shadow-lg p-8 border border-[#d4af37]">
        <h1 className="text-2xl font-serif text-[#d4af37] mb-4">
          Mobile Experience Only
        </h1>
        <p className="text-gray-700 mb-6">
          This wedding invitation is specially designed for mobile viewing.
        </p>
        <p className="text-sm text-gray-500">
          Please open this website on your mobile device 📱
        </p>
      </div>
    </div>
  );
}
