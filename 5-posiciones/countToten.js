function count(num) {
    if (num <= 10) {
        console.log(num);
        num++;
        setTimeout(() => {
            count(num)
        }, 1000);
    }
}
count(1);
