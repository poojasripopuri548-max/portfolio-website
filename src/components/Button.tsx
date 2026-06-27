type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="
      rounded-xl
      bg-indigo-600
      px-6
      py-3
      font-semibold
      transition
      hover:scale-105
      hover:bg-indigo-500
      "
    >
      {children}
    </button>
  );
}