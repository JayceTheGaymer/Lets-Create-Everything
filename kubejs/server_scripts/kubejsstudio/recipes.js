// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('kubejs:recipe/iron_pickaxe_head', {"type":"create:compacting","ingredients":[{"item":"minecraft:iron_ingot"},{"item":"minecraft:iron_ingot"},{"item":"minecraft:iron_ingot"}],"results":[{"id":"jayces_tweaks:iron_pickaxe_head"}],"heat_requirement":"lowheated"})
    event.json('kubejsstudio:recipe/iron_axe_head', {"type":"create:compacting","ingredients":[{"item":"create:iron_sheet"},{"item":"minecraft:iron_ingot"}],"results":[{"id":"jayces_tweaks:iron_axe_head"}],"heat_requirement":"lowheated"})
})
ServerEvents.recipes(event => {
    event.shaped('createhorsepower:horse_crank', [' # ', 'ABA', 'CCC'], { '#': '#minecraft:fences', 'A': 'create:andesite_alloy', 'B': 'create:cogwheel', 'C': 'minecraft:smooth_stone_slab' }).group('Create').id('kubejsstudio:horse_crank')
    event.remove({ id: 'minecraft:wooden_pickaxe' })
    event.remove({ id: 'minecraft:wooden_axe' })
    event.remove({ id: 'createvintageneoforged:coiling/iron_spring' })
    event.remove({ id: 'createvintageneoforged:coiling/iron_rod' })
    event.remove({ id: 'createvintageneoforged:hammering/netherite_ingot' })
})
