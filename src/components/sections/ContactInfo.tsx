import { MotionReveal } from "@/components/motion/MotionReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const details = [
  { label: "Visit", value: "123 Petal Lane, Suite 4, Your City" },
  { label: "Hours", value: "Tue – Sun, 10am – 6pm" },
  { label: "Contact", value: "hello@lunessaflorist.com" },
  { label: "WhatsApp", value: "+1 (000) 000-0000" },
];

export function ContactInfo() {
  return (
    <section id="contact" className="bg-neutral px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <MotionReveal>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Visit or Reach Us</h2>
          <p className="mx-auto mt-4 max-w-md font-sans leading-relaxed text-ink/70">
            Same-day delivery and custom orders are just a message away.
          </p>
        </MotionReveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail) => (
            <StaggerItem key={detail.label} className="flex flex-col gap-2">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary-dark">
                {detail.label}
              </p>
              <p className="font-serif text-base text-ink">{detail.value}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
