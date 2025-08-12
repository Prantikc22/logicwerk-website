'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const logos = [
  {
    src: "/clutch.svg",
    alt: "Clutch",
    stars: 4.9,
    showStars: true,
    size: 64,
  },
  {
    src: "/g2-seeklogo.svg",
    alt: "G2",
    stars: 4.9,
    showStars: true,
    size: 44,
  },
  {
    src: "/image.png",
    alt: "GDPR Compliant",
    showStars: false,
    size: 56,
    fallback: false,
  },
  {
    src: "/ccpa.png",
    alt: "CCPA Compliant",
    showStars: false,
    size: 56,
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
    <div className="flex flex-row items-center justify-center gap-8 py-4 w-full max-w-3xl mx-auto">
      {logos.map((logo, i) => {
        const isGDPR = logo.alt === "GDPR Compliant";
        return (
          <div key={logo.alt} className="flex flex-col items-center justify-center min-w-[80px] min-h-[120px]">
            {logo.showStars ? (
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  {isGDPR && imgErrors[i] ? (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: logo.size,
                        height: logo.size,
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
                      style={{ width: logo.size, height: 'auto' }}
                      onError={() => isGDPR ? handleImgError(i) : undefined}
                    />
                  )}
                </div>
                {/* ...star rendering... */}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                {isGDPR && imgErrors[i] ? (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: logo.size,
                      height: logo.size,
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
                    style={{ width: logo.size, height: 'auto' }}
                    onError={() => isGDPR ? handleImgError(i) : undefined}
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
