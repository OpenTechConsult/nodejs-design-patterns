import { Writable } from 'node:stream'
import { dirname } from 'node:path'
import { writeFile } from 'node:fs/promises'
import mkdirp from 'mkdirp'

export class ToFileStream extends Writable {

    constructor(options) {
        super({ ...options, objectMode: true })
    }

    _write(chunk, encoding, cb) {
        mkdirp(dirname(chunk.path))
            .then(() => writeFile(chunk.path, chunk.content))
            .then(() => cb())
            .catch(cb)
    }
}