import { FaStar } from "react-icons/fa";

export default function Rating({ productsId }) {
  const rating = 4.2;
  const count = 25;

  const className = `flex items-center gap-1 text-base mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className="w-3! h-3!" />
      {rating} {countValue}
    </span>
  );
}
