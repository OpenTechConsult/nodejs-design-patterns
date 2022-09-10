import { createServer } from 'node:http'
import { basename, join } from 'node:path'
import { createWriteStream } from 'node:fs'

const server = createServer((req, res) => {
    const filename = basename(req.headers['x-filename'] || 'nothing')
    const destFilename = join('received_files', filename)
    console.log(`File request received: ${filename}`)
    req.pipe(createWriteStream(destFilename))
        .on('finish', () => {
            res.writeHead(201, { 'Content-Type': 'text/plain' })
            res.end('OK\n')
            console.log(`File saved: ${destFilename}`)
        })
})

server.listen(3000, () => console.log('Listening on http://localhost:3000'))