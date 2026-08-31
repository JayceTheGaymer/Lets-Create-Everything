#  Known Issues & Compatibility Log

This document is used to track known bugs, compatibility conflicts, version mismatches, and workarounds for the modpack. Newest issues should be towards the top.

---

## Issue Tracking Format

Each issue should follow this structure:

## [Issue Title]

**Status:** ✅ Fixed | ⚠️ Workaround Exists | 🟡 Pending Investigation | ❌ No Current Fix Possible

**Mods Affected:**
- Mod Name A vX.Y.Z
- Mod Name B vX.Y.Z

**Severity:** 🔴 Critical | 🟡 Moderate | 🟢 Minor

**Description:**
Clear explanation of the issue and when it occurs.

**Root Cause (if known):**
Technical explanation of why this happens.

**Workaround / Resolution:**
Steps players can take to avoid or fix the issue.

**Related:**
Links to GitHub issue(s) if one exists.

**Last Updated:** MM-DD-YYYY

---

## JER Mob Tooltip Crash (Index Out of Bounds)

**Status:** ✅ Fixed

**Mods Affected:**
- Just Enough Resources (JER) v1.6.0.17
- Deeper and Darker (Sludge is what first reproduced it, but the bug is general)

**Severity:** 🔴 Critical

**Description:**
Opening JER's mob-info screen in JEI and hovering certain ingredient slots (the entity/spawn-egg icon, or a drop slot beyond how many drops the mob actually has) crashed the client with `java.lang.IndexOutOfBoundsException` in `jeresources.jei.mob.MobTooltip.onTooltip`. First reproduced hovering the spawn egg for Deeper and Darker's Sludge (a vanilla `Slime` subclass with fewer drops than JER's slot layout expects), but applies to any mob whose drop list is shorter than JER's slot grid for it. Confirmed JEI-specific: tested using EMI instead of JEI (JER still installed) never hit this.

**Root Cause (if known):**
JER decodes each JEI ingredient slot's name as a raw index into `MobEntry.getDrops()` with no bounds check (`drops.get(index)`). JER's mob-category layout reserves a fixed slot grid (drop slots + the entity icon/spawn-egg slot) and wires the same tooltip callback to all of them, so any slot without a matching drop entry throws.

**Workaround / Resolution:**
Patched via a Mixin in `Jayces Tweaks` (`MobTooltipCrashGuardMixin`): an `@Inject` at the head of `jeresources.jei.mob.MobTooltip#onTooltip` that cancels the callback when the slot index has no matching drop, letting JER's own code run untouched otherwise. Fix ships in Jayce's Tweaks v0.2.0+.

**Related:**
https://github.com/way2muchnoise/JustEnoughResources - no upstream issue filed for this specific bug yet. We are not filing one as the creator has not updated the 1.21.1 version since 2025. They seem to be only focusing on more current game versions.

**Last Updated:** 08-30-2026

---

## Create: Totem Factory Causes KubeJS Errors

**Status:** ❌ No Current Fix Possible

**Mods Affected:**
- Create: Totem Factory

**Severity:** 🟢 Minor

**Description:**
On world load KubeJS alerts on 2 errors of recipes failing to load. These recipes are created by Create: Totem Factory. Testing shows despite this error, the mod is fully functional and totems are still craftable using Create.

**Root Cause (if known):**
Unknown.

**Workaround / Resolution:**
Ignore the error.

**Related:**
https://github.com/Lumynity-Studios/Totem-Factory/issues/3

**Last Updated:** 08-21-2026

---

## Blazes & Mob Fire Invisible

**Status:** ⚠️ Workaround Exists

**Mods Affected:**
- Jaden's Nether Expansion
- Iris Shaders

**Severity:** 🟡 Moderate

**Description:**
Blaze models are completely invisible with only smoke particles seen and if a mob is on fire the fire is not visible. Believed these are related.

**Root Cause (if known):**
Jaden's Nether Expansion makes several changes to fire particles and effects. These changes conflict with Iris Shaders. Some users have reported online that disabling these effects in the config solves the issue. Testing did not have the same results.

**Workaround / Resolution:**
Attempted disabling effects in config, did not fix it. Current workaround is disabling Jaden's Nether Expansion. Mod may be removed at a later point entirely.

**Related:**
N/A

**Last Updated:** 08-22-2026
