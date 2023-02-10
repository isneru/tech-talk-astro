import { useState } from "react"

export const Button = () => {
  const [clicks, setClicks] = useState(0)
  return (
    <button onClick={() => setClicks(numberClicks => numberClicks + 1)}>
      Clicks: {clicks}
    </button>
  )
}
