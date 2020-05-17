class Settings {
  constructor(lockPlayers, lockNpc, autoattack) {
    this._npcs = [];

    this._lockPlayers = lockPlayers === true;
    this._lockNpc = lockNpc === true;
    this._autoattack = autoattack === true;

    this._enemyAutoLockKeys = [];
    this._npcAutoLockKeys = [];
  }

  set lockPlayers(v) {
    this._lockPlayers = v === true;
  }

  get lockPlayers() {
    return this._lockPlayers;
  }

  set lockNpc(v) {
    this._lockNpc = v === true;
  }

  get lockNpc() {
    return this._lockNpc;
  }

  set autoattack(v) {
    this._autoattack = v === true;
  }

  get autoattack() {
    return this._autoattack
  }

  set npcAutoLockKeys(v) {
    this._npcAutoLockKeys = v.split("");
  }

  get npcAutoLockKeys() {
    return this._npcAutoLockKeys;
  }

  set enemyAutoLockKeys(v) {
    this._enemyAutoLockKeys = v.split("");
  }

  get enemyAutoLockKeys() {
    return this._enemyAutoLockKeys;
  }

  setNpc(name, val) {
    this._npcs[name] = val;
  }

  getNpc(name) {
    return !this._npcs[name];
  }

}