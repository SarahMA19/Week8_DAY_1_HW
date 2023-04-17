// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import '../static/Shop.css';
// import { DataContext } from "../context/DataProvider";
// import { Link } from "react-router-dom";











// const Product = () => {

    
   
//     // const [products, setProducts] = useState(() => loadProductData());

//     const {products} = useContext(DataContext);


//     const { cart, setCart } = useContext(DataContext);
    
   

   
//     const addProduct = (product) => {
//         let copyCart = { ...cart }

//         copyCart.size++;
//         copyCart.total += product.price;
//         copyCart.products[product.id] ?
//             copyCart.products[product.id].quantity++
//             :
//             copyCart.products[product.id] = { data: product, quantity: 1 };
//         console.log(copyCart);

//         setCart(copyCart)
//     }



//     return (

//         <div>
//             <div className="container">
                
//             </div>
//             <div className="cream-bg"  >
//                 <div className="container shadow-lg p-3 mb-5 bg-cream rounded" >
//                     <div className="row g-5 justify-content-evenly">
//                         <div className="col-lg-6">
//                             <div className="card">
//                                 <div className="row g-0">
//                                     <div className="col-6 col-md-5">
//                                         <img src={products.id.data.image} className="card-img img-fluid rounded-start" />
//                                     </div>
//                                     <div className="col-6 col-md-7">
//                                         <div className="card-body d-flex flex-column">
//                                             <div className="h-100">
//                                                 <h5 className=""><strong>{products.id.data.title}</strong></h5>
//                                                 <h6 className="card-text">
//                                                     {products.id.data.description}
//                                                 </h6>
//                                                 <h4 className="card-title mb-3"><strong>${Number(products.id.data.price).toFixed(2)}</strong></h4>



//                                             </div>
//                                             <div className="">
//                                                 <button type="button" className="btn btn-dark" onClick={() => addProduct(products)}><i className="fa-solid fa-cart-shopping me-1"></i>Purchase</button>
                                                
//                                             </div>

//                                         </div>
//                                     </div>


//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
            
            
           
        
            



//         </div>


//     );
// }



// export default Product;

