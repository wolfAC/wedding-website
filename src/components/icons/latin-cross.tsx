// Hand-written (lucide "cross" is a rounded plus) - Latin cross
import type { IconProps } from './types'

export function LatinCross(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M12 2v20" />
      <path d="M6 7h12" />
    </svg>
  )
}
