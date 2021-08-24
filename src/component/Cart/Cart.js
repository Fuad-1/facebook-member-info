import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);

    const total = cart.reduce((total, pro)=> total + pro.annualSalary, 0)

    console.log(total)
    // let total = 0;
    // for(let i = 0; i<cart.length;i++){
    //     const profile = cart[i];
    //     total = total + profile.annualSalary;
    // }
    
    
    return (
        <div>
            <h3>Member List</h3>
            <p>Send request: {cart.length}</p>
            <p>Annual Salary: {total}</p>
            
        </div>
    );
};

export default Cart;