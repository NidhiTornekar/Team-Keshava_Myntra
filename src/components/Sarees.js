import React, { useState } from "react";
import "./components.css";

const Sarees = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse4.mm.bing.net/th?id=OIP.BVtjNhPPn6rspiFl3cVsdwHaJ4&pid=Api&P=0&h=180",
      title: "Elegant Blue Saree",
      price: 99.99,
    },
    {
      id: 2,
      url: "https://tse2.mm.bing.net/th?id=OIP.3C6xbewBJqWWqGd--vSpGgHaL2&pid=Api&P=0&h=180",
      title: "Striped Summer Saree",
      price: 89.99,
    },
    {
      id: 3,
      url: "https://tse3.mm.bing.net/th?id=OIP.dFQRYCeDG6nxMUafaPOyggHaJ2&pid=Api&P=0&h=180",
      title: "Black Evening Saree",
      price: 119.99,
    },
    {
      id: 4,
      url: "https://tse4.mm.bing.net/th?id=OIP.dXF4uoeHPTa6wt2RoCnTuwAAAA&pid=Api&P=0&h=180",
      title: "Red Floral Saree",
      price: 109.99,
    },
    {
      id: 5,
      url: "https://tse1.mm.bing.net/th?id=OIP.gtn169HKXaOu9hoKB17MmQHaJ4&pid=Api&P=0&h=180",
      title: "Casual White Saree",
      price: 79.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.-v1zoDvaEP2v-B-KUX-kewHaKS&pid=Api&P=0&h=180",
      title: "Green Boho Saree",
      price: 99.99,
    },
    {
      id: 7,
      url: "https://tse1.mm.bing.net/th?id=OIP.8Xi5aN6SgGEX6h-ET8yFHwHaLH&pid=Api&P=0&h=180",
      title: "Pink Party Saree",
      price: 89.99,
    },
    {
      id: 8,
      url: "https://tse1.mm.bing.net/th?id=OIP.5csjNNGtXlN68lwoCn7UEQHaLH&pid=Api&P=0&h=180",
      title: "Striped Maxi Saree",
      price: 84.99,
    },
    {
      id: 9,
      url: "https://i.pinimg.com/originals/c9/23/86/c9238647b42d339a50cf87ef52796dbc.jpg",
      title: "Elegant Black Saree",
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
    <div className="sarees">
      <h2>Sarees Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display Sarees */}
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

export default Sarees;
