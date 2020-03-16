import React, { useState } from "react";
import './ProductCardContainer.scss';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import ImageSlider from '../Partials/ImageSlider/ImageSlider';
import ProductInfo from '../../Components/Partials/ProductInfo/ProductInfo';

function ProductCardContainer () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="ProductCardContainer">
            <Container fluid>
                <Button variant="primary" onClick={handleShow}>
                    View Product
                </Button>

                    <Modal show={show} onHide={handleClose} size="xl">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="ProductCardContainer__items">
                            <Row>
                            <Col md={6}>
                                <ImageSlider />
                            </Col>
                            <Col md={12} lg={6}>    
                                <ProductInfo />
                            </Col>
                            </Row>
                        </div>

                    </Modal.Body>
                    </Modal>
            </Container>

        </div>
    );
}

export default ProductCardContainer;