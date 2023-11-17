'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>This is a major disaster!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
