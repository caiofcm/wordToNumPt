var Small = {
    'zero': 0,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10,
    'onze': 11,
    'doze': 12,
    'treze': 13,
    'quatorze': 14,
    'quinze': 15,
    'dezesseis': 16,
    'dezessete': 17,
    'dezoito': 18,
    'dezenove': 19,
    'vinte': 20,
    'trinta': 30,
    'quarenta': 40,
    'cinquenta': 50,
    'sessenta': 60,
    'setenta': 70,
    'oitenta': 80,
    'noventa': 90,
};

var Centenas = {
    'cento': 1,
    'duzentos': 2,
    'trezentos': 3,
    'quatrocentos': 4,
    'quinhentos': 5,
    'seicentos': 6,
    'setecentos': 7,
    'oitocentos': 8,
    'novecentos': 9,
}

var Magnitude = {
    'mil': 1000,
    'milhão': 1000000,
    'milhões': 1000000,
    'bilhão': 1000000000,
    'bilhões': 1000000000,
    // 'trillion': 1000000000000,
    // 'quadrillion': 1000000000000000,
    // 'quintillion': 1000000000000000000,
    // 'sextillion': 1000000000000000000000,
    // 'septillion': 1000000000000000000000000,
    // 'octillion': 1000000000000000000000000000,
    // 'nonillion': 1000000000000000000000000000000,
    // 'decillion': 1000000000000000000000000000000000,
};



function text2num(s) {
    var a, n, g;
    const wordsAll = s.toString().split(/[\s-]+/);
    const words = wordsAll.filter(w => w != 'e')
    let n_acc = 0;
    let g_acc = 0;
    words.forEach((w) => {
        const {n, g} = feach(w, n_acc, g_acc)
        n_acc = n
        g_acc = g
    });
    return n_acc + g_acc;
}

function feach(w, n, g) {
    var x = Small[w];
    if (x != null) {
        g = g + x;
    }
    else if (w in Centenas) {
        var h = Centenas[w]
        g = h*100;
    }
    else {
        x = Magnitude[w];
        if (x != null) {
            n = n + g * x
            g = 0;
        }
        else {
            console.log("Unknown number: " + w);
        }
    }
    return {n, g}
}

// var a = text2num('five hundred and three')
// console.log(a);

module.exports = {
    text2num,
}
