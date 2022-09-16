import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { randomBytes } from 'node:crypto'
import { createCompressAndEncrypt } from './combined-stream.js'

const [, , password, source] = process.argv
const iv = randomBytes(16)
const destination = `${source}.gz.enc`

pipeline(
    createReadStream(source),
    createCompressAndEncrypt(password, iv),
    createWriteStream(destination),
    (err) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log(`${destination} create with iv: ${iv.toString('hex')}`)
    }
)