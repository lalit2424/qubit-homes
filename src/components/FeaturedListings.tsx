import PropertyCarousel from "./PropertyCarousel";

const FeaturedListings = () => {
  return (
    <section className="bgc-f7">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Discover Our Featured Listings</h2>
              <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-3">
              <a className="ud-btn2" href="">
                See All Properties <i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Property Carousel Component */}
        <PropertyCarousel />
      </div>
    </section>
  );
};

export default FeaturedListings;
