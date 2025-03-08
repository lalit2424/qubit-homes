"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginSignupModal from "./LoginSignupModal";
import AdvanceFeatureModal from "@/components/AdvanceFeatureModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header-nav nav-homepage-style stricky main-menu">
        <nav className="posr">
           <div className="container posr menu_bdrt1">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logos mr40 mr10-lg">
                            <Link href="/">
                                <Image src="/images/logo.svg" alt="Header Logo" width={200} height={36} />
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex align-items-center">
                        <Link href="#" className="login-info d-flex align-items-center" onClick={() => setIsModalOpen(true)}>
                            <i className="far fa-user-circle fz16 me-2"></i>
                            <span className="d-none d-xl-block">Login / Register</span>
                        </Link>
                        <Link href="/add-property" className="ud-btn add-property menu-btn mx-2 mx-xl-4">
                            Post Property <i className="fal fa-arrow-right-long ml-2"></i>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
      </header>
      <LoginSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AdvanceFeatureModal />
    </>
  );
};

export default Header;
