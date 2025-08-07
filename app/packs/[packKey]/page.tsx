import { notFound } from "next/navigation";
import { packs } from "@/data/packs";
import Image from "next/image";

export async function generateStaticParams() {
  return packs.map(pack => ({ packKey: pack.key }));
}

export default function PackPage({ params }: { params: { packKey: string } }) {
  const pack = packs.find(p => p.key === params.packKey);
  if (!pack) return notFound();

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src={pack.heroImage}
          alt={pack.title}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-blue-900/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-mona text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 leading-tight">
            Skip the Bloat. Scale Smart.<br />
            <span className="block text-cyan-400 font-light">Ship Fast.</span>
          </h1>
          <div className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mb-4 drop-shadow">
            {pack.summary}
          </div>
          <div className="text-base md:text-lg text-blue-200 font-semibold mb-2">Ideal for: {pack.idealFor}</div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="font-bold text-2xl mb-4 text-gray-900">What's Inside</h2>
        <ul className="list-disc ml-6 mb-6 text-base text-gray-800">
          {pack.breakdown.what.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
        <h2 className="font-bold text-2xl mb-4 text-gray-900">Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {pack.services.map((srv, i) => (
            <li key={i} className="bg-blue-50 border border-blue-100 rounded px-4 py-2 text-blue-900 text-base font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>{srv}
            </li>
          ))}
        </ul>
        <h2 className="font-bold text-2xl mb-4 text-gray-900">Pricing</h2>
        <ul className="mb-6 text-base text-blue-900">
          {pack.breakdown.pricing.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
        <a href="/" className="inline-block mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-none shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Back to Home</a>
      </section>
    </main>
  );
}
