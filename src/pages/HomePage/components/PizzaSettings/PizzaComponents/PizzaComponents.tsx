import './PizzaComponents.scss';
import TomatoSauce from './PizzaComponents/assets/TomatoSauce.svg';
export interface Topping {
  id?: number;
  name: string;
  price?: number;
  iconURL: string;
}

export const PizzaComponents = (props: Topping) => {
  return (
    <figure className="component-wrapper">
      <button className="component-frame">
        <img className="icon" src={props.iconURL} alt="" />
      </button>
      <figcaption className="caption">{props.name}</figcaption>
    </figure>
  );
};
