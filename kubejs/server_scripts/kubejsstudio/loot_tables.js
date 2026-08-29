// kubejsstudio loot tables; re-apply merges by table id
ServerEvents.generateData('after_mods', event => {
    event.json('minecraft:loot_table/entities/warden', {"type":"minecraft:entity","random_sequence":"minecraft:entities/warden","pools":[{"rolls":1.0,"bonus_rolls":0.0,"name":"pool0","entries":[]},{"rolls":1.0,"bonus_rolls":0.0,"name":"pool1","entries":[]}]})
})
