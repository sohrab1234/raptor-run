enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        .....................................................ffff..................ffff...................................................................................
        ............ffffff..................................f....f..............fff....f..................................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffff.....fffffffffffffffff.....ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        .....................................ffffff.fffffff.............................f.......................................................................fffff...ff
        ..................................................................................................................................................................
        ....ffff.f.................ffff.f...........f..ffff..........................f.............f..ffff.........................ffff..f.......................f..ffff..
        ............................................................................f.................................................................................fff.
        ...............ff.ffff...............f..................f..ffff.....f..ffff........ffff..............f.......f.ffff.........................f..fffff..............
        .....................................f.........................f..................................................f.................................f.............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................ffff..................ffff...................................................................................
        ............ffffff..................................f....f..............fff....f..................................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffff.....fffffffffffffffff.....ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        .....................................ffffff.fffffff.............................f.......................................................................fffff...ff
        ..................................................................................................................................................................
        ....ffff.f.................ffff.f...........f..ffff..........................f.............f..ffff.........................ffff..f.......................f..ffff..
        ............................................................................f.................................................................................fff.
        ...............ff.ffff...............f..................f..ffff.....f..ffff........ffff..............f.......f.ffff.........................f..fffff..............
        .....................................f.........................f..................................................f.................................f.............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    raptor = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................f777ff...
        ......................f71f777f..
        ......................f777777f..
        .................fffff77777ff...
        .............ffff777777777f.....
        .........ffff777777777777f......
        ....fffff777777777777777f.......
        ...f777777777777777777777.......
        ..f777fffffffff777777fff7f......
        ...fff.........ff777f.f77f......
        .................f77f..ff.......
        .................f7f............
        ................f77f............
        ................f77f............
        ................f7f.............
        .................f..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Player)
    run = 0
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................f777ff...
        ......................f71f777f..
        ......................f777777f..
        .................fffff77777ff...
        .............ffff777777777f.....
        .........ffff777777777777f......
        ....fffff777777777777777f.......
        ..ff77777777777777777777f.......
        ....fffffffffff777777fff7f......
        ...............ff777ff..7f......
        .................f77ff.ff.......
        .................f77ff..........
        ................f77f.ff.........
        ................f7f...f.........
        ................f7f....f........
        .................f..............
        `)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................f777ff...
        ......................f71f777f..
        ......................f777777f..
        .................fffff77777ff...
        .........ffffffff777777777f.....
        .....fff77777777777777777f......
        ..ff777777777777777777777f......
        ............ff77777777777f......
        ..............f7777777f777f.....
        ...............ffff777fff7f.....
        ................fffff7f.ff......
        ................fff.f7f.........
        ................ff.f77f.........
        ...............ff..f7f..........
        ..............f....f7f..........
        ....................f...........
        `)
    animation.attachAnimation(raptor, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................f777ff...
        ......................f71f777f..
        ......................f777777f..
        .................fffff77777ff...
        .............ffff777777777f.....
        ...........ff777777777777f......
        .........ff7777777777777f.......
        .......ff777777777777777f.......
        ......f777fffff777777fff7f......
        .....f77ff.....ff777f...7f......
        ....f77f.........f77f..ff.......
        ...f77f..........f7f............
        ....ff..........f77f............
        ................f7f.............
        ................f7f.............
        .................f..............
        `)
    animation.attachAnimation(raptor, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................f111ff...
        ......................f71f177f..
        ......................f711177f..
        .................fffff77777ff...
        .............ffff777777777f.....
        .........ffff777777777777f......
        ....fffff777777777777777f.......
        ...f77777777777777777777f.......
        ..f777fffffffff777777fff7f......
        ...fff.........ff777f...7f......
        .................f77f..ff.......
        .............eee.f7f............
        ............eeeef77f............
        ............eeeef7f.............
        ...........eeeeef7f.............
        ...........eeeeeef..............
        `)
    animation.attachAnimation(raptor, dead)
    raptor.z = 3
    raptor.setPosition(15, 94)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (raptor.y == 94 && end == 0) {
        raptor.vy = -160
        animation.setAction(raptor, ActionKind.Jumping)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(raptor, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run = 0
let raptor: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = null
game.setDialogCursor(img`
    ................................
    ..1111111111111111111111111111..
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    111111111111111111111111fff11111
    11111111111111111111111f777ff111
    1111111111111111111111f71f777f11
    1111111111111111111111f777777f11
    11111111111111111fffff77777ff111
    1111111111111ffff777777777f11111
    111111111ffff777777777777f111111
    1111fffff777777777777777f1111111
    111f7777777777777777777771111111
    11f777fffffffff777777fff7f111111
    111fff111111111ff777f1f77f111111
    11111111111111111f77f11ff1111111
    11111111111111111f7f111111111111
    1111111111111111f77f111111111111
    1111111111111111f771111111111111
    1111111111111111f7f1111111111111
    11111111111111111f11111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    .111111111111111111111111111111.
    ..1111111111111111111111111111..
    `)
game.splash("dino Run by sohrab")
scene.setBackgroundColor(1)
initGround()
initRaptor()
info.setScore(0)
end = 0
game.showLongText("LETS DO THIS", DialogLayout.Full)
game.onUpdate(function () {
    if (raptor.y < 94) {
        raptor.ay = 400
    } else {
        raptor.ay = 0
        raptor.y = 94
        if (end == 0) {
            animation.setAction(raptor, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............777...............
            .............77777..............
            .............77777..............
            .............77777..............
            .........7...77777...7..........
            ........777..77777..777.........
            ........777..77777..777.........
            ........777..77777..777.........
            ........777..7777777777.........
            ........777..7777777777.........
            ........77777777777777..........
            ........7777777777..............
            .........777777777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............777...............
            .............77777..............
            .............77777..............
            .............77777..............
            .........7...77777...7..........
            ........777..77777..777.........
            ........777..77777..777.........
            ........777..77777..777.........
            ........777..7777777777.........
            ........777..7777777777.........
            ........77777777777777..........
            ........7777777777..............
            .........777777777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            .............77777..............
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........7....................
            ..........777...................
            ..........777......7............
            ........7.777.....777...........
            ........7.777.....777.7.........
            ........77777.7...777.7.........
            ..........777.7.7.77777.........
            ..........77777.7.777...........
            ..........777...77777...........
            ..........777.....777...........
            ..........777.....777...........
            ..........777.....777...........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................1111111.........
            ..............111999911.........
            .............111999999111.......
            .............199999999991111....
            .............199999999999991....
            ..........11119999999999999111..
            .........1199999999999999999911.
            .....11111999999999999999999911.
            .....19999999999999999999999991.
            .1111199999999999999999999999991
            11...111111111111111111111111111
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
