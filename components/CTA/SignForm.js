import Form from "../UI/Form";
import { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import FormControl from "../UI/FormControl";
import SignContext from "@/context/sign-context";
import { BeatLoader } from "react-spinners";

const signUpHandler = async (userInfo) => {
  return await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const signInHandler = async (userInfo) => {
  fetch("/api/signin", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const SignForm = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");

  const signCtx = useContext(SignContext);
  const swithSignMode = (e) => {
    e.preventDefault();
    setIsLoggingIn((prevState) => !prevState);
    signCtx.setEmail("");
    signCtx.setPassword("");
  };

  const getUserInfoHandler = async (e) => {
    e.preventDefault();

    if (isLoggingIn) {
      signInHandler({ email: signCtx.email, password: signCtx.password });
    } else {
      setIsLoading(true);

      try {
        const response = await signUpHandler({
          email: signCtx.email,
          password: signCtx.password,
        });
        setIsLoading(false);
        const data = await response.json();
        console.log(data);
        if (!response.ok)
          throw new Error(data.message || "Something went wrong!");
        setSuccess(data.message);
        setError(false);
        signCtx.setPassword("");
        signCtx.setEmail("");
      } catch (err) {
        setError(err.message);
      }
    }
  };
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  return (
    <Form submitHandler={getUserInfoHandler}>
      <h2 className="text-2xl text-center font-bold uppercase">
        {isLoggingIn ? "Sign In" : "Sign Up"}
      </h2>
      <FormControl name="email" id="email" type="email">
        Email Address
      </FormControl>
      <FormControl name="password" id="password" type="text">
        Password
      </FormControl>
      <div className="flex gap-1 md:gap-4  items-center mt-4">
        <Button secondary onClick={getUserInfoHandler}>
          Sign {isLoggingIn ? "In" : "Up"}
        </Button>
        {isLoading && (
          <div className="flex justify-center flex-wrap-none flex-1">
            <BeatLoader color="white" size={20} margin={10} />
          </div>
        )}
        {!isLoading && <p>{error}</p>}
        {!isLoading && !error && <p>{success}</p>}
      </div>
      <div>
        <span>
          If you {isLoggingIn && "don't"} have an account <br />
          <a onClick={swithSignMode} className="cursor-pointer underline">
            Switch to Sign {isLoggingIn ? "Up" : "In"}
          </a>
        </span>
      </div>
    </Form>
  );
};

export default SignForm;
