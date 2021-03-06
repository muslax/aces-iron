// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.NEXT_PUBLIC_COOKIE_PASSWORD,
    cookieName: 'aces/with-iron-session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: process.env.NEXT_PUBLIC_SESSION_MAX_AGE,
    },
  })
}
