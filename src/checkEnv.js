import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { isEmpty } from 'lodash'

import config from './constants/config'

export default function checkEnv() {
  const envFilePath = path.join(process.cwd(), '.env')
  if (!fs.existsSync(envFilePath)) {
    console.log('Please add a .env file')
    process.exit(0)
  }

  dotenv.config()
  const missingValues = config.filter(key => process.env[key] === undefined)

  if (!isEmpty(missingValues)) {
    const isMany = missingValues.length > 1
    console.log(`Sorry value${isMany ? 's' : ''} : ${missingValues.join(', ')} ${isMany ? 'are' : 'is'} missing${isMany ? 's' : ''}`)
    process.exit(0)
  }
}