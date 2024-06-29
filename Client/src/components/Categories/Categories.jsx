import React from 'react'
import "../Categories/Categories.scss"
import { Link } from "react-router-dom"
import CategoriesImg from "../../assets/Categories/CategoriesImg"

const Categories = () => {
  return (
    <div className='categories'>
        
        {/* Column : 1 */}
        <div className="col">
            {/* 2 Rows */}
            <div className="row">
                <img src={CategoriesImg.sale} alt="" />
                <button>
                    <Link className='link' to="/products/7">Sale</Link>
                </button>
            </div>
            
            <div className="row">
                <img src={CategoriesImg.women} alt="" />
                <button>
                    <Link className='link' to="/products/7">Women</Link>
                </button>
            </div>
        </div>

        {/* Column : 2 */}
        <div className="col">
            {/* 1 Row */}
            <div className="row">
                <img src={CategoriesImg.newSeasons} alt="" />
                <button>
                    <Link className='link' to="/products/7">New Season</Link>
                </button>
            </div>
        </div>

        {/* Column : 3 */}
        <div className="col col-l">
            {/* 2 Rows */}
            <div className="row">
                {/* Inside Row 1, there are two columns */}
                <div className="col">
                    <div className="row">
                        <img src={CategoriesImg.men} alt="" />
                        <button>
                            <Link className='link' to="/products/7">Men</Link>
                        </button>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <img src={CategoriesImg.accessories} alt="" />
                        <button>
                            <Link className='link' to="/products/7">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <img src={CategoriesImg.shoes} alt="" />
                <button>
                    <Link className='link' to="/products/7">Shoes</Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Categories