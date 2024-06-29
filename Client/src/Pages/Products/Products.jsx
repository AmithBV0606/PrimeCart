import React, { useState } from "react";
import "../Products/Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

const Products = () => {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(50);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq] = ${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const ischecked = e.target.checked;

    setSelectedSubCats(
      ischecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      {/* Filter Section */}
      <div className="left">
        {/* Filter 1 :  */}
        <div className="filterItem">
          <h2>Product Categories</h2>

          {data?.map((item) => (
            <div className="inputItem" key={item?.id}>
              <input
                type="checkbox"
                name=""
                id={item?.id}
                value={item?.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item?.attributes?.title}</label>
            </div>
          ))}
        </div>

        {/* Filter 2 :  */}
        <div className="filterItem">
          <h2>Filter by price</h2>

          <div className="inputItem">
            <span>0</span>

            <input
              type="range"
              min={0}
              max={50}
              onChange={(e) => setMaxPrice(e.target.value)}
              defaultValue={10}
            />

            <span>{maxPrice}</span>
          </div>
        </div>

        {/* Filter 3 : */}
        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
              defaultChecked
            />
            <label htmlFor="asc">Price : Low to High(Default)</label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price : High to Low</label>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="catImg"
        />

        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;