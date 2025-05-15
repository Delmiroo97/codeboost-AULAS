// Condicional if e else 

let apostei = false; 

if(apostei) {
    console.log('Apostei que o flamengo ganha da LDU hoje!')
} else {
    console.log('Apostei que o Flamengo não vai ganhar hoje. ')
}

let folga = false;

let semFolga = false; 

if(semFolga) {
    console.log('Ele vai trabalhar amanhã')
} else if (folga) {
    console.log('Ele está fora de escala amanhã')
} else {
    console.log('Ele foi demitido.')
}

// Valores falso 

// if (false)
// if (0)
// if (NaN)
// if ('')
// if (null)
// if (undefined) 

// Valores verdadeiros 

// if (true)
// if (1)
// if (' ') com espaço no meio das aspas
// if ('fernando')
// if (-20)
// if ({})

// Operador lógico de negação 

// if (!true) false
// if (!1) false 
// if (!'') true
// if (!undefined) true 
// if (!!' ') true
// if (!!'') false

// Operador de comparação 

if (20 > 5); // true 
if (5 > 20);  // false 
if (5 = 5); // true
if (20 < 5); // false
if (20 <= 20); // true
if (20 >= 21); // false
if (5 > 2); // true

if (20 == '20'); // true, aqui não compara se é numero ou string, só compara o valor
if (20 == 20); // true
if (20 === '20'); // false, aqui ele está comparando o valor e os tipos se são dois numeros ou duas strings
if (20 != 25); // true 
if (20 != '20'); // false 
if (20 !== '20'); true

// Operador Lógico && (and)

true && true; // true 
true && false; // false 
false && true; // false 

// Operador Lógico || (ou)

true || true; // true 
true || false; // false 
false || true; // false
false || false; // false

















