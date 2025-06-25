import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FormLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const FormLink = React.forwardRef<HTMLAnchorElement, FormLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);
FormLink.displayName = 'FormLink';

export default FormLink;
