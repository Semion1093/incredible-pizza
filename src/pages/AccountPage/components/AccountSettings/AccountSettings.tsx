import './AccountSettings.scss';

export const AccountSettings = () => (
  <div className="account-settings">
    <div className="account-settings-part">
      <div className="header">Личные данные</div>
      <div className="data">
        <div className="header2">Имя*</div>
        <div className="value">Вадим</div>
        <div className="header2">Номер телефона*</div>
        <div className="value">+7 (926) 223-10-11</div>
        <div className="header2">Почта</div>
        <div className="value">mail@gmail.com</div>
        <div className="header2">Дата рождения</div>
        <div className="value">13.02.1996</div>
      </div>
    </div>
    <div className="account-settings-part">
      <div className="header">Пароль</div>
    </div>
    <div className="account-settings-part">
      <div className="header">Подписки</div>
    </div>
  </div>
);
