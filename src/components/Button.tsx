import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export interface ButtonProps {
    children?: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'rounded bg-cyan-500 text-back font-semibold py-4 px-3 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        )}>
            {children}
        </Comp>
    )
}