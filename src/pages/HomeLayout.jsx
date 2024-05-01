import { Outlet } from "react-router-dom";

//components
import { Navbar } from "../components";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl">
        <Outlet />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          perspiciatis quasi at harum vero accusamus, animi voluptatum, fuga
          blanditiis vel, iusto provident dolore voluptates repellendus!
          Obcaecati blanditiis inventore quos reprehenderit corporis qui atque
          delectus tenetur aut, cum ea, excepturi quia, amet nobis libero nulla
          nam in esse quisquam veniam? Rem.
        </p>
      </main>
    </>
  );
}

export default HomeLayout;
