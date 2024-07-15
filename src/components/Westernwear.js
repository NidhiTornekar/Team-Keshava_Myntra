import React, { useState } from "react";
import "./components.css";

const Westernwear = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse1.mm.bing.net/th?id=OIP.LXGab5WiMBobIJ8mi-5viwHaLw&pid=Api&P=0&h=180",
      title: "Blue Denim Jeans",
      price: 34.99,
    },
    {
      id: 2,
      url: "https://tse4.mm.bing.net/th?id=OIP.8sMn4O1dCT_b2XG9evt6zAHaLH&pid=Api&P=0&h=180",
      title: "Red Floral Frock",
      price: 27.99,
    },
    {
      id: 3,
      url: "https://tse1.mm.bing.net/th?id=OIP.Rptj9UnOWh25Id3zGZn8ywAAAA&pid=Api&P=0&h=180",
      title: "Black Skinny Jeans",
      price: 39.99,
    },
    {
      id: 4,
      url: "https://tse4.mm.bing.net/th?id=OIP.WherajYrJxVS_NsAm9X2pwHaJ3&pid=Api&P=0&h=180",
      title: "Pink Summer Frock",
      price: 36.99,
    },
    {
      id: 5,
      url: "https://tse3.mm.bing.net/th?id=OIP.JKaWNhxePVfXxECZOsP4ZADMEy&pid=Api&P=0&h=180",
      title: "Ripped Jeans",
      price: 29.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.kei4FLSvZTUURZoy2YLsWwHaLY&pid=Api&P=0&h=180",
      title: "Casual White Frock",
      price: 49.99,
    },
    {
      id: 7,
      url: "https://tse4.mm.bing.net/th?id=OIP.T4k52vz-f5JZBSMYDKe_swHaLH&pid=Api&P=0&h=180",
      title: "High-Waisted Jeans",
      price: 31.99,
    },
    {
      id: 8,
      url: "https://tse2.mm.bing.net/th?id=OIP.RmjFTqu5Ngusl7fsqRKvswHaLW&pid=Api&P=0&h=180",
      title: "Boho Chic Frock",
      price: 36.99,
    },
    {
      id: 9,
      url: "https://tse1.mm.bing.net/th?id=OIP.thtxO-muaCiCO846fG39fwHaLH&pid=Api&P=0&h=180",
      title: "Leather Skinny Jeans",
      price: 24.99,
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
    <div className="westernwear">
      <h2>Westernwear Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display Westernwear items */}
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

export default Westernwear;
