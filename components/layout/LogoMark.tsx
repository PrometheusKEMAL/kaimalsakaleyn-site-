import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative rounded-full overflow-hidden border border-gold-border hover:border-antique-gold transition-colors duration-500 shadow-[0_0_15px_rgba(207,181,118,0.1)] hover:shadow-[0_0_20px_rgba(207,181,118,0.4)]", className)}>
      <Image 
        src="/logo.jpg" 
        alt="KaimAlSakaleyn Logo" 
        fill
        className="object-cover"
      />
    </div>
  );
}
