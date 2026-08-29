// Disables Deeper Darker's Warden Heart/Carapace global loot modifiers.
// These items are NOT added via the warden's loot table, so editing
// loot_tables.js doesn't work.
ServerEvents.generateData('after_mods', event => {
    event.json('neoforge:loot_modifiers/global_loot_modifiers', {
        "replace": true,
        "entries": [
            "deeperdarker:warden_carapace_from_ancient_city",
            "deeperdarker:resonarium_upgrade_from_ancient_city",
            "deeperdarker:resonarium_upgrade_from_common_trial_chambers",
            "deeperdarker:resonarium_upgrade_from_stronghold_corridor",
            "deeperdarker:warden_upgrade_from_ancient_city"
        ]
    })
})
