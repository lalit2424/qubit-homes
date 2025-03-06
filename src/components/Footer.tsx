import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Left Section - Contact Info & Apps */}
          <div>
            <Link href="/">
              <Image src="/images/header-logo.svg" alt="Logo" width={138} height={44} className="mb-6" />
            </Link>

            <div className="mb-6">
              <p className="text-sm">Total Free Customer Care</p>
              <h6 className="text-lg font-bold">
                <Link href="tel:+012305094502">+(0) 123 050 945 02</Link>
              </h6>
            </div>
            <div className="mb-6">
              <p className="text-sm">Need Live Support?</p>
              <h6 className="text-lg font-bold">
                <Link href="mailto:hi@homez.com">hi@homez.com</Link>
              </h6>
            </div>

            {/* App Links */}
            <div className="mb-6">
              <h5 className="text-lg mb-2">Apps</h5>
              <div className="flex space-x-4">
                <Link href="#" target="_blank">
                  <div className="flex items-center space-x-3 p-2 border border-gray-400 rounded-lg">
                    <i className="fab fa-apple text-2xl"></i>
                    <div>
                      <p className="text-xs">Download on the</p>
                      <h6 className="text-sm font-bold">Apple Store</h6>
                    </div>
                  </div>
                </Link>
                <Link href="#" target="_blank">
                  <div className="flex items-center space-x-3 p-2 border border-gray-400 rounded-lg">
                    <i className="fab fa-google-play text-2xl"></i>
                    <div>
                      <p className="text-xs">Get it on</p>
                      <h6 className="text-sm font-bold">Google Play</h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h6 className="mb-4">Follow us on social media</h6>
              <div className="flex space-x-4">
                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                <Link href="#"><i className="fab fa-twitter"></i></Link>
                <Link href="#"><i className="fab fa-instagram"></i></Link>
                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>

          {/* Right Section - Newsletter & Links */}
          <div>
            <div className="mb-6">
              <h6 className="text-lg mb-2">Keep Yourself Up to Date</h6>
              <div className="flex">
                <input type="email" placeholder="Your Email" className="p-2 w-full text-black" />
                <button className="bg-blue-600 p-2 px-4 text-white">Subscribe</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Popular Search */}
              <div>
                <h6 className="mb-3 font-bold">Popular Search</h6>
                <ul className="space-y-2">
                  <li><Link href="#">Apartment for Rent</Link></li>
                  <li><Link href="#">Apartment Low to High</Link></li>
                  <li><Link href="#">Offices for Buy</Link></li>
                  <li><Link href="#">Offices for Rent</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h6 className="mb-3 font-bold">Quick Links</h6>
                <ul className="space-y-2">
                  <li><Link href="#">Terms of Use</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Pricing Plans</Link></li>
                  <li><Link href="#">Our Services</Link></li>
                  <li><Link href="#">Contact Support</Link></li>
                  <li><Link href="#">Careers</Link></li>
                  <li><Link href="#">FAQs</Link></li>
                </ul>
              </div>

              {/* Discover */}
              <div>
                <h6 className="mb-3 font-bold">Discover</h6>
                <ul className="space-y-2">
                  <li><Link href="#">Miami</Link></li>
                  <li><Link href="#">Los Angeles</Link></li>
                  <li><Link href="#">Chicago</Link></li>
                  <li><Link href="#">New York</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-sm">© Homez 2024 <Link href="https://themeforest.net/user/ib-themes" className="text-blue-400">ib-themes</Link> - All rights reserved</p>
        <div className="space-x-3 mt-2">
          <Link href="#" className="text-sm">Privacy</Link>
          <Link href="#" className="text-sm">Terms</Link>
          <Link href="#" className="text-sm">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
