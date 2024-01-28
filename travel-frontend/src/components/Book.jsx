import React from 'react'
import booknow from "./booknow.jpg"

const Book = () => {
  return (
      <>
      <section class="book mt-3 p-4" id="book">
    <div class="container">
        <div class="main-text text-center fw-bold">
            <h1><span>B</span>ook</h1>
        </div>
    <div class="row mt-4">
        <div class="col-md-6 py-3 py-md-0">
            <div class="card">
                <img src={booknow} alt=""/>
            </div>
        </div>
        <div class="col-md-6  py-3 py-md-0">
            <form action="#">
                <input type="text" class="form-control" placeholder="where To" required/><br/>
                <input type="text" class="form-control" placeholder="How many" required/><br/>
                <input type="date" class="form-control" placeholder="Arrival" required/><br/>
                <input type="date" class="form-control" placeholder="Departure" required/><br/>
                <textarea class="form-control" rows="5" name="text" placeholder="Enter your name & Details"></textarea>
                <input type="submit" value="Book Now" class="submit fs-6 p-2 mt-2" required/>
            </form>
        </div>
    </div>
    </div>
</section>
      
      </>
  )
}

export default Book