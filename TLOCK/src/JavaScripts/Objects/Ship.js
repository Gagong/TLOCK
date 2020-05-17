class Ship extends Movable {
  constructor(params) {
    super(params['x'], params['y']);
    this.id = params['id'];
    //this.isNpc = isn;
    this.name = params['name'];
    //this.factionId = factionId;
    this.isAttacked = false;
    this.modifier = params['modifier'];
   // this.clanDiplomacy = clanDiplomacy;
    this.cloaked = params['cloaked'];
  }

  setTarget(targetX, targetY, time) {
    this.target = new Vector2D(targetX, targetY);
    this.timeToTarget = parseInt(time);
    this.lastUpdate = $.now();
  }

  // get isEnemy() {
  //   return (window.hero.factionId !== this.factionId && this.clanDiplomacy !== 1 && this.clanDiplomacy !== 2 || this.clanDiplomacy === 3);
  // }

  get percentOfHp() {
    return (this.hp && this.maxHp) ? MathUtils.percentFrom(this.hp, this.maxHp) : 100;
  }

  update() {
    if (this.target == null)
      return;

    let diff = $.now() - this.lastUpdate;

    if (diff > this.timeToTarget) {
      this.position.set(this.target.x, this.target.y);
      return this.position;
    }

    let dx = this.target.x - this.position.x;
    let dy = this.target.y - this.position.y;

    let sx = dx / this.timeToTarget;
    let sy = dy / this.timeToTarget;

    this.lastUpdate = $.now();
    this.position.set(this.position.x + sx * diff, this.position.y + sy * diff);
  }
}