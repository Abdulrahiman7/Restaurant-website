import React from 'react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import "./Cart.css"

const Cart = (props) => {
    
  return (
    <Modal>
        <p>sushi</p>
        <div className='total-price'>
            <h2>Totol Price</h2>
            <h2>35.62</h2>
        </div>
        <div className="actions">
            <Button onClick={props.closeModal}>close</Button>
            <Button>order</Button>
        </div>

    </Modal>
  )
}

export default Cart