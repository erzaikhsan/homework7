exports.persegi = function (panjang) {
    const luas = panjang * panjang;
    const keliling = panjang * 4;

    return `Luas Persegi : ${luas}
Keliling Persegi : ${keliling}`
};

exports.persegipanjang = function (panjang, lebar) {
    const luas = panjang * lebar;
    const keliling = (panjang + lebar) * 2;

    return `Luas Persegi Panjang : ${luas}
Keliling Persegi Panjang : ${keliling}`
};