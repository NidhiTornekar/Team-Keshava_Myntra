import React, { useState } from "react";
import "./components.css";

const Shirts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      url: "https://tse1.mm.bing.net/th?id=OIP.ehaK4hx6rkIqzwHEk1FyfgHaJo&pid=Api&P=0&h=180",
      title: "Blue Cotton Shirt",
      price: 29.99,
    },
    {
      id: 2,
      url: "https://oldnavy.gap.com/webcontent/0013/489/908/cn13489908.jpg",
      title: "Striped Polo Shirt",
      price: 24.99,
    },
    {
      id: 3,
      url: "https://tse4.mm.bing.net/th?id=OIP.2_dc9PrUweJvh7ZV4uRzFgHaJo&pid=Api&P=0&h=180",
      title: "White Dress Shirt",
      price: 39.99,
    },
    {
      id: 4,
      url: "https://tse4.mm.bing.net/th?id=OIP.MuCBL06Hw1r28r44OynOiAHaJ4&pid=Api&P=0&h=180",
      title: "Denim Shirt",
      price: 34.99,
    },
    {
      id: 5,
      url: "https://tse4.mm.bing.net/th?id=OIP.NSURmTi0Wni6q5_p4h1iUwHaJC&pid=Api&P=0&h=180",
      title: "Flannel Shirt",
      price: 27.99,
    },
    {
      id: 6,
      url: "https://cdna.lystit.com/photos/870f-2016/02/05/john-varvatos-carbon-grey-linen-shirt-black-product-0-792536533-normal.jpeg",
      title: "Linen Button-up",
      price: 49.99,
    },
    {
      id: 7,
      url: "https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180",
      title: "Plaid Shirt",
      price: 31.99,
    },
    {
      id: 8,
      url: "https://tse3.mm.bing.net/th?id=OIP.7Fqp4TLUTBNfb5WDCLyDaQHaJ4&pid=Api&P=0&h=180",
      title: "Oxford Shirt",
      price: 36.99,
    },
    {
      id: 9,
      url: "https://tse3.mm.bing.net/th?id=OIP.Dbl8z_Aff8h4JuZyLX3bagHaMW&pid=Api&P=0&h=180",
      title: "Short Sleeve Shirt",
      price: 22.99,
    },
    {
      id: 10,
      url: "https://tse1.mm.bing.net/th?id=OIP.z3LhY-tBSz7x3BDnNmQg4AHaHa&pid=Api&P=0&h=180",
      title: "Checked Shirt",
      price: 28.99,
    },
    {
      id: 11,
      url: "https://tse3.mm.bing.net/th?id=OIP.OpK7FTapGAqgAD0VjGnIOAHaJ4&pid=Api&P=0&h=180",
      title: "Slim Fit Shirt",
      price: 32.99,
    },
    {
      id: 12,
      url: "https://tse4.mm.bing.net/th?id=OIP.PD0KHf-5mQmb03oUZo9JjQHaJ4&pid=Api&P=0&h=180",
      title: "Silk Shirt",
      price: 59.99,
    },
  ]);

  const [sortBy, setSortBy] = useState(""); // State to store current sorting option

  // Function to handle sorting by price
  const handleSortByPrice = (event) => {
    const option = event.target.value;

    if (option === "lowToHigh") {
      products.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      products.sort((a, b) => b.price - a.price);
    }

    setSortBy(option);
    setProducts([...products]); // Trigger re-render
  };

  return (
    <div className="shirts">
      <h2>Shirts Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display products */}
      <div className="image-grid">
        {products.map((product) => (
          <div key={product.id} className="image-item">
            <img src={product.url} alt={product.title} />
            <p>{product.title}</p>
            <p>{"$" + product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shirts;
