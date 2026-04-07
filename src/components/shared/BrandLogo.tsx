import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

/**
 * Theme-aware Polaris wordmark for light and dark surfaces.
 */
export function BrandLogo({
  alt = "Polaris",
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/branding/polaris-logo.png"
        alt={alt}
        width={926}
        height={202}
        priority={priority}
        className={cn("h-auto w-full dark:hidden", imageClassName)}
      />
      <Image
        src="/branding/polaris-logo-dark.png"
        alt={alt}
        width={1044}
        height={198}
        priority={priority}
        className={cn("hidden h-auto w-full dark:block", imageClassName)}
      />
    </div>
  );
}
