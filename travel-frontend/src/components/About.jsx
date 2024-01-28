import React from 'react'

const About = () => {
  return (
<section class="about mt-3 p-4" id="about">
    <div class="container">
        <div class="main-text text-center fw-bold">
            <h1>About <span>Us</span></h1>
        </div>
    </div>
<div class="row">
    <div class="col-md-6 py-3 py-md-0">
        <div class="card">
            <img src="https://source.unsplash.com/1600x1000/?map" alt=""/>
        </div>
    </div>
    <div class="col-md-6 py-3 py-md-0">
        <div class="card">
         <h3 class="mt-5 p-3 text-center">How travel agency works?</h3>
         <p class="text-center p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat esse, 
            officia aspernatur quasi, quisquam eveniet itaque eius odit omnis
             quidem ipsa. Minus dolorum a earum? Illum ipsam possimus nesciunt.</p>
            <p class="text-center p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat esse,
                officia aspernatur quasi, quisquam eveniet itaque eius odit omnis
                quidem ipsa. Minus dolorum a earum? Illum ipsam possimus nesciunt.</p>
             <button id="about-btn" class="btn">Read more</button>
        </div>
    </div>
</div>

</section>
  )
}

export default About