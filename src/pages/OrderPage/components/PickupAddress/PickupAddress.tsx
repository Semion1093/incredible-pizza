import './PickupAddress.scss';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { UseFormRegister } from 'react-hook-form';

export interface PickupAddressProps {
  tab: string;
  register: UseFormRegister<OrderFormData>;
}

export const PickupAddress = (props: PickupAddressProps) => {
  return (
    <>
      {props.tab === 'pickup' && (
        <label className="pickup-address-select" {...props.register(`${'pickup'}`)}>
          Ресторан*
          <select defaultValue="Москва, ул. Юных Ленинцев, д.99">
            <option value="Москва, ул. Юных Ленинцев, д.99">Москва, ул. Юных Ленинцев, д.99</option>
            <option value="Супермаркет «ДА» на ул. Рабочей, д. 38">Супермаркет «ДА» на ул. Рабочей, д. 38</option>
            <option value="Гастромаркет «ЕДА» на 7-й ул. Текстильщиков, д. 16">Гастромаркет «ЕДА» на 7-й ул. Текстильщиков, д. 16</option>
          </select>
        </label>
      )}
    </>
  );
};
