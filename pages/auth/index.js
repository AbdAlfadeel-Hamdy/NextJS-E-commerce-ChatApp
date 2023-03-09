import SignForm from "@/components/CTA/SignForm";
import { SignContextProvider } from "@/context/sign-context";

const AuthPage = () => {
  return (
    <SignContextProvider>
      <SignForm />
    </SignContextProvider>
  );
};

export default AuthPage;
