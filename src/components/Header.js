import React from 'react'
import Link from 'next/link'
import useUser from '../lib/useUser'
import { useRouter } from 'next/router'
import fetchJson from '../lib/fetchJson'

const Header = () => {
  const { user, mutateUser } = useUser()
  const router = useRouter()
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
          {user?.isLoggedIn && (
            <>
              <li>
                <Link href="/profile-sg">
                  <a>SSG</a>
                </Link>
              </li>
              <li>
                <Link href="/profile-ssr">
                  <a>SSR</a>
                </Link>
              </li>
              <li>
                <Link href="/license-sg1">
                  <a>LicSG1</a>
                </Link>
              </li>
              <li>
                <Link href="/license-sg2">
                  <a>LicSG2</a>
                </Link>
              </li>
              <li>
                <Link href="/license-ssr">
                  <a>LicSSR</a>
                </Link>
              </li>
              <li>
                <Link href="/mixed">
                  <a>Mixed1</a>
                </Link>
              </li>
              <li>
                <Link href="/mixed-2">
                  <a>Mixed2</a>
                </Link>
              </li>
              <li>
                <Link href="/sg-projects">
                  <a>Projects</a>
                </Link>
              </li>
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
            </>
          )}
          {/* <li>
            <a href="https://github.com/vvo/next-iron-session">
              <img src="/GitHub-Mark-Light-32px.png" widht="32" height="32" />
            </a>
          </li> */}
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
