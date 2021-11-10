import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthFrom from '../components/auth/AuthForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthFrom type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
