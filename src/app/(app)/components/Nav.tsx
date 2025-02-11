"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/app/types/nav";

import { cn } from "@/lib/utils";
import { sidebarNav } from "@/app/config/sidebarNav";

const Nav = () => {
  const pathname = usePathname();

  const items = sidebarNav;

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <NavItem items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  );
};

const NavItem = ({
  items,
  pathname,
}: {
  items: SidebarNavItem[];
  pathname: string | null;
}) => {
  return (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex h-8 w-full items-center rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-accent hover:text-accent-foreground",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href &&
                "bg-accent font-medium text-accent-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  );
};

export default Nav;
