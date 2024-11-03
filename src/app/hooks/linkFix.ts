
const linkFix = (link: string | undefined) => {
  return link ? link.replace('http://localhost:8080', '') : undefined
}

export { linkFix }
