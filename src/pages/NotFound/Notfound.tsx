import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen justify-center items-center flex flex-col gap-5">
      <p className="text-6xl text-stone-700">404</p>
      <p className="text-2xl text-stone-500">Not Found</p>
      <button
        className="mt-4 border-1 border-stone-600 px-10 py-2 rounded-md bg-stone-800 text-white hover:bg-white hover:text-stone-800 cursor-pointer transition duration-300 ease-in-out"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Back to start page
      </button>
    </div>
  );
}
