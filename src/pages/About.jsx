import lookMaroon3 from "../assets/images/look-maroon-3.png";
import lookBlack2 from "../assets/images/look-black-2.png";

export default function About() {
  return (
    <div>
      <section className="container-content pt-10 md:pt-16 pb-16 animate-fade-up">
        <p className="text-sm font-medium text-maroon mb-4">Our Story</p>
        <h1 className="font-display text-3xl md:text-5xl leading-[1.1] text-ink max-w-2xl">
          It started with a small, everyday problem: shirts that never stayed neat.
        </h1>
        <p className="mt-6 text-ink/70 max-w-xl leading-relaxed">
          Most young Indonesians favor a casual, practical way of dressing. But
          the shirt — the go-to piece for so many outfits — still wrinkles
          easily, needs extra care, and has no digital support for styling or
          upkeep. Not exactly built for people who are always moving and
          always short on time.
        </p>
      </section>

      <section className="container-content pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/5] overflow-hidden bg-line rounded-soft rotate-1 hover:rotate-0 transition-transform duration-500">
            <img src={lookMaroon3} alt="STRAIT&CO lookbook" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-line rounded-soft -rotate-1 hover:rotate-0 transition-transform duration-500">
            <img src={lookBlack2} alt="STRAIT&CO lookbook" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-maroon text-sand py-16 md:py-20 rounded-none">
        <div className="container-content max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl mb-6">The Solution</h2>
          <p className="text-sand/80 leading-relaxed">
            STRAIT&amp;CO brings together anti-crease, easy-to-care shirts
            with a digital experience built around QR codes. Every shirt
            unlocks a styling guide, care instructions, membership perks,
            and a curated OOTD community — so you can look sharp and stay
            consistent, with a lot less effort.
          </p>
        </div>
      </section>

      <section className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-up">
            <span className="inline-flex w-10 h-10 rounded-full bg-maroon/10 items-center justify-center mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-maroon" />
            </span>
            <p className="font-display text-lg text-ink mb-2">Anti-Crease</p>
            <p className="text-sm text-ink/70">
              Fabric that stays sharp without ever needing an iron.
            </p>
          </div>
          <div className="animate-fade-up-delay-1">
            <span className="inline-flex w-10 h-10 rounded-full bg-maroon/10 items-center justify-center mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-maroon" />
            </span>
            <p className="font-display text-lg text-ink mb-2">Easy to Care</p>
            <p className="text-sm text-ink/70">
              A finish that makes stains lift out much more easily in the wash.
            </p>
          </div>
          <div className="animate-fade-up-delay-2">
            <span className="inline-flex w-10 h-10 rounded-full bg-maroon/10 items-center justify-center mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-maroon" />
            </span>
            <p className="font-display text-lg text-ink mb-2">QR Experience</p>
            <p className="text-sm text-ink/70">
              Every piece connects to a styling guide and a digital community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
