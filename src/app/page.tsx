import Image from "next/image"
import Header from "@/components/layouts/Header"
import ShopByCategories from "@/components/pages/shop-by-categories"

export default function Home() {
  return (
      <div>
        <Header/>
        <Image className="w-full" src="/images/hero.jpg" alt="Hero Banner" width="1200" height="400" />
        <ShopByCategories/>
      </div>
  );
}
