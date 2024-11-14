import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import image from "../pizza/pizza-11.png";

function AppLayout() {
  // Universal loading indicator for the entire app: detects d state of the app and render if loading
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-auto">
        <div className="relative" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 z-10 bg-black bg-opacity-35"></div>
          <main className="relative z-20 mx-auto md:max-w-4xl xl:max-w-[90rem]">
            {/* <main className="mx-auto"> */}
            <Outlet />
          </main>
        </div>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
