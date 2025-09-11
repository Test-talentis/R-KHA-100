import React, { memo } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap'

type TPopUp = {
    display: boolean,
    message: string,
    isLaoding: boolean,
    closeModal : () => void,
    confirmation?: () => void
}

const PopUp = memo(({display, message, closeModal, confirmation, isLaoding}: TPopUp) => {
  return (
    <Modal show={display ? display : false} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        {confirmation && (
          <Button disabled={isLaoding} variant="primary" onClick={confirmation}>
            {
              isLaoding ? <Spinner animation='border' size='sm'/>
              : "Confirme"
            }
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
})

export default PopUp