namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
function flip15 (directionIncrement: number) {
    if (directionIncrement == _RIGHT && !(isLeft) || directionIncrement == _LEFT && !(isRight) || (directionIncrement == _DOWN && !(isTop) || directionIncrement == _UP && !(isBottom))) {
        tilesIndexes[noTileIndex] = tilesIndexes[noTileIndex + directionIncrement]
        tilesIndexes[noTileIndex + directionIncrement] = 15
        noTileIndex += directionIncrement
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
        scene.cameraShake(4, 500)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    flip15(_UP)
    placeTiles(tilesIndexes)
})
function placeTiles (indexes: number[]) {
    info.setScore(0)
    X0 = 3
    Y0 = 2
    X = 0
    Y = 0
    inPlaceIndex = 0
    for (let value of indexes) {
        tiles.placeOnTile(playTiles[value], tiles.getTileLocation(X + X0, Y + Y0))
        if (inPlaceIndex == value) {
            info.changeScoreBy(1)
        }
        X += 1
        inPlaceIndex += 1
        if (X == 4) {
            Y += 1
            X = 0
        }
    }
    isLeft = playTiles[15].tilemapLocation().column - X0 == 0
    isRight = playTiles[15].tilemapLocation().column - X0 == 3
    isTop = playTiles[15].tilemapLocation().row - Y0 == 0
    isBottom = playTiles[15].tilemapLocation().row - Y0 == 3
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    flip15(_LEFT)
    placeTiles(tilesIndexes)
})
info.onScore(16, function () {
    pause(500)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    flip15(_RIGHT)
    placeTiles(tilesIndexes)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    flip15(_DOWN)
    placeTiles(tilesIndexes)
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
function shuffleIndexes () {
    let indexesOld: number[] = []
    indexesNew = []
    for (let index = 0; index <= 15; index++) {
        indexesOld[index] = index
    }
    for (let index = 0; index <= 15; index++) {
        candidate = indexesOld._pickRandom()
        indexesNew.push(candidate)
        indexesOld.removeAt(indexesOld.indexOf(candidate))
    }
    return indexesNew
}
let candidate = 0
let indexesNew: number[] = []
let playTiles: Sprite[] = []
let inPlaceIndex = 0
let Y = 0
let X = 0
let Y0 = 0
let X0 = 0
let isBottom = false
let isTop = false
let isRight = false
let isLeft = false
let noTileIndex = 0
let tilesIndexes: number[] = []
let _UP = 0
let _LEFT = 0
let _DOWN = 0
let _RIGHT = 0
_RIGHT = -1
_DOWN = -4
_LEFT = 1
_UP = 4
createTiles()
info.startCountdown(120)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
tilesIndexes = shuffleIndexes()
noTileIndex = tilesIndexes.indexOf(15)
placeTiles(tilesIndexes)
