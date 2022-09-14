import { pipeline } from 'node:stream'
import { createReadStream, createWriteStream } from 'node:fs'
import { createGzip } from 'node:zlib'

pipeline(
    createReadStream('urls.txt'),
    createGzip(),
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err)
        } else {
            console.log('Pipeline succeed')
        }
    }
).on('data', (chunk) => {
    console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`)
}).on('end', () => { console.log('End of stream') })
