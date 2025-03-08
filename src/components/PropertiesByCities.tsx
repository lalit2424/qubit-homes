"use client"; // Ensure this runs on the client

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamically import OwlCarousel to prevent SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const cityProperties = [
  { id: 1, name: "Los Angeles", properties: 12, image: "/images/g1-1.jpg" },
  { id: 2, name: "Miami", properties: 12, image: "/images/g1-2.jpg" },
  { id: 3, name: "New York", properties: 12, image: "/images/g1-3.jpg" },
  { id: 4, name: "Chicago", properties: 12, image: "/images/g1-4.jpg" },
];

const owlOptions = {
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
    1200: { items: 4 },
  },
};

const PropertiesByCities = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).$ = (window as any).jQuery = $;
    }
  }, []);

  return (
    <section className="pb-40-md pb-90">
      <div className="container">
        <div className="row align-items-center wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Properties by Cities</h2>
              <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-3">
              <a className="ud-btn2" href="page-property-single-v1.html">
                See All Cities <i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
            <OwlCarousel className="property-city-slider dots_none slider-dib-sm slider-4-grid2 vam_nav_style owl-theme owl-carousel" {...owlOptions}>
              {cityProperties.map((city) => (
                <div className="item" key={city.id}>
                  <div className="feature-style1 mb30">
                    <div className="feature-img">
                      <img className="w-100" src={city.image} alt={city.name} />
                    </div>
                    <div className="feature-content">
                      <div className="top-area">
                        <h6 className="title mb-1">{city.name}</h6>
                        <p className="text">{city.properties} Properties</p>
                      </div>
                      <div className="bottom-area">
                        <a className="ud-btn2" href="page-property-single-v1.html">
                          See All Cities <i className="fal fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesByCities;
