// UTILS
import React from 'react';
import { cn } from '@/utils/misc';

interface ContainerProps {
	className?: string;
	children?: React.ReactNode;
	as?: React.ElementType;
}

export function Container({
	className,
	children,
	as: Component = 'div',
}: ContainerProps) {
	return (
		<Component
			className={cn(
				'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
				className
			)}
		>
			{children}
		</Component>
	);
}
