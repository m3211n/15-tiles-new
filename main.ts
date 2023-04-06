namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
info.setScore(0)
info.startCountdown(120)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
let playTiles = [
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
sprites.create(assets.image`tile14`, SpriteKind.Tile)
]
