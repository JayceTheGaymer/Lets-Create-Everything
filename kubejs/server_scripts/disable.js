BlockEvents.rightClicked('minecraft:smithing_table', event => {
    const player = event.player
    const item = event.item

    // If the player is sneaking and holding a block, allow default placement behavior
    if (player.isCrouching() && item.isBlock()) {
        return
    }

    // Otherwise, cancel the GUI and show the message
    event.cancel()
    player.displayClientMessage('The Smithing Table has been disabled! Use a helve hammer instead.')
})