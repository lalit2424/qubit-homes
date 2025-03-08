"use client";
import TabbedSearchForm from "@/components/TabbedSearchForm";
import React, { useEffect, useState } from "react";

const HomeBanner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load Bootstrap JavaScript
    import("bootstrap/dist/js/bootstrap.bundle.min").then(() => {
      console.log("Bootstrap initialized");
    });

    // Initialize Bootstrap Tabs manually
    if (typeof window !== "undefined") {
      const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
      tabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
          event.preventDefault();
          const target = tab.getAttribute("data-bs-target");
          if (target) {
            const tabElement = document.querySelector(target);
            if (tabElement) {
              new window.bootstrap.Tab(tabElement).show();
            }
          }
        });
      });
    }

    // Initialize selectpicker
    if (typeof window !== "undefined" && window.$) {
      $(".selectpicker").selectpicker();
    }
  }, []);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement actual search logic here
  };

  return (
    <section className="home-banner-style1 p-0">
      <div className="home-style1">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <div className="inner-banner-style1 text-center">
                <h6 className="hero-sub-title animate-up-1">THE BEST WAY TO</h6>
                <h2 className="hero-title animate-up-2">Find or List Your Ideal Room</h2>
                <p className="hero-text fz15 animate-up-3">
                  Rent or list rooms effortlessly. Connect with genuine owners & tenants now!
                </p>
                <TabbedSearchForm />  
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <a href="#explore-property">
          <div className="mouse_scroll animate-up-4">
            <img src="/images/home-scroll.png" alt="Scroll" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HomeBanner;
