const second = () => {
    setTimeout(() => {
        console.log('Alô Mundo! async');
    }, 2000);
}

const first = () => {
    console.log('Hello World!');
    second();
    console.log('THE END')
}



first();