import React, { useState } from "react";
import "./components.css";

const Beauty = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      url: "https://tse3.mm.bing.net/th?id=OIP.H3zhp2Fx8C2pvNQ2zC5mEwHaFW&pid=Api&P=0&h=180",
      title: "Lipsticks",
      price: 99.99,
    },
    {
      id: 2,
      url: "https://tse2.mm.bing.net/th?id=OIP.CRRJf5id8k9LViX0LD9JkQHaHa&pid=Api&P=0&h=180",
      title: "Blush",
      price: 89.99,
    },
    {
      id: 3,
      url: "https://tse2.mm.bing.net/th?id=OIP.iHsKafwObtGTBolRg5N7hAHaJ4&pid=Api&P=0&h=180",
      title: "Face Wash",
      price: 119.99,
    },
    {
      id: 4,
      url: "https://tse1.mm.bing.net/th?id=OIP.4zYrj63vFYbuY2lByHxp3AHaHa&pid=Api&P=0&h=180",
      title: "Facial Cream",
      price: 109.99,
    },
    {
      id: 5,
      url: "https://www.beautysparkreview.com/wp-content/uploads/2020/09/PicsArt_09-26-04_1601134020819-1160x1456.jpg",
      title: "Makeup kit",
      price: 79.99,
    },
    {
      id: 6,
      url: "https://tse4.mm.bing.net/th?id=OIP.jXmUO064envxdH_ePUE24wHaHa&pid=Api&P=0&h=180",
      title: "Eye Liner",
      price: 99.99,
    },
    {
      id: 7,
      url: "https://tse2.mm.bing.net/th?id=OIP.Q6G43BI62yi-PTpT7LFIiQHaHa&pid=Api&P=0&h=180",
      title: "Moisturizer",
      price: 89.99,
    },
    {
      id: 8,
      url: "https://tse3.mm.bing.net/th?id=OIP.dvVD1vJ_Ck8nUPC1YKecVgAAAA&pid=Api&P=0&h=180",
      title: "Sunscreen",
      price: 84.99,
    },
    {
      id: 9,
      url: "https://tse3.mm.bing.net/th?id=OIP.efCSdhUHvuG5vLe17RBuJAHaE8&pid=Api&P=0&h=180",
      title: "Foundation",
      price: 119.99,
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
    <div className="beauty">
      <h2>Beauty Products</h2>

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
            <p>{"$" + product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beauty;
