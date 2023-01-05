

const buzzFizzRow = document.getElementById('number-row');

//CICLE FOR
for (let index = 1; index <= 100; index++) {

    //CREATE VARIABLE
    let boxNumber = document.createElement('div');

    //ADD CLASS
    boxNumber.classList.add('ms_box_number');

    //CHANGE INNER TEXT
    boxNumber.innerText = index;


    //CONDITION
    if ((index % 5 == 0) && (index % 3 == 0)) {

        console.log('fizzbuzzz');

        boxNumber.classList.add('ms_box_number' , 'ms_box_buzz_fizz');

        boxNumber.innerText = 'fizzbuzz';

    } else if (index % 5 == 0) {

        console.log('buzz');

        boxNumber.classList.add('ms_box_number' , 'ms_box_buzz');

        boxNumber.innerText = 'buzz';

    } else if (index % 3 == 0) {

        console.log('fizz');

        boxNumber.classList.add('ms_box_number' , 'ms_box_fizz');

        boxNumber.innerText = 'fizz';

    } else {

        console.log(index);

    }

    buzzFizzRow.append(boxNumber);
    // MEGLIO AGGIUNGERLO ALLA FINE, COSI NON E VISIBILE FINO A QUANDO
    // NON E COME VOGLIO IO

};