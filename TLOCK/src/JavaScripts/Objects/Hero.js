class Hero extends Movable {
  constructor(x, y, factionId, id, mapId) {
    super(x, y);
    this.factionId = factionId;
    this.targetShip = null;
    this.id = id;
    this.mapId = mapId;
  }

  lockAndAttack(targetType){
    this.lock(targetType);
    this.attack();
  }

  attack(){
    if (this.targetShip){
      this.handleAttack(this.targetShip);
    }
  }

  handleAttack(shipToAttack){
    let handler = () => {
      if (window.api.lockedShip === shipToAttack) {
        window.api.lastAttack = $.now();
        window.api.attacking = true;
        console.log('locked');
        window.api.startLaserAttack();
      }
    };

    setIntervalLimited(handler, 150, 2);
  }

  lock(targetType){
    this.setTargetShip(targetType);

    if (this.targetShip) {
      this.handleLock();
    }
  }

  handleLock(){
    this.targetShip.update();

    if (this.targetShip instanceof Ship && window.api.ships[this.targetShip.id]){
        window.api.lockShip(this.targetShip);
    }
  }

  setTargetShip(targetType) {
    let maxDistance = 1000;
    let ships = Object.values(window.api.ships);
    let distanceToNearestShip = Math.min(...ships.map(ship =>
        ship.distanceTo(this.position)));

    this.targetShip = ships.filter(ship =>
        ship.distanceTo(this.position) < maxDistance && ship instanceof targetType)
        .find(ship => ship.distanceTo(this.position) === distanceToNearestShip);
  }
}