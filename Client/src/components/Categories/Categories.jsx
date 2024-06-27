import React from 'react'
import "../Categories/Categories.scss"
import { Link } from "react-router-dom"
import { categories } from '../../assets/Categories/categories'

const Categories = () => {
  return (
    <div className='categories'>
        
        {/* Column : 1 */}
        <div className="col">
            {/* 2 Rows */}
            <div className="row">
                <img src={categories.sale} alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            
            <div className="row">
                <img src={categories.women} alt="" />
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
            </div>
        </div>

        {/* Column : 2 */}
        <div className="col">
            {/* 1 Row */}
            <div className="row">
                <img src={categories.newSeasons} alt="" />
                <button>
                    <Link className='link' to="/products/1">New Season</Link>
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
                        <img src={categories.men} alt="" />
                        <button>
                            <Link className='link' to="/products/1">Men</Link>
                        </button>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <img src={categories.accessories} alt="" />
                        <button>
                            <Link className='link' to="/products/1">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <img src={categories.shoes} alt="" />
                <button>
                    <Link className='link' to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Categories