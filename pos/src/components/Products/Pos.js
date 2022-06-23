import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-modal';
import { AbsoluteCenter, Center } from '@chakra-ui/react';

export default function Pos() {

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
}

const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
}
    

  return (
  <div>
   <h1>Pos Page</h1>
   <Button onClick={setModalIsOpenToTrue} size="small" color="primary">  checkout  </Button>
   <Modal isOpen={modalIsOpen}  ariaHideApp={false} >
  <button onClick={setModalIsOpenToFalse}> close </button>
                <CheckoutForm/> 
            </Modal>
    </div>
    );
}
