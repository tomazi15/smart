import React, { useState } from "react";
import './ImageSlider.scss';
import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';

export function ImageSlider ({ images }) {

    const [image, setImage] = useState(images[0].img_url);

    const handleImage = (activeImg) => {
        setImage(activeImg);
    }

    return (
        <div className="ImageSlider">
                <Row>
                    <Col md={8}>
                    <div className="ImageSlider__active">
                        <img src={image} alt="adidas blue"/>
                    </div>
                    </Col>
                    <Col md={4}>
                    { images.map(img => {
                        return <div key={img.id} className="ImageSlider__side">
                            <img
                                src={img.img_url}
                                alt="adidas blue" 
                                onClick={() => {handleImage(img.img_url)}} />
                        </div>       
                    })}
                    </Col>
                </Row>                                             
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

export default connect(mapStateToProps, null)(ImageSlider);