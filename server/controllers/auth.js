
async function registration () {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
      return res.status(400).json({ message: 'User with this email already exists' })
    }
    const hashPassword = bcrypt.hashSync(password, 7)
    const userRole = await Role.findOne({ value: 'USER' })
    const user = new User({ email, password: hashPassword, roles: [userRole.value] })
    await user.save()
    return res.json({ message: 'User was created' })
  } catch (e) {
    console.log(e)
  }
}

async function login () {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }
  const validPassword = bcrypt.compareSync(password, user.password)
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid password' })
  }
  const token = generateAccessToken(user.id, user.roles)
  return res.json({ token })
}

module.exports = {
  registration,
  login
}