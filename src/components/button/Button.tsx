import React from 'react';

import './Button.css';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
    return <button className={'button ' + className}>{children}</button>;
}
