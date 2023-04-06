namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
function resetTiles (indexes: number[]) {
    indexesOld = indexes
    indexesNew = []
    for (let index = 0; index <= 15; index++) {
        console.log(indexesOld)
        candidate = indexesOld._pickRandom()
        indexesNew.push(candidate)
        indexesOld.removeAt(indexesOld.indexOf(candidate))
        console.log(indexesNew)
    }
    return indexesNew
}
function placeTiles (tilesIndexes: number[]) {
    X0 = 3
    Y0 = 2
    X = 0
    Y = 0
    for (let value of tilesIndexes) {
        tiles.placeOnTile(playTiles[value], tiles.getTileLocation(X + X0, Y + Y0))
        X += 1
        if (X == 4) {
            Y += 1
            X = 0
        }
    }
}
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
    placedTiles = [
    sprites.create(assets.image`placedTile0`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile1`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile2`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile3`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile4`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile5`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile6`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile7`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile8`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile9`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile10`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile11`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile12`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile13`, SpriteKind.Tile),
    sprites.create(assets.image`placedTile14`, SpriteKind.Tile),
    sprites.create(assets.image`noTile`, SpriteKind.Tile)
    ]
}
let placedTiles: Sprite[] = []
let playTiles: Sprite[] = []
let Y = 0
let X = 0
let Y0 = 0
let X0 = 0
let candidate = 0
let indexesNew: number[] = []
let indexesOld: number[] = []
let tilesIndexes: number[] = []
info.setScore(0)
info.startCountdown(120)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
for (let index = 0; index <= 15; index++) {
    tilesIndexes[index] = index
}
console.log("----------------")
console.log(tilesIndexes)
createTiles()
tilesIndexes = resetTiles(tilesIndexes)
placeTiles(tilesIndexes)
console.log(tilesIndexes)
