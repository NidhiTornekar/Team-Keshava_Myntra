import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const initialImages = [
      {
        id: 1,
        url: "https://handcmediastorage.blob.core.windows.net/productimages/SE/SEPMV014-G01-132687-800px-1040px.jpg",
        title: "Shirts",
      },
      {
        id: 2,
        url: "https://ae01.alicdn.com/kf/HLB1.qnMayzxK1Rjy1zkq6yHrVXap/Mens-T-Shirts-Fashion-Contrast-Color-Patchwork-Long-Sleeve-Slim-Fit-Cotton-Collar-T-Shirt-Male.jpg",
        title: "TShirts",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/originals/d3/bc/ba/d3bcba68e1b913486d75bef16099f832.jpg",
        title: "Footwear",
      },
      {
        id: 4,
        url: "https://tse2.mm.bing.net/th?id=OIP.YDIuAwy9iDm6DbNOCmJbVQHaLG&pid=Api&P=0&h=180",
        title: "Jeans",
      },
      {
        id: 5,
        url: "https://images-na.ssl-images-amazon.com/images/I/71PmnGC2ItL._AC_UL1000_.jpg",
        title: "Sportswear",
      },
      {
        id: 6,
        url: "https://sareepetticoat.com/wp-content/uploads/2020/11/GoSriKi-Women-Printed-Straight-Multicolour-Kurta-with-Palazzo-1536x2048.jpg",
        title: "Kurtas",
      },
      {
        id: 7,
        url: "https://tse3.mm.bing.net/th?id=OIP.Dv339g5hKF_0GGiuZnbvHgHaHa&pid=Api&P=0&h=180",
        title: "Kidswear",
      },
      {
        id: 8,
        url: "https://i.pinimg.com/originals/8a/11/20/8a11206b9484256dd5b35eca10f0eb7a.jpg",
        title: "Frocks",
      },
      {
        id: 9,
        url: "https://tse2.mm.bing.net/th?id=OIP.c9pvY5H8ejIlTxeIR55txwHaHa&pid=Api&P=0&h=180",
        title: "Beauty",
      },
      {
        id: 10,
        url: "https://i.pinimg.com/originals/37/13/66/371366186bfaaf70e78af5dee6722c1d.jpg",
        title: "Sarees",
      },
      {
        id: 11,
        url: "https://i.etsystatic.com/17457268/r/il/a14b47/3080788447/il_1140xN.3080788447_leky.jpg",
        title: "Lehangas",
      },
      {
        id: 12,
        url: "https://tse2.mm.bing.net/th?id=OIP.KA4dmG98WBM63TtFeAnyxQHaKk&pid=Api&P=0&h=180",
        title: "Westernwear",
      },
    ];
    setImages(initialImages);
  }, []);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filtered images based on search term
  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="home">
      <h2>Welcome to the Home Page</h2>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      {/* Image gallery */}
      <div className="image-gallery">
        {filteredImages.map((image) => (
          <Link
            key={image.id}
            to={`/${image.title.toLowerCase()}`}
            className="image-item"
          >
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;