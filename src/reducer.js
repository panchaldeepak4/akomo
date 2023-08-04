// reducer.js

const initialState = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'SET_CONFIRM_PASSWORD':
        return { ...state, confirmPassword: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  