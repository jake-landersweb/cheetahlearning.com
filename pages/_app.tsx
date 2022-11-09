import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/footer/footer";
import Head from "next/head";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <title>Cheetah Learning - PMP Training</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Cheetah Learning focuses on accelerated learning techniques to get you to a new level of your project management career. Enroll in your first course today!"
      />
      <meta name="author" content="me@jakelanders.com" />
      <meta
        name="keywords"
        content="PMP Exam Prep, Project Management Education, PDU Courses, Online PMP® Exam Prep, Classroom PMP® Exam Prep, Pass PMP® Exam"
        id="keywords"
      />
      <meta name="copyright" content="Landersweb, LLC" />
      <meta name="robots" content="follow" />
    </Head>
    <div className="">
      <Header>
        <Component {...pageProps} />
      </Header>
      <div className="">
        <Footer />
      </div>
    </div>
  </>
}

export default MyApp;
