export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-40 bg-primary px-4 py-2 text-center font-sans text-xs tracking-normal text-white sm:text-sm sm:tracking-wide">
      Same-day delivery available —{" "}
      <a
        href="https://wa.me/60197838261?text=Hi%2C%20I'd%20like%20to%20order%20a%20bouquet"
        className="underline underline-offset-2 transition-colors duration-300 hover:text-neutral"
      >
        WhatsApp us
      </a>
    </div>
  );
}
