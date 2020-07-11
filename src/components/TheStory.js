import React from 'react';

// import ReactPlayer from "react-player";

import FooterComponent from './FooterComponent';

import RatingsAreaComponent from './RatingsAreaComponent';

const TheStory =() =>

{

return(

<>

<div className="container-fluid" style={{background:"black",borderTop:"2px solid white"}}>

<div class="row mb-5">

<div class="col-6 ml-5 mt-5">

<h3 style={{color:"white"}}>OUR STORY</h3>

<div className="col-10 ml-5 mt-4">

<p style={{color:"white",fontstyle:"oblique",fontSize:"14px",fontFamily:"sans-serif"}}>

Kygo Life was created out of Kygo’s enthusiasm to offer superior

music experiences to everyone, regardless of people’s music taste.

Therefore, our products are designed to produce exceptional sound

and to fit each person perfectly.

</p>

<p style={{color:"white",fontstyle:"oblique",fontSize:"14px",fontFamily:"sans-serif"}}>

“Kygo Life unites my love of music with modern Scandinavian

design. The aim is to develop top-quality audio equipment that

sounds amazing and looks great. Future classics that capture the

euphoric feeling of my music.

</p>

<p style={{color:"white",fontstyle:"oblique",fontSize:"14px",fontFamily:"sans-serif"}}>

Like my approach to everything, Kygo Life is driven to continually

improve. So, as each product evolves it embraces the latest

technology and focuses on perfecting the details until I’m

absolutely happy the end result is the best it can be.

</p>

<p>

<p style={{color:"white",fontstyle:"oblique",fontSize:"14px",fontFamily:"sans-serif"}}>

I hope that by creating new and inspiring audio experiences,

you’ll enjoy listening to your favourite tunes even more. ”

</p>

</p>

</div>

</div>

<div class="col mt-5">

<img alt="logo"

src="https://www.xbykygo.com/media/gene-cms/s/t/story-kygo-banner-1_7.jpg"

style={{ width: "80%" }}

/>

</div>

</div>

{/* <div>

<ReactPlayer url="https://youtu.be/v4wY2kUjBeA" />

</div> */}

<div className="row mb-5">

<div className="col-6 ml-5">

<img alt="logo" src="https://www.xbykygo.com/media/gene-cms/s/t/story-banner-2_6.jpg" style={{ width: "80%" }}/>

</div>

<div className="col">

<h3 style={{color:"white",fontstyle:"oblique"}}>EXPERT</h3>

<h3 style={{color:"white",fontstyle:"oblique"}}>AUDIO TEAM</h3>

<div className="col-10"> <p style={{color:"white",fontstyle:"oblique",fontSize:"14px",fontFamily:"sans-serif"}}>

We also have a dedicated team of audio and Bluetooth specialists

who work closely with Kygo to ensure we have a dynamic and

consistent sound image across our entire product range. Peter

Larsen is our lead audio engineer and has over 40 years’

experience building loudspeakers. He helps us solve the many

challenges faced when manufacturing and designing first-class

audio equipment.

</p></div>

</div>

</div>

<div className="row">

<div className="col ml-5 mt-5">

<h4 style={{color:"white",fontstyle:"oblique"}}>WE ARE ORWEGIAN</h4>

<div className="ml-5 col-9 mt-4"> <p style={{color:"white",fontstyle:"oblique",fontSize:"14px",fontFamily:"sans-serif"}}>

Kygo is proud to be Norwegian and Kygo Life reflects that. All our

products embody the simplicity and functionality of Scandinavian

design and are developed in Scandinavia by our awesome design

team. Together with our manufacturers in China, they do everything

they can to find the right materials and forms to fuse stylish

design with lasting comfort.{" "}

</p>

</div>

</div>

<div className="col">

<img alt="logo" src="https://www.xbykygo.com/media/gene-cms/s/t/story-banner_3_6.jpg" style={{ width: "80%",height:"95%" }} />

</div>

</div>

</div>

<div className="ratingsarea">

<RatingsAreaComponent />

</div>

<div className="footer">

<FooterComponent />

</div>

</>

)

}

export default TheStory;
