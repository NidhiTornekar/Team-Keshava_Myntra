import React, { useState } from "react";
import "./components.css";

const TShirts = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse4.mm.bing.net/th?id=OIP.7WLJhXE1wWmP261au6_60AHaJ4&pid=Api&P=0&h=180",
      title: "Navy Blue Cotton T-Shirt",
      price: 34.99,
    },
    {
      id: 2,
      url: "https://tse2.mm.bing.net/th?id=OIP.4gcFli2grxs0UFHWeOJ_KgHaJ4&pid=Api&P=0&h=180",
      title: "Striped Cotton Polo T-Shirt",
      price: 27.99,
    },
    {
      id: 3,
      url: "https://tse4.mm.bing.net/th?id=OIP.ISiQACec6zTI-vopJtli-QHaJ4&pid=Api&P=0&h=180",
      title: "Classic White T-Shirt",
      price: 39.99,
    },
    {
      id: 4,
      url: "https://tse4.mm.bing.net/th?id=OIP.g9y8cQcxN26h7b33qhN45gHaJ4&pid=Api&P=0&h=180",
      title: "Dark Denim T-Shirt",
      price: 36.99,
    },
    {
      id: 5,
      url: "https://tse2.mm.bing.net/th?id=OIP.B5zm8LeYOGkZCFqSxtHspQHaJ4&pid=Api&P=0&h=180",
      title: "Plaid Flannel T-Shirt",
      price: 29.99,
    },
    {
      id: 6,
      url: "https://tse3.mm.bing.net/th?id=OIP.Jq4gdC-NZCR1S1MiYP-ySwHaJ4&pid=Api&P=0&h=180",
      title: "Light Blue Linen Button-up T-Shirt",
      price: 49.99,
    },
    {
      id: 7,
      url: "https://tse3.mm.bing.net/th?id=OIP.gFiLzJjRhkZdYEtergNTIQHaJZ&pid=Api&P=0&h=180",
      title: "Red Plaid T-Shirt",
      price: 31.99,
    },
    {
      id: 8,
      url: "https://tse1.explicit.bing.net/th?id=OIP.hokVT0WMyQuMP99SVnZzFwHaHa&pid=Api&P=0&h=180",
      title: "Striped Oxford T-Shirt",
      price: 36.99,
    },
    {
      id: 9,
      url: "https://tse1.mm.bing.net/th?id=OIP.mM_SGRNJsrE64cxPqh4xzwAAAA&pid=Api&P=0&h=180",
      title: "Black Short Sleeve T-Shirt",
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
    <div className="tshirts">
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

      {/* Display shirts */}
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

export default TShirts;
