import './PizzaComponents.scss';
import { Topping, ToppingIcon } from '../ToppingIcon';
export interface ToppingProps {
  id?: number;
  name: string;
  price?: number;
  iconType: Topping;
}

export const PizzaComponents = (props: ToppingProps) => {
  return (
    <>
      <label className="component-checkbox-wrapper">
        <input type="checkbox" className="component-checkbox-input" />
        <span className="component-checkbox-tile">
          <ToppingIcon icon={props.iconType} />
        </span>
        <span className="component-checkbox-label">
          {props.name}
          {props.price === undefined ? <></> : <span className="component-checkbox-price">{props.price + ' ₽'}</span>}
        </span>
      </label>
    </>
  );
};
