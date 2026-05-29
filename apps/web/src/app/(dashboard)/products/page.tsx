import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { listProductsByOrganization } from "@/lib/products";
import { requireOrganization } from "@/lib/session";
import { formatCurrencyFromCents } from "@/lib/utils";

export default async function ProductsPage() {
  const { organizationId } = await requireOrganization();
  const items = await listProductsByOrganization(organizationId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Produtos</h1>
          <p className="text-sm text-zinc-400 mt-1">
            Gerencie infoprodutos, checkout e landing pages públicas.
          </p>
        </div>
        <Link
          href="/products/new"
          className="inline-flex h-9 items-center rounded-md bg-zinc-100 px-4 text-sm font-medium text-zinc-900 hover:bg-white"
        >
          Novo produto
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-zinc-900/80 text-zinc-500">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Título</th>
              <th className="px-4 py-3 text-left font-medium">Preço</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Landing</th>
              <th className="px-4 py-3 text-right font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-zinc-500">
                  Nenhum produto ainda.{" "}
                  <Link href="/products/new" className="text-zinc-300 underline">
                    Criar o primeiro
                  </Link>
                </td>
              </tr>
            ) : (
              items.map((product) => (
                <tr key={product.id} className="border-t border-zinc-800/80 hover:bg-zinc-900/30">
                  <td className="px-4 py-3 font-medium">{product.title}</td>
                  <td className="px-4 py-3 text-zinc-400">
                    {formatCurrencyFromCents(product.priceCents)}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={product.status === "published" ? "success" : "default"}>
                      {product.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    {product.status === "published" ? (
                      <Link
                        href={`/p/${product.slug}`}
                        className="text-zinc-400 hover:text-zinc-200"
                        target="_blank"
                      >
                        /p/{product.slug}
                      </Link>
                    ) : (
                      <span className="text-zinc-600">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/products/${product.id}/edit`}
                      className="text-zinc-300 hover:text-white"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
