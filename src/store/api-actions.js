import {loadOffers, requireAuthorization, redirectToRoute, adapterOffersList} from "./action";
import {AuthorizationStatus, RouteConsts} from "../const";


// getState обеспечивает доступ к хранилищу, в этом действии пока не нужен
export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(RouteConsts.HOTELS)
    // Как только данные загрузятся, выполним соответствующий dispatch
    .then(({data}) => dispatch(loadOffers(data)))
    .then(() => dispatch(adapterOffersList()))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(RouteConsts.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
    // throw err;
    )
);

// Для проверки введенных пользователем данных. Если всё верно, меняем статус AUTH
export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(RouteConsts.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(RouteConsts.FAVORITES)))
);
