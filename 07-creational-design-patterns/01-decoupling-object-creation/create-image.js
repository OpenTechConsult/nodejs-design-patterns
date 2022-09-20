function Image(name) {
    this.name = name
}

function createImage(name) {
    return new Image(name)
}

const image = createImage('photo.jpeg')
