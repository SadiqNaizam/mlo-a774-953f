import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          'w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2.5 text-sm font-semibold transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
