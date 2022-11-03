import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams,Route, Navigate,useNavigate,Routes,Link} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [title,setTitle] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    const deleteProduct = (e) => {
        
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(id)
                navigate('/products')
            })
            .catch(err => console.error(err))
            //.then(navigate('/products'))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
    },[]);

    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.error(err))
        .then(navigate('/products'))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" name="price" value={price} onChange={(e) => { setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value)}} />
                </p>
                <input type="submit" />
                
            </form>
            <p><button onClick={(e)=>{deleteProduct({id})}}>Delete</button></p>
            <a href="/products">Go Back</a>
        </div>
    )
}
export default Update;