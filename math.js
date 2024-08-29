const matriz = 200;

function addingZero() {
    const zero = Math.imul(0, 23);

    return zero;
}

function addingOne() {
    const one = Math.imul(1, 23);

    return one;
}

function addingTwo() {
    const two = Math.imul(2, 18);

    return two;
}

function addingThree() {
    const three = Math.imul(3, 26);

    return three;
}

function addingFour() {
    const four = Math.imul(4, 16);

    return four;
}

function addingFive() {
    const five = Math.imul(5, 15);

    return five;
}

function addingSix() {
    const six = Math.imul(6, 9);

    return six;
}

function addingSeven() {
    const seven = Math.imul(7, 9);

    return seven;
}

function addingEight() {
    const eight = Math.imul(8, 10);

    return eight;
}

function addingNine() {
    const nine = Math.imul(9, 12);

    return nine;
}

function addingTen() {
    const ten = Math.imul(10, 5);

    return ten;
}

function addingEleven() {
    const eleven = Math.imul(11, 5);

    return eleven;
}

function addingTwelve() {
    const twelve = Math.imul(12, 10);

    return twelve;
}

function addingThirteen() {
    const thirteen = Math.imul(13, 4);

    return thirteen;
}

function addingFourteen() {
    const fourteen = Math.imul(14, 1);

    return fourteen;
}

function addingFifteen() {
    const fifteen = Math.imul(15, 2);

    return fifteen;
}

function addingSixteen() {
    const sixteen = Math.imul(16, 1);

    return sixteen;
}

function addingSeventeen() {
    const seventeen = Math.imul(17, 2);

    return seventeen;
}

function addingEighteen() {
    const eighteen = Math.imul(18, 4);

    return eighteen;
}

function addingNineteen() {
    const nineteen = Math.imul(19, 4);

    return nineteen;
}

function addingTwenty() {
    const twenty = Math.imul(20, 3);

    return twenty;
}

function addingTwentyTwo() {
    const twentyTwo = Math.imul(22, 1);

    return twentyTwo;
}

function addingTwentyFour() {
    const twentyFour = Math.imul(24, 1);

    return twentyFour;
}

function addingTwentySeven() {
    const twentySeven = Math.imul(27, 2);

    return twentySeven;
}

function addingTwentyEight() {
    const twentyEight = Math.imul(28, 2);

    return twentyEight;
}

function addingSevenHundredTwentyEight() {
    const sevenHundredTwentyEight = Math.imul(728, 1);

    return sevenHundredTwentyEight;
}

function addingFortyThree() {
    const fortyThree = Math.imul(43, 1);

    return fortyThree;
}

function soma() {
    return addingZero() + addingOne() + addingTwo() + addingThree() +
        addingFour() + addingFive() + addingSix() + addingSeven() +
        addingEight() + addingNine() + addingTen() + addingEleven() +
        addingTwelve() + addingThirteen() + addingFourteen() + addingFifteen() +
        addingSixteen() + addingSeventeen() + addingEighteen() + addingNineteen() +
        addingTwenty() + addingTwentyTwo() + addingTwentyFour() + addingTwentySeven() +
        addingTwentyEight() + addingSevenHundredTwentyEight() + addingFortyThree();
}

function media() {
    return (soma() / matriz);
}

function zeroOfVariance() {
    return (Math.pow((0 - media()), 2) * 13).toFixed(3);
}

function oneOfVariance() {
    return (Math.pow((1 - media()), 2) * 23).toFixed(3);
}

function twoOfVariance() {
    return (Math.pow((2 - media()), 2) * 18).toFixed(3);
}

function threeOfVariance() {
    return (Math.pow((3 - media()), 2) * 26).toFixed(3);
}

function fourOfVariance() {
    return (Math.pow((4 - media()), 2) * 16).toFixed(3);
}

function fiveOfVariance() {
    return (Math.pow((5 - media()), 2) * 15).toFixed(3);
}

function sixOfVariance() {
    return (Math.pow((6 - media()), 2) * 9).toFixed(3);
}

function sevenOfVariance() {
    return (Math.pow((7 - media()), 2) * 9).toFixed(3);
}

function eightOfVariance() {
    return (Math.pow((8 - media()), 2) * 10).toFixed(3);
}

function nineOfVariance() {
    return (Math.pow((9 - media()), 2) * 12).toFixed(3);
}

function tenOfVariance() {
    return (Math.pow((10 - media()), 2) * 5).toFixed(3);
}

function elevenOfVariance() {
    return (Math.pow((11 - media()), 2) * 5).toFixed(3);
}

function twelveOfVariance() {
    return (Math.pow((12 - media()), 2) * 10).toFixed(3);
}

function thirteenOfVariance() {
    return (Math.pow((13 - media()), 2) * 4).toFixed(3);
}

function fourteenOfVariance() {
    return (Math.pow((14 - media()), 2) * 1).toFixed(3);
}

function fifteenOfVariance() {
    return (Math.pow((15 - media()), 2) * 2).toFixed(3);
}

function sixteenOfVariance() {
    return (Math.pow((16 - media()), 2) * 1).toFixed(3);
}

function seventeenOfVariance() {
    return (Math.pow((17 - media()), 2) * 2).toFixed(3);
}

function eighteenOfVariance() {
    return (Math.pow((18 - media()), 2) * 4).toFixed(3);
}

function nineteenOfVariance() {
    return (Math.pow((19 - media()), 2) * 4).toFixed(3);
}

function twentyOfVariance() {
    return (Math.pow((20 - media()), 2) * 3).toFixed(3);
}

function twentyTwoOfVariance() {
    return (Math.pow((22 - media()), 2) * 1).toFixed(3);
}

function twentyFourOfVariance() {
    return (Math.pow((24 - media()), 2) * 1).toFixed(3);
}

function twentySevenOfVariance() {
    return (Math.pow((27 - media()), 2) * 2).toFixed(3);
}

function twentyEightOfVariance() {
    return (Math.pow((28 - media()), 2) * 2).toFixed(3);
}

function sevenHundredTwentyEightOfVariance() {
    return (Math.pow((728 - media()), 2) * 1).toFixed(3);
}

function fortyThreeOfVariance() {
    return (Math.pow((43 - media()), 2) * 1).toFixed(3);
}

function sumOfVariance() {
    return (parseFloat(zeroOfVariance()) + parseFloat(oneOfVariance()) + parseFloat(twoOfVariance()) + parseFloat(threeOfVariance()) +
        parseFloat(fourOfVariance()) + parseFloat(fiveOfVariance()) + parseFloat(sixOfVariance()) + parseFloat(sevenOfVariance()) +
        parseFloat(eightOfVariance()) + parseFloat(nineOfVariance()) + parseFloat(tenOfVariance()) + parseFloat(elevenOfVariance()) +
        parseFloat(twelveOfVariance()) + parseFloat(thirteenOfVariance()) + parseFloat(fourteenOfVariance()) + parseFloat(fifteenOfVariance()) +
        parseFloat(sixteenOfVariance()) + parseFloat(seventeenOfVariance()) + parseFloat(eighteenOfVariance()) + parseFloat(nineteenOfVariance()) +
        parseFloat(twentyOfVariance()) + parseFloat(twentyTwoOfVariance()) + parseFloat(twentyFourOfVariance()) + parseFloat(twentySevenOfVariance()) +
        parseFloat(twentyEightOfVariance()) + parseFloat(sevenHundredTwentyEightOfVariance()) + parseFloat(fortyThreeOfVariance())).toFixed(3);
}

function FinalVariance() {
    return (sumOfVariance() / (matriz - 1)).toFixed(3);
}

function standardDeviation() {
    return (Math.sqrt(FinalVariance())).toFixed(3);
}

console.log(`Soma: ${soma()}`);
console.log(`Média: ${media()}`);
console.log(`Soma da Variância: ${sumOfVariance()}`);
console.log(`Média da Variância: ${FinalVariance()}`);
console.log(`Desvio Padrão: ${standardDeviation()}`);
