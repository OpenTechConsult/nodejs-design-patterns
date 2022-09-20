function ImageJpeg(name) {
    this.name = name
}

function ImageGif(name) {
    this.name = name
}

function ImagePng(name) {
    this.name = name
}

function createImage(name) {
    if (name.match(/\.jpe?g$/)) {
        return new ImageJpeg(name)
    } else if (name.match(/\.gif$/)) {
        return new ImageGif(name)
    } else if (name.match(/\.png$/)) {
        return new ImagePng(name)
    } else {
        throw new Error('Unsupported format')
    }

}