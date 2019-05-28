var sum = 0;
process.argv.slice(2).forEach(param => {
    sum += parseInt(param);
});
console.log(sum);