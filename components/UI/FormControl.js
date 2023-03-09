import SignContext from "@/context/sign-context";
import { useContext } from "react";

const FormControl = ({ children, name, id, type }) => {
  const signCtx = useContext(SignContext);
  let enteredValue = "";
  let changeValueHandler;
  if (name === "email") {
    enteredValue = signCtx.email;
    changeValueHandler = signCtx.setEmail;
  }
  if (name === "password") {
    enteredValue = signCtx.password;
    changeValueHandler = signCtx.setPassword;
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xl">
        {children}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className="p-2 outline-none caret-blue-600 text-blue-600 text-lg rounded-sm"
        value={enteredValue}
        onChange={(e) => changeValueHandler(e.target.value)}
      />
    </div>
  );
};

export default FormControl;
