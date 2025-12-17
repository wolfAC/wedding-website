import type { FC } from "react";

interface WeddingQRCardProps {
  qrSrc: string;
  title?: string;
}

const WeddingQRCard: FC<WeddingQRCardProps> = ({
  qrSrc,
  title = "Mr & Mrs",
}) => {
  return (
    <div className="relative w-70 sm:w-[320px] bg-black rounded-3xl p-6 shadow-xl">
      {/* QR Container */}
      <div className="bg-white rounded-2xl p-4">
        <img
          src={qrSrc}
          alt="Wedding QR"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Footer Text */}
      <p className="mt-4 text-center text-3xl font-[cursive] text-white tracking-wide">
        {title}
      </p>
    </div>
  );
};

export default WeddingQRCard;
