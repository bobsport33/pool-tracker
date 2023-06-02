import { Inter } from "next/font/google";

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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
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
