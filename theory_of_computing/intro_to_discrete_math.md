## Notes on Discrete Mathematics

```
    I will be looking into:
    - Set theory.
    - relations and functions.
    - vectors and matrix manipulations.
    - mathematical proofs and,
    - propositional logic.
```

### I will be looking at declarative, causal, procedural and contextual on a high level.

```
 - Glossary for Symbols

    -  p, q, r, etc. are used for propositions that have truth values.
    -  ¬ denotes “it is not the case that”.
    -  ∧ denotes “and”.
    -  ∨ denotes “or” meaning “either ..., or ..., or both”.
    -  ∈ denotes “is a member of ...”.
    -  ∀  denotes “for all”.
    -  ∃  denotes “there exists (at least one)”.
    -  → denotes “if ...  then ...”.
    -  ↔ denotes “if and only if” (iff).
    -  a mod b = r means that r is the remainder when a is divided by b.
    -  Z is a funny Z that denotes the set of integers {...,−3, −2, −1, 0, 1, 2, 3, ...}.
    -  Z+ which is the set of positive integers {1, 2, 3, 4, ...}.
    -  Z≥ also denotes N,the set of non-negative integers (natural numbers) {0, 1, 2, 3, 4, ...}.
    -  Q is a funny Q that denotes the set of all rational numbers, i.e. ratios of integers,
    -  defined by the  set {a/b | a ∈ Z, b ∈ Z and b ≠ 0}.
    -  Q+ denotes the set of positive rational numbers.
    -  Q≥ denotes the set of non-negative rational numbers.
    -  R is a funny R that denotes the set of all real numbers.
    -  R+ denotes the set of positive real numbers.
    -  R≥ denotes the set of non-negative real numbers.
    -  |m| is the absolute value of m.
    -  ⊆ denotes “is a subset of ...”.
    -  ⊂ denotes “is a proper subset of ...”.
    -  0/ denotes “the empty set”.
    -  ∩ denotes “intersection”
    -  (A ∩ B is a set that contains those elements common to both set A and  to set B).
    -  ∪ denotes “union” (A ∪ B is a set that contains those elements in set A or set B).
    -  If A and B are sets, then A − B denotes the difference between A and B
    -  (the set that contains those elements in A that are not in B).
    -  If A is a set, A′ denotes the complement of A (the set that contains those elements of some  universal set U that are not in A, i.e. U – A = A′).
    -  If A and B are sets, A + B denotes the symmetric difference between A and B (the set that  contains those elements in either A or B, but not in both).
    -  If A is a set, |A| or n(A) denotes the number of elements in A.
    -  (a, b) denotes the ordered pair with a as first and b as second co-ordinate.
    -  If A and B are sets, A × B denotes the Cartesian product of A and B.
    -  (x1, x2, ..., xn) denotes the ordered n-tuple with first co-ordinate x1, second co-ordinate x2, and so  on.
    -  Ƥ  is a funny P that denotes “the power set of ...”.
    -  If R is a relation on some set A, then R is a relation from A to A.
    -  If R is a relation, then R-1 denotes the inverse relation of R.
    -  S ￮ R denotes the composition of relations S and R. (We may write S ￮ R or R; S.    R; S reminds us that, in a certain sense, R is followed by S.)
    -  f: A → B should be read “f is a function from set A to set B”.
    -  [x] denotes the equivalence class of x with regard to some previously specified equivalence  relation.
    -  If f: X × X → X, then f is called a binary operation on X.
    -  *, , as well as the more familiar symbols  ⋅,  +, −, and  ×  are often used to denote binary
```

### Number Systems

#### number system Z+

- We looking at the set of all positive integers namely numbers 1, 2, 3,4, 5, 6...

```
 Z+ = {1, 2, 3, 4...}

 - Commutative Property
    * This are rules specifying property of addition and multiplication for all
    positive numbers.

    a, m + n = n + m
    b, (m)(n) = (n)(m)

    * This states that if you add m and n you will get the same results whether you
    start with n or m.
    - for example
    if n = 3 and m = 2 this will evaluate to 5.
    (3 + 2 = 5) = (2 + 3 = 5)

    -This is also true for multiplication
    ( (3)(2) = 6) = ( (2)(3) = 6)

 - Associative Property
    * This states that how we group the factors they don't affect the product of
    positive integers.

    a, m + (n + k) = (m + n) + k
    b, (m)(nk) = (mn)(k)

    * ended on page 22,
    *
```

### The nine laws for Non-negative integers: Z≥

- Law 1
  - Commutativity: for all non-negative integers for m and n.
  - m + n = m + n
- Law 2
  - Associativity: for all non-negative integers for m, n and k.
  - m + (n + k) = (m + n) + k
- Law 3
  - Distributivity: for all non-negative integers for m, n and k.
  - m(n + k) = (mn) + (mk)
- Law 4
  - Existence of a multiplicative identity element: for all non-negative integers for m.
  - m\*1 = m
- Law 5
  - Linearity: for all non-negative integers for m and n, exactly one of the following statements are true
  - m < n, m = n, m > n.
- Law 6
  - Monotonicity of + and x respectively: for all non-negative integers for m, n and k.
  - if m = n, then m + k = n + k and mk = nk;
  - if m < n, then m + k < n + k; and
  - if k > 0, mk < nk.
- Law 7
  - Transivity of = and < respectively: for all non-negative integers for m, n and k.
  - if m = n and n = k, then m = k and if m < n and n < k, then m < k.
- Law 8
  - Existence of an addictive identity element: for all non-negative integers for m.
  - m + 0 = m.
- Law 9
  - Absence of zero-divisors: for all non-negative integers for m and n.
  - mn = 0 if and only if m = 0 or n = 0.

### Law for Integers Z

- The non-negative integers holds for integers as well except for Monotonicity
- Law 6
  - Monotonicity: for all integers m, n and k.
  - if m = n, then m + k = n + k and mk = nk;
  - if m < n, then m + k < n + k;
  - if k > 0, then mk < nk; and
  - if k < 0, then mk > nk (negative numbers need to be taken into account)
- Law 10
  - Existence of additive inverse: for every integer m there exists an int n.
  - m + n = 0.

## Rational and real numbers: Q and R.

-
