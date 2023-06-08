import type { Props } from "./types"
import cx from 'classnames'


function Button({children, className, ...props}: Props) {
  return (
    <button
    className={cx("transition rounded text-blue-700 font-bold py-4 px-6 transparent hover:bg-gray-100", className)}
     { ...props}>
   {children}
  </button>
  )
}

export default Button