export function enumString (...args) {
  return args.reduce((acc, arg) => {
    return {
      ...acc,
      [arg]: arg,
    }
  }, {})
}