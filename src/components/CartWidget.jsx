import gatolandia_cart from "../assets/gatolandiacart.ico";

export const CartWidget = () => {
    return (
        <div id="cart-widget">
    <img src={gatolandia_cart} alt="Cart" width={40}/>
    <span>7</span>
    </div>
    );
};