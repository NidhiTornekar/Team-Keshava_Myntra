import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Trending = () => {
  const { category } = useParams(); 
  const [trendingImages, setTrendingImages] = useState([]);

  useEffect(() => {
    const fetchTrendingImages = async () => {
      try {
        let imagesData = [];

        if (category === "tshirts") {
          imagesData = [
            {
              id: 1,
              url: "https://rukminim2.flixcart.com/image/850/1000/l4iscy80/t-shirt/m/e/n/l-half-x-men-one-lieo-trend-original-imagfejczfgetk3f.jpeg?q=90&crop=false",
              title: "T-Shirt 1",
            },
            {
              id: 2,
              url: "https://5.imimg.com/data5/SELLER/Default/2022/3/RH/CK/WP/125560692/h4e30324dc14b4bcf92d64fdfdf49da6bk-500x500.jpg",
              title: "T-Shirt 2",
            },
            {
              id: 3,
              url: "https://m.media-amazon.com/images/I/612Rl6GKHoL.AC_SR175,263_QL70.jpg",
              title: "T-Shirt 3",
            },
            {
              id: 4,
              url: "https://m.media-amazon.com/images/I/51Up2qROGOL.AC_UY1100.jpg",
              title: "T-Shirt 2",
            },
            {
              id: 5,
              url: "https://i.pinimg.com/736x/1b/60/e7/1b60e791cab9f12da168b42b6d502603.jpg",
              title: "T-Shirt 5",
            },
            {
              id: 6,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdbUoOjwroqd5XIQxJUMX1tXcKEPBCTw0lg&s",
              title: "T-Shirt 6",
            },
          ];
        } else if (category === "shirts") {
          imagesData = [
            {
              id: 1,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0rrQa4XU_99dHl4fUeBW1GUPMxF_NHhbZg&s",
            },
            {
              id: 2,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdhQrz9ND2f9S9FjzLqSmwrvD8WOexSMm8g&s",
              title: "Shirt 2",
            },
            {
              id: 3,
              url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/9/u/z/m-bikit-f-3-foxhil-original-imagmnqxvfw7wkfg.jpeg?q=90&crop=false",
              title: "Shirt 3",
            },
            {
              id: 4,
              url: "https://fcity.in/images/products/312878839/9xmhj_512.jpg",
              title: "Shirt 4",
            },
            {
              id: 5,
              url: "https://i0.wp.com/purble.in/wp-content/uploads/ESPS408-2.jpg?fit=800%2C800&ssl=1",
              title: "Shirt 5",
            },
            {
              id: 6,
              url: "https://getketchadmin.getketch.com/product/8905404630384/660/KHSH000631_1.JPG",
              title: "Shirt 6",
            },
          ];
        } else if (category === "footwear") {
          imagesData = [
            {
              id: 1,
              url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/05/04110215/040518romwe_02.jpg",
              title: "Footwear 1",
            },
            {
              id: 2,
              url: "https://tse3.mm.bing.net/th?id=OIP.lKg41uoVZNRWyhWjP_un3gAAAA&pid=Api&P=0&h=180",
              title: "Footwear 2",
            },
            {
              id: 2,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6RTV78uIwzDR_1yuclutGGlyBsVEWJiyqA&s",
              title: "Footwear 2",
            },
            {
              id: 3,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUQLB3x6pn0pvIg9H3IRQfzLuLU9XXt7NgQ&s",
              title: "Footwear 3",
            },
            {
              id: 4,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-vHa1Z1CPZpFfTLsjHIUnkQefGWc5LiqYQ&s",
              title: "Footwear 4",
            },
            {
              id: 5,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeQceWDXLHNGeh6GUNedvqL63ytRokgof0Q&s",
              title: "Footwear 5",
            },
            {
              id: 6,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmWmWz6VAvLn3BsGnQVnXW-12zqA7nqyWwA&s",
              title: "Footwear 6",
            },
          ];
        } else if (category === "frocks") {
          imagesData = [
            {
              id: 1,
              url: "https://5.imimg.com/data5/SELLER/Default/2023/3/IH/SB/LC/28280455/partywear-designer-gown-latest-collection-of-2023-trending-design-of-gown-500x500.jpg",
              title: "Frock 1",
            },
            {
              id: 2,
              url: "https://www.jaipuriadaah.com/cdn/shop/products/MK_00663_600x.jpg?v=1665400209",
              title: "Frock 2",
            },
            {
              id: 3,
              url: "https://i.pinimg.com/originals/a8/f9/02/a8f9029d41efda3e9dc3113910a73640.jpg",
              title: "Frock 3",
            },
            {
              id: 4,
              url: "https://www.libas.in/cdn/shop/articles/7-trending-outfits-that-are-perfect-for-indian-weddings-libas.jpg?v=1713355504",
              title: "Frock 4",
            },
            {
              id: 5,
              url: "https://5.imimg.com/data5/SELLER/Default/2021/6/QT/RD/ZT/73021173/gown-500x500.jpeg",
              title: "Frock 5",
            },
            {
              id: 6,
              url: "https://www.jiomart.com/images/product/original/rvebuwkw9c/shiva-trends-fit-and-flare-georgette-dress-for-women-product-images-rvebuwkw9c-0-202309162134.jpg?im=Resize=(1000,1000)",
              title: "Frock 6",
            },

          ];
        } else if (category === "sportswear") {
          imagesData = [
            {
              id: 1,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVTV6QJ1pTcAo1Qb2ckh7aH_cMVvK7c3lFQ&s",
              title: "Sportswear 1",
            },
            {
              id: 2,
              url: "https://5.imimg.com/data5/SELLER/Default/2023/5/312238359/ZX/AH/DG/103411106/exiss-fashion-sports-shoes-for-men.jpeg",
              title: "Sportswear 2",
            },
            {
              id: 3,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToazPTSaECGxGMx3A5Ai0ig7IZ_FoFYrw44w&s",
              title: "Sportswear 3",
            },
            {
              id: 4,
              url: "https://kdbdeals.com/wp-content/uploads/2023/02/BIRDE-Trending-Stylish-Sports-Shoes-For-Women-Regular-Wear-Comfortable-Walking-Running-1-10-350x350.jpg",
              title: "Sportswear 4",
            },
            {
              id: 5,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARz1lEsYWi9iK5QsBwAiO9U273-oczPfVSA&s",
              title: "Sportswear 5",
            },
            {
              id: 6,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHNgRwlbT0CSxtTSS3kbDBIPBFSzq4xMgnw&s",
              title: "Sportswear 6",
            },
          ];
        } else if (category === "beauty") {
          imagesData = [
            {
              id: 1,
              url: "https://www.bigbasket.com/media/uploads/p/l/40259550_1-swiss-beauty-swiss-beauty-non-trasfer-water-proof-lipstick-roseate-3g.jpg",
              title: "Beauty 1",
            },
            {
              id: 2,
              url: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11171430-2064932940450533.jpg",
              title: "Beauty 2",
            },
            {
              id: 3,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxI0CwrzuNjIzPF0b3Tm8-i6bxq1FPiq7L8g&s",
              title: "Beauty 3",
            },
            {
              id: 4,
              url: "https://www.credihealth.com/media/jgynbglnyu5imp7ob00t0wiyb3od/lakme-9-to-5-primer-matter-chocolate-lip-color-edited.webp",
              title: "Beauty 4",
            },
            {
              id: 5,
              url: "https://sslimages.shoppersstop.com/sys-master/images/h13/hba/29101541294110/SB-C6R001_base_WISTERIA_COOL-MAUVE_alt1.jpg_2000Wx3000H",
              title: "Beauty 5",
            },
            {
              id: 6,
              url: "https://pyxis.nymag.com/v1/imgs/46e/c4b/ff37c4747746a432209c9f89bb993fc189-2----.rsquare.w600.jpg",
              title: "Beauty 6",
            },
          ];
        } else if (category === "kidswear") {
          imagesData = [
            {
              id: 1,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDThu-xEUBQlmgpsMDCyuiTcPNS36N-guCYA&s",
              title: "Kidswear 1",
            },
            {
              id: 2,
              url: "https://venutaloza.com/cdn/shop/products/TSRT-1A_533x.jpg?v=1694255333",
              title: "Kidswear 2",
            },
            {
              id: 3,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKRdy7vbuWmsO87IrIeoN3MW-VWNTOsd3BA&s",
              title: "Kidswear 2",
            },
            {
              id: 4,
              url: "https://wp.missmalini.com/wp-content/uploads/2021/02/WhatsApp-Image-2022-01-06-at-2.50.41-PM.jpeg",
              title: "Kidswear 4",
            },
            {
              id: 5,
              url: "https://www.mumkins.in/cdn/shop/files/collection-kids-babyfrocks_ef24c87a-3af2-4d71-866f-417dd7a74841.jpg?v=1713164805&width=1440",
              title: "Kidswear 5",
            },
            {
              id: 6,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKV6QKBViQC6OkFP_jnZid8VSGpahd07u7w&s",
              title: "Kidswear 6",
            },
          ];
        } else if (category === "kurtas") {
          imagesData = [
            {
              id: 1,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_i6EAVYwd3yMb2yM86mBt-O7wASR8K0UJDA&s",
              title: "Kurta 1",
            },
            {
              id: 2,
              url: "https://www.latestkurtidesigns.com/wp-content/uploads/2023/06/blue-suit-1-2.jpg",
              title: "Kurta 2",
            },
            {
              id: 3,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTch5sybHhvX7TcNQC9HpGyxE_W280he-6YAA&s",
              title: "Kurta 3",
            },
            {
              id: 4,
              url: "https://i.pinimg.com/236x/3b/96/07/3b9607b666d1692ad24b7b9fbb10455c.jpg",
              title: "Kurta 4",
            },
            {
              id: 5,
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbG-n3S8vCglkUoUNejv5e5pnim9EWJH-qA&s",
              title: "Kurta 5",
            },
            {
              id: 6,
              url: "https://www.joshindia.com/cdn/shop/products/photo16708330625855.jpg?v=1670833547&width=416",
              title: "Kurta 6",
            },
          ];
        } else if (category === "lehangas") {
          imagesData = [
            {
              id: 1,
              url: "https://assets.ajio.com/medias/sys_master/root/20240409/qUIe/6614991c05ac7d77bbfe951a/-473Wx593H-467238348-white-MODEL.jpg",
              title: "Lehanga 1",
            },
            {
              id: 2,
              url: "https://newcdn.kalkifashion.com/media/catalog/product/h/o/hot_pink_14_kali_embroidered_bridal_lehenga-sg79739_2_.jpg",
              title: "Lehanga 2",
            },
            {
              id: 3,
              url: "https://tse3.mm.bing.net/th?id=OIP.Id_xQSHF9fwwKm2YlhpJOwHaLG&pid=Api&P=0&h=180",
              title: "Lehanga 3",
            },
            {
              id: 4,
              url: "https://tse2.mm.bing.net/th?id=OIP.8_oQ4me8oWQEFa8kxFoBjwHaJQ&pid=Api&P=0&h=180",
              title: "Lehanga 4",
            },
            {
              id: 5,
              url: "https://tse4.mm.bing.net/th?id=OIP.QEj8RlDaUqkHRvfUwjd4iQHaLH&pid=Api&P=0&h=180",
              title: "Lehanga 5",
            },
            {
              id: 6,
              url: "https://tse4.mm.bing.net/th?id=OIP.4IJU6N2IHXCMmudO8mws9AHaHa&pid=Api&P=0&h=180",
              title: "Lehanga 6",
            },
          ];
        } else if (category === "sarees") {
          imagesData = [
            { id: 1, url: "https://tse1.mm.bing.net/th?id=OIP.ieYaL7lC6N3PFt_EnQLjQgHaJ5&pid=Api&P=0&h=180", title: "Saree 1" },
            { id: 2, url: "https://tse2.explicit.bing.net/th?id=OIP.Oo2hpc981qF0xMc5CNSYJQHaJO&pid=Api&P=0&h=180", title: "Saree 2" },
            { id: 3, url: "https://tse1.mm.bing.net/th?id=OIP.q9BP5Mc5-vPPxsYAxRaV6wHaMN&pid=Api&P=0&h=180", title: "Saree 3" },
            { id: 4, url: "https://tse1.mm.bing.net/th?id=OIP.nIUk4MYdURsWGHVc5VXV4QAAAA&pid=Api&P=0&h=180", title: "Saree 4" },
            { id: 5, url: "https://tse2.mm.bing.net/th?id=OIP.kEWAz4TYehYgZNTopTfvawHaJQ&pid=Api&P=0&h=180g", title: "Saree 5" },
            { id: 6, url: "https://tse3.mm.bing.net/th?id=OIP.oGbQR3WL8XylFSkY4zqEbAHaLG&pid=Api&P=0&h=180", title: "Saree 6" },
        
          ];
        } else if (category === "westernwear") {
          imagesData = [
            {
              id: 1,
              url: "https://tse2.mm.bing.net/th?id=OIP.EdOpDjzaQ46BUIFGGNWtOAHaNK&pid=Api&P=0&h=180",
              title: "Westernwear 1",
            },
            {
              id: 2,
              url: "https://tse1.explicit.bing.net/th?id=OIP.QbrBDY7xulggSD4BWh6vDQHaLZ&pid=Api&P=0&h=180",
              title: "Westernwear 2",
            },
            {
              id: 3,
              url: "https://tse4.mm.bing.net/th?id=OIP.ncrVAtQR5pc54fRYpvgPjgHaGn&pid=Api&P=0&h=180",
              title: "Westernwear 3",
            },
            {
              id: 4,
              url: "https://tse1.mm.bing.net/th?id=OIP.LXGab5WiMBobIJ8mi-5viwHaLw&pid=Api&P=0&h=180",
              title: "Westernwear 4",
            },
            {
              id: 5,
              url: "https://tse3.mm.bing.net/th?id=OIP.tuDWImE_LVujw_Sa2kjV_wAAAA&pid=Api&P=0&h=180",
              title: "Westernwear 5",
            },
            {
              id: 6,
              url: "https://tse2.mm.bing.net/th?id=OIP.JdbJyE7ii73vc6lqQ1BnUQHaHa&pid=Api&P=0&h=180",
              title: "Westernwear 6",
            },
          ];
        } else if (category === "jeans") {
          imagesData = [
            { id: 1, url: "https://tse3.mm.bing.net/th?id=OIP.wL0_bsy_HOIeom2WaWJiKAHaJQ&pid=Api&P=0&h=180", title: "Jeans 1" },
            { id: 2, url: "https://tse2.mm.bing.net/th?id=OIP.ApP59iqgKXQdfMdGXz6HZgAAAA&pid=Api&P=0&h=180", title: "Jeans 2" },
            { id: 3, url: "https://tse3.mm.bing.net/th?id=OIP.vdfA6wtqp0zo4tWlgs_kuwHaL2&pid=Api&P=0&h=180", title: "Jeans 3" },
            { id: 4, url: "https://tse2.mm.bing.net/th?id=OIP.0VzZcL3mqDlIJVD6lDYnrQAAAA&pid=Api&P=0&h=180", title: "Jeans 4" },
            { id: 5, url: "https://tse4.mm.bing.net/th?id=OIP.7q0MA9UfUaVdZi8jpCf3HwHaLH&pid=Api&P=0&h=180", title: "Jeans 5" },
            { id: 6, url: "https://tse2.mm.bing.net/th?id=OIP.l-xDmr-luGsfo0nEYnjJ6wHaGC&pid=Api&P=0&h=180", title: "Jeans 6" },
          ];
        } else {
          imagesData = [
            {
              id: 1,
              url: "https://example.com/default.jpg",
              title: "Default Image",
            },
          ];
        }

        setTrendingImages(imagesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrendingImages();
  }, [category]);

  return (
    <div className="trending">
      <h2>Trending {category}</h2>
      <div className="image-gallery">
        {trendingImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;