import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import BtlCart from "../BtlCart/BtlCart";


// step 3 made another component Bottles.jsx
const Bottles = () => {
    // step 4 load the data by using use State
    const [bottles, setBottles] = useState([]);

    // step 14 bottles that we get in cart lets add through state
    const [cart, setCart] = useState([]);

    // step 5 use Effect for loading data
    useEffect(()=>{
        // step 6 Fetching data from json bottles and send the data to setBottles
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);


    // step 21 load data from ls
    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            // step 23
            const savedCart = [];
            // step 22
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }

            // step 24
            setCart(savedCart);
        }
    },[bottles])


    // step 10 we want to add bottle from buy now button
    // step 11 send this handleAddToCart to <Bottle> component as a parameter
    const handleAddToCart = anyBottle =>{
        // step 15 get the cart by using spread operator and add the anybottle with that
        const newCart = [...cart, anyBottle];
        // step 16 set it with setCart
        setCart(newCart);
        // step 20 
        addToLS(anyBottle.id);
    }



    // step 26 remove from cart
    const handleRemoveCart = id =>{
        // visual cart Remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
        // lets send it to cart
    }






    return (
        <div className="container">
            {/* step 7 call the bootles from use state and check */}
            <h3>Bottles Available : {bottles.length}</h3>
            {/* step 17 call cart.length to check everytime u click buy button */}
            {/* step 25 call Cart */}
            <BtlCart cart={cart} handleRemoveCart={handleRemoveCart}></BtlCart>

            <div className="bottle-container">
            {
                // step 8, map each bottles add this to Bottle component
                bottles.map(bottle => 
                <Bottle key={bottle.id}
                handleAddToCart={handleAddToCart} 
                bottle={bottle}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;