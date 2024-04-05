
const getStatic = (id: string | undefined) => {
  return  (id) ? `http://localhost:8080/static/${id}` : ''
}


export { getStatic }
