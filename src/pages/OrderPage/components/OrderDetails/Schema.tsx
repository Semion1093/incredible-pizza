import * as yup from 'yup';

export const orderSchema = yup
  .object({
    userName: yup
      .string()
      .required('Введите имя')
      .matches(/[А-Яа-я]/, 'Введите корректное имя'),
    mobileNumber: yup
      .string()
      .required('Введите номер телефона')
      .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, 'Введите корректный номер телефона'),
    email: yup
      .string()
      .matches(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        'Введите корректный e-mail',
      ),
    street: yup
      .string()
      .required('Введите улицу')
      .matches(/[А-Яа-я]/, 'Введите корректное название улицы'),
    house: yup
      .string()
      .required('Введите дом')
      .matches(/^[а-яА-Я0-9_.-]*$/, 'Введите корректный номер дома'),
    porch: yup.number(),
    floor: yup.number(),
    apartment: yup.number(),
    porchCode: yup.number(),
    change: yup.number(),
    pickup: yup.string(),
    paymentType: yup.number(),
    changeType: yup.number(),
    deliveryType: yup.number(),
    comment: yup.string().length(1000),
    time: yup.date(),
    date: yup.date(),
  })
  .required();
