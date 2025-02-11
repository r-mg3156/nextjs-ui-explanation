"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";

const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              {/* <Image
                className="invert dark:invert-0"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={24}
                height={24}
              /> */}
              {/* <svg height="32" viewBox="0 0 32 32" width="32">
                <path
                  d="M22 5L9 28"
                  stroke="#808080"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={85}
                height={18}
                priority
              /> */}
              <span className="hidden font-bold lg:inline-block">
                UI / UX 解説
              </span>
              {/* <span className="hidden font-bold lg:inline-block"></span> */}
            </Link>
            {/* <nav className="flex items-center gap-4 text-sm xl:gap-6">
              <Link
                href="/tabs"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/tabs"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                タブ
              </Link>
              <Link
                href="/carousel"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/carousel"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                カルーセル
              </Link>
              <Link
                href="/modal"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/modal"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                モーダル
              </Link>
              <Link
                href="/accordion"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/accordion"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                アコーディオン
              </Link>
            </nav> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
