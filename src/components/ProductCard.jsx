import './ProductCard.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ProductCard = ({ url, title, price, rating }) => {
  const starRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starRating.push(<FaStar key={i} />);
    } else {
      starRating.push(<FaRegStar key={i} className="empty-star" />);
    }
  }

  return (
    <article className="p-4 flex flex-col justify-center gap-y-4">
       <img src={url} alt="Product Logo" className="cursor-pointer" />
       <p className="cursor-pointer hover:underline text-base">{title}</p>
       <div className='stars'>
          <span className='star-rating'>{starRating}</span>
          <span className='rating'>{Number(rating).toFixed(1)}</span>
       </div>
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