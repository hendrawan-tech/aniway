import Head from "next/head";
import Image from "next/image";
import Homepage from "../components/Homepage/Homepage";
import "@fontsource/poppins/latin.css";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}
