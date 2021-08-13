// kontrola toka switch
var br1 = parseInt(prompt("Unesite prvi broj"));
var oper = prompt("Unesite operaciju");
var br2 = parseInt(prompt("Unesite drugi broj"));

function calc(param1, op, param2) {
    switch (op) {
        case "+": document.write("Rezultat je: " + (param1 + param2));
            break;
        case "-": document.write("Rezultat je: " + (param1 - param2));
            break;
        case "*": document.write("Rezultat je: " + (param1 * param2));
            break;
        case "/": document.write("Rezultat je: " + (param1 / param2));
            break;
        default:
            document.write("Operacija nije podrzana")
    }
}

calc(br1, oper, br2)