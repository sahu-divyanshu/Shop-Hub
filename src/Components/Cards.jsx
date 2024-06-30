import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Card = () => {
  const products = useSelector((state) => state.allProducts.products);

  if (
    products === undefined ||
    products === null ||
    products.lenght === 0 ||
    products == []
  ) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
      {products.map((value, key) => {
        return (
          <Link to={`/product/${value.id}`} key={key}>
            <div className="p-4 cursor-pointer hover:animate-pulse border-[2px] border-gray-500 rounded-lg">
              <div className="image w-auto h-auto overflow-hidden border-b-2 border-gray-500 rounded-lg">
                <img
                  className="object-contain w-full h-80"
                  src={value.image}
                  alt={value.title}
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 line-clamp-1">
                {value.title}
              </h1>
              <div className="flex justify-between">
                <h2 className="text-lg font-extrabold text-gray-900">
                  $ {value.price}
                </h2>
                <h3 className="text-lg font-semibold text-gray-500">
                  {value.category}
                </h3>
              </div>

            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
