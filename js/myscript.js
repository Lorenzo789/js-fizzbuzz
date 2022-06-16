

const buzzFizzRow = document.getElementById('number-row');

//CICLE FOR
for (let index = 1; index <= 100; index++) {

    //CREATE VARIABLE
    let boxNumber = document.createElement('div');

    //ADD CLASS
    boxNumber.classList.add('ms_box_number');

    //CHANGE INNER TEXT
    boxNumber.innerText = index;

    //INSERT boxNumber 
    buzzFizzRow.append(boxNumber);





    //CONDITION
    if ((index % 5 == 0) && (index % 3 == 0)) {

        console.log('fizzbuzzz');
        boxNumber.classList.add('ms_box_number');
        boxNumber.innerText = 'fizzbuzz';
        buzzFizzRow.append(boxNumber);

    } else if (index % 5 == 0) {

        console.log('buzz');
        boxNumber.classList.add('ms_box_number');
        boxNumber.innerText = 'buzz';
        buzzFizzRow.append(boxNumber);

    } else if (index % 3 == 0) {

        console.log('fizz');
        boxNumber.classList.add('ms_box_number');
        boxNumber.innerText = 'fizz';
        buzzFizzRow.append(boxNumber);

    } else {

        console.log(index);

    }



};