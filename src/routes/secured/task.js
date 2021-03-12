import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'


const api = Router()

api.post('/', async (req, res) => {

    const acceptedFields = ['content','userId']
  
    const missingValues = acceptedFields.filter(field => !req.body[field])
    const {content, userId} = req.body

    const prisma = new PrismaClient()
    try {
      const task = await prisma.task.create({
        data: {
          content,
          userId,
        }
      })
      res.json({success : true})
    }
      catch (err) {
        res.status(400).json({ error: err.message })
      }
})

api.delete('/', async (req, res) => {

})


export default api
