import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Введите имя')
      .matches(/[А-Яа-я]/, 'Введите корректное имя'),
    phone: yup
      .string()
      .required('Введите номер телефона')
      .matches(/[2-9]{1}\d{2}/, 'Введите корректный номер телефона'),
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
    porch: yup.string().matches(/^[0-9]*$/),
    floor: yup.string().matches(/^[0-9]*$/),
    apartment: yup.string().matches(/^[0-9]*$/),
    porchCode: yup.string().matches(/^[0-9]*$/),
    change: yup.string().matches(/^[0-9]*$/),
    pickup: yup.string(),
    paymentType: yup.string(),
    changeType: yup.string(),
    deliveryType: yup.string(),
    comment: yup.string(),
    time: yup.string(),
    date: yup.string(),
  })
  .required();
