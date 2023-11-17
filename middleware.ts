import { stackMiddleware } from '@/lib/middlewares/stackMiddleware'
import { supabaseMiddleware } from '@/lib/middlewares/supabaseMiddleware'
import { redirectMiddleware } from '@/lib/middlewares/redirectMiddleware'

const middlewares = [supabaseMiddleware, redirectMiddleware]

export default stackMiddleware(middlewares)
