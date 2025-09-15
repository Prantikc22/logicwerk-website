'use client';

import Image from "next/image";
import { useState } from "react";

const logos = [
  {
    src: "/clutchrating.png",
    alt: "Clutch",
    stars: 4.9,
    showStars: true,
    size: 64,
  },
  {
    src: "/gfrating.png",
    alt: "G2",
    stars: 4.9,
    showStars: true,
    size: 84,
  },
  {
    src: "/image.png",
    alt: "GDPR Compliant",
    showStars: false,
    size: 84,
    fallback: false,
  },
  {
    src: "/ccpa.png",
    alt: "CCPA Compliant",
    showStars: false,
    size: 84,
  },
];

export default function FourPillarsLogoBar() {
  // One error state per logo, initialized to false
  const [imgErrors, setImgErrors] = useState(Array(logos.length).fill(false));

  const handleImgError = (index: number) => {
    setImgErrors(errors => {
      const newErrors = [...errors];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <div className="flex flex-row flex-nowrap items-center justify-center gap-4 md:gap-6 py-6 w-full max-w-4xl mx-auto">
      {logos.map((logo, i) => {
        const isGDPR = logo.alt === "GDPR Compliant";
        return (
          <div
            key={logo.alt}
            className={`flex items-center justify-center h-[80px] shrink-0`}
          >
            {logo.showStars ? (
              <div className="flex flex-row items-center justify-center gap-4 h-full">
                <div className="flex items-center justify-center h-full">
                  {isGDPR && imgErrors[i] ? (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: logos[i].size,
                        height: 56,
                        background: '#e0e7ef',
                        borderRadius: 12,
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#003399',
                      }}
                    >
                      GDPR
                    </span>
                  ) : (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.size}
                      height={logo.size}
                      className="object-contain"
                      style={{ height: logo.size, width: 'auto' }}
                      onError={() => isGDPR ? handleImgError(i) : undefined}
                      loading="lazy"
                    />
                  )}
                </div>
                {/* ...star rendering... */}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 h-full">
                {isGDPR && imgErrors[i] ? (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: logos[i].size,
                      height: logos[i].size,
                      background: '#e0e7ef',
                      borderRadius: 12,
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#003399',
                    }}
                  >
                    GDPR
                  </span>
                ) : (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    className="object-contain"
                    style={{ height: logo.size, width: 'auto' }}
                    onError={() => isGDPR ? handleImgError(i) : undefined}
                    loading="lazy"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

