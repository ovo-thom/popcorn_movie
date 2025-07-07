import { MdSkipNext } from "react-icons/md";

export default function SeeMoreButton({
  variant = "red",
  onClick,
  children = "Voir plus",
}) {
  const variants = {
    red: "bg-red1 hover:bg-inherit border border-transparent hover:border hover:border-red1",
    blue: "bg-blue1 hover:bg-inherit border border-transparent hover:border hover:border-blue1",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2  ${variants[variant]} text-white rounded duration-200`}
    >
      {children} <MdSkipNext className="text-xl" />
    </button>
  );
}
