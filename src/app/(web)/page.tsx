import Image from "next/image"
import ShopByCategories from "@/components/pages/shop-by-categories"
import FeaturedProducts from "@/components/pages/FeaturedProducts";

export default function HomePage() {
  return (
    <div>
      <Image className="w-full" src="/images/hero.jpg" alt="Hero Banner" width="1200" height="400" />
      <ShopByCategories />
      <FeaturedProducts />
    </div>
  );
}
