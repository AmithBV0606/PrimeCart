import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../SingleProduct/Product.scss";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  console.log(data)

  return (
    <div className="product">
      {/* Left Part : Images */}
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>

            <div className="mainImg">
              <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
          </div>

          {/* Right Part : Product Information */}
          <div className="right">
            <h1>{data?.attributes?.title || "Title"}</h1>

            <span className="price">{`$${data?.attributes?.price || "8"}`}</span>

            <p>
              {data?.attributes?.desc}
            </p>

            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>

            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>

              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>

            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type : Shirt</span>
              <span>Tag: Shirt, Women, Top</span>
            </div>

            <hr />

            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;