import React , { useState ,useEffect } from 'react';

import FooterComponent from './FooterComponent';

const KygoSoundApp = () =>

{

const [locations,setLocations] = useState([]);

useEffect(()=>{

fetch('https://jsonblob.com/api/e66313e3-b6b5-11ea-9b69-e709167077c2')

.then(response => response.json())

.then(json => {

setLocations([...json])

})

},[]);

return(

<>

<div className="title">

<p>Kygo Sound App</p>

</div>

<div className="container-fluid display">

<div className="row">

<div className="col mt-5" style={{marginLeft:"300px"}}>

<img src="https://www.xbykygo.com/media/gene-cms/k/y/kygo_sound_app_mockup_112_3.png" alt="logo"

className="img-fluid"

style={{width:"255px",height:"460px"}}/>

</div>

<div className="col mt-5 text-white" style={{marginRight:"300px",fontFamily:"Calibri"}}>

<h1>Control the</h1>

<h1>Show</h1>

<p>

Experience a new way of customizing your sound.

Move the dot through four unique cities, with four

unique sound experiences – each with a special meaning

to Kygos journey, so far.

</p>

<div className="row">

<div className="col">

<img src="https://www.xbykygo.com/media/gene-cms/v/e/vector_smart_objects6_2.png" alt="logo"

style={{width:"80px",height:"80px"}}/>

</div>

<div className="col">

<div className="row">

<a href="https://apps.apple.com/us/app/kygo-sound/id1309468229?ign-mpt=uo%3D4">

<img src="https://www.xbykygo.com/media/gene-cms/a/p/app-store-badge1_1.png" alt="logo"

style={{width:"120px",height:"37px"}} /></a>

</div>

<div className="row">

<a href="https://play.google.com/store/apps/details?id=com.kygolife.KygoSound">

<img src="https://www.xbykygo.com/media/gene-cms/p/l/play-store-badge_1.png" alt="logo"

style={{width:"120px",height:"37px",marginTop:"6px"}} /></a>

</div>

</div>

</div>

</div>

</div>

<br /><br />

<div className="row">

{locations.map(location =>

(

<div className="col text-white text-center">

<div>

<img src={location.img1} style={{width:"30%"}} alt="logo"/>

<h6>{location.title1}</h6>

<div className="col-11">

<p style={{marginLeft:"140px",fontFamily:"Calibri"}}>{location.about1}</p></div>

</div>

<br />

<div>

<img src={location.img2} style={{width:"30%"}}  alt="logo"/>

<h6>{location.title2}</h6>

<div className="col-11">

<p style={{marginLeft:"140px",fontFamily:"Calibri"}}>{location.about2}</p></div>

</div>

</div>

)

)}

</div>

</div>

<div className="footer">

<FooterComponent />

</div>

</>

);

}

export default KygoSoundApp;
