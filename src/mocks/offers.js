const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  // AMSTERDAM
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 1,
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
    },
    id: 1,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`],
    host: {
      id: 2,
      name: `Mita`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 2,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/apartment-01.jpg`,
    price: 130,
    rating: 3,
    title: `Hotel Fita`,
    type: `apartment`
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 3,
      name: `Alex`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 3,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/apartment-01.jpg`,
    price: 125,
    rating: 5,
    title: `Hotel Estherea`,
    type: `apartment`
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Towels`, `Cabel TV`],
    host: {
      id: 4,
      name: `Alex`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 4,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 3.8,
    title: `Hotel Amsteram`,
    type: `apartment`
  },

  // BRUSSELS
  {
    city: {
      name: `brussels`,
      location: {
        latitude: 62.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`],
    host: {
      id: 5,
      name: `Mikel`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 5,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 62.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/brussels-01.jpg`,
    price: 80,
    rating: 4,
    title: `Hotel NH Brussels Bloom`,
    type: `apartment`
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 62.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 6,
      name: `Bruss`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 6,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 62.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 50,
    rating: 3,
    title: `Safestay Brussels`,
    type: `apartment`
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Cabel TV`],
    host: {
      id: 7,
      name: `Rob`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 7,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 62.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/brussels-03.jpg`,
    price: 130,
    rating: 4,
    title: `MEININGER Hotel`,
    type: `apartment`
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 62.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 8,
      name: `Casie`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 8,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 61.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: `img/apartment-04.jpg`,
    price: 85,
    rating: 4,
    title: `Best Hote`,
    type: `apartment`
  },

  // COLOGNE
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 72.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 4,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 9,
      name: `Mike`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 9,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 72.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: `img/cologne-01.jpg`,
    price: 79,
    rating: 3,
    title: `Leonardo Royal Hotel`,
    type: `apartment`
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 72.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 10,
      name: `Oustin`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 10,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 72.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/cologne-02.jpg`,
    price: 80,
    rating: 4,
    title: `DJH Jugendherberge`,
    type: `apartment`
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 72.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 11,
      name: `Katy`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 11,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 72.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/cologne-03.jpg`,
    price: 130,
    rating: 3,
    title: `Hardrock Motown Hostel`,
    type: `apartment`
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 72.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 12,
      name: `Veronika`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 12,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 72.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 8,
    previewImage: `img/cologne-04.jpg`,
    price: 85,
    rating: 4,
    title: `Dom Hotel`,
    type: `apartment`
  },

  // PARIS
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 82.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 13,
      name: `Melda`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 13,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 82.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/paris-01.jpg`,
    price: 149,
    rating: 3,
    title: `International Youth Hostel`,
    type: `apartment`
  },
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 82.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Baby seat`, `Cabel TV`],
    host: {
      id: 14,
      name: `Mark`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 14,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 82.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 180,
    rating: 5,
    title: `Pullman Paris Tour Eiffel`,
    type: `apartment`
  },
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 82.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`],
    host: {
      id: 15,
      name: `Kory`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 15,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 82.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/paris-03.jpg`,
    price: 130,
    rating: 4,
    title: `Hotel Eugene en Ville`,
    type: `apartment`
  },
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 82.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 16,
      name: `Danny`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 16,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 82.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/paris-04.jpg`,
    price: 85,
    rating: 4,
    title: `La Manufacture`,
    type: `apartment`
  },

  // HAMBURG
  {
    city: {
      name: `Hamburg`,
      location: {
        latitude: 92.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 17,
      name: `Max`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 17,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 92.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `img/hamburg-01.jpg`,
    price: 99,
    rating: 4,
    title: `Generator Hamburg`,
    type: `apartment`
  },
  {
    city: {
      name: `Hamburg`,
      location: {
        latitude: 92.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 18,
      name: `Encie`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 18,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 92.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/hamburg-02.jpg`,
    price: 105,
    rating: 4,
    title: `MEININGER Hotel`,
    type: `apartment`
  },
  {
    city: {
      name: `Hamburg`,
      location: {
        latitude: 92.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 19,
      name: `Carl`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 19,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 92.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `img/hamburg-03.jpg`,
    price: 70,
    rating: 4,
    title: `Arthotel ANA Hafen City`,
    type: `apartment`
  },
  {
    city: {
      name: `Hamburg`,
      location: {
        latitude: 92.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 20,
      name: `Girardo`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 20,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 92.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/hamburg-04.jpg`,
    price: 85,
    rating: 4,
    title: `Super 8 by Wyndham`,
    type: `apartment`
  },

  // DUSSELDORF
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 42.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 21,
      name: `Bob`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 21,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 42.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `img/dusseldorf-01.jpg`,
    price: 49,
    rating: 2,
    title: `NK Hotel`,
    type: `apartment`
  },
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 42.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 22,
      name: `Helen`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 22,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 42.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/dusseldorf-02.jpg`,
    price: 70,
    rating: 5,
    title: `Hotel Schumacher`,
    type: `apartment`
  },
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 42.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      id: 23,
      name: `Murat`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 23,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 42.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/dusseldorf-03.jpg`,
    price: 80,
    rating: 4,
    title: `Hyatt Regency`,
    type: `apartment`
  },
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 42.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Cabel TV`],
    host: {
      id: 24,
      name: `Memed`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      isPro: true,
    },
    id: 24,
    imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 42.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/dusseldorf-04.jpg`,
    price: 90,
    rating: 4,
    title: `B&B Hotel`,
    type: `apartment`
  }
];
