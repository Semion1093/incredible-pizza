import './ProductCard.scss';
import React from 'react';

export const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="https://s3-alpha-sig.figma.com/img/8d5b/07e9/97dc11e91fad454d1fe385302fa96d87?Expires=1693785600&Signature=FutMkL5lnn8DvmrAybgdO39Uvfwfp2ErO6tNmEpAm2o~W7uNkMM~Sr6BKGPWYv7XRTmxtgYdIVQX7mqvl~v9AKjiIaYyWsdge2TLv96Pk2DsRRfUGXnumOnxxFG~XTo-HVNeQCSEABR~cdP-YQaerXEcX9QAbI737SOgCJxRoX38MPBwEdzr~9k9N287OdvC51b34zN8IvXx18hrbG5BSBoX6jDZ1PYyHKcyylJc5Mr~26bsXByrc-G0l2wMtNL3v8xCrNMLu0QOxRvOj9dMJijDS0RJBpUhnup4XnD7JSeNrG8SAL7ph1XKK7TrhznG~m8~bS7qccJvWx8V2DA5Rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <div className="product-card-content">
        <p>Чикен Сладкий Чили</p>
        <span>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc...</span>
        <div className="product-card-action">
          <div className="add-to-cart">Выбрать</div>
          <div className="price">от 399 ₽</div>
        </div>
      </div>
    </div>
  );
};
