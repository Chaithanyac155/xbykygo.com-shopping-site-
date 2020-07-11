import React, { useState , useEffect} from 'react';

const RatingsAreaComponent = () =>

{

const [ratings,setRatings] = useState([]);

useEffect(()=>{

fetch('https://jsonblob.com/api/bc72e45c-b5dc-11ea-add9-e19d35c1a016')

.then(response => response.json())

.then(json => {

setRatings([...json])

})

},[]);

return(

<div>

<div className="row mb-5">

{ratings.map((rate) =>

(

<div className="col mt-4 ml-3">

<div className="text-body">

<i style={{fontSize:"17px",color:"green"}} class="fa">&#xf005;</i>

<i style={{fontSize:"17px",color:"green"}} class="fa">&#xf005;</i>

<i style={{fontSize:"17px",color:"green"}} class="fa">&#xf005;</i>

<i style={{fontSize:"17px",color:"green"}} class="fa">&#xf005;</i>

<i style={{fontSize:"17px",color:"green"}} class="fa">&#xf005;</i>

<div className="mt-2" style={{fontSize:"10px"}}>

<div><b>{rate.cmnt1}</b></div>

<div className="mt-2">{rate.cmnt2}</div>

<div className="text-muted mt-3">{rate.name}</div>

</div>

</div>

</div>

)

)}

</div>

</div>

);

}

   

 export default RatingsAreaComponent;
