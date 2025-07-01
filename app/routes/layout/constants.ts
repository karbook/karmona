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
    label: 'Us',
    icon: 'users',
    dropdownItems: [
      { path: '/#club', label: 'Karmona', icon: 'karmona-square-simple-dark' },
      { path: '/#aboutus', label: 'About Us', icon: 'users' },
      { path: '/#promotions', label: 'Promotions', icon: 'megaphone' },
    ],
  },
  {
    type: 'link',
    path: '/#services',
    label: 'Services',
  },
  {
    type: 'dropdown',
    label: 'Our Work',
    icon: 'cake',
    dropdownItems: [
      { path: '/#specialist', label: 'We are specialists', icon: 'settings' },
      { path: '/#projects', label: 'Our projects', icon: 'wrench' },
      { path: '/#cars', label: 'Cars', icon: 'car' },
    ],
  },
  {
    type: 'link',
    path: '/#FAQ',
    label: 'FAQ',
  },
  {
    type: 'dropdown',
    label: 'Contact',
    icon: 'phone',
    dropdownItems: [
      { path: '/#contact', label: 'Contact Us', icon: 'mail' },
      { path: '/#instagram', label: 'Our Instagram', icon: 'instagram' },
    ],
  },
] as const


export type FooterLink = {
  id: string;
  label: string;
  path: string;
};
export const footerLinks: FooterLink[] = [
  { id: "club", label: "Club", path: "#club" },
  { id: "aboutus", label: "Nosotros", path: "#aboutus" },
  { id: "services", label: "Servicios", path: "#services" },
  { id: "specialist", label: "Especialistas", path: "#specialist" },
  { id: "cars", label: "Autos", path: "#cars" },
  { id: "projects", label: "Proyectos", path: "#projects" },
  { id: "FAQ", label: "FAQ", path: "#FAQ" },
  { id: "/appointment", label: "Agendar Cita", path: "/appointment" },
  { id: "instagram", label: "Instagram", path: "#instagram" },
  { id: "contacto", label: "Contacto", path: "#contact" },
];