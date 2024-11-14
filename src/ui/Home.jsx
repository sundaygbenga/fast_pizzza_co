import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
// import StyledImage from "./StyledImage";
import Button from "./Button";
import image from "../pizza/pizza-6.png";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div
      className="relative mt-0 flex h-[89vh] w-full items-center justify-center rounded-[30px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-2 rounded-[30px] bg-black bg-opacity-60"></div>
      <div className="relative my-10 px-4 text-center sm:my-16">
        <h1 className="mb-10 text-xl font-semibold text-stone-300 md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {/* <StyledImage /> */}

        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
