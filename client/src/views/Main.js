import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductManager from '../components/ProductManagerForm';
import ProductList from '../components/ProductManagerList';
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div>
           <ProductManager/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;