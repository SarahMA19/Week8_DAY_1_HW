import { useContext, useEffect, useState } from "react";
import axios from "axios";
import '../static/Shop.css';
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";



const Shop = () => {

    useEffect(() => { console.log('Shop component has rendered') });
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

    const { cart, setCart } = useContext(DataContext);

    let indProd = false;

    let prodId = null;

    const productId = (product) => {
        console.log(indProd)
        let copyCart = [products[prodId]]
        prodId = product;
        indProd = true;
        console.log(prodId, indProd)
        console.log(products[prodId])
        setProducts(copyCart)

    }

    const addProduct = (product) => {
        let copyCart = { ...cart }

        copyCart.size++;
        copyCart.total += product.price;
        copyCart.products[product.id] ?
            copyCart.products[product.id].quantity++
            :
            copyCart.products[product.id] = { data: product, quantity: 1 };
        console.log(copyCart);

        setCart(copyCart)
    }



    return (

        <div>
            <div className="container">
                <h1>SHOP</h1>
            </div>


            {typeof products === 'object' && !products.then ? products.map((product, index) => {
                return <div className="cream-bg" key={index} >
                    <div className="container shadow-lg p-3 mb-5 bg-cream rounded" >
                        <div className="row g-5 justify-content-evenly">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-6 col-md-5">
                                            <img src={product.image} className="card-img img-fluid rounded-start" />
                                        </div>
                                        <div className="col-6 col-md-7">
                                            <div className="card-body d-flex flex-column">
                                                <div className="h-100">
                                                    <h5 className=""><strong>{product.title}</strong></h5>
                                                    <h6 className="card-text">
                                                        {product.description}
                                                    </h6>
                                                    <h4 className="card-title mb-3"><strong>${Number(product.price).toFixed(2)}</strong></h4>



                                                </div>
                                                <div className="">
                                                    <button type="button" className="btn btn-dark" onClick={() => addProduct(product)}><i className="fa-solid fa-cart-shopping me-1"></i>Purchase</button>
                                                    <button type="button" className="btn btn-dark" onClick={() => productId(product.id)}><i className="fa-solid fa-magnifying-glass me-1"></i>Quicklook</button>
                                                </div>

                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            }) :
            products.length ===1?
            <div className="cream-bg"  >
                <div className="container shadow-lg p-3 mb-5 bg-cream rounded" >
                    <div className="row g-5 justify-content-evenly">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-6 col-md-5">
                                        <img src={products.prodId.image} className="card-img img-fluid rounded-start" />
                                    </div>
                                    <div className="col-6 col-md-7">
                                        <div className="card-body d-flex flex-column">
                                            <div className="h-100">
                                                <h5 className=""><strong>{products.title}</strong></h5>
                                                <h6 className="card-text">
                                                    {products.description}
                                                </h6>
                                                <h4 className="card-title mb-3"><strong>${Number(products.price).toFixed(2)}</strong></h4>



                                            </div>
                                            <div className="">
                                                <button type="button" className="btn btn-dark" onClick={() => addProduct(products)}><i className="fa-solid fa-cart-shopping me-1"></i>Purchase</button>
                                                
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            

            :
            <h3> We're out finding all the products. . .</h3>
        }
            



        </div>


    );
}



export default Shop;

