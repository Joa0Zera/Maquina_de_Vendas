"use client";

import { APP_NAME, APP_TAGLINE } from "@maquina/shared";
import { LayoutDashboard, Package, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/products", label: "Produtos", icon: Package },
];

export function Sidebar({ userName }: { userName: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-60 flex-col border-r border-zinc-800/80 bg-zinc-950 px-3 py-4">
      <div className="px-2 pb-6">
        <p className="text-sm font-semibold tracking-tight">{APP_NAME}</p>
        <p className="text-[11px] text-zinc-500 mt-0.5">{APP_TAGLINE}</p>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-400 transition-colors",
                active && "bg-zinc-900 text-zinc-100 font-medium",
                !active && "hover:bg-zinc-900/60 hover:text-zinc-200",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800/80 pt-3 px-2">
        <p className="truncate text-xs text-zinc-500 mb-2">{userName}</p>
        <button
          type="button"
          onClick={signOut}
          className="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}
