import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';

const ProductForm = ({
  title,
  colors,
  sizes,
  currentColor,
  currentSize,
  setCurrentColor,
  setCurrentSize,
  getPrice
}) => {
  const handleSubmit = e => {
    e.preventDefault();
      e.preventDefault();
    console.log({
      name: title,
      finalPrice: getPrice(currentSize),
      selectedSize: currentSize,
      selectedColor: currentColor,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />

      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;
