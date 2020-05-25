class FightPresetsManager {
    constructor(fightPreset) {
        this._fightPreset = fightPreset;
    }

    handleAmmunitionUpdate(slotId, item){
        this.fightPreset.slotsManager.handleSlotUpdate(slotId, item);
    }

    get fightPreset() {
        return this._fightPreset;
    }

    set fightPreset(fightPreset){
        this._fightPreset = fightPreset;
    }
}
