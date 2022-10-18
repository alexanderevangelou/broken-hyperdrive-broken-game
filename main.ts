namespace SpriteKind {
    export const BlackHole = SpriteKind.create()
    export const EndOfTime = SpriteKind.create()
    export const Heart = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (has_time_ended == false) {
        if (statusbar_exists == false) {
            statusbar_exists = true
            if (statusbar_exists == true) {
                statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
                statusbar.attachToSprite(SpaceShip, -25, 0)
                statusbar.value = 100
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BlackHole, function (sprite, otherSprite) {
    scaling.scaleByPixels(sprite, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(sprite, -10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    sprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.BlackHole, function (sprite, otherSprite) {
    scaling.scaleByPixels(sprite, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(sprite, -10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    sprite.destroy(effects.fire, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (has_time_ended == false) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpaceShip, 200, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        if (does_black_hole_exist == true) {
            projectile.follow(SuperMasiveBlackHole, 150)
        }
        music.pewPew.play()
    }
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    if (info.life() != 5) {
        info.changeLifeBy(1)
        otherSprite.destroy(effects.halo, 100)
    } else {
        otherSprite.destroy(effects.hearts, 100)
    }
})
sprites.onOverlap(SpriteKind.Heart, SpriteKind.BlackHole, function (sprite, otherSprite) {
    scaling.scaleByPixels(sprite, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(sprite, -10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    sprite.destroy(effects.fire, 100)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (has_time_ended == false) {
        if (statusbar.value != 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . 2 2 . . 
                . 2 4 4 2 . 
                2 4 5 5 4 2 
                2 4 5 5 4 2 
                . 2 4 4 2 . 
                . . 2 2 . . 
                `, SpaceShip, 100, 0)
            animation.runImageAnimation(
            projectile2,
            [img`
                . 2 2 2 2 . 
                2 7 4 4 7 2 
                2 4 5 5 4 2 
                2 4 5 5 4 2 
                2 7 4 4 7 2 
                . 2 2 2 2 . 
                `,img`
                . 5 5 5 5 . 
                5 2 7 7 2 5 
                5 7 4 4 7 5 
                5 7 4 4 7 5 
                5 2 7 7 2 5 
                . 5 5 5 5 . 
                `,img`
                . 4 4 4 4 . 
                4 5 2 2 5 4 
                4 2 7 7 2 4 
                4 2 7 7 2 4 
                4 5 2 2 5 4 
                . 4 4 4 4 . 
                `,img`
                . 7 7 7 7 . 
                7 4 5 5 4 7 
                7 5 2 2 5 7 
                7 5 2 2 5 7 
                7 4 5 5 4 7 
                . 7 7 7 7 . 
                `],
            100,
            true
            )
            if (does_black_hole_exist == true) {
                projectile2.follow(SuperMasiveBlackHole, 150)
            }
            statusbar.value += -1
        } else {
            pause(2000)
            statusbar_exists = false
            statusbar.destroy()
        }
    }
    projectile2.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Heart, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    sprite.destroy(effects.disintegrate, 100)
})
info.onLifeZero(function () {
    Do_not_do_this_again = true
    if (Do_not_do_this_again == true) {
        if (info.score() <= 30) {
            does_black_hole_exist = true
            effects.starField.endScreenEffect()
            SuperMasiveBlackHole = sprites.create(img`
                ccc.........................c
                ..ccc2......................c
                .....222....................c
                .......222222222222........cc
                ........2244444444422......c.
                .......244555555555442.....c.
                ......24551111111115542....2.
                .....245f1fffffffff1f542..22.
                ....245f1fffffffffff1f542.2..
                ....2451fffffffffffff1542.2..
                ...2451fffffffffffffff15422..
                ...2451fffffffffffffff15422..
                ...2451fffffffffffffff15422..
                ...2451fffffffffffffff1542...
                ...2451fffffffffffffff1542...
                ...2451fffffffffffffff1542...
                ..22451fffffffffffffff1542...
                ..22451fffffffffffffff1542...
                ..22451fffffffffffffff1542...
                ..2.2451fffffffffffff1542....
                .22.245f1fffffffffff1f542....
                .2...245f1fffffffff1f542.....
                cc....24551111111115542......
                c......244555555555442.......
                c.......2244444444422........
                c.........222222222..........
                c..........2222222...........
                c................2222........
                c...................22ccccccc
                `, SpriteKind.BlackHole)
            SpaceShip.follow(SuperMasiveBlackHole, 150)
            timer.after(10000, function () {
                SpaceShip.sayText("hyperspace machine repaired :)", 2000, true)
                info.setLife(3)
                SuperMasiveBlackHole.destroy(effects.disintegrate, 100)
                does_black_hole_exist = false
                Enemies.setVelocity(randint(-100, -200), 0)
            })
        } else if (info.score() >= 50) {
            last_supernova = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.EndOfTime)
            animation.runImageAnimation(
            last_supernova,
            [img`
                111.111111111111.111
                111.111111111111.111
                111.111111111111.111
                ....111111111111....
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                ....111111111111....
                111.111111111111.111
                111.111111111111.111
                111.111111111111.111
                `,img`
                111.111111111111.111
                111.111111111111.111
                111.111111111111.111
                ....111111111111....
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                ....111111111111....
                111.111111111111.111
                111.111111111111.111
                111.111111111111.111
                `,img`
                111.111111111111.111
                111.111111111111.111
                111.111111111111.111
                ....111111111111....
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                11111111111111111111
                ....111111111111....
                111.111111111111.111
                111.111111111111.111
                111.111111111111.111
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .......44...........
                ......4554..........
                ......2552..........
                .......22...........
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ....................
                ..........4.........
                ....2....44.........
                ....24..454.........
                .....24d554.........
                .....255554.........
                ......255554........
                ......254244........
                ......44..244.......
                .....44.............
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `,img`
                .3...........4......
                .33.........44......
                .3d3..44..44d4......
                ..35345544dd44......
                ..3d5d11d55d44......
                ..455111151154......
                .45555115111d44.....
                .4d511555111554.....
                .4451155555d554.....
                ..43d555d55ddd4.....
                .455d555ddd554......
                .455d35dd3d554......
                .44dd4ddd43dd4......
                ..45444444444.......
                .454..444...44......
                .44..........44.....
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                .....bb.bbb.........
                ....b11b111b........
                ..bb311dd1ddbb......
                .b11ddbbbbb11b......
                .b111b.....bddb.....
                ..3ddb.....bd11b....
                .b1d3.......b11b....
                .b11b......bb1db....
                .b1db......bd3db....
                .bbddb....bdddb.....
                .bddddb.bb3dd3b.....
                ..bdd33bd33bbb......
                ...bbbdddddb........
                ......bbbbb.........
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                .........1..1...1...
                ..1.......1.........
                .......1......1...1.
                .1..................
                ....................
                ...1..1....1........
                .................1..
                ..............1.....
                .......1............
                ......1....1........
                ................1...
                ...1................
                .............1......
                .......1..........1.
                .1..................
                ...................1
                ............1...1...
                .....1..1...........
                ....................
                `,img`
                ....................
                ....1..........1....
                .................1..
                .......1.....1......
                ....................
                .1..................
                .........1...1......
                .....1....1.....1...
                .1..................
                ..................1.
                .................1..
                .........1...1......
                ..1...............1.
                ......1.............
                ...........1....1...
                ....................
                ..1.....1.........1.
                ............1.......
                .....1..........1...
                ...1................
                `,img`
                ....................
                ...........1..1.....
                ...1...1............
                1...................
                ..................1.
                .1..........1.......
                ......1.............
                ................1...
                ...1................
                ........1....1......
                ............1.......
                .....1..............
                ..1.................
                ........1....1..1...
                ....................
                ..................1.
                .1...1......1.......
                .........1.......1..
                ...1...1..1.........
                ....................
                `,img`
                ................1...
                ...1..........1.....
                .......1............
                .1.........1.....1..
                ....................
                ...1....1...........
                .............1......
                .1...............1..
                ......1...1.........
                ..1.................
                .1..................
                ..................1.
                ...1.....1....1.....
                ......1...1.........
                ..................1.
                ....................
                ......1.....1.......
                ..1.................
                ....1..........1....
                ....................
                `,img`
                ...1................
                .....1..........1...
                ............1.......
                ..1.....1.........1.
                ....................
                ...........1....1...
                ......1.............
                ..1...............1.
                .........1...1......
                .................1..
                ..................1.
                .1..................
                .....1....1.....1...
                .........1...1......
                .1..................
                ....................
                .......1.....1......
                .................1..
                ....1..........1....
                ....................
                `,img`
                ....................
                ....1..........1....
                .................1..
                .......1.....1......
                ....................
                .1..................
                .........1...1......
                .....1....1.....1...
                .1..................
                ..................1.
                .................1..
                .........1...1......
                ..1...............1.
                ......1.............
                ...........1....1...
                ....................
                ..1.....1.........1.
                ............1.......
                .....1..........1...
                ...1................
                `],
            100,
            false
            )
            controller.moveSprite(SpaceShip, 0, 0)
            has_time_ended = true
            timer.after(2000, function () {
                game.setDialogFrame(img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 d d d d d d d d d d d d d 1 
                    1 d b b b b b b b b b b b d 1 
                    1 d b a a a a a a a a a b d 1 
                    1 d b a c c c c c c c a b d 1 
                    1 d b a c e e e e e c a b d 1 
                    1 d b a c e f f f e c a b d 1 
                    1 d b a c e f f f e c a b d 1 
                    1 d b a c e f f f e c a b d 1 
                    1 d b a c e e e e e c a b d 1 
                    1 d b a c c c c c c c a b d 1 
                    1 d b a a a a a a a a a b d 1 
                    1 d b b b b b b b b b b b d 1 
                    1 d d d d d d d d d d d d d 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    `)
                game.setDialogTextColor(12)
                game.setDialogCursor(img`
                    .555.5.......555....
                    ..5....55555.5.5....
                    ..5..5.5.5.5.555....
                    ..5..5.5.5.5.5......
                    .............555....
                    ....................
                    ..2...222.222.......
                    ..2...2.2.2.........
                    ..222.222.222.......
                    ..2.2...2...2.......
                    .........9222.....9.
                    99.......9..999...9.
                    9........9..9.9...9.
                    99.999.999..999.999.
                    9..9.9.9.9..9...9.9.
                    99.9.9.9999.999.9999
                    ffffffffffffffffffff
                    ......222f222.......
                    .....2222f2222......
                    ....22222f22222.....
                    ...222222f222222....
                    ...222222f222255....
                    ...222222f222225....
                    ...222222fccc255....
                    ...2222222222225....
                    ...2222222222255....
                    ...2222222222222....
                    ....22222222222.....
                    .....222222222......
                    ......2222222.......
                    `)
                game.showLongText("your time has ended to explore the universe, your hyperdrive broke and has made the supernova of the end of time", DialogLayout.Center)
                game.over(false)
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BlackHole, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
        2 4 5 5 5 5 5 5 5 5 5 5 5 4 2 
        2 4 5 1 1 1 1 1 1 1 1 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 f f f f f f f 1 5 4 2 
        2 4 5 1 1 1 1 1 1 1 1 1 5 4 2 
        2 4 5 5 5 5 5 5 5 5 5 5 5 4 2 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        `)
    game.setDialogTextColor(2)
    game.setDialogCursor(img`
        .......222222222.......
        .....2244444444422.....
        ....244555555555442....
        ...24551111111115542...
        ..245f1fffffffff1f542..
        .245f1fffffffffff1f542.
        .2451fffffffffffff1542.
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        2451fffffffffffffff1542
        .2451fffffffffffff1542.
        .245f1fffffffffff1f542.
        ..245f1fffffffff1f542..
        ...24551111111115542...
        ....244555555555442....
        .....2244444444422.....
        .......222222222.......
        `)
    game.showLongText("your broken hyperspace machine made a SuperMasive black hole that made you and everything around you go into it. you were never to be seen again", DialogLayout.Center)
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 100)
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    music.bigCrash.play()
})
let hearts: Sprite = null
let last_supernova: Sprite = null
let Enemies: Sprite = null
let Do_not_do_this_again = false
let projectile2: Sprite = null
let SuperMasiveBlackHole: Sprite = null
let does_black_hole_exist = false
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let has_time_ended = false
let SpaceShip: Sprite = null
let statusbar_exists = false
let list = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c . . . . . . 
    . . . . . . a b a a . . . . . . 
    . . . . . c b a f c a c . . . . 
    . . . . c b b b f f a c c . . . 
    . . . . b b f a b b a a c . . . 
    . . . . c b f f b a f c a . . . 
    . . . . . c a a c b b a . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . . . . . . 
    . . . . . c a a a a . . . . . . 
    . . . . . a a f f b a . . . . . 
    . . . . c a b f f c b . . . . . 
    . . . . c b b b a f c b . . . . 
    . . . . c b a c a b b b . . . . 
    . . . . . b b f f a a c . . . . 
    . . . . . . a a b b c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . c a a a a . . . . . . . 
    . . . . a a f f b a . . . . . . 
    . . . c a b f f c b . . . . . . 
    . . . c b b b a f c b . . . . . 
    . . . c b a c a b b b . . . . . 
    . . . . b b f f a a c . . . . . 
    . . . . . a a b b c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . c a a a c . . . . . . . 
    . . . c c f a b b c . . . . . . 
    . . . b f f b f a a . . . . . . 
    . . . b b a b f f a . . . . . . 
    . . . c b f b b a c . . . . . . 
    . . . . b a f c c . . . . . . . 
    . . . . . b b c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . c c 8 . . . . 
    . . . . . . 8 c c c f 8 c c . . 
    . . . c c 8 8 f c a f f f c c . 
    . . c c c f f f c a a f f c c c 
    8 c c c f f f f c c a a c 8 c c 
    c c c b f f f 8 a c c a a a c c 
    c a a b b 8 a b c c c c c c c c 
    a f c a a b b a c c c c c f f c 
    a 8 f c a a c c a c a c f f f c 
    c a 8 a a c c c c a a f f f 8 a 
    . a c a a c f f a a b 8 f f c a 
    . . c c b a f f f a b b c c 6 c 
    . . . c b b a f f 6 6 a b 6 c . 
    . . . c c b b b 6 6 a c c c c . 
    . . . . c c a b b c c c . . . . 
    . . . . . c c c c c c . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c . . 
    . c c c c c . c c c c c f c c . 
    c c a c c c c c 8 f f c f f c c 
    c a f a a c c a f f c a a f f c 
    c a 8 f a a c a c c c a a a a c 
    c b c f a a a a a c c c c c c c 
    c b b a a c f 8 a c c c 8 c c c 
    . c b b a b c f a a a 8 8 c c . 
    . . . . a a b b b a a 8 a c . . 
    . . . . c b c a a c c b . . . . 
    . . . . b b c c a b b a . . . . 
    . . . . b b a b a 6 a . . . . . 
    . . . . c b b b 6 6 c . . . . . 
    . . . . . c a 6 6 b c . . . . . 
    . . . . . . . c c c . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c b a c . . . . . . 
    . . . . c c b c f a c . . . . . 
    . . . . a f b b b a c . . . . . 
    . . . . a f f b a f c c . . . . 
    . . . . c b b a f f c . . . . . 
    . . . . . b b a f a . . . . . . 
    . . . . . . c b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `,
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `,
img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c f f f a f f a c . . . 
    . c c a c c f a a c f f a c . . 
    . a b a a c 6 a a c c f a c c c 
    . a b b b 6 a b b a a c a f f c 
    . . a b b a f f b b a a c f f c 
    c . a a a c c f c b a a c f a c 
    c c a a a c c a a a b b a c a c 
    a c a b b a a 6 a b b 6 b b c . 
    b a c b b b 6 b c . c c a c . . 
    b a c c a b b a c . . . . . . . 
    b b a c a b a a . . . . . . . . 
    a b 6 b b a c . . . . . . . . . 
    . a a b c . . . . . . . . . . . 
    `
]
statusbar_exists = false
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff9ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffff9ffffffffffffffffffffffff9fffffffff9fffffffffffffff99ffffffffff9ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffff9ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffff
    fffffffffff9ff9ffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999ffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff999999999999996666666666666666666666666666666666666666669999999fffffffffffffffff
    ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff9999666666666666666666666666666666666666666666666666666666666666666999999fffffffffff
    ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff999996666666666666666666666666666666666666666666666666666666666666666666666666999999fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666699fff
    fffffffff9fff9fffffff9fffffffffffffffffffffffffff999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
    fffffffffffffffffffffffffffffffffffffff9999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    fffffffffffffffffffffffffffff99999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    fffffff9fffffffffffff9999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    fffffffffffffffff99996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ffffffffffff9999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    fffffffff9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ffffffff99666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ffff999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    fff9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    f996666666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888666666666666666666666666666666666666666666666666666666666666666
    9966666666666666666666666666666666668888888888888866666666666666666666668888888888888888888888888888888866666666666666666666666666666666666666666666666666666666
    6666666666666666666666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666
    6666666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666666666666666666
    6666666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666666
    6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666666666666
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
effects.starField.startScreenEffect()
SpaceShip = sprites.create(img`
    . . . . . . . 2 2 4 5 7 9 6 8 c 
    . . . . . . 2 4 4 2 . . . . . . 
    . . . . . 2 4 5 5 4 2 . . . . . 
    . . . . 2 4 5 7 7 5 4 2 . . . . 
    . . . 2 4 5 7 9 9 7 5 4 2 . . . 
    . . 2 4 5 7 9 6 6 9 7 5 4 2 . . 
    . 2 4 5 7 9 6 8 8 6 9 7 5 4 2 . 
    2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
    2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
    . 2 4 5 7 9 6 8 8 6 9 7 5 4 2 . 
    . . 2 4 5 7 9 6 6 9 7 5 4 2 . . 
    . . . 2 4 5 7 9 9 7 5 4 2 . . . 
    . . . . 2 4 5 7 7 5 4 2 . . . . 
    . . . . . 2 4 5 5 4 2 . . . . . 
    . . . . . . 2 4 4 2 . . . . . . 
    . . . . . . . 2 2 4 5 7 9 6 8 c 
    `, SpriteKind.Player)
animation.runImageAnimation(
SpaceShip,
[img`
    . . . . . . . 2 2 4 5 7 9 6 8 c 
    . . . . . . 2 4 4 2 . . . . . . 
    . . . . . 2 4 5 5 4 2 . . . . . 
    . . . . 2 4 5 7 7 5 4 2 . . . . 
    . . . 2 4 5 7 9 9 7 5 4 2 . . . 
    . . 2 4 5 7 9 6 6 9 7 5 4 2 . . 
    . 2 4 5 7 9 6 8 8 6 9 7 5 4 2 . 
    2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
    2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
    . 2 4 5 7 9 6 8 8 6 9 7 5 4 2 . 
    . . 2 4 5 7 9 6 6 9 7 5 4 2 . . 
    . . . 2 4 5 7 9 9 7 5 4 2 . . . 
    . . . . 2 4 5 7 7 5 4 2 . . . . 
    . . . . . 2 4 5 5 4 2 . . . . . 
    . . . . . . 2 4 4 2 . . . . . . 
    . . . . . . . 2 2 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . c c 4 5 7 9 6 8 c 
    . . . . . . c 2 2 c . . . . . . 
    . . . . . c 2 4 4 2 c . . . . . 
    . . . . c 2 4 5 5 4 2 c . . . . 
    . . . c 2 4 5 7 7 5 4 2 c . . . 
    . . c 2 4 5 7 9 9 7 5 4 2 c . . 
    . c 2 4 5 7 9 6 6 9 7 5 4 2 c . 
    c 2 4 5 7 9 6 8 8 6 9 7 5 4 2 c 
    c 2 4 5 7 9 6 8 8 6 9 7 5 4 2 c 
    . c 2 4 5 7 9 6 6 9 7 5 4 2 c . 
    . . c 2 4 5 7 9 9 7 5 4 2 c . . 
    . . . c 2 4 5 7 7 5 4 2 c . . . 
    . . . . c 2 4 5 5 4 2 c . . . . 
    . . . . . c 2 4 4 2 c . . . . . 
    . . . . . . c 2 2 c . . . . . . 
    . . . . . . . c c 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . 8 8 4 5 7 9 6 8 c 
    . . . . . . 8 c c 8 . . . . . . 
    . . . . . 8 c 2 2 c 8 . . . . . 
    . . . . 8 c 2 4 4 2 c 8 . . . . 
    . . . 8 c 2 4 5 5 4 2 c 8 . . . 
    . . 8 c 2 4 5 7 7 5 4 2 c 8 . . 
    . 8 c 2 4 5 7 9 9 7 5 4 2 c 8 . 
    8 c 2 4 5 7 9 6 6 9 7 5 4 2 c 8 
    8 c 2 4 5 7 9 6 6 9 7 5 4 2 c 8 
    . 8 c 2 4 5 7 9 9 7 5 4 2 c 8 . 
    . . 8 c 2 4 5 7 7 5 4 2 c 8 . . 
    . . . 8 c 2 4 5 5 4 2 c 8 . . . 
    . . . . 8 c 2 4 4 2 c 8 . . . . 
    . . . . . 8 c 2 2 c 8 . . . . . 
    . . . . . . 8 c c 8 . . . . . . 
    . . . . . . . 8 8 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . 6 6 4 5 7 9 6 8 c 
    . . . . . . 6 8 8 6 . . . . . . 
    . . . . . 6 8 c c 8 6 . . . . . 
    . . . . 6 8 c 2 2 c 8 6 . . . . 
    . . . 6 8 c 2 4 4 2 c 8 6 . . . 
    . . 6 8 c 2 4 5 5 4 2 c 8 6 . . 
    . 6 8 c 2 4 5 7 7 5 4 2 c 8 6 . 
    6 8 c 2 4 5 7 9 9 7 5 4 2 c 8 6 
    6 8 c 2 4 5 7 9 9 7 5 4 2 c 8 6 
    . 6 8 c 2 4 5 7 7 5 4 2 c 8 6 . 
    . . 6 8 c 2 4 5 5 4 2 c 8 6 . . 
    . . . 6 8 c 2 4 4 2 c 8 6 . . . 
    . . . . 6 8 c 2 2 c 8 6 . . . . 
    . . . . . 6 8 c c 8 6 . . . . . 
    . . . . . . 6 8 8 6 . . . . . . 
    . . . . . . . 6 6 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . 9 9 4 5 7 9 6 8 c 
    . . . . . . 9 6 6 9 . . . . . . 
    . . . . . 9 6 8 8 6 9 . . . . . 
    . . . . 9 6 8 c c 8 6 9 . . . . 
    . . . 9 6 8 c 2 2 c 8 6 9 . . . 
    . . 9 6 8 c 2 4 4 2 c 8 6 9 . . 
    . 9 6 8 c 2 4 5 5 4 2 c 8 6 9 . 
    9 6 8 c 2 4 5 7 7 5 4 2 c 8 6 9 
    9 6 8 c 2 4 5 7 7 5 4 2 c 8 6 9 
    . 9 6 8 c 2 4 5 5 4 2 c 8 6 9 . 
    . . 9 6 8 c 2 4 4 2 c 8 6 9 . . 
    . . . 9 6 8 c 2 2 c 8 6 9 . . . 
    . . . . 9 6 8 c c 8 6 9 . . . . 
    . . . . . 9 6 8 8 6 9 . . . . . 
    . . . . . . 9 6 6 9 . . . . . . 
    . . . . . . . 9 9 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . 7 7 4 5 7 9 6 8 c 
    . . . . . . 7 9 9 7 . . . . . . 
    . . . . . 7 9 6 6 9 7 . . . . . 
    . . . . 7 9 6 8 8 6 9 7 . . . . 
    . . . 7 9 6 8 c c 8 6 9 7 . . . 
    . . 7 9 6 8 c 2 2 c 8 6 9 7 . . 
    . 7 9 6 8 c 2 4 4 2 c 8 6 9 7 . 
    7 9 6 8 c 2 4 5 5 4 2 c 8 6 9 7 
    7 9 6 8 c 2 4 5 5 4 2 c 8 6 9 7 
    . 7 9 6 8 c 2 4 4 2 c 8 6 9 7 . 
    . . 7 9 6 8 c 2 2 c 8 6 9 7 . . 
    . . . 7 9 6 8 c c 8 6 9 7 . . . 
    . . . . 7 9 6 8 8 6 9 7 . . . . 
    . . . . . 7 9 6 6 9 7 . . . . . 
    . . . . . . 7 9 9 7 . . . . . . 
    . . . . . . . 7 7 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . 5 5 4 5 7 9 6 8 c 
    . . . . . . 5 7 7 5 . . . . . . 
    . . . . . 5 7 9 9 7 5 . . . . . 
    . . . . 5 7 9 6 6 9 7 5 . . . . 
    . . . 5 7 9 6 8 8 6 9 7 5 . . . 
    . . 5 7 9 6 8 c c 8 6 9 7 5 . . 
    . 5 7 9 6 8 c 2 2 c 8 6 9 7 5 . 
    5 7 9 6 8 c 2 4 4 2 c 8 6 9 7 5 
    5 7 9 6 8 c 2 4 4 2 c 8 6 9 7 5 
    . 5 7 9 6 8 c 2 2 c 8 6 9 7 5 . 
    . . 5 7 9 6 8 c c 8 6 9 7 5 . . 
    . . . 5 7 9 6 8 8 6 9 7 5 . . . 
    . . . . 5 7 9 6 6 9 7 5 . . . . 
    . . . . . 5 7 9 9 7 5 . . . . . 
    . . . . . . 5 7 7 5 . . . . . . 
    . . . . . . . 5 5 4 5 7 9 6 8 c 
    `,img`
    . . . . . . . 4 4 4 5 7 9 6 8 c 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . 4 5 7 7 5 4 . . . . . 
    . . . . 4 5 7 9 9 7 5 4 . . . . 
    . . . 4 5 7 9 6 6 9 7 5 4 . . . 
    . . 4 5 7 9 6 8 8 6 9 7 5 4 . . 
    . 4 5 7 9 6 8 c c 8 6 9 7 5 4 . 
    4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
    4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
    . 4 5 7 9 6 8 c c 8 6 9 7 5 4 . 
    . . 4 5 7 9 6 8 8 6 9 7 5 4 . . 
    . . . 4 5 7 9 6 6 9 7 5 4 . . . 
    . . . . 4 5 7 9 9 7 5 4 . . . . 
    . . . . . 4 5 7 7 5 4 . . . . . 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . . . 4 4 4 5 7 9 6 8 c 
    `],
100,
true
)
controller.moveSprite(SpaceShip, 200, 200)
SpaceShip.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    if (has_time_ended == false) {
        hearts = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Heart)
        animation.runImageAnimation(
        hearts,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 3 3 3 f 3 3 3 f . . . 
            . . . . f 3 3 3 3 3 1 3 f . . . 
            . . . . f 3 3 3 3 3 3 3 f . . . 
            . . . . . f 3 b b b 3 f . . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . b b b b c . . c b b b c . . 
            . b d 1 1 1 3 c c 3 d 1 1 3 c . 
            b d 1 1 1 1 d d 1 3 1 1 1 1 3 c 
            b 1 1 1 1 1 d 1 1 d d 1 1 1 1 b 
            c 3 1 1 d c c 1 1 c c 1 1 1 1 b 
            c 3 3 d 3 . . c c . . d 1 1 d b 
            b 1 1 1 3 . . . . . . 3 d d 3 c 
            b 1 1 1 d b . . . . c d d 3 3 c 
            c 3 1 1 1 1 c . . b 1 1 1 d b c 
            . c d d 1 1 1 c b 3 1 1 1 1 c . 
            . . c 1 1 1 d d 3 3 1 1 1 b . . 
            . . . b 1 3 d 1 1 d d 3 b . . . 
            . . . . b 3 1 1 1 1 d c . . . . 
            . . . . . c b 1 1 b c . . . . . 
            . . . . . . c b b c . . . . . . 
            `,img`
            . . . 3 3 . 3 3 . . . . . . . . 
            . . 3 3 1 3 1 3 3 . . . . . . . 
            . . 3 1 1 1 1 1 3 . . 3 . 3 . . 
            . . . 3 1 1 1 3 . . 3 1 3 1 3 . 
            . . . . 3 1 3 . . . 3 1 1 1 3 . 
            . . . . . 3 . . . . . 3 1 3 . . 
            . . . . . . . . . . . . 3 . . . 
            3 3 . 3 3 . . . . . . . . . . . 
            3 1 1 1 3 . . . . . 3 3 . 3 3 . 
            . 3 1 3 . . . . . . 3 1 3 1 3 . 
            . . 3 . . . . . . . 3 1 1 1 3 . 
            . . . . . 3 . 3 . . . 3 1 3 . . 
            . . . . . 1 1 1 . . . . 3 . . . 
            . . . . . 3 1 3 . . . . . . . . 
            . . . . . . 3 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . b b b b c . . c b b b c . . 
            . b d 1 1 1 3 c c 3 d 1 1 3 c . 
            b d 1 1 1 1 d d 1 3 1 1 1 1 3 c 
            b 1 1 1 1 1 d 1 1 d d 1 1 1 1 b 
            c 3 1 1 d c c 1 1 c c 1 1 1 1 b 
            c 3 3 d 3 . . c c . . d 1 1 d b 
            b 1 1 1 3 . . . . . . 3 d d 3 c 
            b 1 1 1 d b . . . . c d d 3 3 c 
            c 3 1 1 1 1 c . . b 1 1 1 d b c 
            . c d d 1 1 1 c b 3 1 1 1 1 c . 
            . . c 1 1 1 d d 3 3 1 1 1 b . . 
            . . . b 1 3 d 1 1 d d 3 b . . . 
            . . . . b 3 1 1 1 1 d c . . . . 
            . . . . . c b 1 1 b c . . . . . 
            . . . . . . c b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 3 3 3 f 3 3 3 f . . . 
            . . . . f 3 3 3 3 3 1 3 f . . . 
            . . . . f 3 3 3 3 3 3 3 f . . . 
            . . . . . f 3 b b b 3 f . . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        if (does_black_hole_exist == true) {
            hearts.follow(SuperMasiveBlackHole, 150)
        } else {
            hearts.setVelocity(randint(-100, -200), 0)
        }
        hearts.setPosition(160, randint(5, 155))
        hearts.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(randint(300, 1000), function () {
    if (has_time_ended == false) {
        Enemies = sprites.create(list._pickRandom(), SpriteKind.Enemy)
        if (does_black_hole_exist == true) {
            Enemies.follow(SuperMasiveBlackHole, 150)
        } else {
            Enemies.setVelocity(randint(-100, -200), 0)
        }
        Enemies.setPosition(160, randint(5, 155))
        Enemies.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
forever(function () {
    if (info.score() == 60) {
        game.setDialogFrame(img`
            999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999
            999911119999119991111999111199999999119999999999
            999111111191111911111191111119911191111991111999
            999111111111111111111111111111111111111911111199
            999111111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999991111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111119999
            999111111111111111111111111111111111111111111999
            999911111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111111999
            999111111111111111111111111111111111111111111199
            999911111111111111111111111111111111111111111199
            999111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111199
            991111111111111111111111111111111111111111111999
            991111111111111111111111111111111111111111119999
            991111111111111111111111111111111111111111119999
            999111111111111111111111111111111111111111111999
            99d1111111111111111111111111111111111dd111111199
            9ddd111111111111111111111111111111111dd111111199
            9ddd1111111111dd111111111111111111111dd1111dd199
            9d1d111111111ddddd11111111111ddddd111ddd111ddd99
            9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
            9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
            9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
            9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
            dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
            dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
            dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
            dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
            ddddddddddddddddddddddd1dddddddddddddddddddddddd
            ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
            .dddddddddddddddddddddddddddddddddddddddddddddd.
            ..dddddddddddddddddddddddddddddddddddddddddddd..
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . c c c c . . 
            . c c c c c . c c c c c f c c . 
            c c a c c c c c 8 f f c f f c c 
            c a f a a c c a f f c a a f f c 
            c a 8 f a a c a c c c a a a a c 
            c b c f a a a a a c c c c c c c 
            c b b a a c f 8 a c c c 8 c c c 
            . c b b a b c f a a a 8 8 c c . 
            . . . . a a b b b a a 8 a c . . 
            . . . . c b c a a c c b . . . . 
            . . . . b b c c a b b a . . . . 
            . . . . b b a b a 6 a . . . . . 
            . . . . c b b b 6 6 c . . . . . 
            . . . . . c a 6 6 b c . . . . . 
            . . . . . . . c c c . . . . . . 
            `)
        game.setDialogTextColor(7)
        game.showLongText("you mined those astroids perfectly to bulid more SpaceShips and buildings on earth witch was the most dandrous job because of blackholes,astroids hiting you and the worst was Time ending!", DialogLayout.Center)
    }
})
