import React, { useRef, useCallback, useState } from "react";
import Image from "next/image";

interface ProfileCardProps {
  avatarUrl: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  miniAvatarUrl,
  name,
  title,
  handle,
  status,
  contactText,
  onContactClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [avatarError, setAvatarError] = useState(false);
  const [miniAvatarError, setMiniAvatarError] = useState(false);

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={cardRef}
      className="relative perspective-[500px] w-full max-w-sm mx-auto"
    >
      {/* Behind glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-[50px] opacity-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(125, 190, 255, 0.67) 0%, transparent 50%)",
        }}
      />

      {/* Card shell */}
      <div className="relative z-10 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:rotate-x-2 hover:rotate-y-2">
        <div className="relative h-[80svh] max-h-[540px] flex flex-col items-center justify-end p-6">

          {/* Avatar */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            {!avatarError ? (
              <Image
                src={avatarUrl}
                alt={`${name ?? "User"} avatar`}
                fill
                className="object-cover"
                onError={() => setAvatarError(true)}
              />
            ) : null}
          </div>

          {/* User Info */}
          <div className="w-full mt-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl flex justify-between items-center p-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                {!miniAvatarError ? (
                  <Image
                    src={miniAvatarUrl || avatarUrl}
                    alt={`${name ?? "User"} mini avatar`}
                    fill
                    className="object-cover"
                    onError={() => setMiniAvatarError(true)}
                  />
                ) : (
                  // Fallback — slightly transparent
                  <Image
                    src={avatarUrl}
                    alt="fallback avatar"
                    fill
                    className="object-cover opacity-50"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">@{handle ?? "handle"}</span>
                <span className="text-white/70 text-sm">{status ?? "Offline"}</span>
              </div>
            </div>

            <button
              onClick={handleContactClick}
              className="text-white text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 hover:border-white/40 transition"
            >
              {contactText ?? "Contact"}
            </button>
          </div>

          {/* Name & Title */}
          <div className="mt-6 text-center">
            <h3 className="text-white font-bold text-3xl">{name ?? "Unknown User"}</h3>
            <p className="text-white/80 font-semibold mt-1">{title ?? "No title"}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileCard);
