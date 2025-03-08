import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-style1 pt-5 pb-0 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={150}
                  height={40}
                  className="mb-4"
                />
              </Link>
              <div className="row mb-4 mb-lg-5">
                <div className="col-auto">
                  <div className="contact-info">
                    <p className="info-title">Total Free Customer Care</p>
                    <h6 className="info-phone">
                      <a href="tel:+012305094502">+(0) 123 050 945 02</a>
                    </h6>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="contact-info">
                    <p className="info-title">Need Live Support?</p>
                    <h6 className="info-mail">
                      <a href="mailto:hi@homez.com">hi@homez.com</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="social-widget">
                <h6 className="text-white mb-3">Follow us on social media</h6>
                <div className="social-style1">
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="footer-widget mb-4 mb-lg-5">
              <div className="mb-4 mb-lg-5">
                <h6 className="text-white mb-3">Keep Yourself Up to Date</h6>
                <div className="mailchimp-style1">
                  <input type="email" className="form-control" placeholder="Your Email" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="title text-white mb-3">Popular Search</h6>
                    <div className="link-list">
                      <Link href="#">Apartment for Rent</Link>
                      <Link href="#">Apartment Low to High</Link>
                      <Link href="#">Offices for Buy</Link>
                      <Link href="#">Offices for Rent</Link>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white mb-3">Quick Links</h6>
                    <div className="list-list">
                      <Link href="#">Terms of Use</Link>
                      <Link href="#">Privacy Policy</Link>
                      <Link href="#">Pricing Plans</Link>
                      <Link href="#">Our Services</Link>
                      <Link href="#">Contact Support</Link>
                      <Link href="#">Careers</Link>
                      <Link href="#">FAQs</Link>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white mb-3">Discover</h6>
                    <div className="list-list">
                      <Link href="#">Miami</Link>
                      <Link href="#">Los Angeles</Link>
                      <Link href="#">Chicago</Link>
                      <Link href="#">New York</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-top py-3">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="copyright-text text-gray ff-heading mb-0">© Homez - All rights reserved</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="footer-menu ff-heading text-gray">
              <Link href="#" className="text-gray">Privacy</Link> ·
              <Link href="#" className="text-gray">Terms</Link> ·
              <Link href="#" className="text-gray">Sitemap</Link>
            </p>
          </div>
        </div>
      </div>
      <a className="scrollToHome" href="#">
        <i className="fas fa-angle-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
