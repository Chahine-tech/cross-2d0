import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'


const api = Router()

api.post('/add', async (req, res) => {

    const acceptedFields = ['content','userId','isComplete']
  
    const missingValues = acceptedFields.filter(field => !req.body[field])
    const {content, userId} = req.body

    const prisma = new PrismaClient()
    try {
      const task = await prisma.task.create({
        data: {
          content,
          userId,
          isComplete,
        }
      })
      res.json({success : true})
    }
      catch (err) {
        res.status(400).json({ error: err.message })
      }
})

/*api.put('/update/:id', async (req, res) => {
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
*/





api.delete('/delete/:id', async (req, res) => {

  const prisma = new PrismaClient()

  try {
    const id = parseInt(req.params.id, 10)
    
        const task = await prisma.task.delete({
        where: {
            id,
        }
    })

    res.json({ data: { task } })
} catch (err) {
    res.status(400).json({ error: err.message })
}
})


  
export default api
