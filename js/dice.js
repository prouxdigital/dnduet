;(function(){
    const rollDice = _ => {
        let amt = Number(document.getElementById("diceAmt").value),
            sides = Number(document.getElementById("diceSides").value),
            mod = Number(document.getElementById("diceMod").value);

        if(amt === 1 && mod === 0) return randomIntFromRange(1, sides);

        let resultsArray = [],
            total = 0;

        for(let i = 0; i < amt; i++) {
            let roll = randomIntFromRange(1, sides);
            total += roll;
            resultsArray.push(roll);
        }

        if(mod === 0) {
            return "<p class=\"help\">" + resultsArray.join(" + ") + "&nbsp;=</p>" + total;
        } else if(mod < 0) {
            total += mod;
            return "<p class=\"help\">" + resultsArray.join(" + ") + " - " + Math.abs(mod) +  "&nbsp;=</p>" + total;
        } else {
            total += mod;
            resultsArray.push(mod);
            return "<p class=\"help\">" + resultsArray.join(" + ") + "&nbsp;=</p>" + total;
        }
    };

    const randomIntFromRange = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    document.getElementById("rollDice").addEventListener("click", _ => {
        let el = document.getElementById("diceResult"),
            btn = this;

        btn.disabled = true;
        el.innerHTML = "<span class=\"icon\"><i class=\"fas fa-dice-d20 fa-pulse\"></i></span>";

        setTimeout(() => {
            btn.disabled = false;
            el.innerHTML = rollDice();
        }, 600);
    });
})();
