import React, { useState } from "react";
import "./components.css";

const Kurtas = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse4.explicit.bing.net/th?id=OIP.QIMDgXeEaBuO4aDpMmZ__gHaJQ&pid=Api&P=0&h=180",
      title: "Blue Printed Kurti",
      price: 49.99,
    },
    {
      id: 2,
      url: "https://tse1.mm.bing.net/th?id=OIP.A42t2nPv8_0aw7UNqq4XPgHaJ4&pid=Api&P=0&h=180",
      title: "Pink Floral Kurti",
      price: 44.99,
    },
    {
      id: 3,
      url: "https://tse4.mm.bing.net/th?id=OIP.6c0pCGYUtXVy1XOkHqN-JQHaJ4&pid=Api&P=0&h=180",
      title: "Yellow Anarkali Kurti",
      price: 59.99,
    },
    {
      id: 4,
      url: "https://tse3.mm.bing.net/th?id=OIP.XMym_E3hjhtB5do4FxU-LQHaJ4&pid=Api&P=0&h=180",
      title: "Green Straight Kurti",
      price: 54.99,
    },
    {
      id: 5,
      url: "https://tse4.mm.bing.net/th?id=OIP.qHH6ZVop-NbLuB1aRP1UtgHaR_&pid=Api&P=0&h=180",
      title: "White Cotton Kurti",
      price: 39.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.gtO0qkXxD4j8lLcjorOY7wHaJ3&pid=Api&P=0&h=180",
      title: "Red Partywear Kurti",
      price: 49.99,
    },
    {
      id: 7,
      url: "https://tse4.mm.bing.net/th?id=OIP.ZFLVGJuTuEJ5KEh2d47iFwHaJ4&pid=Api&P=0&h=180",
      title: "Purple Embroidered Kurti",
      price: 44.99,
    },
    {
      id: 8,
      url: "https://tse3.mm.bing.net/th?id=OIP.U2haFE0pOscgqy82SuRPsgHaLH&pid=Api&P=0&h=180",
      title: "Orange Casual Kurti",
      price: 42.99,
    },
    {
      id: 9,
      url: "https://tse4.mm.bing.net/th?id=OIP.j3whRA4Qz8q2PHurcYW7ZwHaJ3&pid=Api&P=0&h=180",
      title: "Black Georgette Kurti",
      price: 59.99,
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
    <div className="kurtas">
      <h2>Kurtas Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display Kurtas */}
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

export default Kurtas;
