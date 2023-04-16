import { useContext, useEffect, useState } from "react";
import axios from "axios";
import '../static/Shop.css';
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const Single = () => {
useEffect(() => { console.log('Single component has rendered') });
const { id } = useParams()
const getSingleProductData = async () => {
    let response = await axios.get(`http://127.0.0.1:3000/api/product/${id}`);
    return response.status === 200 ? response.data : null
}
const loadProductData = async () => {
    let data = await getSingleProductData();
    console.log(data, typeof data)
    setProduct(data.data)

}
const [product, setProduct] = useState(() => loadProductData());



};

export default Single;