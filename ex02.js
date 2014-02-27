// Return a list of fibonacci numbers that go up to but not beyond the maximum number provided

function fibonacciSet(max) {
    if (max > 1) {
        var fib_list = [1];
        current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = fib_list.slice(-1)[0] + fib_list.slice(-2, -1)[0];
        }

        return fib_list;
    }
    else {
        return [1, 1];
    }
}


function sum(list) {
    var total = 0;
    for (var i=0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
                total=total+list[i];
            }
    }
    return total;

}

console.log(sum(fibonacciSet(10)));