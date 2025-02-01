import PropTypes from 'prop-types';
import './BtlCart.css'
const BtlCart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h3>Cart : {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle => <div  key={bottle.id} >
                    <img src={bottle.img}></img>
                    <button onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

BtlCart.proptypes = {
    cart : PropTypes.array.isRequired,
    handleRemoveCart : PropTypes.func.isRequired

}
export default BtlCart;