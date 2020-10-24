const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  // AMSTERDAM
  {
    town: `amsterdam`,
    hotels: [{
      name: `Beautiful & luxurious studio at great location`,
      address: `Spuistraat 288-292, 1012 VX Amsterdam`,
      status: `Premium`,
      src: `img/apartment-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 4,
      price: 120,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    }, {
      name: `Hotel Fita`,
      address: `Jan Luijkenstraat 37, 1071 CL Amsterdam`,
      status: `Usual`,
      src: `img/apartment-02.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 2,
      price: 130,
      starts: 3,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`],
      host: {
        name: `Mita`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    }, {
      name: `Hotel2Stay`,
      address: `Tempelhofstraat 2, 1043 EC Amsterdam`,
      status: `Usual`,
      src: `img/apartment-03.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 4,
      maxCountOfPeople: 4,
      price: 130,
      starts: 3,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Cabel TV`],
      host: {
        name: `Stasy`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    }, {
      name: `Hotel Estherea`,
      address: `Singel 303-309, 1012 WJ Amsterdam`,
      status: `Premium`,
      src: `img/apartment-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 1,
      maxCountOfPeople: 2,
      price: 125,
      starts: 5,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Alex`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    }]
  },
  // BRUSSELS
  {
    town: `brussels`,
    hotels: [{
      name: `Hotel NH Brussels Bloom`,
      address: `Rue Royale 250, 1210 Bruxelles`,
      status: `Premium`,
      src: `img/brussels-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 2,
      maxCountOfPeople: 4,
      price: 80,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`],
      host: {
        name: `Mikel`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Safestay Brussels`,
      address: `Rue Grétry 53, 1000 Bruxelles`,
      status: `Usual`,
      src: `img/brussels-02.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 1,
      maxCountOfPeople: 4,
      price: 50,
      starts: 3,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Bruss`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `MEININGER Hotel`,
      address: `Quai du Hainaut 33, 1080 Molenbeek-Saint-Jean`,
      status: `Premium`,
      src: `img/brussels-03.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 4,
      price: 130,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Cabel TV`],
      host: {
        name: `Rob`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Best Hote`,
      address: `Rue de la Grande Ile 26, 1000 Bruxelles`,
      status: `Premium`,
      src: `img/brussels-04.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 6,
      price: 85,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Casie`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }
    ]
  },
  // COLOGNE
  {
    town: `cologne`,
    hotels: [{
      name: `Leonardo Royal Hotel`,
      address: `Dürener Str. 287, 50935 Köln`,
      status: `Usual`,
      src: `img/cologne-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 4,
      maxCountOfPeople: 6,
      price: 79,
      starts: 3,
      type: `Apartment`,
      inside: [`Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Mike`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `DJH Jugendherberge`,
      address: `Siegesstraße 5, 50679 Köln`,
      status: `Premium`,
      src: `img/cologne-02.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 1,
      maxCountOfPeople: 2,
      price: 80,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Oustin`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Hardrock Motown Hostel`,
      address: `Sporergasse 2A 3. Et. + 4. Et, 50667 Köln`,
      status: `Usual`,
      src: `img/cologne-03.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 2,
      maxCountOfPeople: 2,
      price: 130,
      starts: 3,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Katy`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Dom Hotel`,
      address: `Komödienstraße 54, 50667 Köln`,
      status: `Premium`,
      src: `img/cologne-04.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 8,
      price: 85,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Veronika`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }
    ]
  },
  // PARIS
  {
    town: `paris`,
    hotels: [{
      name: `International Youth Hostel`,
      address: `75011, 10 Rue Trousseau, 75011 Paris`,
      status: `Usual`,
      src: `img/paris-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 2,
      maxCountOfPeople: 4,
      price: 149,
      starts: 3,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Melda`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Pullman Paris Tour Eiffel`,
      address: `18 Avenue De Suffren, 22 Rue Jean Rey Entrée Au, 75015 Paris`,
      status: `Premium`,
      src: `img/paris-02.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 2,
      maxCountOfPeople: 4,
      price: 180,
      starts: 5,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Mark`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Hotel Eugene en Ville`,
      address: `6 Rue Buffault, 75009 Paris`,
      status: `Premium`,
      src: `img/paris-03.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 4,
      price: 130,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`],
      host: {
        name: `Kory`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `La Manufacture`,
      address: `8 Rue Philippe de Champagne, 75013 Paris`,
      status: `Premium`,
      src: `img/paris-04.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 1,
      maxCountOfPeople: 4,
      price: 85,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Danny`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }
    ]
  },
  // HAMBURG
  {
    town: `hamburg`,
    hotels: [{
      name: `Generator Hamburg`,
      address: `Steintorpl. 3, 20099 Hamburg`,
      status: `Premium`,
      src: `img/hamburg-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 2,
      maxCountOfPeople: 5,
      price: 99,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Max`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `MEININGER Hotel`,
      address: `Goetheallee 11, 22765 Hamburg`,
      status: `Premium`,
      src: `img/hamburg-02.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 1,
      maxCountOfPeople: 2,
      price: 105,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Encie`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Arthotel ANA Hafen City`,
      address: `Billwerder Neuer Deich 2 20539, Hamburg,`,
      status: `Premium`,
      src: `img/hamburg-03.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 5,
      price: 70,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Carl`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Super 8 by Wyndham`,
      address: `Wikingerweg 4, 20537 Hamburg`,
      status: `Premium`,
      src: `img/hamburg-04.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 4,
      price: 85,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Girardo`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }
    ]
  },
  // DUSSELDORF
  {
    town: `dusseldorf`,
    hotels: [{
      name: `NK Hotel`,
      address: `Scheurenstraße 4, 40215 Düsseldorf`,
      status: `Usual`,
      src: `img/dusseldorf-01.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 2,
      maxCountOfPeople: 5,
      price: 49,
      starts: 2,
      type: `Apartment`,
      inside: [`Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Bob`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Hotel Schumacher`,
      address: `Worringer Str. 55, 40211 Düsseldorf`,
      status: `Usual`,
      src: `img/dusseldorf-02.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 4,
      price: 70,
      starts: 5,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Helen`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `Hyatt Regency`,
      address: `Speditionstraße 19, 40221 Düsseldorf`,
      status: `Premium`,
      src: `img/dusseldorf-03.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 3,
      maxCountOfPeople: 4,
      price: 80,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
      host: {
        name: `Murat`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }, {
      name: `B&B Hotel`,
      address: `Dusseldorfer Str. 246, 41460 Neuss,`,
      status: `Premium`,
      src: `img/dusseldorf-04.jpg`,
      imgs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      rooms: 1,
      maxCountOfPeople: 2,
      price: 90,
      starts: 4,
      type: `Apartment`,
      inside: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Cabel TV`],
      host: {
        name: `Memed`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels. The building is green and from 18th century.`
      }
    }
    ]
  }
];
