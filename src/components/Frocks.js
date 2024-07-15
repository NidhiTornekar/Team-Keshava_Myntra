import React, { useState } from "react";
import "./components.css";

const Frocks = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse3.mm.bing.net/th?id=OIP.O2-TOEOSg0cVH-oM51eeHwHaKL&pid=Api&P=0&h=180",
      title: "Elegant Blue Long Frock",
      price: 89.99,
    },
    {
      id: 2,
      url: "https://tse4.mm.bing.net/th?id=OIP.6Fb4IWWRMwGtbTN1EFGUpQHaKB&pid=Api&P=0&h=180",
      title: "Striped Summer Long Frock",
      price: 79.99,
    },
    {
      id: 3,
      url: "https://tse2.mm.bing.net/th?id=OIP.ZmydPTu2dJTqrOC3cy6efAHaJ3&pid=Api&P=0&h=180",
      title: "Black Evening Long Frock",
      price: 109.99,
    },
    {
      id: 4,
      url: "https://tse2.mm.bing.net/th?id=OIP.eaQL8kGIJRuGeRL-DWhA8wHaHa&pid=Api&P=0&h=180",
      title: "Red Floral Long Frock",
      price: 94.99,
    },
    {
      id: 5,
      url: "https://tse2.mm.bing.net/th?id=OIP.k4PdmcDK0uwjufOt9IpEpQHaJ2&pid=Api&P=0&h=180",
      title: "Casual White Long Frock",
      price: 69.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.BLkyjYGaUjRM2RodqpNw-gHaJ3&pid=Api&P=0&h=180",
      title: "Green Boho Long Frock",
      price: 99.99,
    },
    {
      id: 7,
      url: "https://tse4.mm.bing.net/th?id=OIP.FjAVwQKZPLcsEzNVbN6YCQHaLH&pid=Api&P=0&h=180",
      title: "Pink Party Long Frock",
      price: 89.99,
    },
    {
      id: 8,
      url: "https://m.media-amazon.com/images/I/61OFswQs5dL._UL1500_.jpg",
      title: "Striped Maxi Long Frock",
      price: 74.99,
    },
    {
      id: 9,
      url: "https://tse1.mm.bing.net/th?id=OIP.-Fr6O7RoXGWdl-nQDPNUQgHaMW&pid=Api&P=0&h=180",
      title: "Elegant Black Long Frock",
      price: 119.99,
    },
  ]);

  const [sortBy, setSortBy] = useState(""); // State to store current sorting option

  // Function to handle sorting by price
  const handleSortByPrice = (event) => {
    const option = event.target.value;

    if (option === "lowToHigh") {
      images.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      images.sort((a, b) => b.price - a.price);
    }

    setSortBy(option);
    setImages([...images]); // Trigger re-render
  };

  return (
    <div className="frocks">
      <h2>Frocks Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display frocks */}
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
            <p>{"$" + image.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frocks;
