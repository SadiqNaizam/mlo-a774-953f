import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={id} className="text-muted-foreground text-sm font-normal">
          {label}
        </Label>
        <Input
          id={id}
          className={cn(
            'h-auto w-full rounded-none border-0 border-b border-input bg-transparent px-0 py-1.5 text-base shadow-none transition-colors',
            'placeholder:text-muted-foreground/50',
            'focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
FormInput.displayName = 'FormInput';

export default FormInput;
