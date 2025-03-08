"use client";
import { useState } from "react";

const AdvanceFeatureModal = () => {
  return (
    <div className="advance-feature-modal">
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">More Filter</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Filters: Price Range, Type, Property ID */}
              <div className="row">
                <div className="col-sm-6">
                  <h6>Type</h6>
                  <select className="form-select">
                    <option>Property</option>
                    <option>Apartments</option>
                    <option>Bungalow</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <h6>Property ID</h6>
                  <input type="text" className="form-control" placeholder="Enter ID" />
                </div>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="row mt-3">
                <div className="col-sm-6">
                  <h6>Bedrooms</h6>
                  <div className="d-flex">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div className="form-check me-2" key={num}>
                        <input type="radio" className="form-check-input" name="bedrooms" id={`bed${num}`} />
                        <label className="form-check-label" htmlFor={`bed${num}`}>{num}+</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>Bathrooms</h6>
                  <div className="d-flex">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div className="form-check me-2" key={num}>
                        <input type="radio" className="form-check-input" name="bathrooms" id={`bath${num}`} />
                        <label className="form-check-label" htmlFor={`bath${num}`}>{num}+</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="row mt-3">
                <h6>Amenities</h6>
                <div className="col-sm-12">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="airConditioning" />
                    <label className="form-check-label" htmlFor="airConditioning">Air Conditioning</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="swimmingPool" />
                    <label className="form-check-label" htmlFor="swimmingPool">Swimming Pool</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Apply Filters</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFeatureModal;
