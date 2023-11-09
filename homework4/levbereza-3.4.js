class Warrior {
    constructor() {
        this.level1 = 1;
        this.experience1 = 100;
        this.achievements1 = [];
    }

    level() {
        this.level1 = Math.floor(this.experience1 / 100);
        return Math.min(this.level1, 100);
    }

    rank() {
        const ranks = [
            "Pushover","Novice","Fighter","Warrior",
            "Veteran","Sage","Elite","Conqueror",
            "Champion","Master","Greatest"
        ];
        return ranks[Math.floor(this.level1 / 10)] || ranks[ranks.length - 1];
    }

    experience() {
        return Math.min(this.experience1, 10000);
    }

    achievements() {
        return this.achievements1;
    }

    training([desc, exp, minL]) {
        if (minL > this.level1) return "Not strong enough";
        this.achievements1.push(desc);
        this.experience1 += exp;
        this.level1 = Math.floor(this.experience1 / 100);
        return desc;
    }

    battle(enemy_level) {
        let fightResult = this.battleResult(enemy_level);
        this.level1 = Math.floor(this.experience1 / 100);
        return fightResult;
    }

    battleResult(enemy_level) {
        let diff = enemy_level - this.level1;
        if (enemy_level < 1 || enemy_level > 100) {
            return "Invalid level";
        }
        if (this.level1 === enemy_level) {
            this.experience1 += 10;
            return "A good fight";
        } else if (this.level1 - enemy_level === 1) {
            this.experience1 += 5;
            return "A good fight";
        } else if (this.level1 - enemy_level <= -5 && Math.floor(this.level1 / 10) !== Math.floor(enemy_level / 10)) {
            return "You've been defeated";
        } else if (this.level1 < enemy_level) {
            this.experience1 += 20 * diff * diff;
            return "An intense fight";
        } else {
            return "Easy fight";
        }
    }
}