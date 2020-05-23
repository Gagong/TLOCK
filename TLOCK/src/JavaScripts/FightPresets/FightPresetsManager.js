class FightPresetsManager {
    constructor(fightPreset) {
        this._fightPreset = fightPreset;
    }

    updateFightPreset(slotId, item){
        this.fightPreset.handleSlotUpdate(slotId, item);
    }

    get fightPreset() {
        return this._fightPreset;
    }

    set fightPreset(fightPreset){
        this._fightPreset = fightPreset;
    }
}
