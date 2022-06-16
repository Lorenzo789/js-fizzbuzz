

for (let index = 1; index <= 100; index++) {

    console.log(index);

    if (index % 3 == 0) {

        console.log('fizz');

    }  else if (index % 5 == 0) {

        console.log('buzz');

    }
    
    if ((index % 5 == 0) && (index % 3 == 0)) {

        console.log('fizzbuzz');
    }



};