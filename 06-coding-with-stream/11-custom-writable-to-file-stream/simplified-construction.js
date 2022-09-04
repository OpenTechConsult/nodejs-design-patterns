import { Writable } from 'node:stream'
import mkdirp from 'mkdirp'
import { join, dirname } from 'node:path'
import { writeFile } from 'node:fs/promises'


const tfs = new Writable({
    objectMode: true,
    write(chunk, encoding, cb) {
        mkdirp(dirname(chunk.path))
            .then(() => writeFile(chunk.path, chunk.content))
            .then(() => cb())
            .catch(cb)
    }
})

tfs.write({ path: join('files', 'file1.txt'), content: 'Hello' })
tfs.write({ path: join('files', 'file2.txt'), content: 'Node.js' })
tfs.write({ path: join('files', 'file3.txt'), content: 'streams' })
tfs.end(() => console.log('All files created'))