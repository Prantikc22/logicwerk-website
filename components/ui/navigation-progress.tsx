"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function NavigationProgress() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Define handlers outside useEffect so they're in scope for all effects
  let timeout: NodeJS.Timeout;
  const handleStart = () => {
    setLoading(true);
    setProgress(10);
    timeout = setTimeout(() => setProgress(60), 200);
  };
  const handleComplete = () => {
    setProgress(100);
    setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 400);
  };

  useEffect(() => {
    router.events?.on && router.events.on('routeChangeStart', handleStart);
    router.events?.on && router.events.on('routeChangeComplete', handleComplete);
    router.events?.on && router.events.on('routeChangeError', handleComplete);
    return () => {
      clearTimeout(timeout);
      router.events?.off && router.events.off('routeChangeStart', handleStart);
      router.events?.off && router.events.off('routeChangeComplete', handleComplete);
      router.events?.off && router.events.off('routeChangeError', handleComplete);
    };
    // eslint-disable-next-line
  }, [router]);

  // Also trigger on pathname change (for Next 13+ App Router)
  useEffect(() => {
    handleComplete(); // finish progress on path change
    // eslint-disable-next-line
  }, [pathname]);

  if (!loading && progress === 0) return null;
  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <Progress value={progress} className="h-1 bg-transparent" />
    </div>
  );
}
