// Возвращает массив неповторяющихся городов
export const getArrayOfCities = (offers) => {
  const allParameters = [];
  // Создаём массив из всех значений параметра (с повторами)
  offers.map((item) => (allParameters.push(item.city.name)));
  // Превращаем созданный массив в set, тем самым исключая одинаковые элементы массива
  const uniqueParameters = [...new Set(allParameters)];
  // Сделаем первые буквы заглавными
  uniqueParameters.map((param, i) => (uniqueParameters[i] = param));
  return uniqueParameters;
};

// Возвращает отсортированный массив по выбранному параметру
export const sortArrayByField = (field) => {
  return (a, b) => a[field] > b[field] ? -1 : 1;
};
