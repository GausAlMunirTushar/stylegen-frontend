'use client'
import { useParams } from "next/navigation"

const ProductsDetailsPage = () => {
    const params = useParams()

    return (
        <div>
            {params.slug}
        </div>
    )
}

export default ProductsDetailsPage