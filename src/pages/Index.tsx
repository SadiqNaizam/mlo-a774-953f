import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/LoginPage/LoginForm';

/**
 * The main index page of the application, which serves as the login page.
 * It utilizes a centered layout to display the login form.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
