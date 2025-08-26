// GoogleAnalytics.tsx
import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R3SL3YK1EV"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R3SL3YK1EV');
        `}
      </Script>
    </>
  );
}
