// Возвращает массив неповторяющихся городов
export const getArrayOfCities = (offers) => {
  // Создаём массив из всех значений параметра (с повторами)
  const allParameters = offers.map((item) => item.city.name);
  // Превращаем созданный массив в set, тем самым исключая одинаковые элементы массива
  const uniqueParameters = [...new Set(allParameters)];
  uniqueParameters.map((param, i) => (uniqueParameters[i] = param));
  return uniqueParameters;
};

// Возвращает отсортированный массив по выбранному параметру
export const sortArrayByField = (field) => {
  return (a, b) => a[field] > b[field] ? -1 : 1;
};

// Возвращает новый обьект
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
