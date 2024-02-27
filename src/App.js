import React, { useState } from "react";
import Card from "./component/Card";
import TopBar from "./component/TopBar";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  let [cart, setCart] = useState(0);
  let data = [
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "$40.00 - $80.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: false,
      action: "View options",
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " $18.00",
      sale: true,
      originalPrice: "$20.00",
      original: true,
      reviews: true,
      action: "Add to cart",
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " $25.00",
      sale: true,
      originalPrice: "$50.00",
      original: true,
      reviews: false,
      action: "Add to cart",
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "$40.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true,
      action: "Add to cart",
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " $25.00",
      sale: true,
      originalPrice: "$50.00",
      original: true,
      reviews: false,
      action: "Add to cart",
    },
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "$120.00 - $280.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: false,
      action: "View options",
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " $18.00",
      sale: true,
      originalPrice: "$20.00",
      original: true,
      reviews: true,
      action: "Add to cart",
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "$40.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true,
      action: "Add to cart",
    },
  ];
  return (
    <>
      <TopBar cart={cart} setCart={setCart} />
      <Header cart={cart} setCart={setCart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((e, i) => {
              return <Card data={e} key={i} cart={cart} setCart={setCart} index={i} />;
            })}
          </div>
        </div>
      </section>
      <Footer cart={cart} setCart={setCart} />
    </>
  );
}

export default App;