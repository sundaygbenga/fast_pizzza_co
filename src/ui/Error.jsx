import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="justify-center- relative flex min-h-screen flex-col items-center p-40 text-white">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button className="absolute left-40 top-20" onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
