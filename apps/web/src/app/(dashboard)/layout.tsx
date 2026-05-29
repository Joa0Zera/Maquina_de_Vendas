import { Sidebar } from "@/components/dashboard/sidebar";
import { requireOrganization } from "@/lib/session";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await requireOrganization();

  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar userName={user.name} />
      <main className="pl-60 min-h-screen border-l border-zinc-900/50">
        <div className="mx-auto max-w-6xl px-8 py-8">{children}</div>
      </main>
    </div>
  );
}
