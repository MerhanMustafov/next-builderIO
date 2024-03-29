import type { Metadata } from "next";
import Navigation from "../components/Navigation/Navigation";
import NavServer from "@/components/NavigationV2/NavServer";
import "./globals.css";
import styles from "./layout.module.css";
import Footer from "@/components/Footer/Footer";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.root}>
          <header className={styles.header}>
            {/* <Navigation /> */}
            <NavServer />
          </header>
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
