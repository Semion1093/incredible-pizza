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
    <>
      <figure className="component-wrapper">
        <div className="component-frame">
          <input type="checkbox" />
          <img className="icon" src={props.iconURL} alt="" />
        </div>
        <figcaption className="caption">{props.name}</figcaption>
      </figure>
    </>
  );
};
