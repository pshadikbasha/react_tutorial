import React from "react";
import Image from "../../assests/img/download.jpg";
class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={Image} alt="" />
                <div className="card-body">
                  <h3 className="card-title">Jpg</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto dicta iste earum dolorum corrupti ipsa nulla,
                    voluptate repellat expedita accusamus.
                  </p>
                  <button className="btn btn-dark btn-sm">Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Image} alt="" />
                <div className="card-body">
                  <h3 className="card-title">Jpg</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto dicta iste earum dolorum corrupti ipsa nulla,
                    voluptate repellat expedita accusamus.
                  </p>
                  <button className="btn btn-dark btn-sm">Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Image} alt="" />
                <div className="card-body">
                  <h3 className="card-title">Jpg</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto dicta iste earum dolorum corrupti ipsa nulla,
                    voluptate repellat expedita accusamus.
                  </p>
                  <button className="btn btn-dark btn-sm">Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Image} alt="" />
                <div className="card-body">
                  <h3 className="card-title">Jpg</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto dicta iste earum dolorum corrupti ipsa nulla,
                    voluptate repellat expedita accusamus.
                  </p>
                  <button className="btn btn-dark btn-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
