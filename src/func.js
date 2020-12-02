// Возвращает массив неповторяющихся городов
export const getArrayOfCities = (offers) => {
  // Создаём массив из всех значений параметра (с повторами)
  const allParameters = offers.map((item) => item.city.name);
  // Превращаем созданный массив в set, тем самым исключая одинаковые элементы массива
  const uniqueParameters = [...new Set(allParameters)];
  uniqueParameters.map((param, i) => (uniqueParameters[i] = param));
  return uniqueParameters;
};

// Возвращает отсортированный массив по выбранному параметру по возрастанию
export const sortArrayByFieldLowToHigh = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1;
};

// Возвращает отсортированный массив по выбранному параметру по убыванию
export const sortArrayByFieldHighToLow = (field) => {
  return (a, b) => a[field] > b[field] ? -1 : 1;
};

// Возвращает новый обьект
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

// Преобразуем именование свойств, пришедших с сервера
export const adapterOffers = (originalArray) => {
  const finalArray = originalArray.map((element) => {
    return {
      city: {
        name: element.city.name,
        location: {
          latitude: element.city.location.latitude,
          longitude: element.city.location.longitude,
          zoom: element.city.location.zoom,
        },
      },
      previewImage: element.preview_image,
      images: element.images,
      title: element.title,
      isFavorite: element.is_favorite,
      isPremium: element.is_premium,
      rating: element.rating,
      type: element.type,
      bedrooms: element.bedrooms,
      maxAdults: element.max_adults,
      price: element.price,
      inside: element.goods,
      host: {
        id: element.host.id,
        name: element.host.name,
        isPro: element.host.is_pro,
        avatar: element.host.avatar_url,
      },
      description: element.description,
      location: {
        latitude: element.location.latitude,
        longitude: element.location.longitude,
        zoom: element.location.zoom,
      },
      id: element.id
    };
  });
  return finalArray;
};
