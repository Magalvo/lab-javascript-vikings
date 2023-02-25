// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healt, strength) {
    super(healt, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVicking = Math.floor(Math.random() * this.vikingArmy.length);
    const vickingDamage = this.vikingArmy[randomVicking].attack();
    const saxon = this.saxonArmy[randomSaxon];
    let combat = saxon.receiveDamage(vickingDamage);

    if (saxon.health <= 0) {
      this.saxonArmy.shift();
    }
    return combat;
  }

  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonDamage = this.saxonArmy[randomSaxon].attack();
    const viking = this.vikingArmy[randomViking];
    let combat = viking.receiveDamage(saxonDamage);

    if (viking.health <= 0) {
      this.vikingArmy.shift();
    }
    return combat;
  }

  showStatus() {
    if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
