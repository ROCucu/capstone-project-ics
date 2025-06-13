namespace SpriteKind {
    export const Ally = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Boss_Follow = SpriteKind.create()
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Train_Value == 1) {
        if (mySprite.vx < 0) {
            controller.moveSprite(mySprite, 0, 0)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft))
            characterAnimations.loopFrames(
            mySprite,
            [img`
                ..........................ffffff....
                .........................f2feeeeff..
                ........................f222feeeeff.
                ...................cc...feeeeffeeef.
                ...................cdc.fe2222eeffff.
                ...................cddcf2effff222ef.
                ....................cddcffeeefffffff
                .....................cddce44fbe44eff
                ......................cdceddf14d4eef
                ......................cccdeddd4eeef.
                .......................edd4e44eeff..
                ........................ee442222f...
                .........................f2e2222f...
                .........................f554444f...
                ..........................ffffff....
                ............................fff.....
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ...........................fff......
                ..........................f2fffff...
                ........................ff22eeeeeff.
                .......................ff222eeeeeeff
                .......................feeeefffeeeef
                ......................fe2222eeefffff
                ......................f2efffff222eff
                ...............cc.....fffeeeffffffff
                ...............cdcc...fee44fbbe44efe
                ...............ccddcc..feddfbb4d4eef
                .................cdddceefddddd4eeef.
                ..................ccdcddee2222222f..
                ...................cccdd44e544444f..
                ......................eeeeffffffff..
                ..........................ff...fff..
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ............................ff......
                ..........................ff2ffff...
                .........................ff2feeeeff.
                ........................ff22feeeeeff
                ........................feeeeffeeeef
                .......................fe2222eefffff
                .......................f2effff222eff
                .......................fffeeefffffff
                .......................fee44fbe44efe
                ........................feddfb4d4eef
                .......................c.eeddd4eeef.
                .................ccccccceddee2222f..
                ..................dddddcedd44e444f..
                ...................ccccc.eeeefffff..
                .......................c...ffffffff.
                ............................ff..fff.
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ..........................ffffff....
                .........................f2feeeeff..
                ........................f222feeeeff.
                ........................feeeeffeeef.
                .......................fe2222eeffff.
                .......................f2effff222ef.
                .......................fffeeefffffff
                .......................fee44fbe44eff
                ........................feddf14d4eef
                .........................fdddd4eeef.
                .........................fe444eddf..
                .........................ccc22eddf..
                .........................cdc22fee...
                ........................cddc4444f...
                .......................cddcfffff....
                ......................cddc..fff.....
                ......................cdc...........
                ......................cc............
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ...............ffff.................
                .............fff22fff...............
                ............fff2222fff..............
                ...........fffeeeeeefff.............
                ...........ffe222222eef.............
                ...........fe2ffffff2ef.............
                ...........ffffeeeeffff.............
                ..........ffefbf44fbfef.............
                ..........fee41fddf14ee.............
                ...........feeddddddeef.............
                ............fee4444eef..............
                ...........e4f222222f4e.............
                ...........4df222222fd4.............
                ...........44f445544f44.............
                ..............ffffff................
                ..............ff..ff................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `],
            100,
            characterAnimations.rule(Predicate.FacingLeft)
            )
        } else {
            controller.moveSprite(mySprite, 0, 0)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight))
            characterAnimations.loopFrames(
            mySprite,
            [img`
                ....................................
                ....ffffff..........................
                ..ffeeeef2f.........................
                .ffeeeef222f........................
                .feeeffeeeef...cc...................
                .ffffee2222ef.cdc...................
                .fe222ffffe2fcddc...................
                fffffffeeeffcddc....................
                ffe44ebf44ecddc.....................
                fee4d41fddecdc......................
                .feee4dddedccc......................
                ..ffee44e4dde.......................
                ...f222244ee........................
                ...f2222e2f.........................
                ...f444455f.........................
                ....ffffff..........................
                .....fff............................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ....................................
                .......fff..........................
                ....fffff2f.........................
                ..ffeeeee22ff.......................
                .ffeeeeee222ff......................
                .feeeefffeeeef......................
                .fffffeee2222ef.....................
                fffe222fffffe2f.....................
                fffffffffeeefff.....cc..............
                fefe44ebbf44eef...ccdc..............
                .fee4d4bbfddef..ccddcc..............
                ..feee4dddddfeecdddc................
                ...f2222222eeddcdcc.................
                ...f444445e44ddccc..................
                ...ffffffffeeee.....................
                ...fff...ff.........................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                .......ff...........................
                ....ffff2ff.........................
                ..ffeeeef2ff........................
                .ffeeeeef22ff.......................
                .feeeeffeeeef.......................
                .fffffee2222ef......................
                fffe222ffffe2f......................
                ffffffffeeefff......................
                fefe44ebf44eef......................
                .fee4d4bfddef.......................
                ..feee4dddee.c......................
                ...f2222eeddeccccccc................
                ...f444e44ddecddddd.................
                ...fffffeeee.ccccc..................
                ..ffffffff...c......................
                ..fff..ff...........................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ....ffffff..........................
                ..ffeeeef2f.........................
                .ffeeeef222f........................
                .feeeffeeeef........................
                .ffffee2222ef.......................
                .fe222ffffe2f.......................
                fffffffeeefff.......................
                ffe44ebf44eef.......................
                fee4d41fddef........................
                .feee4ddddf.........................
                ..fdde444ef.........................
                ..fdde22ccc.........................
                ...eef22cdc.........................
                ...f4444cddc........................
                ....fffffcddc.......................
                .....fff..cddc......................
                ...........cdc......................
                ............cc......................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `,img`
                ......ffff..........................
                ....fff22fff........................
                ...fff2222fff.......................
                ..fffeeeeeefff......................
                ..ffe222222eef......................
                ..fe2ffffff2ef......................
                ..ffffeeeeffff......................
                .ffefbf44fbfeff.....................
                .fee41fddf14eef.....................
                ..feeddddddeef......................
                ...fee4444eef.......................
                ..e4f222222f4e......................
                ..4df222222fd4......................
                ..44f445544f44......................
                .....ffffff.........................
                .....ff..ff.........................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `],
            100,
            characterAnimations.rule(Predicate.FacingRight)
            )
        }
        pause(450)
        characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.Moving))
        controller.moveSprite(mySprite, 100, 0)
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
                mySprite.vy += -115
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (info.score() >= 3) {
            info.changeScoreBy(-3)
            statusbar.max += 2
            statusbar.value += 2
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
info.onCountdownEnd(function () {
    x += 1
    Train_Value += 1
    Jump += -1
    Sitted += 1
    if (tiles.tileAtLocationIsWall(tiles.locationInDirection(mySprite.tilemapLocation(), CollisionDirection.Bottom))) {
        tiles.setWallAt(tiles.locationInDirection(mySprite.tilemapLocation(), CollisionDirection.Bottom), false)
    }
    controller.moveSprite(mySprite, 100, 0)
    tiles.setCurrentTilemap(tilemap`level3`)
    Auto_Train_Rooms()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (Boss_Created == 1) {
        if (statusbar.value <= 0) {
            game.gameOver(false)
        } else {
            sprites.destroy(statusbar2.spriteAttachedTo())
            game.setGameOverScoringType(game.ScoringType.HighScore)
            game.gameOver(true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.NotMoving)) == false) {
        sprites.destroy(otherSprite)
        statusbar.value += how_much_damage * 0.4
    } else {
        sprites.destroy(otherSprite)
        statusbar.value += how_much_damage * 0.75
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (info.score() >= 10) {
            info.changeScoreBy(-10)
            statusbar.max += 10
            statusbar.value += 10
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (info.score() >= 6) {
            info.changeScoreBy(-6)
            statusbar.max += 5
            statusbar.value += 5
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
function Auto_Train_Rooms () {
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
        mySprite2.setBounceOnWall(true)
        tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    }
    EnemySpawned += 1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
        Axe += 1
    }
})
function Random_Tile_Shop () {
    for (let index = 0; index < 3; index++) {
        Randomizer = randint(0, 10)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile45`)
        if (Randomizer < 4) {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile42`)
        } else if (Randomizer < 8) {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile43`)
        } else {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile44`)
        }
    }
}
function Boss_Fight () {
    class Boss extends sprites.ExtendableSprite{
        health = 30
        hit(damage: number): void {
            this.health -= damage
        }

    constructor(image: Image, SpriteKind: number){
        super(image,SpriteKind)
        this.health = 30
    }

    }
let Boss_1= new Boss (assets.image`The Conductor`,SpriteKind.Boss)
mySprite3 = sprites.create(img`
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        `, SpriteKind.Boss_Follow)
    mySprite3.setFlag(SpriteFlag.Invisible, true)
    mySprite3.follow(Boss_1, 99999)
    Boss_Created += 1
    statusbar2 = statusbars.create(90, 13, StatusBarKind.Health)
    statusbar2.attachToSprite(Boss_1)
    statusbar2.setLabel("Conductor")
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar2.max = 30
    statusbar2.value = 30
    statusbar2.setBarBorder(2, 5)
    statusbar2.setColor(1, 2)
    Boss_1.vy += 20
    tiles.placeOnTile(Boss_1, tiles.getTileLocation(23, 15))
    statusbar2.setPosition(mySprite.x, mySprite.y - 80)
    Placement += 1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    if (controller.B.isPressed()) {
        Shop_Distance += 3
        Train_Value += 1
        tiles.setCurrentTilemap(tilemap`level0`)
        Auto_Train_Rooms()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    if (Sitted == 1) {
        Shop_Distance += -1
        Boss_Distance += -1
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ally)
        if (Shop_Distance == 0) {
            Train_Value += -1
            how_much_damage += -1 * diffculty
            tiles.setCurrentTilemap(tilemap`level4`)
            Random_Tile_Shop()
            tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 14))
            statusbar.value += statusbar.max
        } else if (Boss_Distance == 0) {
            tiles.setCurrentTilemap(tilemap`level6`)
            tiles.coverAllTiles(assets.tile`Boss Tiles`, assets.tile`Tiles`)
            tiles.coverAllTiles(assets.tile`Ground Tiles`, assets.tile`Tiles`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 16))
            Boss_Fight()
        } else {
            tiles.setCurrentTilemap(tilemap`level3`)
            Auto_Train_Rooms()
            tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.Moving)) == false) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite)
    } else {
        sprites.destroy(otherSprite)
        statusbar.value += how_much_damage
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.Moving)) == false) {
        statusbar2.value += how_much_damage
        if (mySprite.x - otherSprite.x < 0) {
            mySprite.x += -64
            mySprite.y += -10
        } else {
            mySprite.x += 64
            mySprite.y += -10
        }
        Random_Boss_Attacks = randint(1, 6)
        if (Random_Boss_Attacks <= 2) {
            animation.runImageAnimation(
            otherSprite,
            [img`
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                666666666666666666666666666666
                `,img`
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                `,img`
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                999999999999999999999999999999
                `,img`
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                888888888888888888888888888888
                `,img`
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                222222222222222222222222222222
                `],
            100,
            false
            )
            pause(500)
            if (mySprite.x - otherSprite.x < 5) {
                Hold_Status_Boss_Bar += 50
                otherSprite.setVelocity(-100, 0)
                animation.runImageAnimation(
                otherSprite,
                [img`
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    `,img`
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    `,img`
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    `,img`
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    `,img`
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    `],
                100,
                false
                )
                pause(500)
                otherSprite.setVelocity(0, 0)
            } else {
                Hold_Status_Boss_Bar += -50
                otherSprite.setVelocity(100, 0)
                animation.runImageAnimation(
                otherSprite,
                [img`
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    666666666666666666666666666666
                    `,img`
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    `,img`
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    999999999999999999999999999999
                    `,img`
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    888888888888888888888888888888
                    `,img`
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    222222222222222222222222222222
                    `],
                100,
                false
                )
                pause(500)
                otherSprite.setVelocity(0, 0)
            }
        } else if (Random_Boss_Attacks < 5) {
            if (mySprite.x - otherSprite.x < 0) {
                for (let index = 0; index < 6; index++) {
                    projectile = sprites.createProjectileFromSprite(assets.image`throw fivne`, otherSprite, -50, randint(-30, 30))
                }
            } else {
                for (let index = 0; index < 6; index++) {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . f f . . . 
                        f f . . f f f b b f f . 
                        f f f f b b b b b b b f 
                        f f . . f f f b b f f . 
                        . . . . . . . f f . . . 
                        `, otherSprite, 50, randint(-30, 30))
                }
            }
        } else {
            statusbar2.value += 6 + diffculty
        }
    } else {
        statusbar.value += how_much_damage * 2.5
        if (mySprite.x - otherSprite.x < 0) {
            mySprite.x += -64
            mySprite.y += -10
        } else {
            mySprite.x += 64
            mySprite.y += -10
        }
    }
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Random_Boss_Attacks = 0
let mySprite3: Sprite = null
let Randomizer = 0
let Axe = 0
let EnemySpawned = 0
let mySprite2: Sprite = null
let statusbar2: StatusBarSprite = null
let Sitted = 0
let Ticket = 0
let x = 0
let Jump = 0
let Boss_Created = 0
let Cooldown_once = 0
let mySprite: Sprite = null
let how_much_damage = 0
let Jumps = 0
let statusbar: StatusBarSprite = null
let Train_Value = 0
let diffculty = 0
let Boss_Distance = 0
let Shop_Distance = 0
Shop_Distance = 3
Boss_Distance = 7
diffculty = game.askForNumber("What prestige level", 1)
let Hold_Status_Boss_Bar = 0
let Placement = 0
Train_Value = 0
statusbar = statusbars.create(40, 8, StatusBarKind.Health)
Jumps = 1
how_much_damage = -1 * diffculty
statusbar.max = 10
statusbar.value += 10
statusbar.attachToSprite(mySprite)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setBarBorder(1, 15)
Cooldown_once = 0
Boss_Created = 0
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
characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.Moving))
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
forever(function () {
    if (Placement == 1) {
        statusbar2.setOffsetPadding(-376 + Hold_Status_Boss_Bar + mySprite.x, 293 - mySprite.y)
    }
})
