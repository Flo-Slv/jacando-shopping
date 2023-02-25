import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import useCart from "../utils/zustand/store.js";

const CartItem = ({ el }) => {
  const { id, name, category, count, unitPrice } = el;

  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const handleClickPlus = (id, name, category, unitPrice) => {
    addToCart(id, name, category, unitPrice);
  };

  const handleClickMinus = (id, unitPrice) => removeFromCart(id, unitPrice);

  return (
    <ListItem
      className="flex justify-between pl-4 pr-4 pt-2 pb-2"
      disablePadding
    >
      <div className="pr-6">{`${name}: ${unitPrice} € x ${count}`}</div>

      <div>
        <Button
          variant="outlined"
          size="small"
          color="error"
          className="mr-2"
          onClick={() => handleClickMinus(id, unitPrice)}
        >
          -
        </Button>

        <Button
          variant="outlined"
          size="small"
          onClick={() => handleClickPlus(id, name, category, unitPrice)}
        >
          +
        </Button>
      </div>
    </ListItem>
  );
};

export default CartItem;
