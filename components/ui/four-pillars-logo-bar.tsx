import Image from "next/image";

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
  return (
    <div className="flex flex-row items-center justify-center gap-8 py-4 w-full max-w-3xl mx-auto">
      {logos.map((logo, i) => (
        <div key={logo.alt} className="flex flex-col items-center justify-center min-w-[80px] min-h-[120px]">
          {logo.showStars ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                {logo.fallback ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    className="object-contain"
                                        onError={(e) => {
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `<span style='display:flex;align-items:center;justify-content:center;width:${logo.size}px;height:${logo.size}px;background:#e0e7ef;border-radius:12px;font-size:14px;font-weight:600;color:#003399;'>GDPR</span>`;
                      }
                    }}
                  />
                ) : logo.alt === "GDPR Compliant" ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={420}
                    style={{ width: 56, height: 56, objectFit: 'contain', background: 'transparent' }}
                    className="object-contain bg-transparent"
                  />
                ) : (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    className="object-contain"
                                      />
                )}
              </div>
              <div className="flex items-center gap-1 text-base text-gray-700 font-semibold">
                <span>{logo.stars}</span>
                <svg className="w-5 h-5 text-yellow-400 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              {logo.fallback ? (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.size}
                height={logo.size}
                className="object-contain"
                
                onError={(e) => {
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span style='display:flex;align-items:center;justify-content:center;width:${logo.size}px;height:${logo.size}px;background:#e0e7ef;border-radius:12px;font-size:14px;font-weight:600;color:#003399;'>GDPR</span>`;
                  }
                }}
              />
            ) : logo.alt === "GDPR Compliant" ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={420}
                  style={{ width: 56, height: 56, objectFit: 'contain', background: 'transparent' }}
                  className="object-contain bg-transparent"
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.size}
                  height={logo.size}
                  className="object-contain"
                  
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
