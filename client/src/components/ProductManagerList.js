import React from 'react'
import axios from 'axios'
const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (personId) => {
        axios.delete('http://localhost:8000/api/product/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.products.map( (product, i) =>
                <div key={i}>
                    <p><b>Title:</b><a href={"/api/products/" + product._id} >{product.title} </a> 
                    <b>Price:</b> {product.price} 
                    <b>Description:</b> {product.description}</p>
                    <p><button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
                    </div>
                
            )}
        </div>
    )

}
export default ProductList