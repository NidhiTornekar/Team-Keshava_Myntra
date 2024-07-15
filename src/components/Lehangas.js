import React, { useState } from "react";
import "./components.css";

const Lehangas = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://tse2.mm.bing.net/th?id=OIP.6ymiHReeGCwHMxr8QbrQWAHaJM&pid=Api&P=0&h=180",
      title: "Elegant Blue Lehenga",
      price: 149.99,
    },
    {
      id: 2,
      url: "https://tse3.mm.bing.net/th?id=OIP.9mRlRfNCo3ZTCD7fRTzPBgHaJg&pid=Api&P=0&h=180",
      title: "Striped Summer Lehenga",
      price: 139.99,
    },
    {
      id: 3,
      url: "https://tse3.mm.bing.net/th?id=OIP.rjdE8F2V48qWLcmLyoTEzgHaLH&pid=Api&P=0&h=180",
      title: "Black Evening Lehenga",
      price: 199.99,
    },
    {
      id: 4,
      url: "https://tse1.explicit.bing.net/th?id=OIP.hM5ptGlJ85OvgU19rChKxgHaKb&pid=Api&P=0&h=180",
      title: "Red Floral Lehenga",
      price: 179.99,
    },
    {
      id: 5,
      url: "https://tse3.mm.bing.net/th?id=OIP._y1mmPpqaP_Sjdv1NIYQGgHaJ2&pid=Api&P=0&h=180",
      title: "Casual White Lehenga",
      price: 129.99,
    },
    {
      id: 6,
      url: "https://tse4.mm.bing.net/th?id=OIP.QEj8RlDaUqkHRvfUwjd4iQHaLH&pid=Api&P=0&h=180",
      title: "Green Boho Lehenga",
      price: 159.99,
    },
    {
      id: 7,
      url: "https://tse3.mm.bing.net/th?id=OIP.G-PHAcuOV45EvHecPlH90AHaJg&pid=Api&P=0&h=180",
      title: "Pink Party Lehenga",
      price: 149.99,
    },
    {
      id: 8,
      url: "https://tse3.mm.bing.net/th?id=OIP.fwdhVjbpCxlzKlu4nvDEzAHaJQ&pid=Api&P=0&h=180",
      title: "Striped Maxi Lehenga",
      price: 139.99,
    },
    {
      id: 9,
      url: "https://tse4.mm.bing.net/th?id=OIP.QaE205h5jKu_Lp5XYG8z8AHaLH&pid=Api&P=0&h=180",
      title: "Elegant Black Lehenga",
      price: 199.99,
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
    <div className="lehangas">
      <h2>Lehangas Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display Lehangas */}
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

export default Lehangas;
