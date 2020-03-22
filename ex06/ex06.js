const isTrue = () => {
    return true;
};

function returnString(myString) {
    return myString;
};

const concatenate = (string1, string2) => {
    return string1 + string2;
};

function twoNumbers(num1, num2) {
    if (num1 > num2) {
        return 'Le premier nombre est plus grand';
    } else if (num1 < num2) {
        return 'Le premier nombre est plus petit';
    } else {
        return 'Les deux nombres sont identiques'; 
    };
};