import type { Props } from "./types"



function Button({children, ...props}: Props) {
  return (
    <button { ...props}>
   {children}
  </button>
  )
}

export default Button