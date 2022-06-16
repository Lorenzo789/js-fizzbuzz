

const buzzFizzRow = document.getElementById('number-row');

//CICLE FOR
for (let index = 1; index <= 100; index++) {

    const boxNumber = document.createElement('div');







    //CONDITION
    if ((index % 5 == 0) && (index % 3 == 0)) {

        console.log('fizzbuzzz');

    } else if (index % 5 == 0) {

        console.log('buzz');

    } else if (index % 3 == 0) {

        console.log('fizz');

    } else {

        console.log(index);

    }



};