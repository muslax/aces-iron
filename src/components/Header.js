import React from 'react'
import Link from 'next/link'
import useUser from '../lib/useUser'
import { useRouter } from 'next/router'
import fetchJson from '../lib/fetchJson'

const Header = () => {
  const { user, mutateUser } = useUser()
  const router = useRouter()
  const loggedMenu = [
    {href: "/profile-sg", label: "SSG"},
    {href: "/profile-ssr", label: "SSR"},
    {href: "/license-sg1", label: "LSG1"},
    {href: "/license-sg2", label: "LSG2"},
    // {href: "/license-ssr", label: "LSSR"},
    // {href: "/mixed", label: "Mx1"},
    // {href: "/mixed-2", label: "Mx2"},
    {href: "/sg-projects", label: "ProComp"},
    {href: "/use-projects", label: "UsePro"},
    {href: "/ssr-projects", label: "SSRPro"},
  ]
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {!user?.isLoggedIn && (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn && loggedMenu.map((menu) => (
            <li key={menu.href}>
            {/* Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. */}
              <Link href={menu.href}>
                <a>{menu.label}</a>
              </Link>
            </li>
          ))}
          {user?.isLoggedIn && (
            <li>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault()
                    await mutateUser(fetchJson('/api/logout'))
                    router.push('/login')
                  }}
                >
                  Logout
                </a>
              </li>
          )}
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
          align-items: center;
        }

        li {
          margin-right: 1rem;
          display: flex;
        }

        li:last-child {
          margin-left: auto;
        }

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          padding: 0 2rem;
        }
      `}</style>
    </header>
  )
}

export default Header
