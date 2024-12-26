import React from 'react';
import LoginView from './loginView';
import { LoginViewModel } from '../components/loginViewModel';

const LoginPage: React.FC = () => {
  const viewModel = LoginViewModel();
  return <LoginView viewModel={viewModel} />;
};

export default LoginPage;
