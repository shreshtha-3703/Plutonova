import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });


export const metadata: Metadata = {
  title: "PLUTONOVA",
  description: "PlutoNova is a dynamic agency dedicated to providing top-tier IT, motion, and design services. We specialize in curating the best freelance talent to deliver exceptional quality at competitive prices. Whether you're looking for innovative IT solutions, captivating motion graphics, or cutting-edge design work, PlutoNova ensures that every project is handled with precision and creativity. Our mission is to empower businesses by connecting them with expert freelancers who bring their vision to life efficiently and affordably.",
  icons: {
    icon: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/images/fav/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/images/fav/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/images/fav/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/images/fav/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", url: "/images/fav/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", url: "/images/fav/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", url: "/images/fav/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/images/fav/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/images/fav/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/images/fav/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/images/fav/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/images/fav/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/images/fav/favicon-16x16.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/fav/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/fav/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/fav/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/fav/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/fav/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/fav/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/fav/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/fav/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/fav/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/fav/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/fav/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/fav/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </head>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
