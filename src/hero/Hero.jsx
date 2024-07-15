import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='about'>
      <h1>ABOUT US</h1>
      <div className='section'>
        <div className="div1">
          <div><h1>5000</h1> <br /> happy client</div>
          <div><h1>5000</h1><br /> happy client</div>
          <div><h1>5000</h1><br /> happy client</div>
          <div><h1>5000</h1><br /> happy client</div>
        </div>
        <div className="div2">
          <div><h6>ABOUT ME</h6></div>
          <div><h1>I AM UI/UX DESIGNER <br /> DEVLOPER BASED IN PHILLIPINES</h1></div>
          <div> <p>Lorem ipsum dolimilique obcaecati modi in dolorum autem eligendi ullam fugiat placeat minima quod, quas commodi nisi! Nam!</p> </div>
          <div>
            <pre><p>name :</p>      mudasir</pre>
            <pre><p>date of birth : </p>     12/12/2000</pre>
            <pre><p>address :</p>  karachi/pakistan</pre>
            <pre><p>zipcode :</p>  1000</pre>
            <pre><p>email : </p>   mudasir@gmail.com</pre>
            <pre><p>phone :  </p>  077777</pre>

          </div>
          <div>
            <button>download cv</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero