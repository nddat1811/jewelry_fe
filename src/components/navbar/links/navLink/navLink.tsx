'use client'
import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

interface NavLinkItem {
  title: string
  path: string
}
const NavLink = ({ item }: { item: NavLinkItem }) => {
  const pathName = usePathname()
  return (
    <Link
      href={item.path}
      className={`
      ${styles.container} 
      ${pathName === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink;