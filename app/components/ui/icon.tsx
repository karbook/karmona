// CORE
import type { SVGProps } from 'react'

// UTILS
import { cn } from '@/utils/misc'

// TYPES
import type { IconName } from '@/icon-name'

// ASSETS
import href from './icons/sprite.svg'

const sizeClassName = {
  font: 'size-[1em]',
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
  '2xl': 'size-8',
  '3xl': 'size-10',
  '4xl': 'size-[90px]',
  '5xl': 'size-[120px]',
  '6xl': 'size-[150px]',
} as const

const childrenSizeClassName = {
  font: 'gap-1.5',
  xs: 'gap-1.5',
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-2',
  xl: 'gap-3',
  '2xl': 'gap-3.5',
  '3xl': 'gap-4',
  '4xl': 'gap-5',
  '5xl': 'gap-6',
  '6xl': 'gap-7',
} as const

export type IconSizes = keyof typeof sizeClassName

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  testId?: string
  className?: string
  size?: IconSizes
}

export function Icon({ name, size = 'font', testId, className, children, ...props }: IconProps) {
  if (children) {
    return (
      <span className={`inline-flex items-center ${childrenSizeClassName[size]}`}>
        <Icon name={name} size={size} className={className} {...props} />
        {children}
      </span>
    )
  }
  return (
    <svg
      className={cn(sizeClassName[size], 'inline-block flex-shrink-0 self-center', className)}
      data-testid={testId}
      data-name={name}
      {...props}
    >
      <title>{name}</title>
      <use href={`${href}#${name}`} />
    </svg>
  )
}

export { href }
export type { IconName }
