import Image from "next/image"
import Title from "@/components/ui/Title"
import featuredProducts from "@/data/featured-projects"
import Button from "@/components/ui/Button"


const FeaturedProducts = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <Title> Featured Products </Title>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {
                    featuredProducts.map((product) => (
                        <div key={product.name}>
                            <Image width={500} height={500} alt={product.name} src={product.image} />
                            <p className="text-sm my-1 line-clamp-2 h-10">{product.name}</p>
                            <p className="flex gap-2 items-center">
                                <span>BDT {product.dicountPrice}</span>
                                <del className="text-gray-300">BDT {product.price}</del>
                            </p>
                            <div>
                                <Button style="w-full my-1 py-1 " >Buy Now</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FeaturedProducts