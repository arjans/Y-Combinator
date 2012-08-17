Y-Combinator
============

Implementing the Y-Combinator

The point of the Y-Combinator is to do recursion without named functions (i.e., using anonymous functions only).  It's convenient to work with the lambda calculus while deriving the Y-Combinator, because it has a small syntax and doesn't lock you into thinking in a specific language.  It's trivial to implement once you understand the derivation.

**The identity function**

```(λ x . x)```

This is the identity function in the lambda calculus.  It takes in a variable, binds it to x, then returns that same variable.  The 'x' before the '.' is what a variable gets bound to when passed to this function.  The 'x' after the '.' represents the body of the function, and therefore what the function returns given an input.  Note that all functions in the lambda calculus take only one input each.

```(λ x . x x)```

```(λ x . x x)(λ x . x x)```

```Y(F) = F(Y(F))```

```(λ x . x x)(λ x . f (x x))```

```(λ x . f (x x))(λ x . f (x x))```
