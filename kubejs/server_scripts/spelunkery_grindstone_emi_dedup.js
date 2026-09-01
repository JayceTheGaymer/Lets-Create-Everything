// Spelunkery ships its own EMI plugin (com.ordana.spelunkery.integrations.EmiIntegration) that already
// covers these same conversions under EMI's built-in "World Interaction" category (id emi:world_interaction).
// Now that JEI has its own proper "Grindstone Polishing" category (kubejs/client_scripts/spelunkery_grindstone_jei.js),
// remove just the duplicated entries from EMI so the two viewers show one clean set instead of two
// different-looking versions of the same recipe. Everything else Spelunkery puts in World Interaction
// (sluice drops, anvil repair, rock salt boiling, dimensional tears) is untouched - EMI is still the
// only place those show up.
//
// This MUST be a server script, not a client script: EMI doesn't listen to RecipeViewerEvents.removeRecipes
// directly like it does for addEntries/removeEntries - it only reads a "removed recipes" list synced down
// from the server (KubeJSEMIPlugin -> KubeSessionData.recipeViewerData), which server_scripts populate.
// A client-side removeRecipes call here is silently ignored by EMI.
RecipeViewerEvents.removeRecipes(event => {
    event.removeFromCategory("emi:world_interaction", [
        "spelunkery:/diamond",
        "spelunkery:/emerald",
        "spelunkery:/cinnabar",
        "spelunkery:/lazurite",
        "spelunkery:/salt_grinding",
        "spelunkery:/rose_quartz",
    ])
})
