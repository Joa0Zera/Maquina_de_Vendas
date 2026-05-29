import { ProductForm } from "@/components/products/product-form";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Novo produto</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Preencha os dados para publicar sua landing em /p/slug.
        </p>
      </div>
      <ProductForm mode="create" defaultValues={{ status: "draft", price: 0 }} />
    </div>
  );
}
