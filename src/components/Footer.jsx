export default function Footer() {
  return (
    <footer className="bg-ink text-sand mt-24">
      <div className="container-content py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg mb-3 flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-maroon-light" />
            STRAIT<span className="text-maroon-light">&amp;</span>CO
          </p>
          <p className="text-sand/60 text-sm max-w-xs">
            Your personal guide to comfort &amp; style — shirts that stay sharp,
            made for people who move.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-sand/90">Contact</p>
          <ul className="text-sm text-sand/60 space-y-2">
            <li>+62 812-8421-3540</li>
            <li>hello@straitnco.com</li>
            <li>www.straitnco.com</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-sand/90">Shop</p>
          <ul className="text-sm text-sand/60 space-y-2">
            <li>Shirts</li>
            <li>Trousers</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="container-content py-5 text-xs text-sand/40 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} STRAIT&amp;CO. All rights reserved.</span>
          <span>Designed with intent, worn with comfort.</span>
        </div>
      </div>
    </footer>
  );
}
