Y-Combinator
============

Implementing the Y-Combinator

The point of the Y-Combinator is to do recursion without named functions (i.e., using anonymous functions only).

```(λ x . x)```

```(λ x . x x)```

```(λ x . x x)(λ x . x x)```

```Y(F) = F(Y(F))```

```(λ x . x x)(λ x . f (x x))```

```(λ x . f (x x))(λ x . f (x x))```