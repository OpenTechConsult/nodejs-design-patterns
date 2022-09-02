import { createServer } from 'node:http'
import Chance from 'chance'
import { log } from 'node:console'

const chance = new Chance()

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    function generateMore() {
        while (chance.bool({ likelihood: 95 })) {
            const randomChunk = chance.string({ length: (16 * 124) - 1 })
            const shouldContinue = res.write(`${randomChunk}\n`)
            if (!shouldContinue) {
                console.log('back-pressure')
                return res.once('drain', generateMore)
            }
        }
        res.end('\n\n')
    }
    generateMore()
    res.on('finish', () => log('All data sent'))
})

server.listen(8080, () => {
    log('Listening on http://localhost:8080')
})