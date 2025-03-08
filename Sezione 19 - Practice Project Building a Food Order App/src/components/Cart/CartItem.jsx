import { currencyFormatter } from "../../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncreae,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncreae}>+</button>
      </p>
    </li>
  );
}
