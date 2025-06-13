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
            music.play(music.createSong(hex`0078000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80024000000010001060400050001050800090001070c000d000106100011000104140015000103`), music.PlaybackMode.InBackground)
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
            music.play(music.createSong(hex`0078000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80024000000010001060400050001050800090001070c000d000106100011000104140015000103`), music.PlaybackMode.InBackground)
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
function Restart () {
    Shop_Distance = 3
    Boss_Distance = 7
    diffculty = game.askForNumber("What prestige level", 1)
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
    walking = 0
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
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (Boss_Created == 1) {
        if (statusbar.value <= 0) {
            game.gameOver(false)
        } else {
            Asking = game.askForNumber("Continue?(1 = yes)")
            if (Asking == 0) {
                game.setGameOverScoringType(game.ScoringType.HighScore)
                game.gameOver(true)
            } else {
                sprites.destroy(statusbar2.spriteAttachedTo())
                Restart()
            }
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
        if (Randomizer < 5) {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile42`)
        } else if (Randomizer < 8) {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile43`)
        } else {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile44`)
        }
    }
}
function Boss_Fight () {
    music.play(music.createSong(hex`0078000408040300001c00010a006400f401640000040000000000000000000000000005000004240000000400012404000800012508000c0001220c001000012410001400011e14001800012005001c000f0a006400f4010a00000400000000000000000000000000000000026d001c002000011920002400011d24002800011b28002c00011d30003400011934003800021b1e3c004000012240004400011e44004800011b4c005000011d5400580001195c006000012060006400011e64006800012268006c00012070007400011978007c0001197c008000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80084001c001d0001042000210001062400250001052800290001063000310001043400350001053c003d0001004400450001054800490001044c004d0001055000510001015400550001015800590001025c005d0001016000610001006400650001016800690001006c006d0001017000710001027400750001007800790001027c007d000101`), music.PlaybackMode.LoopingInBackground)
    let Boss_1= new Boss (assets.image`The Conductor`,SpriteKind.Boss)
game.setGameOverScoringType(game.ScoringType.HighScore)
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
            music.play(music.createSong(hex`0050000408050207001c00020a006400f401640000040000000000000000000000000000000003140100000400012204000800012008000c0001240c001000012210001400012014001800012518001c0001241c002000012220002400012028002c00011d2c002e0001242e003000012230003200012532003400012434003600012036003800012238003a0001253a003c0001243c003e0001293e004000012942004400012c46004800012a48004a0001294a004c00012a4e005000012550005200012954005600012756005800012a58005a0001295a005c0001255c005e0001275e006000012462006400012464006600012566006800012068006900011d6a006c0001196c006e00011e70007100012072007400011d74007600012278007a0001227a007c0001247c007e0001277e008000012a82008400012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8005a002e002f0001023400350001033a003b0001023c003d0001054000410001074a004b00010752005300010b5c005d0001096000610001046600670001016a006b0001056e006f00010274007500010378007900010782008300010a`), music.PlaybackMode.LoopingInBackground)
        } else if (Boss_Distance == 0) {
            tiles.setCurrentTilemap(tilemap`level6`)
            tiles.coverAllTiles(assets.tile`Boss Tiles`, assets.tile`Tiles`)
            tiles.coverAllTiles(assets.tile`Ground Tiles`, assets.tile`Tiles`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 16))
            Boss_Fight()
        } else {
            music.play(music.createSong(hex`0078000408030400001c00010a006400f40164000004000000000000000000000000000500000418000c001000011d10001400011e14001800011d18001c00011b01001c000f05001202c102c20100040500280000006400280003140006020004120000000400012704000800012408000c00012508001c000e050046006603320000040a002d0000006400140001320002010002540004000800012010001400012220002400011e28002a00011b2c002e00011d32003400011b34003600011d3c003e00012242004400011e4400480001204a004c0001194c004e00011b50005400012058005c00011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8007e002800290001052c002d0001043000310001053400350001043600370001053800390001043a003b0001023c003d0001033e003f0001024200430001014600470001024800490001014a004b0001044c004d0001054e004f0001045200530001075400550001065600570001075a005b0001045c005d0001045e005f000104`), music.PlaybackMode.InBackground)
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
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . f f . . . . . . . 
                        . f f b b f f f . . f f 
                        f b b b b b b b f f f f 
                        . f f b b f f f . . f f 
                        . . . f f . . . . . . . 
                        `, otherSprite, -50, randint(-30, 30))
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
let Hold_Status_Boss_Bar = 0
let Random_Boss_Attacks = 0
let Placement = 0
let mySprite3: Sprite = null
let Randomizer = 0
let Axe = 0
let EnemySpawned = 0
let mySprite2: Sprite = null
let statusbar2: StatusBarSprite = null
let Asking = 0
let walking = 0
let Boss_Created = 0
let how_much_damage = 0
let diffculty = 0
let Boss_Distance = 0
let Shop_Distance = 0
let Sitted = 0
let statusbar: StatusBarSprite = null
let Ticket = 0
let Train_Value = 0
let Jumps = 0
let Jump = 0
let Cooldown_once = 0
let mySprite: Sprite = null
let x = 0
class Boss extends sprites.ExtendableSprite{
        health = 100
        hit(damage: number): void {
            this.health -= damage
            if (this.health <= 0){
                
                game.setGameOverScoringType(game.ScoringType.HighScore)
                game.gameOver(true)
            }
        }

    constructor(image: Image, SpriteKind: number){
        super(image,SpriteKind)
        this.health = 100
    }

    }
class Player extends sprites.ExtendableSprite {
    healthPlayer = 100
    hit(damage: number): void {
        this.healthPlayer -= damage
        if (this.healthPlayer <= 0) {
            game.setGameOverScoringType(game.ScoringType.HighScore)
            game.gameOver(false)
        }
    }

    constructor(image: Image, SpriteKind: number) {
        super(image, SpriteKind)
        this.healthPlayer = 100
    }
}
Restart()
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
forever(function () {
    if (mySprite.vx > 0) {
        characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.MovingRight))
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else if (mySprite.vx < 0) {
        characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.MovingLeft))
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    } else {
        characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.NotMoving))
        characterAnimations.loopFrames(
        mySprite,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
    pause(200)
})
forever(function () {
    if (walking == 0) {
        walking += 1
        music.play(music.createSong(hex`0078000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80012000000010001060c000d000104180019000107`), music.PlaybackMode.InBackground)
        pause(2300)
        walking += -1
    }
})
