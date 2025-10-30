
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Navbar1 from "@/components/Navbar1";
import localFont from 'next/font/local';
import {Urbanist} from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbain',
  weight: ['100','200','300','400','500','600','700','800','900'],
});



const PhantomSans = localFont({
  src: [
    // 1. Thin (बहुत हल्का)
    {
      path: "../phantom-sans-font-family/PhantomSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    // 2. Light
    {
      path: "../phantom-sans-font-family/PhantomSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    // 3. Book (Regular के करीब, पढ़ने के लिए अच्छा)
    {
      path: "../phantom-sans-font-family/PhantomSans-Book.ttf",
      weight: "400",
      style: "normal",
    },
    // 4. Regular (मानक टेक्स्ट)
    {
      path: "../phantom-sans-font-family/PhantomSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // 5. Medium
    {
      path: "../phantom-sans-font-family/PhantomSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    // 6. Semi-Bold
    {
      path: "../phantom-sans-font-family/PhantomSans-Semi-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    // 7. Bold (शीर्षकों के लिए)
    {
      path: "../phantom-sans-font-family/PhantomSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },

    // Italic और BoldItalic वेरिएंट्स
    {
      path: "../phantom-sans-font-family/PhantomSans-BookItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../phantom-sans-font-family/PhantomSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // MidItalic (अगर Mid italic का weight 500 है)
    {
      path: "../phantom-sans-font-family/PhantomSans-MidItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-phantom-sans",
  display: "swap",
});

export const metadata = {
  title: "Ranjeet Verma - Portfolio",
  description: "Welcome to Ranjeet Verma's portfolio website, showcasing projects, skills, and experience in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font sans ${urbanist.className} ${PhantomSans.variable} antialiased`}>
        {/* <Navbar/> */}
        
        {/* <Navbar/> */}
        
      {children}
      {/* <Footer/> */}
      </body>
    </html>
  );
}
