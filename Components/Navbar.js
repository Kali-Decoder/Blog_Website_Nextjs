import React from "react";
import { Text,Kbd } from "@chakra-ui/react";
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="container">
      <div className=" d-flex justify-content-between py-4">
        <div className="logo">
          <Text className="text-left"  colorScheme="green" fontWeight="150"  >BLOG-WEBSITE-NEXTJS</Text>
        </div>
        <div className="links">
          <ul className="d-flex">
            <li><Link href="/"><Kbd className="px-3" color="black">Home</Kbd></Link></li>
            <li><Link href="/contact"><Kbd className="px-3" color="black">Contact</Kbd></Link></li>
            <li><Link href="/about"><Kbd className="px-3" color="black">About</Kbd></Link></li>
            <li><Link href="/create"><Kbd className="px-3" color="black">Create-Blog</Kbd></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
