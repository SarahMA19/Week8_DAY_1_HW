
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../context/DataProvider";
import { useDatabase, useUser } from "reactfire";
import { ref, set } from "firebase/database";

const indProduct = () => {
    const { productId } = useParams();
    const [data, setData] = useState();
    const db = useDatabase();
    const { data: user } = useUser();
    const local_url = (`http://127.0.0.1:5000/api/db/${productId}`);
    console.log(local_url);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(local_url);
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    console.log("API call failed with status:", response.status);
                }
            } catch (error) {
                console.error("Failed to fetch data from API:", error);
            }
        };
        fetchData();
    }, [local_url]);
    const loadProductData = async () => {
        try {
            const response = await axios.get(local_url);
            if (response.status === 200) {
                setData(response.data.data);
            } else {
                console.log("API call failed with status:", response.status);
            }
        } catch (error) {
            console.error("Failed to fetch data from API:", error);
        }
    }
    useEffect(() => {loadProductData();}, [local_url]);
    // const [response, fetchData] = useState(() => loadProductData());
    const { cart, setCart } = useContext(DataContext);
    const addProduct = (product) => {
        let copyCart = { ...cart }
        copyCart.size++;
        copyCart.total += product.price;
        copyCart.products[product.id] ?
            copyCart.products[product.id].quantity++
            :
            copyCart.products[product.id] = { data: product, quantity: 1 };
        console.log(copyCart);
        if (user) {
            set(ref(db, 'carts/' + user.uid), copyCart);
        }
        setCart(copyCart)
    }
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Individual Product</h1>
            <h1>Item ID: {data.id}</h1>
            <h2>Title: {data.title}</h2>
            <h3>Price: {data.price}</h3>
            <p>Description: {data.description}</p>
            <p><img src= { data.image}
                      className="card-img-top" /></p>
             <button type="button" className="btn btn-dark" onClick={() => addProduct(data)}><i className="fa-solid fa-cart-shopping me-1"></i>Purchase</button>
        </div>
    );
};

export default indProduct;