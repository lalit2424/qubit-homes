"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginSignupModal from "./LoginSignupModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header-nav bg-white shadow-md">
        <nav className="relative">
           <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="d-flex align-items-center justify-content-between">
                            <div class="logos mr40 mr10-lg">
                            <Link href="/">
                                <Image src="/images/header-logo.svg" alt="Header Logo" width={138} height={44} />
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex align-items-center">
                        <Link href="/add-property" className="ud-btn btn-dark">
                            Add Property <i className="fal fa-arrow-right-long ml-2"></i>
                        </Link>
                        <Link href="#" className="login-info d-flex align-items-center mx-2 mx-xl-4" onClick={() => setIsModalOpen(true)}>
                            <i className="far fa-user-circle text-lg"></i>
                            <span className="hidden xl:inline">Login / Register</span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
      </header>
      <LoginSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
