class MixerFightPreset extends BaseFightPreset{
    constructor(){
        super();
        this.lastPressKey = 0;
    }

    handleLasersUsage(){
        let keyToPress = (this.slotsAvailabilty[this.secondaryAmmoSlot]['activatable'] && !this.slotsAvailabilty[this.secondaryAmmoSlot]['selected']) ? this.secondaryAmmoSlot
                        : (this.slotsAvailabilty[this.primaryAmmoSlot]['activatable'] && !this.slotsAvailabilty[this.primaryAmmoSlot]['selected']) ? this.primaryAmmoSlot
                        : null;

        // !this.primaryLaserSelected ? this.itemsKeys['primaryWeapon'] : null;

        // console.log(keyToPress);
        if (keyToPress && $.now() - this.lastPressKey > 30) {
            this.lastPressKey = $.now();
            console.log(this.lastPressKey);
            window.api.pressKey(keyToPress)
        }
    }
}