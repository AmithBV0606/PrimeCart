import React from 'react'
import "../FeaturedProducts/FeaturedProducts.scss"
import Card from "../Card/Card"
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {    
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className='featuredProducts'>

        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum quo, dolore fugiat minus autem similique enim obcaecati repudiandae harum? Repellat totam veniam consectetur aliquid, voluptatum ullam molestiae enim a? Reiciendis cumque dignissimos velit aspernatur repellat autem reprehenderit, dolorum nisi necessitatibus eaque magnam eligendi voluptate, eveniet, quasi natus officia? Porro dolore velit ducimus. 
            </p>
        </div>

        <div className="bottom">
            {error 
                ? "Something went wrong!" 
                : loading
                ? "loading..."
                : data.map((item) => <Card item={item} key={item.id}/>)
            }
        </div>

    </div>
  )
}

export default FeaturedProducts