class DefaultFightPreset extends BaseFightPreset{
    constructor(){
        super();
    }

    handleLasersUsage(){
      setIntervalLimited(() => {
          if (window.api.lockedShip === window.hero.targetShip) {
            window.api.lastAttack = $.now();
            window.api.attacking = true;
            console.log('locked');
            window.api.startLaserAttack();
          }
      }, 150, 2);
    }
}