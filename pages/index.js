import Head from "next/head";
import Image from "next/image";
import Homepage from "../components/Homepage/Homepage";
import "@fontsource/poppins/latin.css";
import Navbar from "../components/Navbar/Navbar";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <>
        <Navbar />
        <Homepage />
      </>
    </>
  );
}
