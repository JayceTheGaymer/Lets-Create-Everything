/*

// Visit the wiki for more info - https://kubejs.com/
console.info('Custome KubeJS startup script loaded!')

//Create Stuff & Additions Armor Value Tweaks

ItemEvents.modification(event => {
    event.modify ('create_sa:copper_helmet', item => {
        item.armorProtection = 1.5
    })
    event.modify ('create_sa:copper_chestplate', item => {
        item.armorProtection = 4.5
    })
    event.modify ('create_sa:copper_leggings', item => {
        item.armorProtection = 3.5
    })
    event.modify ('create_sa:copper_boots', item => {
        item.armorProtection = 1.5
    })
})

*/



ItemEvents.modification(event => {
    event.modify('create_sa:copper_helmet', item => {
        let am = Item.of(item.item().id).attributeModifiers;

        let newProtection = 1.5;

        am = am.withModifierAdded(
            "minecraft:generic.armor",
            {
                id: "minecraft:armor.helmet",
                operation: "add_value",
                amount: newProtection
            },
            "head"
        );

        item.setAttributeModifiersWithTooltip(am.modifiers());
    });
});

ItemEvents.modification(event => {
    event.modify('create_sa:copper_chestplate', item => {
        let am = Item.of(item.item().id).attributeModifiers;

        let newProtection = 4.5;

        am = am.withModifierAdded(
            "minecraft:generic.armor",
            {
                id: "minecraft:armor.chestplate",
                operation: "add_value",
                amount: newProtection
            },
            "chest"
        );

        item.setAttributeModifiersWithTooltip(am.modifiers());
    });
});

ItemEvents.modification(event => {
    event.modify('create_sa:copper_leggings', item => {
        let am = Item.of(item.item().id).attributeModifiers;

        let newProtection = 3.5;

        am = am.withModifierAdded(
            "minecraft:generic.armor",
            {
                id: "minecraft:armor.leggings",
                operation: "add_value",
                amount: newProtection
            },
            "legs"
        );

        item.setAttributeModifiersWithTooltip(am.modifiers());
    });
});

ItemEvents.modification(event => {
    event.modify('create_sa:copper_boots', item => {
        let am = Item.of(item.item().id).attributeModifiers;

        let newProtection = 1.5;

        am = am.withModifierAdded(
            "minecraft:generic.armor",
            {
                id: "minecraft:armor.boots",
                operation: "add_value",
                amount: newProtection
            },
            "feet"
        );

        item.setAttributeModifiersWithTooltip(am.modifiers());
    });
});
