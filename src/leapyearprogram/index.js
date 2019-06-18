function leapYear(year) {
    if (year < 1582) {
        throw new Error('Leap year only after 1582');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return div400 || (div4 && !div100);
}

export default leapYear;

/* 
Can you make some change to the logic in the function that does not cause a test failure? If so what test do you have to add to cover that scenario?

Hint, yes there are logic changes that will not fail the tests as written. Look at the various comparison operators. Are all options covered?
*/