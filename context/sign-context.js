const { createContext, useState } = require("react");

const SignContext = createContext({
  email: "",
  password: "",
  setEmail: (value) => {},
  setPassword: (value) => {},
});

export const SignContextProvider = ({ children }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const setEmailHandler = (value) => {
    setEnteredEmail(value);
  };
  const setPasswordHandler = (value) => {
    setEnteredPassword(value);
  };

  return (
    <SignContext.Provider
      value={{
        email: enteredEmail,
        password: enteredPassword,
        setEmail: setEmailHandler,
        setPassword: setPasswordHandler,
      }}
    >
      {children}
    </SignContext.Provider>
  );
};

export default SignContext;
