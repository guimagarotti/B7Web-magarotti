function calcPct(x, y) {
    return (y / x) * 100;
}

let x = 10;
let y = 15;
let pct = calcPct(x, y)
console.log(`${pct}% de ${x} é ${y}`)