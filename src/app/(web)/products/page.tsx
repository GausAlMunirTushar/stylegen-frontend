import Image from "next/image"
import Title from "@/components/ui/Title"
import Button from "@/components/ui/Button"
import products from "@/data/products"


const ProductsPage = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Title>All Products</Title>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {
                    products.map((product) => (
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
        </div>
    )
}

export default ProductsPage