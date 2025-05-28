import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const oxanium = Oxanium({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kentaros Portfolio",
	description: "Kentaros portfolio website built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${oxanium.className} ${oxanium.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
