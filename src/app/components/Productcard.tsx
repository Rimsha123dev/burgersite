import React from 'react'
import {Product} from "@/type";
import Image from 'next/image';

interface ProductCardProps extends Product {
    onAddToCart:(product:Product) => void
}

const ProductCard:React.FC<ProductCardProps>=(
    {
        id,
        name,
        price,
        image,
        onAddToCart,

    }
) =>{
    return(
        <div className='bg-white shadow-md rounded-lg p-4   transition-transform duration-300 ease-in-out hover:scale-105'>
            <Image
            src={image}
            alt={name}
            height={50}
            width={50}
            className='w-full h-56 mb-4 object-cover rounded-md transform transition-all duration-300 ease-in-out hover:scale-90'
            />
            <h3 className='text-xl font-semibold mb-2'
            >{name}</h3>
            <p className='mb-4 text-lg text-slate-500'>{price}</p>

            <button className='bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-lg shadow-md transition duration-500 transform ease-in-out hover:scale-90'
            onClick={()=>onAddToCart({id,name,price,image})}
            >
                Add to Cart
            </button>

        </div>
    );
};
export default ProductCard