import React from 'react';
import NavBar from '../components/essentials/NavBar'

const Home = () => (
  <div className="App">
    <NavBar />
   	  <div className="App-header">
        <section class="Container">
     	  <div className="HomePageLeft">
     	    <article>
      	      Campus<b>Connect</b>
      	    </article>
      	  </div>
      	  <div className="HeaderDivider"></div>
      	  <div className="HomePageRight">
      	    <article>
      	      Connecting students and campuses since 2019
      	    </article>
      	  </div>
      	</section>
      	<br/><br/>
      	A project by Esteban Mundo, Gareth Petterson, and Lawrence Castillo
   	  </div>
  </div>
);

export default Home;