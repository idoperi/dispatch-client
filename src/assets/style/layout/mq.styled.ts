import { css } from "styled-components"
import { Styles } from "styled-components/dist/types"

const size = {
  xs: "400px",
  sm: "600px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1650px",
}

export const mq = {
  min: {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
  },
  // max: {
  //   xs: `(max-width: ${size.xs})`,
  //   sm: `(max-width: ${size.sm})`,
  //   md: `(max-width: ${size.md})`,
  //   lg: `(max-width: ${size.lg})`,
  //   xl: `(max-width: ${size.xl})`,
  //   xxl: `(max-width: ${size.xxl})`,
  // },
  max: {
    xs: `(max-width: calc(${size.xs} - 1px))`,
    sm: `(max-width: calc(${size.sm} - 1px))`,
    md: `(max-width: calc(${size.md} - 1px))`,
    lg: `(max-width: calc(${size.lg} - 1px))`,
    xl: `(max-width: calc(${size.xl} - 1px))`,
    xxl: `(max-width: calc(${size.xxl} - 1px))`,
  },
}
