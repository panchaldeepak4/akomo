import React,{useReducer} from 'react';
import reducer from './reducer';

export const useDispatchCustomHook = () => {
    const [state,dispatch] = useReducer(reducer,{
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleEmailChange = (e) => {
        dispatch({ type: 'SET_EMAIL', payload: e.target?.value });
      };
    
      const handlePasswordChange = (e) => {
        dispatch({ type: 'SET_PASSWORD', payload: e.target?.value });
      };
    
      const handleConfirmPasswordChange = (e) => {
        dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: e.target?.value });
      };

      return {
        state,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange
      };
}
