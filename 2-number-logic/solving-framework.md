# Number Logic — a solving framework

The key is pattern recognition speed. You have ~30 seconds per question in the real
assessment. Don't stare at the sequence — run through a systematic checklist.

## The 10-second triage

Look at the sequence and ask three questions **in order**:

**1. Do I recognise it immediately?**
Primes, squares, cubes, Fibonacci, factorials, triangular numbers, powers of 2. If yes,
write the answer. If the numbers look "famous" but offset, check n²+1, n²−1, 2×primes, etc.

**2. Are there two independent sequences interleaved?**
Split odd and even positions. If each half follows its own simple rule, you are done. This
catches ~25% of Optiver sequence questions.

**3. What do the differences tell me?**
Compute first differences. If constant → arithmetic. If *they* are constant → quadratic.
If they double → geometric growth. If they *are* a famous sequence (primes, Fibonacci) →
that's the pattern.

Only after these three do you try the more complex patterns below.

---

## The pattern categories

```
SIMPLE                           STRUCTURED

1. ALTERNATING OPS               2. INTERLEAVED
   two operations cycle              two independent subsequences
   (+2, ×3, +2, ×3, …)              at odd/even positions

3. CYCLIC OPS                    4. DIFFERENCE-BASED
   3–4 operations cycle              first or second differences
   (÷3, ÷2, +1, ÷3, ÷2, +1)        reveal the rule

5. PAIR / GROUP                  6. RECURSIVE
   consecutive pairs relate           each term uses previous terms
   (subtract, product, …)            (Fibonacci, a(n)=f(a(n−1),a(n−2)))

7. FRACTION                     8. SPECIAL
   track num/den separately          primes, factorials, n^n,
   (chain, simplify first)           representation tricks
```

---

## 1. Alternating Operations

> Trigger: the sequence seems to grow and shrink, or two different "rhythms" overlap.

Look at consecutive ratios and differences. If they alternate between two values, you have
alternating operations.

**Common pairs:**
- ×k and ÷m (e.g., ×2 and ÷3)
- ×k and +c (e.g., ×3 and +2)
- +a and ×b (e.g., +2 and ×2)
- ÷k and +c decreasing factors (÷6, ×5, ÷4, ×3, …)

**The decreasing-factor variant** is a favourite: operations like ÷6, ×5, ÷4, ×3, ÷2, ×1
where the divisor/multiplier decreases by 1 each step.

**Example:**
`4, 6, 12, 14, 28, 30, ?`
+2, ×2, +2, ×2, +2, → ×2 → **60**

---

## 2. Interleaved Sequences

> Trigger: odd-positioned and even-positioned terms seem to follow different rules.

Split the sequence at odd and even indices. Each half should follow a simple pattern
(arithmetic, geometric, squares, etc.).

This is the single most common pattern type in the Optiver assessment.

**Example:**
`10, 2/3, 13, 2, 16, 6, ?`
Odd: 10, 13, 16 → +3 each → **19**
Even: 2/3, 2, 6 → ×3 each

**Fraction variant:**
`1, 1/2, 3/7, 2/5, 5/13, 3/8, ?`
Odd numerators: 1, 3, 5, **7** (+2)
Odd denominators: 1, 7, 13, **19** (+6)
→ **7/19**

---

## 3. Cyclic Operations

> Trigger: the pattern seems to "reset" every 3–4 terms.

Group the terms and look at what operation connects each consecutive pair. If the
operations repeat with period 3 or 4, you have a cycle.

**Common cycles:**
- 3-cycle: ×2, +10, ÷4
- 3-cycle: ÷3, ÷2, +1
- 4-cycle: −1, +2, ×3, ÷4

**Example:**
`64, 128, 138, 34½, 69, 79, ?`
×2 → +10 → ÷4 → ×2 → +10 → **÷4** → 79÷4 = **19¾**

---

## 4. Difference-Based Patterns

> Trigger: the sequence grows steadily, or you see a recognisable sub-pattern in the gaps.

Compute first differences. Then:
- **Constant second differences** → quadratic (like n²). Common in Optiver.
- **Differences are a famous sequence** → the answer is the next famous value added on.
- **Differences multiply by a constant** → geometric growth in the differences.

### 4a. Arithmetic second differences

Differences of differences are constant:
`34, 54, 78, 106, 138, ?`
Δ: 20, 24, 28, 32, **36** → 138+36 = **174**
Δ²: 4, 4, 4, 4 — constant.

### 4b. Famous differences

The differences themselves form a known sequence:
- **Fibonacci differences:** `3, 4, 5, 7, 10, 15, ?` → Δ = 1, 1, 2, 3, 5, **8** → **23**
- **Prime differences:** `2, 4, 7, 12, 19, 30, ?` → Δ = 2, 3, 5, 7, 11, **13** → **43**

### 4c. Geometric differences

Differences multiply by a fixed ratio:
`21, 20, 22, 18, 26, 10, ?`
Δ: −1, +2, −4, +8, −16 → each ×(−2) → next **−32** → 10−32 = **−22**

---

## 5. Pair / Group Patterns

> Trigger: the numbers seem to come in pairs, or groups of 3.

**Subtract pairs:** Take consecutive pairs and subtract the second from the first to get
the next term.

`88, 8, 80, 10, 70, 15, ?`
88−8 = 80, 80−10 = 70, 70−15 = **55**

**Multiply groups:** Groups of 3 where the third = first × second, or similar.

---

## 6. Recursive Patterns

> Trigger: the growth rate accelerates in an unusual way, or fractions appear that look
> like products of earlier terms.

### 6a. Linear recurrence

Each term is a fixed linear combination of previous terms:
- a(n) = a(n−1) + a(n−2) — **Fibonacci**
- a(n) = a(n−1) + 3·a(n−2) — weighted recurrence
- a(n) = 2·a(n−1) + 1 — affine recurrence

**Example:**
`2, 1, 7, 10, 31, 61, ?`
Check: 1 + 3×2 = 7 ✓, 7 + 3×1 = 10 ✓, 10 + 3×7 = 31 ✓, 31 + 3×10 = 61 ✓
→ 61 + 3×31 = **154**

### 6b. Recursive product

Terms are computed by multiplying previous terms or functions of them:
- a(n) = a(n−1) × a(n−2) — **product of previous two**
- a(n) = a(n−1) × (a(n−2) − 1) — product with shifted term

**Example:**
`3, 3, 6, 12, 60, 660, ?`
3×(3−1) = 6, 6×(3−1) = 12, 12×(6−1) = 60, 60×(12−1) = 660, 660×(60−1) = **38940**

---

## 7. Fraction Patterns

> Trigger: the terms are fractions. Don't simplify blindly — track numerator and
> denominator separately.

**Chain fractions:** Each numerator becomes the next denominator.
`3/4, 4/5, 5/7, 7/9, 9/13, 13/17, ?`
Numerator = previous denominator. Gap (den − num) doubles in pairs: 1, 1, 2, 2, 4, 4, **8**.
→ 17/(17+8) = **17/25**

**Product fractions:** a(n) = a(n−1) × a(n−2) on simplified forms.
`3/4, 2/3, 1/2, 1/3, 1/6, 1/18, ?`
(1/6) × (1/18) = **1/108**

**Interleaved fractions:** Split into odd/even and track each set's numerators and
denominators independently.

---

## 8. Special Patterns

### Prime selection
Terms are specific primes or functions of primes:
- Every other prime: 2, 5, 11, 17, 23, 31, **41**
- Consecutive primes: 2, 3, 5, 7, 11, 13, **17**
- Double primes: 4, 6, 10, 14, 22, 26, **34**

### Representation tricks
The same value appears multiple times in different mathematical notations:
`4, 5, 10/2, 6, √36, 42/7, ?`
All simplify to integers. 4 once, 5 twice, 6 three times → **7** four times.

### Factorials
1, 1, 2, 6, 24, 120, **720**

### Power sequences
nⁿ: 1, 4, 27, 256, 3125, **46656**

---

## Speed drills

The bottleneck is classification speed, not arithmetic. Practise the classification alone:

1. **Differences first.** Before anything else, compute the first differences. If they're
   constant, you're done. If they're a known sequence, you're done. If they double, you're
   done. This single check solves ~40% of questions.

2. **Split odd/even.** If differences don't help, split the sequence into odd and even
   positions. If each half is simple, you're done. This solves another ~25%.

3. **Look for cycles.** If neither worked, write out the operations between consecutive
   terms (÷3, ÷2, +1, ÷3, ÷2, +1, …). If they repeat, you have a cycle.

4. **Try recursion.** Check if a(n) = a(n−1) + k·a(n−2) for small k. Or if a(n) involves
   a product of previous terms.

5. **Fractions: don't simplify.** Track numerator and denominator independently.

| If you see…                          | Try first                                  |
|--------------------------------------|---------------------------------------------|
| Steady growth                        | Differences → arithmetic or quadratic       |
| Oscillating / zig-zag                | Interleaved or alternating operations       |
| Explosive growth                     | Geometric diffs, recursive product, or n!   |
| Pattern "resets" every 3–4 terms     | Cyclic operations                           |
| Numbers come in obvious pairs        | Pair subtraction or pair product             |
| Fractions                            | Track num/den separately, chain pattern     |
| Recognisable numbers (2,3,5,7,11)    | Primes or prime-derived                     |
| Same value in disguise (√36, 42/7)   | Representation count                        |
| a(n) ≈ 3·a(n−1)                      | Linear recurrence a(n) = c·a(n−1) + d·a(n−2)|
