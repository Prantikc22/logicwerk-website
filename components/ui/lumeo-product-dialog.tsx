import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface LumeoProductDialogProps {
  title: string;
  description: string;
  features: string[];
  accentColor?: string;
  triggerLabel?: string;
  triggerClassName?: string;
}

export function LumeoProductDialog({ title, description, features, accentColor = "#2563eb", triggerLabel, triggerClassName }: LumeoProductDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            triggerClassName || "w-full py-3 px-6 font-bold text-lg rounded-lg shadow-md border-0 transition bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          )}
          size="lg"
        >
          {triggerLabel || "View Details"}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-lg bg-[#0f172a] border border-blue-700 shadow-2xl rounded-2xl p-8 animate-in fade-in slide-in-from-top-8"
        style={{ boxShadow: `0 4px 32px 0 ${accentColor}33` }}
      >
        {/* Product logo and label for dialog header */}
        <div className="flex items-center gap-2 py-2 overflow-hidden w-full mb-2">
          {title === 'Lumeo Cloud' ? (
            <Image src="/logos/LumeoCloud.png" alt="Lumeo Cloud Logo" width={56} height={56} className="w-14 h-14 object-contain flex-shrink-0" loading="lazy" />
          ) : (
            <Image src="/logos/lumeo-suite-logo_darkbg.png" alt={title + ' Logo'} width={56} height={56} className="w-14 h-14 object-contain flex-shrink-0" loading="lazy" />
          )}
          <span className="font-garet text-xl text-white whitespace-nowrap overflow-hidden text-ellipsis tracking-tighter">
            <span className="font-normal">Lumeo </span><span className="font-bold">{title.replace('Lumeo ', '')}</span>
          </span>
        </div>
        <p className="text-gray-200 mb-5 text-base leading-relaxed font-mona">
          {description}
        </p>
        <ul className="list-disc pl-5 mb-7 text-blue-100 space-y-1">
          {features.map((f, i) => (
            <li key={i} className="text-base leading-snug">{f}</li>
          ))}
        </ul>
        <Button
          disabled
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-md py-2 cursor-not-allowed opacity-80 border-0 shadow-md"
        >
          View Details (coming soon)
        </Button>
      </DialogContent>
    </Dialog>
  );
}
