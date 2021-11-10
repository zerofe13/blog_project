import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthFrom from '../components/auth/AuthForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthFrom type="register" />
    </AuthTemplate>
  );
};
export default RegisterPage;
