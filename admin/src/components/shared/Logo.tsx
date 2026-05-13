import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/lr.png"
      alt=""
      className={cn("h-auto w-14 object-contain", className)}
    />
  );
}
