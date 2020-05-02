import React from 'react'

import StripeCheckOut from 'react-stripe-checkout';

function stripeCheckout({ price}) {
    const onToken = token => {
        console.log(token);
        alert('Payment has been successful')
    }
    const priceForStripes = price * 75
    const publicKey ='pk_test_cahReNKvg46Mkrj75Mn8l26h00iETVckaO'
    return (
        <StripeCheckOut
            label= "Pay now"
            name="Shoppify"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total price is ${price}`}
            amount={priceForStripes}
            panelLabel='Pat Now'
            token={onToken}
            stripeKey={publicKey}
        >
            
        </StripeCheckOut>
    )
}

export default stripeCheckout;