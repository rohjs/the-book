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
  } = url.parse(pathString)

  const [, page, folderId, noteId] = pathname.split('/')

  return {
    pathname,
    page,
    folderId,
    noteId,
  }
}