"use client";

import { Inter } from "next/font/google";
import GlobalStyle from "./styles/GlobalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Pool Tracker",
    description: "App to track wins and losses in office pool",
    icons: {
        icon: "src/app/favicon-32x32.png",
        type: "image/png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <GlobalStyle />
                {/* <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                /> */}
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
