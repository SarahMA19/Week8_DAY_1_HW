import { useEffect, useState } from "react";
import axios from "axios";
import '../static/Shop.css';



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



    const web_url = "";
    const local_url = "";

    return (

        <div>
            <div className="container">
                <h1>SHOP</h1>
            </div>

            {typeof products === 'object' && !products.then ? products.map((product, index) => {
                return <div className="cream-bg">
                    <div className="container">
                        <div className="row g-5 justify-content-evenly">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-6 col-md-5">
                                            <img src={product.image} className="card-img img-fluid rounded-start" />
                                        </div>
                                        <div className="col-6 col-md-7">
                                            <div className="card-body d-flex flex-column">
                                                <div class="h-100">
                                                    <h5 className="card-title">{product.title}</h5>
                                                    <h6 className="card-text">
                                                        {product.description}
                                                    </h6>
                                                    <h4 className="card-title mb-3"><strong>${product.price}</strong></h4>


                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-dark"><i class="fa-solid fa-cart-shopping me-1"></i>Add to Cart</button>
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
                <h3> We're out finding all the products. . .</h3>
            }


        </div>


    );
}




export default Shop;

//onClick={() => addProduct(product)}
//</div>key={index} style={{width: 18 + 'rem'}}