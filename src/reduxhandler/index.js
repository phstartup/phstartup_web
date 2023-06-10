import Helper from '@/util/String';
const types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  UPDATE_USER: 'UPDATE_USER',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_ACTIVE_NAV: 'SET_ACTIVE_NAV'
};

export const actions = {
  login: (user, token) => {
    return {type: types.LOGIN, user, token};
  },
  logout() {
    return {type: types.LOGOUT};
  },
  updateUser(user) {
    return {type: types.UPDATE_USER, user};
  },
  setIsLoading(isLoading) {
    return { type: types.SET_IS_LOADING, isLoading };
  },
  setActiveNav(nav){
    return {type: types.SET_ACTIVE_NAV, nav}
  }
};

const initialState = {
  token: null,
  user: null,
  bannerFlag: true,
  isLoading: false,
  nav: '/dashboard'
};

const reducer = (state = initialState, action) => {
  const { type, user, token } = action;
  const { flag, isLoading } = action;
  const { nav } = action;
  switch (type) {
    case types.LOGOUT:
      localStorage.removeItem(`${Helper.app_name}token`);
      return Object.assign({}, initialState);
    case types.LOGIN:
      localStorage.setItem(`${Helper.app_name}token`, token)
      return {...state, user, token};
    case types.UPDATE_USER:
      return {
        ...state,
        user,
      };
    case types.SET_IS_LOADING:
      return {
        ...state,
        isLoading: isLoading
      }
    case types.SET_ACTIVE_NAV:
      return {
        ...state,
        nav: nav
      }
    default:
      return {...state, nav: state.nav};
  }
};
export default reducer;
