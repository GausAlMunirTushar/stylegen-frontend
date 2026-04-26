import Image from "next/image"
import Title from "@/components/ui/Title"
import Button from "@/components/ui/Button"
import categories from "@/data/categories"



const CategoriesPage = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Title>All Categories</Title>
            <section className="max-w-6xl mx-auto my-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {
                        categories.map((category) => (
                            <div key={category.name}>
                                <Image width={500} height={500} alt={category.name} src={category.image} />
                                <p className="relative bottom-8 text-white font-bold text-xl left-2">{category.name}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default CategoriesPage