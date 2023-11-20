import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { SocialMedia } from './SocialMedia'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <nav className="mt-1 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#menu">Menu</NavLink>
              <NavLink href="#vegan">Vegan</NavLink>
              <NavLink href="#events">Events</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <SocialMedia />
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} PittaStreat. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
