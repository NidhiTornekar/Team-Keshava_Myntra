import React, { useState } from "react";
import "./components.css";

const Sportswear = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse1.mm.bing.net/th?id=OIP.YguOkIP2xIjpoReX_q0R4gHaHa&pid=Api&P=0&h=180",
      title: "Running Sports Shoes",
      price: 79.99,
    },
    {
      id: 2,
      url: "https://tse1.mm.bing.net/th?id=OIP.pdc5BlB2EZFH9QQgUFzXCQHaHU&pid=Api&P=0&h=180",
      title: "Basketball Sports Shoes",
      price: 89.99,
    },
    {
      id: 3,
      url: "https://tse2.mm.bing.net/th?id=OIP.Fe4qZfZ1KwwDirwGsumOeQAAAA&pid=Api&P=0&h=180",
      title: "Soccer Sports Shoes",
      price: 99.99,
    },
    {
      id: 4,
      url: "https://tse1.mm.bing.net/th?id=OIP.th7MEzxq_6xuJjnB2hQd2QHaH9&pid=Api&P=0&h=180",
      title: "Tennis Sports Shoes",
      price: 109.99,
    },
    {
      id: 5,
      url: "https://tse3.mm.bing.net/th?id=OIP.wtyg2VjevfDZ3K-SMPsxHAHaFP&pid=Api&P=0&h=180",
      title: "Training Sports Shoes",
      price: 69.99,
    },
    {
      id: 6,
      url: "https://tse4.mm.bing.net/th?id=OIP.vgnVF42HOMiPdPJHQO_LSwHaHa&pid=Api&P=0&h=180",
      title: "Walking Sports Shoes",
      price: 89.99,
    },
    {
      id: 7,
      url: "https://tse2.mm.bing.net/th?id=OIP.wbUK1PTYfua3wumKXYHjHwHaEY&pid=Api&P=0&h=180",
      title: "Hiking Sports Shoes",
      price: 99.99,
    },
    {
      id: 8,
      url: "https://tse4.mm.bing.net/th?id=OIP.TNAFMq8f1i2TaNz0Eg2rFwHaEl&pid=Api&P=0&h=180",
      title: "Crossfit Sports Shoes",
      price: 84.99,
    },
    {
      id: 9,
      url: "https://tse1.mm.bing.net/th?id=OIP.RcFDw1xRMo2sPq4hsSia_QHaFj&pid=Api&P=0&h=180",
      title: "Volleyball Sports Shoes",
      price: 79.99,
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
    <div className="sportswear">
      <h2>Sportswear Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display Sportswear items */}
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

export default Sportswear;
