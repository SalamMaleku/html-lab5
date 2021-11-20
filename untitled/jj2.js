function translaten() {
    var number = document.getElementById('number').value;
    var vhod = document.getElementById('input').value;
    var vihod = document.getElementById('output').value;
    var resultat = "";
    if (vhod == 10 && vihod == 2 || vihod == 8 || vihod == 16) {
        var a;
        while (number > 0) {
            a = number % vihod;
            resultat = resultat + a;
            var b;
            b=number/vihod;
            number=number-Math.ceil(b);
        }
        alert('Ваш результат - '+resultat);
    }
    if (vhod == 2 || vhod == 8 || vihod == 16 && vihod == 10) {
        var resultat = 0, m = 0, nnazad, n = number.length;
        nnazad = n - 1;
        var arr=number.split('');
        var i = 0;
        while (i < number.length) {
            if (arr[i] == "A") { arr[i] = "10"; }
            if (arr[i] == "B") { arr[i] = "11"; }
            if (arr[i] == "C") { arr[i] = "12"; }
            if (arr[i] == "D") { arr[i] = "13"; }
            if (arr[i] == "E") { arr[i] = "14"; }
            if (arr[i] == "F") { arr[i] = "15"; }
            m = number[i] * Math.pow(input, n);
            resultat = m + resultat;
            n--;
            i++;
            alert('Ваш результат - ', resultat);
            if (i > nnazad) {
                alert('Ваш результат - ', resultat, '.'); break; }
        }
//}
    }
}