namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (noTileIndex < 12) {
        tilesIndexes[noTileIndex] = tilesIndexes[noTileIndex + 4]
        tilesIndexes[noTileIndex + 4] = 15
        noTileIndex += 4
        placeTiles(tilesIndexes)
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    }
})
function placeTiles (indexes: number[]) {
    X0 = 3
    Y0 = 2
    X = 0
    Y = 0
    for (let value of indexes) {
        tiles.placeOnTile(playTiles[value], tiles.getTileLocation(X + X0, Y + Y0))
        X += 1
        if (X == 4) {
            Y += 1
            X = 0
        }
    }
    console.log(indexes)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((noTileIndex + 1) % 4 != 0) {
        tilesIndexes[noTileIndex] = tilesIndexes[noTileIndex + 1]
        tilesIndexes[noTileIndex + 1] = 15
        noTileIndex += 1
        placeTiles(tilesIndexes)
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((noTileIndex + 4) % 4 != 0) {
        tilesIndexes[noTileIndex] = tilesIndexes[noTileIndex - 1]
        tilesIndexes[noTileIndex - 1] = 15
        noTileIndex += -1
        placeTiles(tilesIndexes)
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (noTileIndex > 3) {
        tilesIndexes[noTileIndex] = tilesIndexes[noTileIndex - 4]
        tilesIndexes[noTileIndex - 4] = 15
        noTileIndex += -4
        placeTiles(tilesIndexes)
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    }
})
function createTiles () {
    playTiles = [
    sprites.create(assets.image`tile0`, SpriteKind.Tile),
    sprites.create(assets.image`tile1`, SpriteKind.Tile),
    sprites.create(assets.image`tile2`, SpriteKind.Tile),
    sprites.create(assets.image`tile3`, SpriteKind.Tile),
    sprites.create(assets.image`tile4`, SpriteKind.Tile),
    sprites.create(assets.image`tile5`, SpriteKind.Tile),
    sprites.create(assets.image`tile6`, SpriteKind.Tile),
    sprites.create(assets.image`tile7`, SpriteKind.Tile),
    sprites.create(assets.image`tile8`, SpriteKind.Tile),
    sprites.create(assets.image`tile9`, SpriteKind.Tile),
    sprites.create(assets.image`tile10`, SpriteKind.Tile),
    sprites.create(assets.image`tile11`, SpriteKind.Tile),
    sprites.create(assets.image`tile12`, SpriteKind.Tile),
    sprites.create(assets.image`tile13`, SpriteKind.Tile),
    sprites.create(assets.image`tile14`, SpriteKind.Tile),
    sprites.create(assets.image`noTile`, SpriteKind.Tile)
    ]
}
function shuffleIndexes (indexes: number[]) {
    indexesOld = indexes
    indexesNew = []
    for (let index = 0; index <= 15; index++) {
        candidate = indexesOld._pickRandom()
        indexesNew.push(candidate)
        indexesOld.removeAt(indexesOld.indexOf(candidate))
    }
    return indexesNew
}
let candidate = 0
let indexesNew: number[] = []
let indexesOld: number[] = []
let playTiles: Sprite[] = []
let Y = 0
let X = 0
let Y0 = 0
let X0 = 0
let noTileIndex = 0
let tilesIndexes: number[] = []
createTiles()
info.setScore(0)
info.startCountdown(120)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
for (let index = 0; index <= 15; index++) {
    tilesIndexes[index] = index
}
tilesIndexes = shuffleIndexes(tilesIndexes)
noTileIndex = tilesIndexes.indexOf(15)
console.log(noTileIndex)
placeTiles(tilesIndexes)
