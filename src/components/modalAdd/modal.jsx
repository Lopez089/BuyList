import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

// https://react-bootstrap.github.io/components/modal/

const ModalAdd = () => {
    return (
        <>
            <Modal.Dialog className="shadow-lg rounded ">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Form className="m-5">
                    <Form.Group>
                        <Form.Label>Name Product</Form.Label>
                        <Form.Control type="text" placeholder="ej: Tomate" />
                        {/* <Form.Text className="text-danger">Introduce algun producto</Form.Text> */}
                    </Form.Group>
                    <Button variant="primary" type="Submit">
                        Add product
                    </Button>
                </Form>
            </Modal.Dialog>
        </>
    );
};
export default ModalAdd;
