// kubejsstudio loot tables; re-apply merges by table id
ServerEvents.generateData('after_mods', event => {
    event.json('minecraft:loot_table/entities/warden', {"type":"minecraft:entity","random_sequence":"minecraft:entities/warden","pools":[{"rolls":1.0,"bonus_rolls":0.0,"entries":[{"type":"minecraft:item","name":"minecraft:sculk_catalyst"}]},{"rolls":1,"bonus_rolls":0,"entries":[{"type":"minecraft:item","name":"deeperdarker:warden_carapace","functions":[{"function":"minecraft:set_count","count":{"type":"minecraft:uniform","min":1,"max":3}}]}]},{"rolls":1,"bonus_rolls":0,"entries":[{"type":"minecraft:item","name":"deeperdarker:heart_of_the_deep"}]}]})
})
