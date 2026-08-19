// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.recipes(event => {
    event.shaped('createhorsepower:horse_crank', [' # ', 'ABA', 'CCC'], { '#': '#minecraft:fences', 'A': 'create:andesite_alloy', 'B': 'create:cogwheel', 'C': 'minecraft:smooth_stone_slab' }).group('Create').id('kubejsstudio:horse_crank')
    event.remove({ id: 'minecraft:wooden_pickaxe' })
    event.remove({ id: 'minecraft:wooden_axe' })
    event.remove({ id: 'kubejs:iron_pickaxe_head' });
    event.custom({"type":"create:compacting","ingredients":[{"item":"minecraft:iron_ingot"},{"item":"minecraft:iron_ingot"},{"item":"minecraft:iron_ingot"}],"results":[{"id":"jayces_tweaks:iron_pickaxe_head"}],"heat_requirement":"lowheated"}).id('kubejs:iron_pickaxe_head')
    event.remove({ id: 'kubejsstudio:iron_axe_head' }); event.custom({"type":"create:compacting","ingredients":[{"item":"create:iron_sheet"},{"item":"minecraft:iron_ingot"}],"results":[{"id":"jayces_tweaks:iron_axe_head"}],"heat_requirement":"lowheated"}).id('kubejsstudio:iron_axe_head')
})
