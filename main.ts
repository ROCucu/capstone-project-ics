scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (Jumps == 0) {
            Jumps += 1
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy < 50) {
        if (Jumps > 0) {
            mySprite.vy += -100
            Jumps += -1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (info.score() >= 5) {
            Ticket += 1
            info.changeScoreBy(-5)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
        Axe += 1
    }
})
let mySprite: Sprite = null
let Jumps = 0
Jumps = 1
let Ticket = 0
let Axe = 0
info.changeScoreBy(5)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
controller.moveSprite(mySprite, 100, 0)
game.onUpdateInterval(10, function () {
    mySprite.vy += 3
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right) && mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
        if (Axe == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . c c c c c . . . . . . 
                . . . . . c c c c c c . . . . . 
                . . . . . c c c c c . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . c c c c c . . . . . . . 
                . . . . c c c c c c . . . . . . 
                . . . . c c c c c . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . c c b b . . . . . . . 
                . . . . c c c c b . . . . . . . 
                . . . . c c c c c . . . . . . . 
                . . . . . c c c c . . . . . . . 
                . . . . . . c c c . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . c c c c c . . . . . . . 
                . . . . c c c c c c . . . . . . 
                . . . . c c c c c . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . c c c c c . . . . . . 
                . . . . . c c c c c c . . . . . 
                . . . . . c c c c c . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . . . . . c c . . . . . 
                . . . . . . . c c c c c . . . . 
                . . . . . . . c c c c c c . . . 
                . . . . . . . c c c c c . . . . 
                . . . . . . . . . c c . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b . . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . . b b b . . . . . 
                . . . . . . . . . b c c . . . . 
                . . . . . . . . . . c c c c c . 
                . . . . . . . . . . c c c c c c 
                . . . . . . . . . . c c c c c . 
                . . . . . . . . . . c c . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b . . . . . . . . 
                . . . . . . b b b . . . . . 1 . 
                . . . . . . . b b b . . . . 1 . 
                . . . . . . . . b b b . . . 1 . 
                . . . . . . . . . b c c . . . 1 
                . . . . . . . . . . c c c c c . 
                . . . . . . . . . . c c c c c c 
                . . . . . . . . . . c c c c c . 
                . . . . . . . . . . c c . . . 1 
                . . . . . . . . . . . . . . 1 1 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `],
            100,
            false
            )
            pause(900)
            tiles.setTileAt(tiles.getTileLocation(16, 10), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(16, 9), assets.tile`transparency16`)
            tiles.setWallAt(tiles.getTileLocation(16, 10), false)
            tiles.setWallAt(tiles.getTileLocation(16, 9), false)
            tiles.setTileAt(tiles.getTileLocation(16, 11), assets.tile`myTile4`)
            Axe += -1
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Right) && mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile10`)) {
        tiles.setWallAt(tiles.getTileLocation(64, 8), false)
    }
})
