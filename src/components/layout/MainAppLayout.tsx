import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the main layout container.
   */
  className?: string;
}

/**
 * A simple layout component that centers its content both vertically and horizontally
 * within the full viewport. It's designed to contain a primary content block, such as a login form.
 * 
 * @param {MainAppLayoutProps} props The props for the component.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
