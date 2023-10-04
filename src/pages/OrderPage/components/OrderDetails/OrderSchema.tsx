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
      .notRequired()
      .matches(/^$|^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/, 'Введите корректный e-mail'),
    street: yup
      .string()
      .required('Введите улицу')
      .matches(/[А-Яа-я]/, 'Введите корректное название улицы'),
    house: yup
      .string()
      .required('Введите дом')
      .matches(/^[а-яА-Я0-9_.-]*$/),
    porch: yup.string(),
    floor: yup.string(),
    apartment: yup.string(),
    porchCode: yup.string(),
    change: yup.string(),
    pickup: yup.string(),
    paymentType: yup.string().matches(/^[0-9]+$/),
    changeType: yup.string().matches(/^[0-9]+$/),
    deliveryType: yup.string().matches(/^[0-9]+$/),
    comment: yup.string().max(1000),
    time: yup.string(),
    date: yup.string(),
    products: yup.array(),
  })
  .required();
