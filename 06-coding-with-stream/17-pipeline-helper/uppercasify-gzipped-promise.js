import { createGzip, createGunzip } from 'node:zlib'
import { Transform, pipeline } from 'node:stream'
import { promisify } from 'node:util'

const pipelinePromise = promisify(pipeline)

const uppercasify = new Transform({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase())
        cb()
    }
})

async function main() {
    try {
        await pipelinePromise(
            process.stdin,
            createGunzip(),
            uppercasify,
            createGzip(),
            process.stdout
        )
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

main()