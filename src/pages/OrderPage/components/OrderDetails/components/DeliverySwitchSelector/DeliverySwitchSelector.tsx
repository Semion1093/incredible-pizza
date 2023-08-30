import './DeliverySwitchSelector.scss';
import React, { useState } from 'react';

export const DeliverySwitchSelector = () => {
  const [selectedOption, setSelectedOption] = useState('delivery');

  //   const options = [
  //     { value: 'delivery', label: 'Доставка' },
  //     { value: 'pickup', label: 'Самовывоз' },
  //   ];

  //   return (
  //     <form className="switch-field">
  //       {options.map((option) => (
  //         <>
  //           <input
  //             key={option.value}
  //             type="radio"
  //             id={option.value}
  //             name="switchToggle"
  //             value={option.value}
  //             checked={selectedOption === option.value}
  //             onChange={(e) => {
  //               setSelectedOption(e.target.value);
  //             }}
  //           />
  //           <label htmlFor="delivery">{option.label}</label>
  //         </>
  //       ))}
  //     </form>
  //   );

  return (
    <form className="switch-field">
      <input
        type="radio"
        id="delivery"
        name="switchToggle"
        value="delivery"
        checked={selectedOption === 'delivery'}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      />
      <label htmlFor="delivery">Доставка</label>

      <input
        type="radio"
        id="pickup"
        name="switchToggle"
        value="pickup"
        checked={selectedOption === 'pickup'}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      />
      <label htmlFor="pickup">Самовывоз</label>
    </form>
  );
};
