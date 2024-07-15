import React, { useState } from "react";
import "./components.css";

const Kidswear = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://i.pinimg.com/originals/d6/51/77/d65177e8a72068dd3d7376926b51c6d3.jpg",
      title: "Kids Frock ",
      price: 99.99,
    },
    {
      id: 2,
      url: "https://tse3.mm.bing.net/th?id=OIP.CHzLbxchWu2liR8iHBpo9wHaLH&pid=Api&P=0&h=180",
      title: "Kids Shirt and Pants ",
      price: 89.99,
    },
    {
      id: 3,
      url: "https://tse3.mm.bing.net/th?id=OIP.v2cSqxwy6fZRw4ivda4rSAHaNK&pid=Api&P=0&h=180",
      title: "Kids Frock ",
      price: 119.99,
    },
    {
      id: 4,
      url: "https://tse3.mm.bing.net/th?id=OIP.v2cSqxwy6fZRw4ivda4rSAHaNK&pid=Api&P=0&h=180",
      title: "Kids Dress ",
      price: 109.99,
    },
    {
      id: 5,
      url: "https://tse3.mm.bing.net/th?id=OIP.6Fe3oNO7UX7od8pSRezyrgHaKL&pid=Api&P=0&h=180",
      title: "Kids Shirt and Pants ",
      price: 79.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.t_Mlt1pZH_DFqL5Xjg159gHaLH&pid=Api&P=0&h=180",
      title: "Kids Frock ",
      price: 99.99,
    },
    {
      id: 7,
      url: "https://tse3.mm.bing.net/th?id=OIP.UqTulNwDVjtg3Ta32FUraQHaIq&pid=Api&P=0&h=180",
      title: "Kids Dress ",
      price: 89.99,
    },
    {
      id: 8,
      url: "https://tse4.mm.bing.net/th?id=OIP.P1yWQq9ldFiY0jV9R8FmzQHaE4&pid=Api&P=0&h=180",
      title: "Kids Shirt and Pants ",
      price: 84.99,
    },
    {
      id: 9,
      url: "https://tse4.mm.bing.net/th?id=OIP.P1yWQq9ldFiY0jV9R8FmzQHaE4&pid=Api&P=0&h=180",
      title: "Kids Frock ",
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
    <div className="kidswear">
      <h2>Kidswear Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display Kidswear */}
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

export default Kidswear;
