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
          <select defaultValue="rest1">
            <option value="rest1">Москва, ул. Юных Ленинцев, д.99</option>
            <option value="rest2">Супермаркет «ДА» на ул. Рабочей, д. 38</option>
            <option value="rest3">Гастромаркет «ЕДА» на 7-й ул. Текстильщиков, д. 16</option>
          </select>
        </label>
      )}
    </>
  );
};
