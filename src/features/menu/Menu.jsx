import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // Recieve loader data
  const menu = useLoaderData();

  return (
    // Divide class for adding space between child elements
    <ul className="divide-y divide-stone-200 px-2 text-stone-300">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// React Router Loader: return any data it wants to provide to the page(sent to the  menu route at App component)
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
