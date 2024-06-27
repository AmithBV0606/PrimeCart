import React, { useState } from 'react'
import "../Products/Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice ] = useState(100)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>

      {/* Filter Section */}
      <div className="left">

        {/* Filter 1 :  */}
        <div className="filterItem">
          <h2>Product Categories</h2>

          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1}/>
            <label htmlFor="1">Hat</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={2}/>
            <label htmlFor="2">Skirts</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={3}/>
            <label htmlFor="3">Coats</label>
          </div>
        </div>

        {/* Filter 2 :  */}
        <div className="filterItem">
          <h2>Filter by price</h2>

          <div className="inputItem">
            <span>0</span>

            <input 
              type="range" 
              min={0} 
              max={100} 
              onChange={(e)=>setMaxPrice(e.target.value)} 
              defaultValue={10}
            />

            <span>{maxPrice}</span>
          </div>
        </div>

        {/* Filter 3 : */}
        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e) => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={(e) => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>

      </div>

      {/* Image Section */}
      <div className="right">
        <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='catImg'/>

        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>

    </div>
  )
}

export default Products