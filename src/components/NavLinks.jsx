import { Link } from "react-router-dom";

const links = [
  {
    Id: 1,
    text: "HomeLayout",
    link: "/",
  },
  {
    id: 4,
    text: "About",
    link: "/about",
  },
  {
    id: 2,
    text: "Products",
    link: "/products",
  },
  {
    id: 3,
    text: "Cart",
    link: "/cart",
  },
];

function NavLinks() {
  return (
    <>
      <Link
        className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
        to={"/"}
      >
        Home
      </Link>
      <Link
        className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
        to={"/about"}
      >
        About
      </Link>
      <Link
        className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
        to={"/products"}
      >
        Products
      </Link>
      <Link
        className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
        to={"/cart"}
      >
        Cart
      </Link>
    </>
  );
}

export default NavLinks;
