import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import '../static/Cart.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";


const SingleItem = () => {

const { cart, setCart } = useContext(DataContext);

const clearCart = () => {
    setCart({size:0, total:0, products: {}});
}

const increaseQuantity = id => {
    let copyCart = {...cart};
    copyCart.size++;
    copyCart.total += copyCart.products[id].data.price;
    copyCart.products[id].quantity++;
    setCart(copyCart);
}

const decreaseQuantity = id => {
    let copyCart = {...cart};
    copyCart.size--;
    copyCart.total -= copyCart.products[id].data.price;
    copyCart.products[id].quantity > 1 ?
    copyCart.products[id].quantity-- :
    delete copyCart.products[id];
    setCart(copyCart)
}

const removeItem = id => {
    let copyCart = {...cart};
    copyCart.size -= copyCart.products[id].quantity;
    copyCart.total -= copyCart.products[id].quantity*copyCart.products[id].data.price;
    delete copyCart.products[id];
    setCart(copyCart)
}

return(
    <Card style={{ width: '35rem' }}>
    <Card.Body>
        <Card.Title>Your Cart:</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    {Object.values(cart.products).map((product, index) => {
        console.log(product);
        return <ListGroup.Item key={index}>
            <Card.Img variant="top" src={product.data.image} id="p-img"/>
            <h3>{product.data.title}</h3>
            <h5>{product.data.category}</h5>
            <h6>Price: $ {product.data.price} </h6>
            <Button variant="secondary" id="dec-btn" onClick={() => {decreaseQuantity(product.data.id)}} ><b>-</b></Button>
            <span id="q-span">{product.quantity}</span>
            <Button variant="success" id="inc-btn" onClick={() => {increaseQuantity(product.data.id)}} ><b>+</b></Button>
            <br></br>
            <Button variant="danger" id="r-item" onClick={() => {removeItem(product.data.id)}} ><i className="fa-solid fa-trash-can"></i></Button>
        </ListGroup.Item>
    })}
    
    </ListGroup>
    <Card.Body>
        <Button variant="" id="checkout">Proceed to Checkout</Button>
        <Button variant="danger" onClick={clearCart} >Clear Cart</Button>
    </Card.Body>
</Card>
)
}

     
                                               

export default SingleItem;