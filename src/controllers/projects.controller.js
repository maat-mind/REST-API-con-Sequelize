export const getProjects = (req, res) => {
  res.send('getting projects')
}

export const createProject = (req, res) => {
  console.log(req.body)
  res.send('creating projects')
}
