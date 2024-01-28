import React from "react";
import booknow from "./booknow.jpg";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const Book = () => {
  const [socket, setSocket] = useState(null);
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    arrivalDate: "",
    departureDate: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // Emit a 'form submission' event to the server with the form data
    socket.emit("form submission", formData);

    // Reset the form data
    setFormData({
      destination: "",
      quantity: "",
      arrivalDate: "",
      departureDate: "",
      details: "",
    });
  };

  useEffect(() => {
    // Listen for 'chat message' events from the server
    const newSocket = io("https://travel-amc4.onrender.com"); // Replace with your server's URL
    setSocket(newSocket);
    newSocket.on("form submitted", function (form) {
      console.log(form);
    });
    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <>
      <section class="book mt-3 p-4" id="book">
        <div class="container">
          <div class="main-text text-center fw-bold">
            <h1>
              <span>B</span>ook
            </h1>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 py-3 py-md-0">
              <div class="card">
                <img src={booknow} alt="" />
              </div>
            </div>
            <div class="col-md-6  py-3 py-md-0">
              <form onSubmit={onHandleSubmit}>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Where To"
                  required
                />
                <br />
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="How many"
                  required
                />
                <br />
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Arrival"
                  required
                />
                <br />
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Departure"
                  required
                />
                <br />
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="Enter your Email & Details"
                ></textarea>
                <button
                  type="submit"
                  value="Book Now"
                  class="submit fs-6 p-2 mt-2"
                >
                  Book now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
