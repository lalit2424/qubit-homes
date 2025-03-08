"use client";

import { useEffect, useState } from "react";

const TabbedSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Ensure Bootstrap tabs work in Next.js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min").then(() => {
      console.log("Bootstrap initialized");
    });
  }, []);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <div className="advance-search-tab mt70 mt30-md mx-auto animate-up-3">
      {/* Navigation Tabs */}
      <ul className="nav nav-tabs p-0 m-0" id="searchTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Buy
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Rent
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="myTabContent">
        {["home", "profile"].map((tab) => (
          <div
            key={tab}
            className={`tab-pane fade ${tab === "home" ? "show active" : ""}`}
            id={tab}
            role="tabpanel"
            aria-labelledby={`${tab}-tab`}
          >
            <div className="advance-content-style1">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="advance-search-field position-relative text-start">
                    <form
                      action="#"
                      method="get"
                      className="form-search position-relative"
                      onSubmit={handleSubmit}
                    >
                      <div className="box-search">
                        <span className="icon flaticon-home-1"></span>
                        <input
                          className="form-control bgc-f7 bdrs12"
                          type="text"
                          name="search"
                          placeholder="Enter an address, neighborhood, city, or ZIP code"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <span className="flaticon-settings"></span> Advanced
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="submit"
                    >
                      <span className="flaticon-search"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedSearchForm;
