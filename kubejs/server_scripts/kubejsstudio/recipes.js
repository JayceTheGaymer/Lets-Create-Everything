// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.recipes(event => {
    event.shaped('createhorsepower:horse_crank', [' # ', 'ABA', 'CCC'], { '#': '#minecraft:fences', 'A': 'create:andesite_alloy', 'B': 'create:cogwheel', 'C': 'minecraft:smooth_stone_slab' }).group('Create').id('kubejsstudio:horse_crank')
    event.remove({ id: 'minecraft:wooden_pickaxe' })
    event.remove({ id: 'minecraft:wooden_axe' })
})
