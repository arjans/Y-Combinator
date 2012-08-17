// U-Combinator
var U = function (f) { return f(f); };

// Omega
var Omega = U(U);

// Factorial written only with anonymous functions and the U-Combinator
var U_factorial = U(function (f) {
    return function (n) {
        if (n == 0) { 
            return 1; 
        }
        else { 
            return n*(f(f)(n - 1)); 
        }
    };
});

// Y-Combinator
var Y = function (f) {
    return (
        (function (x) {
            return f(function (v) { return x(x)(v); }); })
        (function (x) {
            return f(function (v) { return x(x)(v); }); })
    );
};

// Factorial written only with anonymous functions and the Y-Combinator
var Y_factorial = Y(function (f) {
    return function (n) {
        if (n == 0) { return 1; }
        else { return n * f(n - 1); }
    };
});
