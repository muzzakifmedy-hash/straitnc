import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import lookMaroon2 from "../assets/images/look-maroon-2.png";
import lookBlack1 from "../assets/images/look-black-1.png";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container-content pt-10 md:pt-16 pb-16 md:pb-24 relative overflow-hidden">
        <div
          className="absolute -top-10 -left-16 w-56 h-56 rounded-full bg-maroon/10 blur-2xl animate-float pointer-events-none"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative">
          <div className="md:col-span-7 animate-fade-up">
            <p className="text-sm font-medium text-maroon mb-4">STRAIT&amp;CO</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink">
              Shirts that stay
              <br />
              sharp, all day long.
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink/70 max-w-md">
              Your personal guide to comfort &amp; style. Anti-crease fabric,
              easy to care for, with a QR styling guide sewn into every shirt.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/shop"
                className="inline-block bg-ink text-sand px-7 py-3 rounded-pill text-sm font-medium hover:bg-maroon transition-colors"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-block px-7 py-3 rounded-pill text-sm font-medium text-ink border border-ink/20 hover:border-ink transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 animate-fade-up-delay-1">
            <div className="aspect-[4/5] overflow-hidden bg-line rounded-soft rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={lookMaroon2}
                alt="Model wearing the STRAIT&CO oversized boxy shirt in maroon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / positioning strip */}
      <section className="bg-ink text-sand py-14">
        <div className="container-content grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-up">
            <span className="inline-flex w-8 h-8 rounded-full bg-maroon-light/20 text-maroon-light items-center justify-center font-display text-sm mb-3">
              1
            </span>
            <p className="text-sm text-sand/70">
              Everyday shirts wrinkle fast and need constant ironing —
              not made for people always on the move.
            </p>
          </div>
          <div className="animate-fade-up-delay-1">
            <span className="inline-flex w-8 h-8 rounded-full bg-maroon-light/20 text-maroon-light items-center justify-center font-display text-sm mb-3">
              2
            </span>
            <p className="text-sm text-sand/70">
              STRAIT&amp;CO uses anti-crease, easy-to-care fabric —
              stays sharp without ever touching an iron.
            </p>
          </div>
          <div className="animate-fade-up-delay-2">
            <span className="inline-flex w-8 h-8 rounded-full bg-maroon-light/20 text-maroon-light items-center justify-center font-display text-sm mb-3">
              3
            </span>
            <p className="text-sm text-sand/70">
              Every piece comes with a QR code for styling guides,
              membership perks, and a curated OOTD community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-content py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-ink">
            Signature Pieces
          </h2>
          <Link to="/shop" className="text-sm font-medium text-maroon hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Lookbook strip */}
      <section className="container-content pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/5] overflow-hidden bg-line rounded-soft -rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src={lookBlack1}
              alt="STRAIT&CO lookbook — all-black outfit with signature scarf"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-maroon text-sand p-8 md:p-12 rounded-soft">
            <p className="font-display text-2xl md:text-3xl leading-tight">
              Made for people who never stop moving, without giving up on style.
            </p>
            <p className="mt-4 text-sand/70 text-sm max-w-sm">
              Oversized boxy fit, breathable fabric, and details you can mix
              and match — from class to the office, from meetings to hangouts.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-block text-sm font-medium underline underline-offset-4 w-fit"
            >
              Explore the collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
