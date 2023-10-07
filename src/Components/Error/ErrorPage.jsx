import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center text-center  items-center mt-10 md:mt-20" id="error-page">
      <div className="flex flex-col">
        <img src="https://i.ibb.co/KqgdcL2/Error.jpg" alt="" />
        <h1 className="font-bold text-5xl mt-5 md:text-7xl">Oops!!!</h1>
        <p className="font-semibold my-5 text-2xl md:text-4xl ">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-2xl md:text-4xl">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}