import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,1&f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&display=swap" rel="stylesheet"/>
      </head>
      <body className=' font-generalSans '>
        <Headers/>
        {children}
        
      </body>
    </html>
  );
}
