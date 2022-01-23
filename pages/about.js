import Head from "next/head"

export default function About() {
    return (
        <>
        <Head>
            <title>About Page</title>
            <link rel="stylesheet" href="/vercel.svg" />
        </Head>

        <h1 className="redColor bigText">About</h1>
         
        <style jsx>{`
        .greenColor{

            color:green
        }
        .redColor{
            color:red
        }
        .bigText {
            font-size:156px
        }
        `}</style> 
        </>
    )
}
