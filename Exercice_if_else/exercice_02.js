// test dans la condition du if ou else if 
// Exercice

/*
Trouvez la valeur de a pour que la condition ci-dessous soit vraie (true)
Notez que && correspond à AND ou ET en logique 

Rappelons la table de vérité pour le connecteur logique AND 

true AND true = true
true AND false = false
false AND true = false
false AND false = false

le test ci-dessous sera vrai pour toutes les valeurs de a > 0 et pairs
par exemple a = 12
*/
let a = 12 ;
let test = a > 10 && a % 2 == 0;

if(test == true){
    console.log('le test est vrai');
}else{
    console.log('le test est faux');
}

// Exerice 
/*
Trouvez toutes les valeurs de b pour lesquelles le test suivant est vrai

|| OU

true || true = true
true || false = true
false || true = true
false || false = false
*/

// Soit b > 10 donc ou est pair
// b 0, 2, 4, 6, 8, ...et b > 10 ] 10, +infini [

let b = 2;
let test_2 = b > 10  || b % 2 == 0 ;
console.log(test_2);

b = 11;
console.log( b > 10  ||  b % 2 == 0  );
b = 10;
console.log( b > 10  || b % 2 == 0 );

b = 3;
console.log(b > 10  || b % 2 == 0 );


// Exercice 
// Trouvez b si il existe qui vérifie cette condition
// true && true --> true
//   b = 0, 2, 4, ..., 2n  && b est un multiple de 3, 0, 3, 6, 9, 12, ..., 3n
// 3x2xn = 6n , 0, 6, 12, 18, 24, 30, 36, ...
let test_v3 = ( b > 10  || b % 2 == 0) && b % 3 == 0;

// Exercice 
// Même exercice  attention && est pp sur ||
let c = 6*2;

let test_v4 =  c > 10 || c % 2 == 0 && c % 3 == 0;
console.log(test_v4);
let test_v5 =  c > 10  || ( c % 2 == 0 && c % 3 == 0);
console.log(test_v5);

// let a = 10.5, b = 11, c = 12 ;

for(let i = 0, j = 1; i < 100; i = 6*j, j++){
    console.log(i > 10  || ( i % 2 == 0 && i % 3 == 0), i);
}

