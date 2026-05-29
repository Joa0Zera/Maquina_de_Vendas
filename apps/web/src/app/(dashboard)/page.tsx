import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrganizationMetrics } from "@/lib/products";
import { requireOrganization } from "@/lib/session";
import { formatCurrencyFromCents } from "@/lib/utils";
import Link from "next/link";

export default async function OverviewPage() {
  const { organizationId } = await requireOrganization();
  const metrics = await getOrganizationMetrics(organizationId);

  const cards = [
    { label: "Produtos", value: String(metrics.products) },
    { label: "Publicados", value: String(metrics.published) },
    { label: "Vendas aprovadas", value: String(metrics.salesCount) },
    {
      label: "Receita",
      value: formatCurrencyFromCents(metrics.revenueCents),
    },
    {
      label: "Conversão (vendas/publicados)",
      value:
        metrics.conversionRate !== null
          ? `${(metrics.conversionRate * 100).toFixed(0)}%`
          : "—",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="text-sm text-zinc-400 mt-1">
            Métricas reais do seu workspace de infoprodutos.
          </p>
        </div>
        <Link
          href="/products/new"
          className="inline-flex h-9 items-center rounded-md bg-zinc-100 px-4 text-sm font-medium text-zinc-900 hover:bg-white"
        >
          Novo produto
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card) => (
          <Card key={card.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                {card.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tracking-tight">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
