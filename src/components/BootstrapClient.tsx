"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapClient = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // This component doesn't render anything, just loads Bootstrap
};

export default BootstrapClient;
