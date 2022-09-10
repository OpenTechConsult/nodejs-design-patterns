import { createReadStream } from 'node:fs'
import { basename } from 'node:path'
import { pipeline } from 'node:stream'
import { createUploadStream } from './upload.js'


const filepath = process.argv[2]
const filename = basename(filepath)

pipeline(
    createReadStream(filepath),
    createUploadStream(filename),
    (err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log('File uploaded')
    }
)