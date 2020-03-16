import React from "react";
import './ProductInfo.scss';
import { Row, Col, Button } from 'react-bootstrap';

function ProductInfo () {

    return (
        <div className="ProductInfo">
                <Row>
                    <Col>
                        <h4>Gym King Core Origin T-Shirt</h4>
                        <span>£ 30</span>
                        <Button variant="dark" size="lg" block>Buy Now</Button>
                        <div className="ProductInfo__desc">
                        <h5>Description</h5>
                        <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}

export default ProductInfo;