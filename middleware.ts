import { stackMiddleware } from '@/lib/middlewares/stackMiddleware'
import { supabaseMiddleware } from '@/lib/middlewares/supabaseMiddleware'
import { redirectMiddleware } from '@/lib/middlewares/redirectMiddleware'
import { sessionMiddleware } from './lib/middlewares/sessionMiddleware'
import { rewriteMiddleware } from './lib/middlewares/rewriteMiddleware'

const middlewares = [
  supabaseMiddleware,
  sessionMiddleware,
  redirectMiddleware,
  rewriteMiddleware,
]

export default stackMiddleware(middlewares)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
