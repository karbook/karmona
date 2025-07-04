import { t } from '@/localization/utils'
import type { IconName } from "@/components/ui/icon"

export type MenuItem =
  | {
      type: 'link'
      path: string
      label: string
    }
  | {
      type: 'dropdown'
      label: string
      icon: IconName
      dropdownItems: { path: string; label: string; icon: IconName }[]
    }

export const menuItems: readonly MenuItem[] = [
  {
    type: 'dropdown',
    label: t('Us'),
    icon: 'users',
    dropdownItems: [
      { path: '/#start', label: t('Karmona'), icon: 'karmona-square-simple-dark' },
      { path: '/#aboutus', label: t('About Us'), icon: 'users' },
      { path: '/#promotions', label: t('Promotions'), icon: 'megaphone' },
    ],
  },
  {
    type: 'link',
    path: '/#services',
    label: t('Services'),
  },
  {
    type: 'dropdown',
    label: t('Our Work'),
    icon: 'cake',
    dropdownItems: [
      { path: '/#specialist', label: t('We are specialists'), icon: 'settings' },
      { path: '/#projects', label: t('Our projects'), icon: 'wrench' },
      { path: '/#cars', label: t('Cars'), icon: 'car' },
    ],
  },
  {
    type: 'link',
    path: '/#FAQ',
    label: t('FAQ'),
  },
  {
    type: 'dropdown',
    label: t('Contact'),
    icon: 'phone',
    dropdownItems: [
      { path: '/#contact', label: t('Contact Us'), icon: 'mail' },
      { path: '/#instagram', label: t('Our Instagram'), icon: 'instagram' },
    ],
  },
] as const

export type FooterLink = {
  id: string
  label: string
  path: string
}

export const footerLinks: FooterLink[] = [
  { id: 'club', label: t('Club'), path: '#start' },
  { id: 'aboutus', label: t('About Us'), path: '#aboutus' },
  { id: 'services', label: t('Services'), path: '#services' },
  { id: 'specialist', label: t('We are specialists'), path: '#specialist' },
  { id: 'cars', label: t('Cars'), path: '#cars' },
  { id: 'projects', label: t('Our projects'), path: '#projects' },
  { id: 'FAQ', label: t('FAQ'), path: '#FAQ' },
  { id: '/appointment', label: t('Book Appointment'), path: '/appointment' },
  { id: 'instagram', label: t('Instagram'), path: '#instagram' },
  { id: 'contacto', label: t('Contact'), path: '#contact' },
]
