import { createReadStream, createWriteStream } from 'node:fs'
import { Transform, pipeline } from 'node:stream'
import { strict as assert } from 'node:assert'

const streamA = createReadStream('package.json')
const streamB = new Transform({
    transform(chunk, enc, done) {
        this.push(chunk.toString().toUpperCase())
        done()
    }
})
const streamC = createWriteStream('package-uppercase.json')
const pipelineReturn = pipeline(
    streamA,
    streamB,
    streamC,
    () => {
        // handle
    }
)
console.log(assert.strictEqual(streamC, pipelineReturn))

const pipeReturn = streamA.pipe(streamB).pipe(streamC)
console.log(assert.strictEqual(streamC, pipeReturn))