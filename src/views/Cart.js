import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import '../static/Cart.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDatabase, useUser } from "reactfire";
import { set, ref } from  "firebase/database";


const Cart = () => {


const db = useDatabase();
const { data:user } = useUser();

const { cart, setCart } = useContext(DataContext);

const clearCart = () => {
    if (user){
        set(ref(db, 'carts/' + user.uid), null);
    }

    setCart({size:0, total:0, products: {}});
}

const increaseQuantity = id => {
    let copyCart = {...cart};
    copyCart.size++;
    copyCart.total += copyCart.products[id].data.price;
    copyCart.products[id].quantity++;
    if (user){
        set(ref(db, 'carts/' + user.uid), copyCart);
    }
    setCart(copyCart);
}

const decreaseQuantity = id => {
    let copyCart = {...cart};
    copyCart.size--;
    copyCart.total -= copyCart.products[id].data.price;
    copyCart.products[id].quantity > 1 ?
    copyCart.products[id].quantity-- :
    delete copyCart.products[id];
    if (user){
        set(ref(db, 'carts/' + user.uid), copyCart);
    }
    setCart(copyCart)
}

const removeItem = id => {
    let copyCart = {...cart};
    copyCart.size -= copyCart.products[id].quantity;
    copyCart.total -= copyCart.products[id].quantity*copyCart.products[id].data.price;
    delete copyCart.products[id];
    if (user){
        set(ref(db, 'carts/' + user.uid), copyCart);
    }
    setCart(copyCart)
}

return(
    <Card className="container d-flex "style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Shopping Cart:</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    {Object.values(cart.products).map((product, index) => {
        console.log(product);
        return <ListGroup.Item key={index}>
            <Card.Img className="img-fluid rounded-start"variant="top" src={product.data.image} id="p-img"/>
            <h5>{product.data.title}</h5>
            <h4><strong>Price: $ {Number(product.data.price).toFixed(2)}</strong> </h4>
            <Button variant="secondary" id="dec-btn" onClick={() => {decreaseQuantity(product.data.id)}} ><b>-</b></Button>
            <span id="q-span">{product.quantity}</span>
            <Button variant="success" id="inc-btn" onClick={() => {increaseQuantity(product.data.id)}} ><b>+</b></Button>
            <br></br>
            <Button variant="danger" id="r-item" onClick={() => {removeItem(product.data.id)}} ><i className="fa-solid fa-trash-can"></i></Button>
        </ListGroup.Item>
    })}
    
    </ListGroup>
    <Card.Body>
        <Button  id="checkout">Proceed to Checkout</Button>
        <Button  id="clearcart" onClick={clearCart} >Clear Cart</Button>
    </Card.Body>
</Card>
)
}

     
                                               

export default Cart;

        






