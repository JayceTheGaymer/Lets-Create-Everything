// Spelunkery's rough gem -> gem conversion (right-click a Grindstone / Diamond Grindstone)
// is implemented as a mixin + loot table, not a real RecipeType, so JEI can never find it on
// its own (EMI gets a hand-written plugin from Spelunkery for the same recipes; JEI gets nothing).
// This documents that interaction as a custom JEI category using KubeJS Additions
// (JEIAddedEvents.registerCategories/registerRecipes - requires the "kubejsadditions" mod).
//
// Layout mirrors Spelunkery's own EMI "World Interaction" display: [input] + [workstation] -> [output(s)]
//
// Scope: only the rough gem tiers that prompted this patch (diamond/emerald/cinnabar/lazurite)
// plus rock salt and Create's rose quartz, matching what Spelunkery's own EMI plugin covers.
// The plain stone-polishing loot tables (andesite/diorite/granite/blackstone/deepslate variants)
// are intentionally left out for now - ask if you want those added too.

// Minecraft resource location namespaces can't contain spaces, capitals, or apostrophes,
// so "lets_create_everything" is as close to the full pack name as the id format allows.
const GRINDSTONE_POLISHING = "lets_create_everything:grindstone_polishing"

JEIAddedEvents.registerCategories(event => {
    event.custom(GRINDSTONE_POLISHING, category => {
        const guiHelper = category.jeiHelpers.getGuiHelper()
        const plus = guiHelper.getRecipePlusSign()
        const arrow = guiHelper.getRecipeArrow()
        const SLOT = guiHelper.getSlotDrawable().getWidth()
        const GAP = 3
        const MARGIN = 5
        // JEI's plus-sign texture has more transparent padding baked into its right edge than its
        // left, so drawing it flush inside a symmetric [GAP][plus.getWidth()][GAP] box makes the
        // visible "+" sit closer to the workstation slot than the input slot. This nudges just the
        // draw position (not the layout math below) to compensate. Re-check after this and adjust
        // by a pixel or two if it's still not dead center.
        const PLUS_DRAW_NUDGE_X = -1

        // left to right: [input] [+] [workstation] [->] [output] [output]
        const inputX = MARGIN
        const plusX = inputX + SLOT + GAP
        const workstationX = plusX + plus.getWidth() + GAP
        const arrowX = workstationX + SLOT + GAP
        const outputStartX = arrowX + arrow.getWidth() + GAP

        const rowHeight = Math.max(SLOT, plus.getHeight(), arrow.getHeight())
        const centerY = MARGIN + rowHeight / 2
        const slotY = Math.round(centerY - SLOT / 2)
        const plusY = Math.round(centerY - plus.getHeight() / 2)
        const arrowY = Math.round(centerY - arrow.getHeight() / 2)

        // reserve room for up to 2 output slots (cinnabar/lazurite have 2, diamond/emerald/salt have 1)
        const width = outputStartX + SLOT * 2 + GAP + MARGIN
        const height = rowHeight + MARGIN * 2

        category
            .title("Grindstone Polishing")
            .background(guiHelper.createBlankDrawable(width, height))
            .icon(guiHelper.createDrawableItemStack(Item.of("spelunkery:diamond_grindstone")))
            .isRecipeHandled(recipe => {
                if (!recipe) return false
                if (!recipe.data) return false
                if (!recipe.data.input) return false
                if (!recipe.data.outputs) return false
                return true
            })
            .setDrawHandler((recipe, slotsView, guiGraphics, mouseX, mouseY) => {
                plus.draw(guiGraphics, plusX + PLUS_DRAW_NUDGE_X, plusY)
                arrow.draw(guiGraphics, arrowX, arrowY)
            })
            .handleLookup((builder, recipe, focuses) => {
                const data = recipe.data
                builder.addSlot("INPUT", inputX, slotY).addItemStack(Item.of(data.input)).setSlotName("input").setStandardSlotBackground()
                builder.addSlot("INPUT", workstationX, slotY).addItemStack(Item.of(data.workstation)).setSlotName("workstation").setStandardSlotBackground()
                data.outputs.forEach((out, i) => {
                    // setStandardSlotBackground(), not setOutputSlotBackground() - the latter draws a
                    // larger/highlighted frame that clips into the arrow and doesn't match the input slots.
                    builder.addSlot("OUTPUT", outputStartX + i * (SLOT + GAP), slotY).addItemStack(Item.of(out)).setStandardSlotBackground()
                })
            })
    })
})

JEIAddedEvents.registerRecipes(event => {
    event.custom(GRINDSTONE_POLISHING)
        // Regular Grindstone
        .add({ workstation: "minecraft:grindstone", input: "spelunkery:rough_cinnabar", outputs: ["spelunkery:cinnabar", "minecraft:redstone"] })
        .add({ workstation: "minecraft:grindstone", input: "spelunkery:rough_lazurite", outputs: ["minecraft:lapis_lazuli", "spelunkery:raw_gold_nugget"] })
        .add({ workstation: "minecraft:grindstone", input: "spelunkery:rock_salt", outputs: ["spelunkery:salt"] })
        .add({ workstation: "minecraft:grindstone", input: "create:rose_quartz", outputs: ["create:polished_rose_quartz"] })
        // Diamond Grindstone (better tier, also handles diamond/emerald)
        .add({ workstation: "spelunkery:diamond_grindstone", input: "spelunkery:rough_diamond", outputs: ["minecraft:diamond"] })
        .add({ workstation: "spelunkery:diamond_grindstone", input: "spelunkery:rough_emerald", outputs: ["minecraft:emerald"] })
        .add({ workstation: "spelunkery:diamond_grindstone", input: "spelunkery:rough_cinnabar", outputs: ["spelunkery:cinnabar", "minecraft:redstone"] })
        .add({ workstation: "spelunkery:diamond_grindstone", input: "spelunkery:rough_lazurite", outputs: ["minecraft:lapis_lazuli", "spelunkery:raw_gold_nugget"] })
})
