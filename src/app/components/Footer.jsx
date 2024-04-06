import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border  border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-5 flex justify-between">
      <Image
              src="/images/logo_nobg.png"
              alt="hero image"
              width={40}
              height={40}
            />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;