# Intervals — a solving framework

Unlike Likelihood List (rank three statements) or Number Logic (evaluate an expression),
this game asks you to **provide a numeric interval [Lower, Upper]** that contains the true
answer. The skill is **fast estimation with calibrated confidence** — narrow intervals score
better, but only if the answer falls inside.

## The interval strategy

**Step 1: Point estimate (15 seconds)**
Get a single number you believe is close to the answer. Don't aim for perfection.

**Step 2: Set bounds (5 seconds)**
Widen your estimate into an interval based on your confidence:
- **High confidence** (exact calculation): ±5–10% of your estimate
- **Medium confidence** (good approximation): ±20–30%
- **Low confidence** (rough guess): ±50% or wider

**Step 3: Sanity check (5 seconds)**
- Is the answer physically possible? (probabilities ∈ [0, 100], counts ≥ 0)
- Is the lower bound actually less than the upper bound?
- Would you bet on this interval?

---

## Category A: Sequence prediction

> Trigger: "predict the missing output", "estimate the next point", time series table

### A1 · Ratio extrapolation
Compute the ratio between consecutive terms: r(n) = a(n)/a(n−1).
If ratios are roughly constant, multiply: a(next) ≈ a(last) × r.
If ratios are trending down, use the latest ratio or slightly lower.

### A2 · Difference extrapolation
Compute first differences: Δ(n) = a(n) − a(n−1).
- **Constant first differences** → linear growth → next = last + Δ
- **Constant second differences** → quadratic growth → next Δ = last Δ + second diff

*Example:* 43, 79, 152, 259, 405, 587, ?
First diffs: 36, 73, 107, 146, 182
Second diffs: 37, 34, 39, 36 ≈ constant ~36.5
Next diff ≈ 182 + 36.5 = 218.5 → answer ≈ 806

### A3 · Multi-input regression
When a table has multiple inputs and one output, fit: output = a×Input1 + b×Input2.
Use two rows where one input is constant to isolate each coefficient.

*Example:* If Input2 is the same in rows 1 and 3:
a = (output₁ − output₃) / (Input1₁ − Input1₃)
Then solve for b from any row.

---

## Category B: Probability calculations

> Trigger: "probability", "what is the chance", coins, dice, shapes

### B1 · Counting (coins and dice)
Memorize the building blocks:
- **n coins, exactly k heads:** C(n,k) / 2ⁿ
- **Two dice, sum = s:** ways = s−1 for s ≤ 7, ways = 13−s for s > 7
- **Picking without replacement:** C(a,k)×C(b,j) / C(n, k+j)

### B2 · Symmetry shortcuts
- **P(you beat friend)** = P(friend beats you) by symmetry
  → P(win) = (1 − P(tie)) / 2
- For two dice: P(tie) = 6/36 = 1/6, so P(win) = 5/12 ≈ 41.67%

### B3 · Geometric probability
- **Buffon's needle:** P(cross) = 2L/(πd). If L < d, at most 1 crossing possible.
  Always check: is the event geometrically possible?
- **Stick breaking → triangle:** P = 1/4
- **Stick breaking → acute triangle:** P = 3ln2 − 2 ≈ 7.9%

### B4 · Feasibility check (instant zeros)
Before computing, ask: **can this event happen at all?**
- Needle shorter than line spacing can't cross two lines → P = 0
- Can't make more than n shots out of n → P = 0
- Can't roll 13 on two dice → P = 0

This saves 45 seconds and avoids overthinking.

---

## Category C: Expected value

> Trigger: "expected value", "expected number", coupon collector, marbles

### C1 · Small sample space → enumerate
When C(n,k) ≤ 20–30, list every outcome and average.

*Example:* Draw 3 from {1,2,3,4,5,6}: C(6,3) = 20 triples.
List all products, sum them, divide by 20.

### C2 · Coupon collector
- **Uniform (n types, equal probability):** E[T] = n × H(n) = n × (ln(n) + 0.577)
  - For n = 100: E ≈ 519
- **Non-uniform (P(i) = i/S):** bottleneck is the rarest coupon.
  E[T] ≈ (1/p_min) × ln(n)
  - If p_min = 1/5050 and n = 100: E ≈ 5050 × 4.6 ≈ 23,000
  - Give a wide interval: ±30%

---

## Category D: Data processing (counting and arithmetic)

> Trigger: grid of numbers, sum, difference, percentile, counting shapes/dice

### D1 · Sum of numbers
- **Pair to round numbers:** look for pairs summing to ~100 (e.g., 83+17, 84+16)
- **Running total:** add left-to-right, keeping a mental running sum
- **Estimate first:** average × count gives a quick sanity check

### D2 · Finding extremes (kth largest/smallest)
Don't fully sort. Scan for the top-k and bottom-k only:
1. First pass: find the obvious extremes (90s, single digits)
2. Second pass: confirm the 3rd largest/smallest by checking borderline values
3. Compute the difference

### D3 · Percentile from a grid
Percentile of value V = (count of values < V) / total × 100.
- Fast scan: count by decade (how many in 40s, 50s, 60s → all below 71)
- Then count individual values in the 70s that are below your target

### D4 · Counting from images (shapes, dice)
- Scan systematically: row by row, left to right
- Keep a tally (ones in fingers or mental groups of 5)
- For dice: identify 1s (single dot) and 6s (two columns of 3) by pattern recognition

---

## Category E: Estimation

> Trigger: "how many digits", large products, logarithmic questions

### E1 · Digit counting via logarithms
Number of digits in N = ⌊log₁₀(N)⌋ + 1

Key facts to memorize:
- log₁₀(2) ≈ 0.301
- log₁₀(3) ≈ 0.477
- log₁₀(e) ≈ 0.434
- log₁₀(n!) via Stirling: n·log₁₀(n) − n·log₁₀(e) + ½·log₁₀(2πn)
- log₁₀(100!) ≈ 158

### E2 · Factoring out known quantities
Simplify before computing:
- 2 × 4 × 6 × ... × 200 = 2¹⁰⁰ × 100!
- This separation makes log computation tractable

---

## Interval width guidelines

| Confidence level | Relative width | Example |
|---|---|---|
| Exact calculation | ±0 to ±5% | C(4,2)/16 = 37.5% → [37, 38] |
| Strong approximation | ±10–15% | Quadratic extrapolation → [780, 830] |
| Reasonable estimate | ±20–30% | Ratio extrapolation → [400, 560] |
| Educated guess | ±40–50% | Coupon collector → [15000, 35000] |
| Near-random guess | ±100%+ | Give the widest interval you can tolerate |

**Rule of thumb:** if you'd bet 3:1 that the answer is in your interval, it's the right width.

---

## Common traps

1. **Not checking feasibility.** If L < d in Buffon's needle, the answer is 0. Don't
   waste 40 seconds computing before noticing the event is impossible.

2. **Confusing percentage vs decimal.** When a question says "probability", check if it
   wants a percentage (0–100) or a decimal (0–1). Look for "(percentage)" in the question.

3. **Off-by-one in extremes.** "3rd largest" means the 3rd from the top, not the 3rd
   number you happen to spot. Verify by listing your candidates: (86, 67, 65).

4. **Anchoring on the first estimate.** Your first ratio or difference might be an outlier.
   Compute 2–3 ratios and use the trend, not just the most recent one.

5. **Spending too long on exact answers.** This is an interval game. A ±20% range around
   a decent estimate beats an exact answer you didn't finish computing.

6. **Forgetting to swap bounds.** If your lower bound is bigger than your upper bound,
   the game should auto-swap — but check anyway.

7. **Zero-width intervals.** Unless you're 100% certain, don't set lower = upper. A width
   of even 1–2 gives you margin.
