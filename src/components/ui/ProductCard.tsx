import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";

type ProductCardProps = {
  name: string;
  price: string;
  tone?: "primary" | "accent" | "neutral";
};

export function ProductCard({ name, price, tone = "primary" }: ProductCardProps) {
  return (
    <Card interactive className="flex h-full flex-col gap-4">
      <div className="overflow-hidden rounded-3xl">
        <PlaceholderBlock
          label={name}
          tone={tone}
          className="aspect-square w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-base text-ink sm:text-lg">{name}</h3>
        <p className="font-sans text-sm text-ink/60">{price}</p>
      </div>
      <Button variant="primary" className="w-full">
        Select Options
      </Button>
    </Card>
  );
}
