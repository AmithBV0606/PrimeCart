import React from 'react'
import "../FeaturedProducts/FeaturedProducts.scss"
import Card from "../Card/Card"

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img1:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleev Graphic T-shirt",
            isNew: true,
            oldPrice: 10,
            price:8
        },
        {
            id:2,
            img1:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            isNew: true,
            oldPrice: 20,
            price:18
        },
        {
            id:3,
            img1:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Skirt",
            oldPrice: 15,
            price:12
        },
        {
            id:4,
            img1:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            oldPrice: 15,
            price:12
        }
    ]

  return (
    <div className='featuredProducts'>

        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum quo, dolore fugiat minus autem similique enim obcaecati repudiandae harum? Repellat totam veniam consectetur aliquid, voluptatum ullam molestiae enim a? Reiciendis cumque dignissimos velit aspernatur repellat autem reprehenderit, dolorum nisi necessitatibus eaque magnam eligendi voluptate, eveniet, quasi natus officia? Porro dolore velit ducimus. 
            </p>
        </div>

        <div className="bottom">
            {data.map((item) =>{
                return (
                    <Card item={item} key={item.id}/>
                )
            })}
        </div>

    </div>
  )
}

export default FeaturedProducts