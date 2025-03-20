const spellPower1 = 100;
const spellPower2 = 90;
const spellPower3 = 90;

if (spellPower1 > spellPower2 && spellPower1 > spellPower3) {
    console.log("Spell 1 is the strongest! ");
} else if (spellPower2 > spellPower1 && spellPower2 > spellPower3) {
    console.log("Spell 2 is the strongest! ");
} else if (spellPower3 > spellPower1 && spellPower3 > spellPower2) {
    console.log("Spell 3 is the strongest! ");
} else {
    console.log("Some spells have equal strength! ");
}
