import classNames from "classnames";
import Link from "next/link";

const Button = ({ children, primary, secondary, href, ...rest }) => {
  const classes = classNames(
    "py-2 px-6 md:px-8 md:text-lg font-bold duration-300 uppercase w-fit",
    {
      "bg-blue-600 text-white hover:bg-blue-700": primary,
      "bg-white text-blue-600 hover:bg-blue-50": secondary,
    }
  );
  if (href)
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
