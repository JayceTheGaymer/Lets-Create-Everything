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
