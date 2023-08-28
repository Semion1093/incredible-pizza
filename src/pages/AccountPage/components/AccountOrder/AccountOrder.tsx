import './AccountOrder.scss';
import { AccountOrderItem } from '../AccountOrderItem/AccountOrderItem';
import arrow from '../../../../assets/Arrow.svg';

export function AccountOrder() {
  return (
    <div className="account-order">
      <div className="description">
        <div className="indicator"></div>
        <div className="order-header">Заказ</div>
        <div className="price-header">Сумма заказа</div>
        <div className="status-header">Статус</div>
        <div className="paid-header">Оплачено</div>

        <div className="number-and-date">
          <div className="number">№130312</div>
          <div className="date">22.06.21</div>
        </div>
        <div className="price">399 ₽</div>
        <div className="status">Обрабатывается</div>
        <div className="paid">Картой</div>

        <button className="arrow">
          <img src={arrow} alt="arr" />
        </button>

        <div className="delimiter"></div>
        <div className="address">ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</div>
      </div>
      <div className="delimiter"></div>
      <div className="order-items">
        <AccountOrderItem />
        <AccountOrderItem />
        <AccountOrderItem />
      </div>
      <div className="delimiter"></div>
      <div className="repeat-order">Повторить заказ</div>
    </div>
  );
}
