namespace SpriteKind {
    export const BlackHole = SpriteKind.create()
    export const EndOfTime = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const title = SpriteKind.create()
    export const history = SpriteKind.create()
    export const HistoryEnemy = SpriteKind.create()
    export const HistoryEscape = SpriteKind.create()
    export const HistoryMultibleEnemies = SpriteKind.create()
    export const HistoryNewPlanet = SpriteKind.create()
    export const HistoryEnemy2 = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    music.bigCrash.play()
})
function music_title () {
    music.playMelody("C5 B - G A - F E ", 200)
    music.playMelody("C5 B - G A - F E ", 200)
    music.playMelody("C5 B - G A - F E ", 200)
    music.playMelody("C5 B - G A - F E ", 200)
    music.playMelody("C D - G F - A B ", 200)
    music.playMelody("C D - G F - A B ", 200)
    music.playMelody("C D - G F - A B ", 200)
    music.playMelody("C D - G F - A B ", 200)
}
function shooting_direction_2 () {
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        . . . . 8 6 9 1 9 6 8 . . . . . 
        `,img`
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        . . . . 1 8 6 9 6 8 1 . . . . . 
        `,img`
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        . . . . 9 1 8 6 8 1 9 . . . . . 
        `,img`
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        . . . . 6 9 1 8 1 9 6 . . . . . 
        `],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Heart, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    sprite.destroy(effects.disintegrate, 100)
})
function laser_vs_blackhole () {
    if (does_black_hole_exist == true) {
        projectile.follow(SuperMasiveBlackHole, 150)
    }
}
sprites.onOverlap(SpriteKind.Heart, SpriteKind.BlackHole, function (sprite, otherSprite) {
    scaling.scaleByPixels(sprite, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(sprite, -10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    sprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HistoryEnemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.sayText("Hyper Drive dystroyed")
    for (let index = 0; index < 8; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 441, 709, 88, 231, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
function menu () {
    is_menu_on = true
    mySprite = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4222224ffffffffff442222224fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4222224fffffffff4422222224fffffffffffffffffffffffffffffffffffffffff4444444f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4222224ffffffff44222222224fffffffffffffffffffffffffffffffffffffffff4222224f
        44444444444ffffffffffffffffffff444444444444444fffffffffffffffffffffffffffffffffffffff4222224ffffffff42222222224fffffffffffffffffffffffffffffffffffffffff4222224f
        422222222244fffffffffffffffffff42222222222222444fffffffffffffffffffffffffffffffffffff4222224fffffff442222222244fffffffffffffffffffffffffffffffffffffffff4222224f
        4222222222244444444ffffffffffff42222222222222224444ffffffffffffffffffffffffffffffffff4222224ffffff442222222244ffffffffffffffffffffffffffffffffffffffffff4222224f
        42222222222222222244444ffffffff42222222222222222224ffffffffffffffffffffffffffffffffff4222224ffffff42222222244fffffffffffffffffffffffffffffff4444444fffff4222224f
        422222222222222222222244fffffff422222222222222222244fffffffffffffffffffffffffffffffff4222224fffff44222222244ffffffffffffffffffffffffffffffff4222224fffff4222224f
        422222222222222222222224fffffff4222222222222222222244ffffffffffffffffffffffffffffffff4222224ffff44222222224fffffffffffffffffffffffffffffffff42222244ffff4222224f
        4222222222222222222222244ffffff4222224442222222222224ffffffffffffffffffffffffffffffff4222224fff442222222244ffffff44444444444444fffffffffffff42222224ffff4222224f
        4222222222222222222222224ffffff4222224544442222222224ffffffffffffffffffffffffffffffff4222224ff442222222244ffffff442222222222224444ffffffffff42222224ffff42222244
        4222224444444222222222224ffffff4222224555544422222224ffffffffffffffffffffffffffffffff4222224ff42222222224fffffff4222222222222222244fffffffff42222224ffff42222224
        4222224555554444422222224ffffff4222224511555442222224ffffffffff44444444444fffffffffff42222244442222222244ffffff442222222222222222244ffffffff422222224fff42222224
        4222224511155555442222224ffffff4222224511115544222224fff4444444422222222244444fffffff4222224422222222244fffffff4222222222222222222244fffffff4222222244ff42222224
        4222224511111115542222224ffffff4222224511111542222224ff4422222222222222222222444fffff422222222222222244fffffff4422222222222222222222444fffff4222222224ff42222224
        4222224511111155542222224ffffff4222224511115542222224f442222222222222222222222244ffff42222222222222244ffffffff42222222244422222222222244ffff4222222224ff44222224
        4222224511111554442222224ffffff4222224511155442222224f4222222222222222222222222244fff4222222222222224ffffffff442222222445444422222222224ffff42222222244ff4222224
        4222224511155544222222224ffffff4222224511554422222224f4222222222222222222222222224ff44222222222222244ffffffff422222224455555442222222224ffff44222222224ff4222224
        4222224515554442222222224ffffff4222224515544222222244442222222222222422222222222244f4222222222222444fffffffff422222224551115544222222224fffff4222222224ff4222224
        4222224555444222222222244ffffff4222224555442222222245422222222444444444422222222224442222222222444fffffffffff422222244511111554422222224fffff42222222244f4222222
        422222454442222222222224fffffff42222245444222222222454222222244555555554444222222224422222222244fffffffffffff422222245511111154442222224fffff42222222224f4222222
        422222444222222222222244fffffff42222244422222222224454222222445511111155554422222224222222222244fffffffffffff422222445111115554222222224fffff4222222222444222222
        42222222222222222222244ffffffff42222244222222222244554222222455111111111155422222224222222222224fffffffffffff422222445115555444222222224fffff4222222222244222222
        4222222222222222222244fffffffff422222222222222224455542222224511111111111154422222242222222222244ffffffffffff422222245555444422222222244fffff4222222222224422222
        422222222222222222222444fffffff42222222222222222455f5422222445111111111111554422222422222222222244fffffffffff42222224444442222222222224ffffff4222222222224422222
        4222222222222222222222244ffffff4222222222222222445ff5422222455111111111111154222222422222222222224fffffffffff42222222222222222222222244ffffff4222222222222422222
        42222222222222222222222244fffff4222222222222244455ff5422222451111111111111154222222422222422222224fffffffffff4222222222222222222222244fffffff4222222222222222222
        42222222222222222222222224fffff422222222222224455fff54222224511111111111111542222224222224222222244ffffffffff442222222222222222222244ffffffff4222224222222222222
        42222244444422222222222224fffff422222222222222455fff54222224511111111111111542222224222224422222224fffffffffff4222222222222222222444fffffffff4222224222222222222
        42222245555444442222222224fffff4222222222222224455ff542222245111111111111115422222442222244422222244ffffffffff42222222222222224444fffffffffff4222224422222222222
        42222245115555544422222224fffff4222224222222222445ff54222224511111111111115542222244222224f4222222244fffffffff4422222244444444fffffffffffffff4222224442222222222
        42222245111111555442222224fffff4222224442222222245ff54222224511111111111115442222244222224f4222222224ffffffffff4422222244ffffffffffffffffffff4222224f42222222222
        42222245111111115542222224fffff4222224f442222222455f54222224551111111111115422222244222224f44222222244ffffffffff422222224ffffffffffffffffffff4222224f42222222222
        42222245111111155442222224fffff4222224ff42222222445f54222224451111111111155422222244222224ff42222222244fffffffff422222224ffffffffffffffffffff4222224f44222222224
        42222245111115554422222224fffff4222224ff44222222245554222222455511111111154422222244222224ff44222222224fffffffff4222222244fffffffffffffffffff4222224ff4222222224
        42222245111555444222222224fffff4222224fff4422222244554222222444551111111554222222244222224fff4422222224fffffffff4422222224fffffffffffffffffff42222244f4422222224
        42222245555544422222222224fffff4222224ffff4222222244542222222244555511155442222222442222244fff4222222244fffffffff4422222244ffffffffffffffffff42222224ff422222224
        42222244444442222222222244fffff4222224ffff4222222224442222222224444555554422222224442222224fff4422222224ffffffffff422222224ffffffffffffffffff42222224ff442222224
        4222222222222222222222244ffffff4222224ffff4422222222442222222222224444444222222224f42222224ffff4422222244fffffffff4222222244fffffffffffffffff42222224fff42222224
        422222222222222222222244fffffff4222224fffff422222222244222222222222222222222222224f42222224fffff4222222244ffffffff4422222224444444444ffffffff42222224fff42222224
        42222222222222222222244ffffffff4222224fffff442222222244422222222222222222222222244f42222224fffff4222222224fffffffff422222222442222224ffffffff44222224fff44222224
        4222222222222222222244fffffffff4222224ffffff4222222224f44422222222222222222222224ff44222224fffff44222222244ffffffff442222222222222224fffffffff4222224ffff4222224
        422222222222222222444ffffffffff4222224ffffff4422222224fff422222222222222222222244fff4222224ffffff42222222244ffffffff42222222222222224fffffffff4222224ffff4222224
        4444444444444444444ffffffffffff4222224fffffff442222224fff44442222222222222222244ffff4222224ffffff442222222244fffffff42222222222222224fffffffff4222224ffff4222224
        fffffffffffffffffffffffffffffff4444444ffffffff44444444ffffff4444444444444444444fffff4222224fffffff44222222224fffffff44422222222222224fffffffff4222224ffff4222224
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffff4222222224fffffffff442222222222444fffffffff4222224ffff4222224
        ff66666ffffffffffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffff4422222224ffffffffff444444444444fffffffffff4222224ffff4444444
        ff68886ffffffffffffffffffffffffffffffff6888888886fff66666666666fff66666fffffffffffffffffffffffffffff442222224fffffffffffffffffffffffffffffffff4222224fffffffffff
        ff68886ffffffffffffffffffffffffffffffff6888888886fff68888888886fff68886f66666ffffffffffffffffffffffff44222224fffffffffffffffffffffffffffffffff4444444fffffffffff
        ff68886ffffffffffffffffffffffffffffffff6888888886fff68888888886fff68886668886fffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffcccccccccccccc
        ff68886ffffffffffffffffffffffffffffffff6888668886fff68888888886fff68886888886fffffffffffff999999999999999999999999999999999999999999999999999999f5544ccccccccccc
        ff6888666666fffffffff66666fffffffffffff6888888886fff68886668886fff68888888886fffffffffffff999999999999999999999999999999999999999999999999999999ff554ccccccccccc
        ff68886688866ffffffff68886ffff66666ffff6888888886fff68886668886fff68888888866fffffffffffff999999999999999999999999999999999999999999999999999999fff542cccccccccc
        ff68886888886ffffffff688866ff668886ffff6888888886fff68888888886fff6888888666ffffffffffffff999999999999999999999999999999999999999999999999999999ff5542cccccccccc
        ff688888888866fffffff68888666688886ffff6888666666fff68888888886fff68888666ffffffffffffffff999999999999999999999999999999999999999999999999999999fff542cccccccccc
        ff688888888886fffffff68888866888886ffff68886ffffffff68888888886fff688866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff542cccccccccc
        ff6888888888866ffffff66888868888886ffff68886ffffffff68886666666fff68886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55542cccccccccc
        ff6888886688886fffffff6688888888886ffff68886ffffffff68886666666fff68886fffffffffffffffffff999999999999999999999999999999999999999999999999999999554442cccccccccc
        ff6888866688886ffffffff688888888886ffff68886ffffffff68888888886fff68886fffffffffffffffffff999999999999999999999999999999999999999999999999999999f55422cccccccccc
        ff688866f668886ffffffff668888888886ffff68886ffffffff68888888886fff68886fffffffffffffffffff999999999999999999999999999999999999999999999999999999ff5422cccccccccc
        ff66666fff66666fffffffff66888888886ffff66666ffffffff68888888886fff66666fffffffffffffffffff999999999999999999999999999999999999999999999999999999f55442cccccccccc
        fffffffffffffffffffffffff6666688866fffffffffffffffff66666666666fffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999ff5542cccccccccc
        ffffffffffffffffffffffffffff668886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff54ccccccccccc
        ffffffffffffffffffffffffffff688886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccc
        ffffffffffffffffffffffffffff688886fffffffffffffffffffffff2222222fffffffffffffff1dbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff688866ffffffffffffffffffffff224444422fffffffffffff1dbcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff68886fffffffffffffffffffffff245555542fffffffffffff1dbcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff6668886fffffffffffffffffffffff245111542fffffffffffff1dbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff666888886fffffffffffffffffffffff245111542fffffffffffff1dbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff66688888886fffffffffffffffffffffff245111542ffffffffffffff1dccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff68888888866fffffffffffffffffffffff245555542ffffffffffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff6888888666ffffffffffffffffffffffff224444422fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff68888666fffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1999999999999111ffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff19666666666699911fffffffffff19999999999111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111fffff
        ff1968888888866699111fffffffff1966666666999111ffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffff199999999999999999999999999991fffff
        ff19688888888886699911ffffffff196888888666999111ffffffffffffffffff19999999991ffffffffffffffffffffffffffffffffffffffffffffffff196666666666666666666666666691fffff
        ff196888888888886669911fffffff19688888888666999111ffffffffffffffff19666666691ff11111111111ffffffffffffff11111111111ffffffffff196888888888888888888888888691fffff
        ff19688888888888886699111fffff1968888888888666999111ffffffffffffff19688888691ff19999999991fffffffffffff119999999991ffffffffff196888888888888888888888888691fffff
        ff196888888888888886699911ffff196888888888888666999111ffffffffffff19688888691ff196666666911ffffffffffff199666666691ffffffffff196888888888888888888888888691fffff
        ff19688888888888888866699111ff19688888888888888666999111ffffffffff19688888691ff196888886991fffffffffff1196688888691ffffffffff196888888888888888888888888691fffff
        ff196888886888888888886699911f19688888888888888886669991ffffffffff19688888691ff196888886691fffffffffff1996888888691ffffffffff196888888888888888888888888691fffff
        ff196888886688888888888666991119688888888888888888866691ffffffffff19688888691ff1968888886911fffffffff11966888888691ffffffffff196888881111111111111188888691fffff
        ff196888886666888888888886699119688888688888888888888691ffffffffff19688888691ff1968888886991fffffffff19968888888691ffffffffff196888881111111111111188888691fffff
        ff196888886996688888888888669119688888666888888888888691ffffffffff19688888691ff19688888866911fffffff119668888888691ffffffffff196888881111111111111188888691fffff
        ff196888886999668888888888869119688888696668888888888691ffffffffff19688888691ff19688888886991fffffff199688888886691ffffffffff196888881111111111111188888691fffff
        ff196888886919966688888888869119688888699966688888888691ffffffffff19688888691ff196688888866911fffff1196688888886991ffffffffff196888881111111111111188888691fffff
        ff196888886911999668888888869119688888619966888888888691ffffffffff19688888691ff199688888886991fffff1996888888866911ffffffffff196888881111111111111188888691fffff
        ff196888886911119966688888869119688888699668888888888691ffffffffff19688888691ff1196888888866911fff1196688888886991fffffffffff196888881111111111111188888691fffff
        ff196888886911111999688888869119688888696688888888886691ffffffffff19688888691fff196688888886991fff1996888888866911fffffffffff196888881111111111111188888691fffff
        ff196888886911111119688888669119688888666888888888866991ffffffffff19688888691fff199688888886691ff1196688888886991ffffffffffff196888881111111111111188888691fffff
        ff196888886911111119688888699119688888668888888888669911ffffffffff19688888691fff1196688888886911f1996888888866911ffffffffffff196888881111111111111188888691fffff
        ff19688888691111111968888869111968888888888888886669911fffffffffff19688888691ffff1996888888869911196688888886991fffffffffffff196888881111111111111188888691fffff
        ff196888886911111119688888691f196888888888888886699911ffffffffffff19688888691ffff1196688888866911996888888866911fffffffffffff196888881111111111111188888691fffff
        ff196888886911111119688888691f19688888888888886699111fffffffffffff19688888691fffff19968888888699196688888886991ffffffffffffff196888888888888888888888888691fffff
        ff196888886911111119688888691f196888888888888669911fffffffffffffff19688888691fffff11966888888669996888888866911ffffffffffffff196888888888888888888888888691fffff
        ff196888886911111119688888691f19688888888888669911ffffffffffffffff19688888691ffffff199688888886996688888886991fffffffffffffff196888888888888888888888888691fffff
        ff196888886911111119688888691f19688888888888669911ffffffffffffffff19688888691ffffff119688888886696888888866911fffffffffffffff196888888888888888888888888691fffff
        ff196888886911111999688888691f196888888888888669911fffffffffffffff19688888691fffffff1966888888866688888886991ffffffffffffffff196888888888888888888888888691fffff
        ff196888886911119966688888691f1968888888888888669911ffffffffffffff19688888691fffffff1996888888866888888866911ffffffffffffffff196888886666666666666666666691fffff
        ff196888886911999668888888691f19688888688888888669911fffffffffffff19688888691fffffff119668888888688888886991fffffffffffffffff196888886999999999999999999991fffff
        ff196888886919966688888888691f19688888688888888866991fffffffffffff19688888691ffffffff19968888888888888866911fffffffffffffffff196888886911111111111111111111fffff
        ff196888886999668888888888691f196888886688888888866911ffffffffffff19688888691ffffffff1196688888888888886991ffffffffffffffffff19688888691ffffffffffffffffffffffff
        ff196888886966688888888888691f1968888866688888888869911fffffffffff19688888691fffffffff199688888888888866911ffffffffffffffffff196888886911111111111111111111fffff
        ff196888886668888888888886691f19688888696688888888669911ffffffffff19688888691fffffffff11966888888888886991fffffffffffffffffff196888886999999999999999999991fffff
        ff196888886688888888888666991f19688888699668888888866991ffffffffff19688888691ffffffffff1996888888888866911fffffffffffffffffff196888886666666666666666666691fffff
        ff196888888888888888886699911f19688888699966888888886691ffffffffff19688888691ffffffffff119688888888886991ffffffffffffffffffff196888888888888888888888888691fffff
        ff19688888888888888866699111ff19688888691996688888888691ffffffffff19688888691fffffffffff19668888888866911ffffffffffffffffffff196888888888888888888888888691fffff
        ff196888888888888886699911ffff19688888691199688888888691ffffffffff19688888691fffffffffff1996888888886991fffffffffffffffffffff196888888888888888888888888691fffff
        ff19688888888888866699111fffff19688888691119668888888691ffffffffff19688888691fffffffffff1196688888866911fffffffffffffffffffff196888888888888888888888888691fffff
        ff196888888888886699911fffffff19688888691f19966888888691ffffffffff19688888691ffffffffffff19968888886991ffffffffffffffffffffff196888888888888888888888888691fffff
        ff19688888888866699111ffffffff19688888691f11996688888691ffffffffff19666666691ffffffffffff11966888886911ffffffffffffffffffffff196666666666666666666666666691fffff
        ff196888888886699911ffffffffff19688888691ff1199666666691ffffffffff19999999991fffffffffffff199666666691fffffffffffffffffffffff199999999999999999999999999991fffff
        ff19688888866699111fffffffffff19666666691fff119999999991ffffffffff11111111111fffffffffffff119999999991fffffffffffffffffffffff111111111111111111111111111111fffff
        ff196666666699911fffffffffffff19999999991ffff11111111111fffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff19999999999111ffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.title)
    mySprite.startEffect(effects.fire)
}
sprites.onOverlap(SpriteKind.HistoryEnemy, SpriteKind.history, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.startEffect(effects.fire)
    sprite.destroy(effects.disintegrate, 100)
})
function on_start () {
    is_menu_on = false
    game.showLongText("press spacebar to shoot, arrow keys to move and hold enter to shoot lasers", DialogLayout.Full)
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
    direction = 1
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
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BlackHole, function (sprite, otherSprite) {
    scaling.scaleByPixels(sprite, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(sprite, -10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    sprite.destroy(effects.fire, 100)
    scaling.scaleByPixels(otherSprite, 5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
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
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    menu()
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
                `, SpaceShip, 500, 0)
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
function shooting_direction () {
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
}
sprites.onOverlap(SpriteKind.HistoryEnemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.smallCrash.play()
    sprite.startEffect(effects.fire)
    sprite.destroy(effects.disintegrate, 100)
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy(effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.BlackHole, function (sprite, otherSprite) {
    scaling.scaleByPixels(sprite, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(sprite, -10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    sprite.destroy(effects.fire, 100)
    scaling.scaleByPixels(otherSprite, 2, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 4
    animation.runImageAnimation(
    SpaceShip,
    [img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . 2 4 5 5 4 2 . . . . . 
        . . . . 2 4 5 7 7 5 4 2 . . . . 
        . . . 2 4 5 7 9 9 7 5 4 2 . . . 
        . . 2 4 5 7 9 6 6 9 7 5 4 2 . . 
        . 2 4 5 7 9 6 8 8 6 9 7 5 4 2 . 
        2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
        2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
        4 2 4 5 7 9 6 8 8 6 9 7 5 4 2 4 
        5 . 2 4 5 7 9 6 6 9 7 5 4 2 . 5 
        7 . . 2 4 5 7 9 9 7 5 4 2 . . 7 
        9 . . . 2 4 5 7 7 5 4 2 . . . 9 
        6 . . . . 2 4 5 5 4 2 . . . . 6 
        8 . . . . . 2 4 4 2 . . . . . 8 
        c . . . . . . 2 2 . . . . . . c 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 2 2 c . . . . . . 
        . . . . . c 2 4 4 2 c . . . . . 
        . . . . c 2 4 5 5 4 2 c . . . . 
        . . . c 2 4 5 7 7 5 4 2 c . . . 
        . . c 2 4 5 7 9 9 7 5 4 2 c . . 
        . c 2 4 5 7 9 6 6 9 7 5 4 2 c . 
        c 2 4 5 7 9 6 8 8 6 9 7 5 4 2 c 
        c 2 4 5 7 9 6 8 8 6 9 7 5 4 2 c 
        4 c 2 4 5 7 9 6 6 9 7 5 4 2 c 4 
        5 . c 2 4 5 7 9 9 7 5 4 2 c . 5 
        7 . . c 2 4 5 7 7 5 4 2 c . . 7 
        9 . . . c 2 4 5 5 4 2 c . . . 9 
        6 . . . . c 2 4 4 2 c . . . . 6 
        8 . . . . . c 2 2 c . . . . . 8 
        c . . . . . . c c . . . . . . c 
        `,img`
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . 8 c c 8 . . . . . . 
        . . . . . 8 c 2 2 c 8 . . . . . 
        . . . . 8 c 2 4 4 2 c 8 . . . . 
        . . . 8 c 2 4 5 5 4 2 c 8 . . . 
        . . 8 c 2 4 5 7 7 5 4 2 c 8 . . 
        . 8 c 2 4 5 7 9 9 7 5 4 2 c 8 . 
        8 c 2 4 5 7 9 6 6 9 7 5 4 2 c 8 
        8 c 2 4 5 7 9 6 6 9 7 5 4 2 c 8 
        4 8 c 2 4 5 7 9 9 7 5 4 2 c 8 4 
        5 . 8 c 2 4 5 7 7 5 4 2 c 8 . 5 
        7 . . 8 c 2 4 5 5 4 2 c 8 . . 7 
        9 . . . 8 c 2 4 4 2 c 8 . . . 9 
        6 . . . . 8 c 2 2 c 8 . . . . 6 
        8 . . . . . 8 c c 8 . . . . . 8 
        c . . . . . . 8 8 . . . . . . c 
        `,img`
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . 6 8 8 6 . . . . . . 
        . . . . . 6 8 c c 8 6 . . . . . 
        . . . . 6 8 c 2 2 c 8 6 . . . . 
        . . . 6 8 c 2 4 4 2 c 8 6 . . . 
        . . 6 8 c 2 4 5 5 4 2 c 8 6 . . 
        . 6 8 c 2 4 5 7 7 5 4 2 c 8 6 . 
        6 8 c 2 4 5 7 9 9 7 5 4 2 c 8 6 
        6 8 c 2 4 5 7 9 9 7 5 4 2 c 8 6 
        4 6 8 c 2 4 5 7 7 5 4 2 c 8 6 4 
        5 . 6 8 c 2 4 5 5 4 2 c 8 6 . 5 
        7 . . 6 8 c 2 4 4 2 c 8 6 . . 7 
        9 . . . 6 8 c 2 2 c 8 6 . . . 9 
        6 . . . . 6 8 c c 8 6 . . . . 6 
        8 . . . . . 6 8 8 6 . . . . . 8 
        c . . . . . . 6 6 . . . . . . c 
        `,img`
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 6 6 9 . . . . . . 
        . . . . . 9 6 8 8 6 9 . . . . . 
        . . . . 9 6 8 c c 8 6 9 . . . . 
        . . . 9 6 8 c 2 2 c 8 6 9 . . . 
        . . 9 6 8 c 2 4 4 2 c 8 6 9 . . 
        . 9 6 8 c 2 4 5 5 4 2 c 8 6 9 . 
        9 6 8 c 2 4 5 7 7 5 4 2 c 8 6 9 
        9 6 8 c 2 4 5 7 7 5 4 2 c 8 6 9 
        4 9 6 8 c 2 4 5 5 4 2 c 8 6 9 4 
        5 . 9 6 8 c 2 4 4 2 c 8 6 9 . 5 
        7 . . 9 6 8 c 2 2 c 8 6 9 . . 7 
        9 . . . 9 6 8 c c 8 6 9 . . . 9 
        6 . . . . 9 6 8 8 6 9 . . . . 6 
        8 . . . . . 9 6 6 9 . . . . . 8 
        c . . . . . . 9 9 . . . . . . c 
        `,img`
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . 7 9 9 7 . . . . . . 
        . . . . . 7 9 6 6 9 7 . . . . . 
        . . . . 7 9 6 8 8 6 9 7 . . . . 
        . . . 7 9 6 8 c c 8 6 9 7 . . . 
        . . 7 9 6 8 c 2 2 c 8 6 9 7 . . 
        . 7 9 6 8 c 2 4 4 2 c 8 6 9 7 . 
        7 9 6 8 c 2 4 5 5 4 2 c 8 6 9 7 
        7 9 6 8 c 2 4 5 5 4 2 c 8 6 9 7 
        4 7 9 6 8 c 2 4 4 2 c 8 6 9 7 4 
        5 . 7 9 6 8 c 2 2 c 8 6 9 7 . 5 
        7 . . 7 9 6 8 c c 8 6 9 7 . . 7 
        9 . . . 7 9 6 8 8 6 9 7 . . . 9 
        6 . . . . 7 9 6 6 9 7 . . . . 6 
        8 . . . . . 7 9 9 7 . . . . . 8 
        c . . . . . . 7 7 . . . . . . c 
        `,img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 7 7 5 . . . . . . 
        . . . . . 5 7 9 9 7 5 . . . . . 
        . . . . 5 7 9 6 6 9 7 5 . . . . 
        . . . 5 7 9 6 8 8 6 9 7 5 . . . 
        . . 5 7 9 6 8 c c 8 6 9 7 5 . . 
        . 5 7 9 6 8 c 2 2 c 8 6 9 7 5 . 
        5 7 9 6 8 c 2 4 4 2 c 8 6 9 7 5 
        5 7 9 6 8 c 2 4 4 2 c 8 6 9 7 5 
        4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
        5 . 5 7 9 6 8 c c 8 6 9 7 5 . 5 
        7 . . 5 7 9 6 8 8 6 9 7 5 . . 7 
        9 . . . 5 7 9 6 6 9 7 5 . . . 9 
        6 . . . . 5 7 9 9 7 5 . . . . 6 
        8 . . . . . 5 7 7 5 . . . . . 8 
        c . . . . . . 5 5 . . . . . . c 
        `,img`
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . 4 5 7 7 5 4 . . . . . 
        . . . . 4 5 7 9 9 7 5 4 . . . . 
        . . . 4 5 7 9 6 6 9 7 5 4 . . . 
        . . 4 5 7 9 6 8 8 6 9 7 5 4 . . 
        . 4 5 7 9 6 8 c c 8 6 9 7 5 4 . 
        4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
        4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
        4 4 5 7 9 6 8 c c 8 6 9 7 5 4 4 
        5 . 4 5 7 9 6 8 8 6 9 7 5 4 . 5 
        7 . . 4 5 7 9 6 6 9 7 5 4 . . 7 
        9 . . . 4 5 7 9 9 7 5 4 . . . 9 
        6 . . . . 4 5 7 7 5 4 . . . . 6 
        8 . . . . . 4 5 5 4 . . . . . 8 
        c . . . . . . 4 4 . . . . . . c 
        `],
    100,
    true
    )
})
function music2 () {
    music.playMelody("C5 B G A F E G A ", 300)
    music.playMelody("C5 B G A F E G A ", 300)
    music.playMelody("C5 B G A F E G A ", 300)
    music.playMelody("C5 B G A F E G A ", 300)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 887, 213, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 4900, 0, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playMelody("B A G B C5 G F A ", 300)
    music.playMelody("B A G D A E G A ", 300)
}
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.HistoryNewPlanet, function (sprite, otherSprite) {
    is_earth_attacking = false
    sprite.destroy(effects.fire, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
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
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    if (info.life() != 5) {
        info.changeLifeBy(1)
        otherSprite.destroy(effects.halo, 100)
    } else {
        otherSprite.destroy(effects.hearts, 100)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_menu_on == true) {
        History()
        music.sonar.play()
    } else {
        if (has_time_ended == false) {
            if (direction == 1) {
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
                shooting_direction()
                laser_vs_blackhole()
            } else if (direction == 2) {
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
                    `, SpaceShip, -200, 0)
                shooting_direction()
                laser_vs_blackhole()
            } else if (direction == 3) {
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
                    `, SpaceShip, 0, -200)
                shooting_direction_2()
                laser_vs_blackhole()
            } else if (direction == 4) {
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
                    `, SpaceShip, 0, 200)
                shooting_direction_2()
                laser_vs_blackhole()
            }
            music.pewPew.play()
        }
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
sprites.onOverlap(SpriteKind.HistoryEscape, SpriteKind.HistoryMultibleEnemies, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.startEffect(effects.fire)
    sprite.destroy(effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.HistoryEscape, SpriteKind.HistoryNewPlanet, function (sprite, otherSprite) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.HistoryEnemy2, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy(effects.disintegrate, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
    animation.runImageAnimation(
    SpaceShip,
    [img`
        c . . . . . . 2 2 . . . . . . c 
        8 . . . . . 2 4 4 2 . . . . . 8 
        6 . . . . 2 4 5 5 4 2 . . . . 6 
        9 . . . 2 4 5 7 7 5 4 2 . . . 9 
        7 . . 2 4 5 7 9 9 7 5 4 2 . . 7 
        5 . 2 4 5 7 9 6 6 9 7 5 4 2 . 5 
        4 2 4 5 7 9 6 8 8 6 9 7 5 4 2 4 
        2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
        2 4 5 7 9 6 8 c c 8 6 9 7 5 4 2 
        . 2 4 5 7 9 6 8 8 6 9 7 5 4 2 . 
        . . 2 4 5 7 9 6 6 9 7 5 4 2 . . 
        . . . 2 4 5 7 9 9 7 5 4 2 . . . 
        . . . . 2 4 5 7 7 5 4 2 . . . . 
        . . . . . 2 4 5 5 4 2 . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `,img`
        c . . . . . . c c . . . . . . c 
        8 . . . . . c 2 2 c . . . . . 8 
        6 . . . . c 2 4 4 2 c . . . . 6 
        9 . . . c 2 4 5 5 4 2 c . . . 9 
        7 . . c 2 4 5 7 7 5 4 2 c . . 7 
        5 . c 2 4 5 7 9 9 7 5 4 2 c . 5 
        4 c 2 4 5 7 9 6 6 9 7 5 4 2 c 4 
        c 2 4 5 7 9 6 8 8 6 9 7 5 4 2 c 
        c 2 4 5 7 9 6 8 8 6 9 7 5 4 2 c 
        . c 2 4 5 7 9 6 6 9 7 5 4 2 c . 
        . . c 2 4 5 7 9 9 7 5 4 2 c . . 
        . . . c 2 4 5 7 7 5 4 2 c . . . 
        . . . . c 2 4 5 5 4 2 c . . . . 
        . . . . . c 2 4 4 2 c . . . . . 
        . . . . . . c 2 2 c . . . . . . 
        . . . . . . . c c . . . . . . . 
        `,img`
        c . . . . . . 8 8 . . . . . . c 
        8 . . . . . 8 c c 8 . . . . . 8 
        6 . . . . 8 c 2 2 c 8 . . . . 6 
        9 . . . 8 c 2 4 4 2 c 8 . . . 9 
        7 . . 8 c 2 4 5 5 4 2 c 8 . . 7 
        5 . 8 c 2 4 5 7 7 5 4 2 c 8 . 5 
        4 8 c 2 4 5 7 9 9 7 5 4 2 c 8 4 
        8 c 2 4 5 7 9 6 6 9 7 5 4 2 c 8 
        8 c 2 4 5 7 9 6 6 9 7 5 4 2 c 8 
        . 8 c 2 4 5 7 9 9 7 5 4 2 c 8 . 
        . . 8 c 2 4 5 7 7 5 4 2 c 8 . . 
        . . . 8 c 2 4 5 5 4 2 c 8 . . . 
        . . . . 8 c 2 4 4 2 c 8 . . . . 
        . . . . . 8 c 2 2 c 8 . . . . . 
        . . . . . . 8 c c 8 . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        `,img`
        c . . . . . . 6 6 . . . . . . c 
        8 . . . . . 6 8 8 6 . . . . . 8 
        6 . . . . 6 8 c c 8 6 . . . . 6 
        9 . . . 6 8 c 2 2 c 8 6 . . . 9 
        7 . . 6 8 c 2 4 4 2 c 8 6 . . 7 
        5 . 6 8 c 2 4 5 5 4 2 c 8 6 . 5 
        4 6 8 c 2 4 5 7 7 5 4 2 c 8 6 4 
        6 8 c 2 4 5 7 9 9 7 5 4 2 c 8 6 
        6 8 c 2 4 5 7 9 9 7 5 4 2 c 8 6 
        . 6 8 c 2 4 5 7 7 5 4 2 c 8 6 . 
        . . 6 8 c 2 4 5 5 4 2 c 8 6 . . 
        . . . 6 8 c 2 4 4 2 c 8 6 . . . 
        . . . . 6 8 c 2 2 c 8 6 . . . . 
        . . . . . 6 8 c c 8 6 . . . . . 
        . . . . . . 6 8 8 6 . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        `,img`
        c . . . . . . 9 9 . . . . . . c 
        8 . . . . . 9 6 6 9 . . . . . 8 
        6 . . . . 9 6 8 8 6 9 . . . . 6 
        9 . . . 9 6 8 c c 8 6 9 . . . 9 
        7 . . 9 6 8 c 2 2 c 8 6 9 . . 7 
        5 . 9 6 8 c 2 4 4 2 c 8 6 9 . 5 
        4 9 6 8 c 2 4 5 5 4 2 c 8 6 9 4 
        9 6 8 c 2 4 5 7 7 5 4 2 c 8 6 9 
        9 6 8 c 2 4 5 7 7 5 4 2 c 8 6 9 
        . 9 6 8 c 2 4 5 5 4 2 c 8 6 9 . 
        . . 9 6 8 c 2 4 4 2 c 8 6 9 . . 
        . . . 9 6 8 c 2 2 c 8 6 9 . . . 
        . . . . 9 6 8 c c 8 6 9 . . . . 
        . . . . . 9 6 8 8 6 9 . . . . . 
        . . . . . . 9 6 6 9 . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        c . . . . . . 7 7 . . . . . . c 
        8 . . . . . 7 9 9 7 . . . . . 8 
        6 . . . . 7 9 6 6 9 7 . . . . 6 
        9 . . . 7 9 6 8 8 6 9 7 . . . 9 
        7 . . 7 9 6 8 c c 8 6 9 7 . . 7 
        5 . 7 9 6 8 c 2 2 c 8 6 9 7 . 5 
        4 7 9 6 8 c 2 4 4 2 c 8 6 9 7 4 
        7 9 6 8 c 2 4 5 5 4 2 c 8 6 9 7 
        7 9 6 8 c 2 4 5 5 4 2 c 8 6 9 7 
        . 7 9 6 8 c 2 4 4 2 c 8 6 9 7 . 
        . . 7 9 6 8 c 2 2 c 8 6 9 7 . . 
        . . . 7 9 6 8 c c 8 6 9 7 . . . 
        . . . . 7 9 6 8 8 6 9 7 . . . . 
        . . . . . 7 9 6 6 9 7 . . . . . 
        . . . . . . 7 9 9 7 . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        `,img`
        c . . . . . . 5 5 . . . . . . c 
        8 . . . . . 5 7 7 5 . . . . . 8 
        6 . . . . 5 7 9 9 7 5 . . . . 6 
        9 . . . 5 7 9 6 6 9 7 5 . . . 9 
        7 . . 5 7 9 6 8 8 6 9 7 5 . . 7 
        5 . 5 7 9 6 8 c c 8 6 9 7 5 . 5 
        4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
        5 7 9 6 8 c 2 4 4 2 c 8 6 9 7 5 
        5 7 9 6 8 c 2 4 4 2 c 8 6 9 7 5 
        . 5 7 9 6 8 c 2 2 c 8 6 9 7 5 . 
        . . 5 7 9 6 8 c c 8 6 9 7 5 . . 
        . . . 5 7 9 6 8 8 6 9 7 5 . . . 
        . . . . 5 7 9 6 6 9 7 5 . . . . 
        . . . . . 5 7 9 9 7 5 . . . . . 
        . . . . . . 5 7 7 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        `,img`
        c . . . . . . 4 4 . . . . . . c 
        8 . . . . . 4 5 5 4 . . . . . 8 
        6 . . . . 4 5 7 7 5 4 . . . . 6 
        9 . . . 4 5 7 9 9 7 5 4 . . . 9 
        7 . . 4 5 7 9 6 6 9 7 5 4 . . 7 
        5 . 4 5 7 9 6 8 8 6 9 7 5 4 . 5 
        4 4 5 7 9 6 8 c c 8 6 9 7 5 4 4 
        4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
        4 5 7 9 6 8 c 2 2 c 8 6 9 7 5 4 
        . 4 5 7 9 6 8 c c 8 6 9 7 5 4 . 
        . . 4 5 7 9 6 8 8 6 9 7 5 4 . . 
        . . . 4 5 7 9 6 6 9 7 5 4 . . . 
        . . . . 4 5 7 9 9 7 5 4 . . . . 
        . . . . . 4 5 7 7 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        `],
    100,
    true
    )
})
function History () {
    list = [
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
    mySprite.destroy(effects.disintegrate, 100)
    effects.starField.startScreenEffect()
    mySprite2 = sprites.create(img`
        ...................................
        ...................................
        ...................................
        ...........22222222222.............
        .........224444444444422...........
        .......cc44444444444444422.........
        ......cce444444444444444422........
        .....cce5e444bbbbbb444444422.......
        ....cce5e5444bbeeeb4444444422......
        ....ce5e54444bbebbb4444444442......
        ...ce5e5e4444bbeb4444444444442.....
        ...c5e5e54444beeb4444444444442.....
        ..c5e5e5e5444bebb44444444444442....
        ..ce5e5e5e444bebb44444444444442....
        ..c5e5e5e5444beeb44444444444442....
        ..ce5cccccbbbbbebb4444444444442....
        ..c5efffffeeeeeeebb444444444442....
        ..ce5cccccbbbbeeeeb444444444442....
        ..c5e5ee5e544bbbeebb44444444442....
        ..ce5e5ee5e4444bbeebb4444444442....
        ..c5e5ee5e544444bbeeb4444444442....
        ..ce5e5ee5e444444bbebb444444442....
        ..c5e5ee5e54444444bbebbb4444442....
        ...c5e5ee5e44444444beeebb44442.....
        ...ce5ee5e444444444bbbeebb4442.....
        ....ce5ee544444444444bbeeb442......
        ....ccee5e444444444444bbeb422......
        .....cc5e54444444444444bbb22.......
        ......cc5ee4444444444444422........
        .......cce5444444444444422.........
        .........cc4444444444422...........
        ...........22222222222.............
        ...................................
        ...................................
        ...................................
        `, SpriteKind.history)
    timer.after(2000, function () {
        mySprite3 = sprites.create(img`
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
            `, SpriteKind.HistoryEnemy)
        mySprite3.setPosition(157, 117)
        mySprite3.setVelocity(-50, -50)
        mySprite2.sayText("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", 5000, true)
    })
    timer.after(6000, function () {
        History_Escape_Happening = true
    })
    timer.after(10000, function () {
        History_Escape_Happening = false
    })
    timer.after(12000, function () {
        mySprite6 = sprites.create(img`
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...........99999999999.............
            .........998888666666699...........
            ........96888886666666669..........
            .......9666888866666666669.........
            ......966666888666666666669........
            .....96666666886666666666669.......
            ....9666666666866666666666669......
            ....9666666668866666666666669......
            ...966666666888666666766666669.....
            ...966666688888666667776666669.....
            ...966666666888666677776666669.....
            ...966666668888677777777766669.....
            ...966666688888677777777776669.....
            ...966668888888677777777776669.....
            ...966666888888667777777776669.....
            ...966666688888667777677666669.....
            ...966666688888667777666666669.....
            ...966666668888667776666666669.....
            ...966666666888666666666666669.....
            ....9666666668866666666666669......
            ....9666666888866666666666669......
            .....96688888886666666666669.......
            ......988888888666666666669........
            .......9888888866666666669.........
            ........98888886666666669..........
            .........998888666666699...........
            ...........99999999999.............
            ...................................
            ...................................
            ...................................
            `, SpriteKind.HistoryNewPlanet)
        History_Escape_Happening = true
        finaly_at_earth = true
    })
    timer.after(14000, function () {
        mySprite6.sayText("laser cannons ready!", 2000, true)
        History_Escape_Happening = false
    })
    timer.after(16000, function () {
        mySprite3 = sprites.create(img`
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
            `, SpriteKind.HistoryEnemy)
        mySprite3.setPosition(146, 2)
        mySprite3.setVelocity(-50, 50)
        projectile3 = sprites.createProjectileFromSprite(img`
            . . 2 2 . . 
            . 2 4 4 2 . 
            2 4 5 5 4 2 
            2 4 5 5 4 2 
            . 2 4 4 2 . 
            . . 2 2 . . 
            `, mySprite6, 0, 0)
        projectile3.setKind(SpriteKind.Projectile)
        projectile3.follow(mySprite3)
    })
    timer.after(18000, function () {
        mysprite7 = sprites.create(img`
            ....cfffffffffffffcc...
            .....cc........ccc19c6.
            .............ccd9119c96
            ..........cccdddd919c6.
            .......ccc99dddddd99cc.
            .....ccbbbbb999dddd9cc.
            ..cccbbbbbbbbbb999d9cc.
            cc999999999999999999ccc
            cc999999999999999999ccc
            ..cccbbbbbbbbbb999d9cc.
            .....ccbbbbb999dddd9cc.
            .......ccc99dddddd99cc.
            ..........cccdddd919c6.
            .............ccd9119c96
            .....cc........ccc19c6.
            ....cfffffffffffffcc...
            `, SpriteKind.HistoryEnemy2)
        mysprite7.setPosition(151, 54)
    })
    timer.after(19000, function () {
        mysprite7.sayText("!!@#$%%&^*& $%@#$%# #@^#%$# $%%^@%^$)", 1000, true)
    })
    timer.after(20000, function () {
        mySprite6.sayText("what does that mean?", 1000, true)
    })
    timer.after(21000, function () {
        is_alein_attacking = true
    })
    timer.after(22000, function () {
        mySprite.sayText("FIRE")
        is_earth_attacking = true
    })
    timer.after(23000, function () {
        mySprite6.sayText("Oh no laser cannons are gone!", 1000, true)
        is_alein_attacking = false
        mysprite7.sayText("!@#@#$#@ @$^*($##@ $$%%#$", 1000, true)
    })
    timer.after(25000, function () {
        mysprite7.destroy(effects.coolRadial, 5000)
    })
    timer.after(26000, function () {
        mySprite8 = sprites.create(img`
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
        mySprite8.setPosition(104, 59)
        mySprite6.sayText("rainbow ship dystroy those astroids so we don't get hit ok", 5000, true)
    })
    timer.after(31000, function () {
        mySprite6.sayText("Remember when mars got dystroyed?", 5000, true)
    })
    timer.after(33000, function () {
        mySprite8.setVelocity(100, 0)
        mySprite9 = sprites.create(img`
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
            `, SpriteKind.HistoryEnemy)
        mySprite9.setPosition(99, 122)
        mySprite9.setVelocity(100, -200)
    })
    timer.after(40000, function () {
        mySprite6.destroy()
        on_start()
    })
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    animation.runImageAnimation(
    SpaceShip,
    [img`
        c 8 6 9 7 5 4 2 2 . . . . . . . 
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
        c 8 6 9 7 5 4 2 2 . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 c c . . . . . . . 
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
        c 8 6 9 7 5 4 c c . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 8 8 . . . . . . . 
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
        c 8 6 9 7 5 4 8 8 . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 6 6 . . . . . . . 
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
        c 8 6 9 7 5 4 6 6 . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 9 9 . . . . . . . 
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
        c 8 6 9 7 5 4 9 9 . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 7 7 . . . . . . . 
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
        c 8 6 9 7 5 4 7 7 . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 5 5 . . . . . . . 
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
        c 8 6 9 7 5 4 5 5 . . . . . . . 
        `,img`
        c 8 6 9 7 5 4 4 4 . . . . . . . 
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
        c 8 6 9 7 5 4 4 4 . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 100)
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    music.smallCrash.play()
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
let hearts: Sprite = null
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile6: Sprite = null
let muSprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let is_alein_attacking = false
let mysprite7: Sprite = null
let projectile3: Sprite = null
let finaly_at_earth = false
let mySprite6: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let list: Image[] = []
let is_earth_attacking = false
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let has_time_ended = false
let last_supernova: Sprite = null
let Enemies: Sprite = null
let Do_not_do_this_again = false
let SpaceShip: Sprite = null
let direction = 0
let statusbar_exists = false
let mySprite: Sprite = null
let is_menu_on = false
let SuperMasiveBlackHole: Sprite = null
let does_black_hole_exist = false
let projectile: Sprite = null
let History_Escape_Happening = false
menu()
History_Escape_Happening = false
let part2 = false
game.onUpdateInterval(randint(300, 1000), function () {
    if (is_menu_on == true) {
    	
    } else {
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
    }
})
game.onUpdateInterval(500, function () {
    if (History_Escape_Happening == true) {
        mySprite4 = sprites.create(img`
            . . . . . . . c d . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . c b . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . c 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 8 7 . . . . . . . 
            . . . . . . 8 8 5 6 . . . . . . 
            . . . . . . 8 7 5 6 . . . . . . 
            . . . . . c c c 6 6 6 . . . . . 
            . . . . 8 8 7 7 7 5 6 6 . . . . 
            . . 8 f f f c c 6 6 f f 6 6 . . 
            . 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
            8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
            8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
            `, SpriteKind.HistoryEscape)
        mySprite4.setPosition(randint(0, scene.screenWidth()), 111)
        if (finaly_at_earth == false) {
            mySprite4.setVelocity(0, -50)
        } else {
            mySprite4.follow(mySprite6, 100)
        }
        mySprite4.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(500, function () {
    if (part2 == false) {
        if (finaly_at_earth == false) {
            if (History_Escape_Happening == true) {
                muSprite5 = sprites.create(list._pickRandom(), SpriteKind.HistoryMultibleEnemies)
                muSprite5.setPosition(randint(0, scene.screenWidth()), 1)
                muSprite5.setVelocity(0, 50)
                muSprite5.setFlag(SpriteFlag.AutoDestroy, true)
            }
        } else {
        	
        }
    } else {
        muSprite5 = sprites.create(list._pickRandom(), SpriteKind.HistoryMultibleEnemies)
        muSprite5.setPosition(151, randint(0, scene.screenHeight()))
        muSprite5.setVelocity(-50, 0)
        muSprite5.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(500, function () {
    if (is_earth_attacking == true) {
        projectile6 = sprites.createProjectileFromSprite(img`
            . . 2 2 . . 
            . 2 4 4 2 . 
            2 4 5 5 4 2 
            2 4 5 5 4 2 
            . 2 4 4 2 . 
            . . 2 2 . . 
            `, mySprite6, 0, 0)
        projectile6.setKind(SpriteKind.Projectile)
        projectile6.follow(mysprite7, 100)
    }
})
game.onUpdateInterval(510, function () {
    if (is_alein_attacking == true) {
        projectile4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . 9 6 8 8 6 9 . . . . . 
            . . . . . 9 6 8 8 6 9 . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mysprite7, 0, 50)
        projectile4.setKind(SpriteKind.EnemyProjectile)
        projectile5 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . 9 6 8 8 6 9 . . . . . 
            . . . . . 9 6 8 8 6 9 . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mysprite7, 0, -50)
        projectile5.setKind(SpriteKind.EnemyProjectile)
        timer.after(500, function () {
            projectile4.setVelocity(-50, -20)
            projectile5.setVelocity(-50, 20)
        })
    }
})
game.onUpdateInterval(5000, function () {
    if (is_menu_on == false) {
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
    }
})
forever(function () {
    if (info.score() == 60) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Heart)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
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
        game.showLongText("you dystroyed those astroids and saved Earth", DialogLayout.Center)
        game.over(true, effects.confetti)
    }
})
forever(function () {
    if (is_menu_on == true) {
        music_title()
    } else {
        if (does_black_hole_exist == true) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 441, 709, 88, 231, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        } else {
            music2()
        }
    }
})
