import url from 'url'

export function enumString (...args) {
  return args.reduce((acc, arg) => {
    return {
      ...acc,
      [arg]: arg,
    }
  }, {})
}

export function parsePath (pathString) {
  const {
    pathname,
    query,
  } = url.parse(pathString, {
    parseQueryString: true,
  })

  return {
    pathname,
    query,
  }
}