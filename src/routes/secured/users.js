import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { BAD_REQUEST } from '../../constants/api'

const api = Router()

api.get('/', async (req, res) => {
  try {

    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({
      select: {
        firstname: true,
        lastname: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    res.json({ data: { users } })
  } catch (err) {
    res.status(BAD_REQUEST.status).json({ error: err.message })
  }
})

api.post('/signup', async (req, res) => {

  const acceptedFields = ['firstname', 'lastname', 'email', 'password', 'passwordConfirmation']

  const missingValues = acceptedFields.filter(field => !req.body[field])
  if (!isEmpty(missingValues)) {
    return res.status(400).json({
      error: `Values ${missingValues.join(', ')} are missing`
    })
  }

  const { firstname, lastname, email, password, passwordConfirmation } = req.body

  if (password !== passwordConfirmation) {
    return res.status(400).json({
      error: "Password and confirmation doesn't match"
    })
  }

  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        encryptedPassword: hashPassword(password),
      }
    })

    const payload = { email }
    dotenv.config()
    const token = jwt.sign(payload, process.env.JWT_ENCRYPTION)

    res.json({ data: { user, token } })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

api.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10)

    const prisma = new PrismaClient()
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      return res.status(BAD_REQUEST.status).json({ error: `User ${id} doesn't exist` })
    }

    const acceptedFields = ['firstname', 'lastname', 'gender']
    let data = {}
    for (const key of acceptedFields) {
      if (req.body[key]) {
        data[key] = req.body[key]
      }
    }

    const updatedUser = await prisma.user.update({
      where: {
        id
      },
      data
    })

    res.json({ data: { user: updatedUser } })
  } catch (err) {
    res.status(BAD_REQUEST.status).json({ error: err.message })
  }
})

api.delete('/:id', (req, res) => {
})

export default api