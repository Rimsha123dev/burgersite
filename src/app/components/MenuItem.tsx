
"use client"
import React from 'react'
import { useState, useEffect } from "react";
import  {Product}  from "@/type";
import Productcard from "./Productcard";
import Image from 'next/image';




const MenuItem = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);


    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();

        try {
            const savedCart = localStorage.getItem("cart");
            const parsedCart = savedCart ? JSON.parse(savedCart) : [];
            setCart(Array.isArray(parsedCart) ? parsedCart : []);
        } catch (err) {
            console.error("Error loading cart from localStorage:", err);
            setCart([]);
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const toggleCart = () => {
        setShowCart((prev) => !prev);
    };

    const goToCheckout = () => {
        setIsCheckout(true);
        // router.push("/checkout");
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <div className="relative min-h-screen py-6">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
                style={{
                    backgroundImage: `url("/bckground.PNG")`
                }}>

            </div>

            <div className="relative z-10">
                <div className="max-w-6xl mb-8 text-center mx-auto">
                    <h1 className="mb-4 text-center text-white font-bold text-4xl">
                        Delicious Burgers

                    </h1>
                    <p className="text-xl text-white">
                        Explore our section of mouth watering burgers to order now!
                    </p>

                </div>
                {/* product section */}
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl p-4 text-red-600">
                    {
                        products.map((product) => (
                            <Productcard
                                key={product.id}
                                {...product}
                                onAddToCart={addToCart}

                            />
                        )

                        )

                    }
                </div>


                {/* cart section */}


                <div className='mt-8 max-w-6xl mx-auto'>
                    <button
                        className='py-3 px-6 text-white bg-blue-600 hover:bg-blue-800 transition duration-300 ease-in-out transform rounded-lg shadow-md '
                        onClick={toggleCart}>

                        {showCart ? "hide Cart" : "View Cart"}({cart.length} items)

                    </button>

                    {showCart && (
                        <div className='mt-6 rounded-lg shadow-lg bg-white p-6'>
                            <h2 className='text-4xl font-bold text-blue-600 capitalize'>
                                your cart items include:

                            </h2>
                            {cart.length > 0 ? (
                                <div>
                                    <ul>
                                        {cart.map((product, index) => (
                                            <li
                                                key={index}
                                                className='flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out'>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={50}
                                                    height={50}
                                                    className='w-20 h-40 inline-block sm:w-24 transition-transform duration-300 ease-in-out hover:scale-95 text-black'

                                                />
                                                <span className='ml-4 text-slate-500 font-medium text-lg'>{product.name} - Rs.{product.price}</span>

                                            </li>
                                        ))}
                                    </ul>
                                    <div className='flex justify-between mt-6 text-black items-center '>
                                        <span className='text-xl font-semibold'>Total : Rs.{cart.reduce((total, product) => total + Number(product.price), 0)}</span>
                                        <div>
                                            <button
                                                onClick={goToCheckout}
                                                className="bg-green-600 hover:bg-green-800 text-white py-3 px-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"

                                            >
                                                Proceed to Checkout

                                            </button>


                                            <button
                                                onClick={clearCart}
                                                className="bg-red-600 hover:bg-red-800 text-white ml-4 py-3 px-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"

                                            >
                                                Clear Cart

                                            </button>


                                        </div>

                                    </div>

                                </div>
                            ) : (
                                <p className="text-lg text-slate-600">your cart is empty</p>
                            )}



                        </div>

                    )
                    }
                </div>


                {/* checkout */}

                {isCheckout && (

                    <div className="fixed inset-0 bg-gray-700 opacity-90 flex justify-center items-center text-black z-10">
                        <div className='w-full sm:w-96 bg-white rounded-lg shadow-lg p-8'>
                            <h2 className='text-blue-600 text-4xl font-bold capitalize mb-4'>
                                checkout
                            </h2>
                            <p className="text-lg text-red-600">
                                please confirm your order before proceeding.

                            </p>
                            <div className='mt-4'>
                                <ul>
                                    {cart.map((product, index) => (
                                        <li
                                            key={index}
                                            className='flex justify-between mb-4'>
                                            <span>{product.name}</span>
                                            <span>Rs. {product.price}</span>





                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between mt-4">
                                    <span className='text-xl font-semibold'>Total :</span>

                                    <span className='text-xl font-semibold'>  Rs.{cart.reduce((total, product) => total+Number(product.price),0)}
                                    </span>

                                </div>

                            </div>

                            <div className="flex justify-between mt-6">
                                     <button
                                                onClick={()=>setIsCheckout(false)}
                                                className="bg-slate-600 hover:bg-slate-800 text-white py-2 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"

                                            >
                                                close

                                            </button>

                                            <button
                                                onClick={()=>alert("order confirmed.....ready to deliver")}
                                                className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"

                                            >
                                                order confirm

                                            </button>


                              </div>
                            


                        </div>

                    </div>
                )



                }

            </div>




        </div>



    )



}





export default MenuItem













































