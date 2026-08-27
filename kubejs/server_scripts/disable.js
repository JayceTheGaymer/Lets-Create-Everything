BlockEvents.rightClicked('minecraft:smithing_table', event => {
    // Stops the smithing table GUI from opening
    event.cancel()

    // Optional: Send a status message to the player
    event.player.displayClientMessage(Text.red('The Smithing Table has been disabled! Use  helve hammer instead.'), true)
})