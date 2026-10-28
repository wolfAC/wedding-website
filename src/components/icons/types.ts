import type { JSX, SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>
export type IconComponent = (props: IconProps) => JSX.Element
