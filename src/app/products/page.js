"use client";

import { useEffect, useState } from 'react';
import Nav from "../Nav";
import NavCollapsible from "../NavCollapsible";
import Link from "next/link";
import AllProducts from './Products.json';

const Card = ({ name, imgSrc, price, short_desc, tags,version }) => {
  return (
    <div>
      {/*  */}
    </div>
  )
}

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(AllProducts.products);
  }, [products]);

  return (
    <main className="flex flex-col gap-32 justify-start">
      <NavCollapsible>
        <div className="mt-4 h-1/2 overflow-y-auto">
          <ul id="topic_list_collapsible">
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
            <Link href='/about-us' className="topic-list-items-collapsible"><li>About us</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
            <Link href='/products' className="topic-list-items-collapsible"><li>Products</li></Link>
          </ul>
        </div>
      </NavCollapsible>
      
      {/* Navigation bar */}
      <Nav />

      <section className="pt-32 pb-16 all-products-header shadow-lg">
        <div className="body-margin flex flex-col gap-12 text-center text-white">

          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">
              Products
            </p>

            <p className="text-2xl font-extralight text-gray-100">
              Hand-crafted, enterprise-grade products, and template kits. Browse all our products
            </p>
          </div>

          <div>
            <input
            className="p-2 w-80 sm:w-96 rounded-3xl"
             type="text"
             placeholder="Search products"
             onChange={() => console.log("changed")} />
          </div>
        </div>
      </section>

      {/* Filter */}
      <section>
        {/*  */}
      </section>
    </main>
  )
}

export default Products;
