import React,{useState} from 'react';
import Header from './component/Header.jsx'
import Body from './component/Body.jsx'
import ToDisplay from './component/ToDisplay.jsx'
 
let App = () => {
// storing  products in property variable

let property=[{id:1,name:"apple",price:100},{id:2,name:"mango",price:100},{id:3,name:"banana",price:100},{id:4,name:"grape",price:100},{id:5,name:"pineapple",price:100},{id:6,name:"Jack",price:100},{id:7,name:"guava",price:100},{id:8,name:"pappaya",price:100},{id:9,name:"watermelon",price:100},{id:10,name:"orange",price:100}];

//updating cart values using state

const[cartValue,setcart]=useState(0);
  return (
    
    <div>
{/* passing cartvalue to the header component */}

      <Header cartValue={cartValue}/>
      

      <Body/>
     
     {/* passing setCart and cart value to the header component */}

     <ToDisplay setcart={setcart} cartValue={cartValue} property={property}   />
     
    </div>
  );
};

export default App;