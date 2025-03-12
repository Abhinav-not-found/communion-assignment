'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out"

const links = [
  {
    name:'home',
    href:'/'
  },
  {
    name:'event',
    href:'/event'
  },
  {
    name:'about',
    href:'/about'
  },
]

const NavbarLinks = () => {
  const pathname = usePathname()
  return (
    <>
      {links.map((link)=>(
        <Link key={link.href} href={link.href} className={cn(link.href === pathname ? 'font-semibold': '')}>
          <ComesInGoesOutUnderline label={link.name} direction="right" />
          </Link>
      ))}
    </>
  )
}

export default NavbarLinks
