import './ProductCard.css';

const ProductCard = ({ url, title, price }) => {

  return (
    <article className="p-4 flex flex-col justify-center gap-y-4">
      <img src={url} alt="Product Logo" className="cursor-pointer" />
      <p className="cursor-pointer hover:underline text-base">{title}</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm">£{price}</p>
        <button className="underline cursor-pointer text-sm">
          Order example
        </button>
      </div>
      <p className="text-base uppercase">Per roll</p>
    </article>
  );
};

export default ProductCard;