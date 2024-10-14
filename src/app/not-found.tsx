import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <>
    <Navbar />
    <main className=" min-h-screen mt-[-3rem] md:mt-[-4rem] flex flex-col justify-center items-center gap-4 bg-background px-5 ">
      <h2 className="text-xl font-medium font-poppins text-center text-accent">
        404
      </h2>
      <h2 className="text-4xl sm:text-5xl mt-[-0.5rem] font-bold font-poppins text-center text-textPrimary">
        Page Not Found
      </h2>
      <p className="mt-4 px-3 font-inter text-center text-lg text-textSecondary">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="relative inline-block px-8 py-4 mt-6 overflow-hidden font-bold rounded-full group cursor-pointer" 
        >
        {/* Background Shape */}
        <span
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-accent opacity-[3%] rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
          ></span>
        {/* Hover Effect */}
        <span
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] bg-accent opacity-100 rotate-45 transform translate-x-[100%]  -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-[-50%]"
        ></span>
        {/* Button Text */}
        <span className="relative text-[1rem] font-bold text-textPrimary transition-colors duration-400 ease-in-out font-poppins lg:text-[0.9rem]">
          Go back to Home
        </span>
        {/* Border */}
        <span className="absolute inset-0 rounded-full border-2 border-accent"></span>
      </Link>
    </main>
      <Footer />
          </>
  );
}
