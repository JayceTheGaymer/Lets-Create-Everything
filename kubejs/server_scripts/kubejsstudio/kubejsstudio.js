// kubejsstudio custom: kubejsstudio:iron_axe_head
ServerEvents.recipes(event => {
    event.custom(
      {
        "type": "create:compacting",
        "ingredients": [
          {"item":"create:iron_sheet"},
          {"item":"minecraft:iron_ingot"},
          {"item":"minecraft:iron_ingot"}
        ],
        "results": [{"id":"jayces_tweaks:iron_axe_head"}],
        "heat_requirement": "lowheated"
      }
    ).id('kubejsstudio:iron_axe_head')
})
// kubejsstudio custom: kubejsstudio:iron_shovel_head
ServerEvents.recipes(event => {
    event.custom(
      {
        "type": "create:compacting",
        "ingredients": [{"item":"create:iron_sheet"}],
        "results": [{"id":"jayces_tweaks:iron_shovel_head"}],
        "heat_requirement": "lowheated"
      }
    ).id('kubejsstudio:iron_shovel_head')
})
// kubejsstudio custom: kubejsstudio:iron_hoe_head
ServerEvents.recipes(event => {
    event.custom(
      {
        "type": "create:compacting",
        "ingredients": [{"item":"create:iron_sheet"},{"item":"create:iron_sheet"}],
        "results": [{"id":"jayces_tweaks:iron_hoe_head"}],
        "heat_requirement": "lowheated"
      }
    ).id('kubejsstudio:iron_hoe_head')
})
// kubejsstudio custom: kubejsstudio:iron_sword_blade
ServerEvents.recipes(event => {
    event.custom(
      {
        "type": "create:compacting",
        "ingredients": [
          {"item":"minecraft:iron_ingot"},
          {"item":"minecraft:iron_ingot"}
        ],
        "results": [{"id":"jayces_tweaks:iron_sword_blade"}],
        "heat_requirement": "lowheated"
      }
    ).id('kubejsstudio:iron_sword_blade')
})
// kubejsstudio custom: createvintageneoforged:coiling/iron_spring
ServerEvents.generateData('after_mods', event => {
    event.json(
      'createvintageneoforged:recipe/coiling/iron_spring',
      {
        "ingredients": [{"item":"createvintageneoforged:iron_rod"}],
        "results": [{"id":"createvintageneoforged:iron_spring"}],
        "processing_time": 150,
        "type": "createvintageneoforged:coiling"
      }
    )
})
// kubejsstudio custom: kubejsstudio:coiling/iron_spring
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/coiling/iron_spring',
      {
        "ingredients": [{"item":"createaddition:iron_rod"}],
        "results": [{"id":"simulated:spring"}],
        "processing_time": 150,
        "type": "createvintageneoforged:coiling"
      }
    )
})
// kubejsstudio custom: createvintageneoforged:hammering/netherite_ingot
ServerEvents.generateData('after_mods', event => {
    event.json(
      'createvintageneoforged:recipe/hammering/netherite_ingot',
      {
        "ingredients": [{"tag":"c:ingots/netherite"}],
        "results": [{"id":"createvintageneoforged:iron_rod"}],
        "hammer_blows": 3,
        "type": "createvintageneoforged:hammering"
      }
    )
})
// kubejsstudio custom: kubejsstudio:hammering/auto_smithing
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/hammering/diamond_pickaxe',
      {
        "ingredients": [
          {"tag":"c:gems/diamond"},
          {"tag":"c:gems/diamond"},
          {"tag":"c:gems/diamond"}
        ],
        "results": [],
        "type": "createvintageneoforged:auto_smithing"
      }
    )
})
// kubejsstudio custom: kubejsstudio:hammering/diamond_pickaxe
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/hammering/diamond_pickaxe',
      {
        "ingredients": [{"tag":"c:gems/diamond"},{"tag":"c:gems/diamond"},{"tag":"c:gems/diamond"}],
        "results": [{"id":"minecraft:diamond_pickaxe"}],
        "hammer_blows": 3,
        "type": "createvintageneoforged:hammering"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_pickaxe
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_pickaxe',
      {
        "category": "misc",
        "key": {
          "A": {"tag":"c:rods/wooden"},
          "#": {"item":"jayces_tweaks:diamond_pickaxe_head"}
        },
        "pattern": ["#","A"],
        "result": {"id":"minecraft:diamond_pickaxe","count":1},
        "type": "kubejs:shaped"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_axe
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_axe',
      {
        "category": "misc",
        "key": {
          "A": {"tag":"c:rods/wooden"},
          "#": {"item":"jayces_tweaks:diamond_axe_head"}
        },
        "pattern": ["#","A"],
        "result": {"id":"minecraft:diamond_axe","count":1},
        "type": "kubejs:shaped"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_pickaxe_head
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_pickaxe_head',
      {
        "ingredients": [{"tag":"c:storage_blocks/diamond"}],
        "results": [{"id":"jayces_tweaks:diamond_shovel_head"}],
        "type": "createvintageneoforged:turning"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_axe_head
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_axe_head',
      {
        "ingredients": [{"tag":"c:storage_blocks/diamond"}],
        "results": [{"id":"jayces_tweaks:diamond_axe_head"}],
        "type": "createvintageneoforged:turning"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_shovel_head
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_shovel_head',
      {
        "ingredients": [{"tag":"c:storage_blocks/diamond"}],
        "results": [{"id":"jayces_tweaks:diamond_shovel_head"}],
        "type": "createvintageneoforged:turning"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_hoe_head
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_hoe_head',
      {
        "ingredients": [{"tag":"c:storage_blocks/diamond"}],
        "results": [{"id":"jayces_tweaks:diamond_hoe_head"}],
        "type": "createvintageneoforged:turning"
      }
    )
})
// kubejsstudio custom: kubejsstudio:diamond_sword_blade
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/diamond_sword_blade',
      {
        "ingredients": [{"tag":"c:storage_blocks/diamond"}],
        "results": [{"id":"jayces_tweaks:diamond_sword_blade"}],
        "type": "createvintageneoforged:turning"
      }
    )
})
// kubejsstudio custom: kubejsstudio:iron_sword
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/iron_sword',
      {
        "category": "misc",
        "key": {
          "A": {"tag":"c:rods/wooden"},
          "#": {"item":"jayces_tweaks:iron_sword_blade"}
        },
        "pattern": ["#","A"],
        "result": {"id":"minecraft:iron_sword","count":1},
        "type": "kubejs:shaped"
      }
    )
})
// kubejsstudio custom: kubejsstudio:horse_crank
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/horse_crank',
      {
        "group": "Create",
        "category": "misc",
        "key": {
          "A": {"item":"create:andesite_alloy"},
          "B": {"item":"create:cogwheel"},
          "#": {"tag":"minecraft:fences"},
          "C": {"item":"minecraft:stone_slab"}
        },
        "pattern": [" # ","ABA","CCC"],
        "result": {"id":"createhorsepower:horse_crank","count":1},
        "type": "kubejs:shaped"
      }
    )
})
// kubejsstudio custom: tfmg:compacting/cast_iron
ServerEvents.generateData('after_mods', event => {
    event.json(
      'tfmg:recipe/compacting/cast_iron',
      {
        "type": "create:compacting",
        "ingredients": [{"tag":"c:ingots/iron"},{"item":"minecraft:coal"}],
        "results": [{"id":"tfmg:cast_iron_ingot"}],
        "heat_requirement": "lowheated"
      }
    )
})
