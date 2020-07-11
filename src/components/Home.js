import React from 'react';

import TaglineComponent from './TaglineComponent';

import ContentAreaComponent from './ContentAreaComponent';

import RatingsAreaComponent from './RatingsAreaComponent';

import FooterComponent from './FooterComponent';

const Home =() =>

{

return(

<>

<div className="tagline">

<TaglineComponent />

</div>

<div className="contentarea">

<ContentAreaComponent />

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

export default Home;
