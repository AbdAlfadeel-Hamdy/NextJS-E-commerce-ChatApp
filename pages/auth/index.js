import SignForm from "@/components/CTA/SignForm";
import { SignContextProvider } from "@/context/sign-context";
import Head from "next/head";
import { Fragment } from "react";

const AuthPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Login | Signup</title>
        <meta name="desciption" content="Verify user to enjoy shopping" />
      </Head>
      <SignContextProvider>
        <SignForm />
      </SignContextProvider>
    </Fragment>
  );
};

export default AuthPage;
