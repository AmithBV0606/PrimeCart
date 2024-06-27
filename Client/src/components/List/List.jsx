import React from 'react'
import "../List/List.scss"
import Card from "../Card/Card"

const List = () => {
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
        },
        {
            id:5,
            img1:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Pants",
            oldPrice: 15,
            price:12
        },
        {
            id:6,
            img1:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"T-shirts",
            oldPrice: 15,
            price:12
        },
    ]

  return (
    <div className='list'>
        {data.map((item) => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List