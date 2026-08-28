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
