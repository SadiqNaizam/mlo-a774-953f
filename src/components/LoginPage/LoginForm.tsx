import * as React from 'react';

import { Card } from '@/components/ui/card';
import FormInput from './FormInput';
import PrimaryButton from './PrimaryButton';
import FormLink from './FormLink';

const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // likely with a library like react-hook-form and zod for validation.
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Login submitted:', data);
  };

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground p-8 rounded-md shadow-lg border-none">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="email"
          name="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          required
        />
        
        <div className="space-y-1.5">
          <FormInput
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
          />
          <FormLink href="#" className="text-muted-foreground">
            Forgot Password
          </FormLink>
        </div>
        
        <div className="pt-2">
            <PrimaryButton type="submit">
                Login
            </PrimaryButton>
        </div>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-muted-foreground">Don't have an account? </span>
        <FormLink href="#" className="font-semibold text-primary hover:underline">
          SignUp
        </FormLink>
      </div>
    </Card>
  );
};

export default LoginForm;
