import { notFound } from "next/navigation";
import { packs } from "@/data/packs";
import Image from "next/image";
import { PackDetailPage } from "@/components/ui/pack-detail-page";

export async function generateStaticParams() {
  return packs.map(pack => ({ packKey: pack.key }));
}

export default function PackPage({ params }: { params: { packKey: string } }) {
  const pack = packs.find(p => p.key === params.packKey);
  if (!pack) return notFound();

  return <PackDetailPage packKey={params.packKey} />;
}
