import React,{useState} from 'react';

const Card = ({item,setcart,cartValue}) => {

const[status,setStatus]=useState(true);
   const updateStatus=()=>{

setStatus((pval)=>pval=false)
setcart((value)=>value+1)

}


const RemoveStatus=()=>{

setStatus((pval)=>pval=true)
setcart((vals=>vals-1))


}





    return (
        <div>
             <div> 
                        <div className="card m-4" style={{ width: '18rem' }}>

                            <img src="https://dummyimage.com/350x250/000/fff.jpg&text=Fruits" className="card-image-top" alt="fruits" />
                            <div className="card-body"><h5>{item.name}</h5>
                              <h5>Price $ {item.price}</h5>
            {status===true? <button className="rounded bg-black text-white" onClick={updateStatus}>Add to cart</button>:
            <button className="rounded bg-black text-white" onClick={RemoveStatus} >Remove from cart</button>}
                               
            
                               
                            </div>
                            
                        </div>


                    </div>
        </div>
    );
};

export default Card;