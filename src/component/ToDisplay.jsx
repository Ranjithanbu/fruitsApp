

import React, {useState}from 'react';
import Card from './Card.jsx'


// Recieving product items
const ToDisplay = ({setcart,cartValue,property}) => {
  
    return (
        <div className=" d-flex flex-wrap text-center justify-content-evenly">

{/* mapping the product items */}

            {property.map((item, index) => {

                return (
                    <div> 
                        <Card item={item} setcart={setcart} cartValue={cartValue} />
                    </div>
                )

            })}



        </div>
    );
};

export default ToDisplay;
