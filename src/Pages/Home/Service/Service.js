import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name,img,description,price} = service;
    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;