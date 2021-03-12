import express from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import checkEnv from './checkEnv.js'
import routes from './routes'
import cors from 'cors'
import './middlewares/passport'

async function server() {
    try {
        //checkEnv()
        const prisma = new PrismaClient()
        await prisma.$connect()

      const app = express();
      app.use(express.json())

    app.get('/', (_req, res) => {
        res.send("Please take a look at our <a href='/api'>API</a>")
      })

      app.use('/api', routes)
      

      dotenv.config()
    const port = parseInt(process.env.PORT || 3000, 10)

    app.listen(3000, function() {
        console.log("Server starting at http://localhost:3000");
      });

    }
    catch (err) {
        console.log("error start")
      }



}
    /*try {
      checkEnv()

      const prisma = new PrismaClient()
      await prisma.$connect()

      const app = express();

    app.get('/', (_req, res) => {
        res.send("Please take a look at our <a href='/api'>API</a>")
      })
    
    app.listen(3000, function() {
        console.log("Server starting at http://localhost:3000");
      });


      dotenv.config()
    const port = parseInt(process.env.PORT || 3000, 10)
    }
*/

server()