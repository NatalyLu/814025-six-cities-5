import {createSelector} from "reselect";

// Возвращает массив городов
export const getOffersCitiesList = createSelector(() => [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]);
