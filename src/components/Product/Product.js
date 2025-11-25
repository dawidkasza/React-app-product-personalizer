import { useState } from 'react';
import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';

const Product = ({ title, name, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const selected = sizes.find(size => size.name === currentSize);
    return basePrice + (selected?.additionalPrice || 0);
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={name}
        title={title}
        currentColor={currentColor}
      />

      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>{getPrice()}$</span>
      </header>

      <ProductForm
        title={title}
        name={name}
        sizes={sizes}
        colors={colors}
        currentColor={currentColor}
        currentSize={currentSize}
        setCurrentColor={setCurrentColor}
        setCurrentSize={setCurrentSize}
        getPrice={getPrice}
      />
    </article>
  );
};

export default Product;
