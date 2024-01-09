// REM Function
export const rem = (size: number) => {
  const remSize = size / 16
  return `${remSize}rem`
}

// EM Function
export const em = (pixels: number, context = 16) => {
  return `${pixels / context}em`
}
