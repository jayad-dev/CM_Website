import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { Providers } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeader, getFooter } from "@/services/fetcher";

const lexend = Lexend( {
  variable: "--font-lexend",
  subsets: ["latin"],
} );

export const metadata: Metadata = {
  title: "CMUK - Your Spiritual Journey",
  description: "Empowering lives through spiritual growth, community service, and meaningful connections",
};

export default async function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  const headerData = await getHeader();
  const footerData = await getFooter();


  return (
    <html lang="en">
      <body className={ lexend.variable }>
        <Providers>
          <div style={ { display: "flex", flexDirection: "column", minHeight: "100vh" } }>
            <Header data={ headerData } />
            <main style={ { flex: 1, marginTop: "74px" } }>{ children }</main>
            <Footer data={ footerData } />
          </div>
        </Providers>
      </body>
    </html>
  );
}
