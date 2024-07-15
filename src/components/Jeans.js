import React, { useState } from "react";
import "./components.css";

const Jeans = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse2.mm.bing.net/th?id=OIP.-vXHSDgI6yHrGvVGDfwkZgHaIa&pid=Api&P=0&h=180",
      title: "Classic Blue Jeans",
      price: 49.99,
    },
    {
      id: 2,
      url: "https://tse3.mm.bing.net/th?id=OIP.AYtsbxhOTat2cDSikJu0cgHaNI&pid=Api&P=0&h=180",
      title: "Ripped Skinny Jeans",
      price: 59.99,
    },
    {
      id: 3,
      url: "https://tse3.mm.bing.net/th?id=OIP.ZKFTXlm57OWsDp9AZPeKOwHaLH&pid=Api&P=0&h=180",
      title: "Black Slim Fit Jeans",
      price: 54.99,
    },
    {
      id: 4,
      url: "https://tse1.mm.bing.net/th?id=OIP.NjLeY2qhqGpLYbq8UlhKVgHaJ3&pid=Api&P=0&h=180",
      title: "High Waist Jeans",
      price: 64.99,
    },
    {
      id: 5,
      url: "https://tse3.mm.bing.net/th?id=OIP.vWmoB51Y9nNhNX-wOGLRBAAAAA&pid=Api&P=0&h=180",
      title: "Straight Leg Jeans",
      price: 44.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.rWwsrH9kz2TtpyFxzPYacwAAAA&pid=Api&P=0&h=180",
      title: "Boyfriend Jeans",
      price: 69.99,
    },
    {
      id: 7,
      url: "https://tse3.mm.bing.net/th?id=OIP.nfCpPOulEZRqXDnQ-4wMowHaJ4&pid=Api&P=0&h=180",
      title: "Dark Wash Jeans",
      price: 59.99,
    },
    {
      id: 8,
      url: "https://tse3.mm.bing.net/th?id=OIP.nfCpPOulEZRqXDnQ-4wMowHaJ4&pid=Api&P=0&h=180",
      title: "Light Wash Jeans",
      price: 49.99,
    },
    {
      id: 9,
      url: "https://tse4.mm.bing.net/th?id=OIP.VQD2GAwQmYXufj9f5i2h4gHaTJ&pid=Api&P=0&h=180",
      title: "White Jeans",
      price: 39.99,
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
    <div className="jeans">
      <h2>jeans Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display T-shirts */}
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

export default Jeans;
