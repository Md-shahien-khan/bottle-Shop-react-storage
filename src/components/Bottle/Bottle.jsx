import PropTypes from 'prop-types';
import './Bottle.css'
// step 12 receive handleAddToCart from step 11 and add parameter next to bottle to get it
const Bottle = ({bottle, handleAddToCart}) => {
    // step 9 destructure the bottle props
    const {name, img, price} = bottle;

    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt=""/>
            <p>Price : $ {price}</p>
            {/* step 13 now add handleAddToCart here in onclick and send the parameter bottle */}
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddToCart : PropTypes.func.isRequired
}
export default Bottle;