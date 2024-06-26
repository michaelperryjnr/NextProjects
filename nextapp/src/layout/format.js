import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"
import { Chilanka } from "next/font/google"

export default function Format({children}) {
    return(
        <>

        <Head>
            <title>Blog</title>
        </Head>

        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}