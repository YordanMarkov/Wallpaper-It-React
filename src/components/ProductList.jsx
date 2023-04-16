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
          "https://tues-store.dev.uxperience.eu/wp-json/wc/v3/products?consumer_key=ck_b9f04fe6e6c9194e1e31580b279baea4d26bc1d6&consumer_secret=cs_0f0a0925f29d0fbd6c55c71f630b50a430bcc039"
        );

        if (!result.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await result.json();
        // Manually set rating for products with id 41 & 40 just to show how it works
        const updatedData = data.map(product => {
          if (product.id === 41) {
            return {
              ...product,
              average_rating: 4.8
            };
          } else if (product.id === 40) {
            return {
              ...product,
              average_rating: 2.9
            };
          } else {
            return product;
          }
        });
        setProductList(updatedData);
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
      const price = product.price;
      prices[product.id] = price;
    });
    return prices;
  }, [productList]);

  const getDateCreated = (dateString) => {
    const date = new Date(dateString);
    return date;
  } 

  const sortedProductList = useMemo(() => {
    const sortedList = [...productList];
    if (sortOrder === 'asc') {
      sortedList.sort((a, b) => getPrice[a.id] - getPrice[b.id]);
    } else if (sortOrder === 'desc') {
      sortedList.sort((a, b) => getPrice[b.id] - getPrice[a.id]);
    } else if (sortOrder === 'newest') {
      sortedList.sort((a, b) => getDateCreated(a.date_created) - getDateCreated(b.date_created));
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
            <option value="newest">Newest - Oldest</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sortedProductList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            url={product.images[0].src}
            price={product.price}
            rating={product.average_rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;