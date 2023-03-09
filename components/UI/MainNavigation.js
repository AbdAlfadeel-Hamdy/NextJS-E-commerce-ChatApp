import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import Button from "./Button";

const MainNavigation = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const openMenuHandler = () => {
    setMenuIsOpened(true);
  };
  const closeMenuHandler = () => {
    setMenuIsOpened(false);
  };
  return (
    <nav className="bg-white h-12 md:h-16 p-2 md:p-8 flex items-center justify-between text-white">
      <h3 className="text-blue-600 md:text-xl font-bold">
        <Link href="/">Gonzalo's Store</Link>
      </h3>
      {!menuIsOpened && (
        <IoMenuSharp className="md:hidden w-8 h-8" onClick={openMenuHandler} />
      )}
      {menuIsOpened && (
        <IoCloseSharp
          className="md:hidden w-8 h-8"
          onClick={closeMenuHandler}
        />
      )}
      <ul
        className={`flex flex-col md:flex-row md:items-center justify-center gap-4 absolute md:relative bg-blue-600  top-12 md:top-0 w-screen md:w-auto z-10 left-0 items-center p-2 md:p-0 ${
          menuIsOpened ? "block" : "hidden"
        } md:flex`}
      >
        <li onClick={setMenuIsOpened.bind(null, false)}>
          <Link href="/">All Products</Link>
        </li>
        <li onClick={setMenuIsOpened.bind(null, false)}>
          <Link href="/profile">My Profile</Link>
        </li>
        <li onClick={setMenuIsOpened.bind(null, false)}>
          <Link href="/welcome">Log Out</Link>
        </li>
      </ul>
      <Button primary href="/auth">
        Login
      </Button>
    </nav>
  );
};

export default MainNavigation;
