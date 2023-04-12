import { useEffect, useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20"
        );

        if (!result.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await result.json();
        setProductList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getPrice = useMemo(() => {
    const prices = {};
    productList.forEach(product => {
      const price = (Math.floor(Math.random() * 4800) + 1100) / 100;
      prices[product.id] = price;
    });
    return prices;
  }, [productList]);

  const sortedProductList = useMemo(() => {
    const sortedList = [...productList];
    if (sortOrder === 'asc') {
      sortedList.sort((a, b) => getPrice[a.id] - getPrice[b.id]);
    } else if (sortOrder === 'desc') {
      sortedList.sort((a, b) => getPrice[b.id] - getPrice[a.id]);
    }
    return sortedList;
  }, [productList, getPrice, sortOrder]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-full h-full">
      <div className="w-full line position-text">
        <h2 className ="found font-bold">Found: <span>{productList.length} results</span></h2>
        
        <div className="position-text">
          <select className="p-2 border rounded-md" value >
            <option value="">Colour</option>
          </select>

          <select className="p-2 border rounded-md" value >
            <option value="">Brand</option>
          </select>

          <select className="p-2 border rounded-md" value >
            <option value="">Design Style</option>
          </select>

          <select className="p-2 border rounded-md" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} >
            <option value="">Sort</option>
            <option value="desc">Price: High - Low</option>
            <option value="asc">Price: Low - High</option>
            <option value="">Newest - Oldest</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sortedProductList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            url={product.url}
            price={getPrice[product.id]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;