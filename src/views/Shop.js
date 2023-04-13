import {useEffect, useState} from "react";
import axios from "axios";


const Shop = () => {
    
    useEffect(() => { console.log('Shop component has rendered')});
    const getProductData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/products');
        return response.status === 200 ? response.data : null
    }
    const loadProductData = async () => {
        let data = await getProductData();
        console.log(data, typeof data)
        setProducts(data.data)

    }
    const [products, setProducts] = useState(() => loadProductData());
    
    
    
    const web_url = "";
    const local_url = "";

    return (
        <div>
            <h1> SHOP </h1>
        </div>
    );
}

export default Shop;