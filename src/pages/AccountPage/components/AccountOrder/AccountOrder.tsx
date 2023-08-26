import './AccountOrder.scss';

export function AccountOrder() {
  return (
    <div className="box">
      <div className="description">
        <div className="number-and-date">
          <div className="header">Заказ</div>
          <div className="number">№130312</div>
          <div className="date">22.06.21</div>
        </div>
        <div className="price">
          <div className="header">Сумма заказа</div>
          <div className="price_">399 ₽</div>
        </div>
        <div className="status">
          <div className="header">Статус</div>
          <div className="status_">Обрабатывается</div>
        </div>
        <div className="paid-by">
          <div className="header">Оплачено</div>
          <div className="paid-by_">Картой</div>
        </div>
        <div className="triangle"></div>
      </div>
    </div>
  );
}
