import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryDetail } from "@/components/CategoryDetail";
import { ProductDetail } from "@/components/ProductDetail";
import {
  categories,
  getCategoryBySlug,
  getProductById,
  products,
} from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    ...categories.map((c) => ({ slug: c.slug })),
    ...products.map((p) => ({ slug: p.id })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (category) {
    return {
      title: category.label,
      description: category.description,
    };
  }
  const product = getProductById(slug);
  if (product) {
    return {
      title: product.name,
      description: product.blurb,
    };
  }
  return { title: "Not found" };
}

export default async function ShopSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (category) {
    return <CategoryDetail category={category} />;
  }
  const product = getProductById(slug);
  if (product) {
    return <ProductDetail product={product} />;
  }
  notFound();
}
