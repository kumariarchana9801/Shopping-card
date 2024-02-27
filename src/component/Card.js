import React, { useState } from "react";

function Card({ cart, setCart, data, index }) {
  let [toggle, setToggle] = useState(true);

  const showViewOptions = index === 0 || index === 5;

  return (
    <div className="col mb-5">
      <div className="card h-100 d-flex flex-column">
        {data.sale ? (<>
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        </>):("")}
        <img className="card-img-top" src={data.image} alt="..." />
        <div className="card-body p-4 flex-fill">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            {data.reviews ? (
              <>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
              </>
            ) : (
              ""
            )}

            {data.original ? (
              <div>
                <span className="text-muted text-decoration-line-through">
                  {data.originalPrice}
                </span>
                {data.price}
              </div>
            ) : (
              data.price
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {showViewOptions ? (
              <button className="btn btn-outline-primary mt-auto">
                View Options
              </button>
            ) : toggle ? (
              <button
                className="btn btn-outline-success mt-auto"
                onClick={() => {
                  setCart(cart + 1);
                  setToggle(false);
                }}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-danger mt-auto"
                onClick={() => {
                  setCart(cart - 1);
                  setToggle(true);
                }}
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;