namespace SpriteKind {
    export const Ally = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (x == 0) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile18`)) {
            if (controller.B.isPressed()) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(location.column, location.row - 2))
                controller.moveSprite(mySprite, 0, 0)
                tiles.setWallAt(location, true)
                if (Cooldown_once == 0) {
                    if (info.countdown() == 0) {
                        info.startCountdown(5)
                        Cooldown_once += 1
                        Jump += 1
                    }
                }
            }
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (Jumps == 0) {
            Jumps += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Train_Room_1`)
    scene.setBackgroundColor(12)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jump == 0) {
        if (mySprite.vy < 50) {
            if (Jumps > 0) {
                mySprite.vy += -100
                Jumps += -1
            }
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
info.onCountdownEnd(function () {
    x += 1
    Jump += -1
    if (tiles.tileAtLocationIsWall(tiles.locationInDirection(mySprite.tilemapLocation(), CollisionDirection.Bottom))) {
        tiles.setWallAt(tiles.locationInDirection(mySprite.tilemapLocation(), CollisionDirection.Bottom), false)
    }
    controller.moveSprite(mySprite, 100, 0)
    tiles.setCurrentTilemap(tilemap`level3`)
    for (let index = 0; index < 7; index++) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite2, sprites.builtin.forestTiles0)
        mySprite2.setVelocity(randint(-30, 30), 0)
        tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`myTile6`)
    }
    EnemySpawned += 1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (x == 0) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile18`)) {
            if (controller.B.isPressed()) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(location.column, location.row - 2))
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
        Axe += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Ally)
    tiles.setCurrentTilemap(tilemap`Train_Room_1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    statusbar.value += -1
})
let Axe = 0
let EnemySpawned = 0
let mySprite2: Sprite = null
let Ticket = 0
let x = 0
let Jump = 0
let Cooldown_once = 0
let mySprite: Sprite = null
let Jumps = 0
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(40, 8, StatusBarKind.Health)
Jumps = 1
statusbar.max = 10
statusbar.value += 10
statusbar.attachToSprite(mySprite)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setBarBorder(1, 15)
Cooldown_once = 0
Jump = 0
x = 0
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
        if (Ticket == 1) {
            tiles.setWallAt(tiles.getTileLocation(64, 8), false)
        }
    }
})
