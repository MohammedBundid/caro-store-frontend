import { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";

const ProductPage = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:4000/api/shop')
            const json = await response.json()

            if(response.ok){
                setProducts(json)
            }
        }
        fetchProducts()
    }, [])

    return ( 
        <div className="bg-cyan-100 min-h-screen py-4 px-4">
            <div className="text-2xl hover:cursor-pointer">
            <MdFilterList />
            </div>
            {products && products.map((product) => {
                // return <p key={product._id}>{product.title}</p>
                return(

                    <div key={product._id} className="max-w-sm rounded overflow-hidden shadow-lg pt-4 ">
                        <img src={product.image} alt={product.title} className="w-full" />
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base">
                            {product.description}
                        </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                Price: ksh ${product.price}
                            </span>
                        </div>
                        <button className="w-full bg-stone-800 text-white px-2 py-2 text-center capitalize opacity-0 hover:opacity-100 transition-opacity">
                            add to cart
                        </button>
                    </div>
                )
            })}
        </div>
    );
}
 
export default ProductPage;