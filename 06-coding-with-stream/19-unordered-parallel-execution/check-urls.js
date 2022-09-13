import { pipeline } from 'node:stream'
import { createReadStream, createWriteStream } from 'node:fs'
import split from 'split'
import superagent from 'superagent'
import { ParallelStream } from './parallel-stream.js'

pipeline(
    createReadStream(process.argv[2]),
    split(),
    new ParallelStream(
        async (url, enc, push, done) => {
            if (!url) {
                return done()
            }

            try {
                await superagent.head(url, { timeout: 5 * 1000 })
                push(`${url} is up\n`)
            } catch (err) {
                push(`${url} is down\n`)
            }
            done()
        }
    ),
    createWriteStream('results.txt'),
    (err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log('All url have been checked')
    }
)