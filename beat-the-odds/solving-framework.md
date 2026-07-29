# Beat the Odds — a solving framework

The surface objects (dice, coins, cards, counters, particles) are **decoration**. Two
questions about dice can need completely different machinery, and a dice question and a
card question can be the identical problem. Stop classifying by object.

Classify by two things only:

1. **What quantity is asked for** — a probability, an expectation, or a strategy value.
2. **Does the process stop on a condition** — fixed number of trials, or "keep going until…".

That gives four quadrants plus a strategy box. Each has a default weapon. Reach for the
default first; only escalate if it fails.

```
                    ONE-SHOT                        SEQUENTIAL
                (fixed n trials)                 ("until …", "repeatedly")

PROBABILITY     A.  COUNT                        B.  FIRST-STEP / RUIN
                default: complement              default: condition on the first step
                    1 - P(none)                      or quote the ruin formula

EXPECTATION     C.  LINEARITY                    D.  WAITING TIME
                default: sum of indicators       default: 1/p, or a recursion
                    E[X] = Σ P(event i)              on a tiny state space

STRATEGY        E.  BACKWARDS INDUCTION  ("playing optimally", "you may choose", "should you")
```

---

## The 10-second triage

Read the question and answer three questions **before** writing anything:

**1. Probability, expectation, or strategy?**
Look at the final sentence. "What is the probability" → A/B. "What is the expected /
average / fair value / how many on average" → C/D. "Playing optimally / what should you /
can you guarantee" → E.

**2. Is there a stopping condition?**
Words like *until, repeatedly, keep, continuously, ends once, first time* → sequential
(B/D). A fixed count — *three dice, 13 cards, 6 coins, 5 rolls* → one-shot (A/C).

**3. Is there a symmetry or a complement that kills the work?**
Before counting anything, ask: *is the answer just 1/2? Is it easier to count the
failures? Does every position/ordering play the same role?* This step saves more time
than any other. See the symmetry tells below.

Only after these three do you pick up the algebra.

---

## A. Probability, one-shot → COUNT

Default move: **complement**. Direct counting is the fallback, not the opener.

### A1 · Complement — "at least"

> Trigger: *at least one, at least two, at least two share, no more than*

`P(at least one) = 1 − P(none)`. Almost every "at least" question in the set is one line
this way and a nightmare the other way.

- 13 cards, no Ace → this *is* the complement already: `C(48,13)/C(52,13)` — or as a
  product `(39·38·37·36)/(52·51·50·49)` = 0.304 `[opt-p11]`
- d20 rolled 5×, at least two the same → `1 − (20·19·18·17·16)/20⁵` = 0.419 `[opt-p02]`
- Four dice, at least one 6 → `1 − (5/6)⁴` = 0.518 `[x021]`
- 7 cards, at least two of the same rank → `1 − C(13,7)·4⁷/C(52,7)` = 0.790 `[x076]`

**The birthday shape.** "At least two of n things collide among N slots" is always
`1 − N!/((N−n)! Nⁿ)`. Recognise it under any costume: 23 people/365 days, 5 rolls of a
d20, 5 people picking 1–10, 4 dice all different.

### A2 · Symmetry — the answer is a clean fraction

Covered in its own section below. Check this **before** A1 or A3.

### A3 · Direct count — favourable / total

Only when the sample space is genuinely small or has clean structure.

- Two dice, |difference| > 2 → 12/36 `[opt-r02]`
- Two-digit number, ones digit > tens digit → 36/90 `[opt-r01]`

For digit problems, count **by position** rather than listing: "how many choices for the
first digit, then the second". Strictly increasing digits = `C(9,3)` because choosing the
set determines the order `[x001]`.

### A4 · Sequential conditioning — draw one at a time

For without-replacement problems, don't reach for `C(n,k)` — walk the draws and multiply.

- Two cards same suit → the first can be anything, the second must match: **12/51** `[x061]`
- 10/10/10 counters, first three all different colours → `(30/30)(20/29)(10/28)·…` —
  or cleanly `10·10·10·3!/(30·29·28)` = 0.246 `[opt-p04]`
- First two counters the same colour → **9/29** `[x151]`

Whenever the first item's identity is irrelevant, this collapses to a single fraction.

---

## B. Probability, sequential → FIRST-STEP / RUIN

### B1 · Gambler's ruin — memorise these two

Start at `i`, absorbing at `0` and `N`, win a step with probability `p`, `q = 1−p`:

```
fair (p = 1/2):   P(reach N) = i/N          expected duration = i(N − i)
biased:           r = q/p     P(reach N) = (1 − rⁱ)/(1 − r^N)
```

- 2/3-biased coin, you have $1, opponent $2 → `r = 1/2`, `(1−½)/(1−⅛)` = 0.571 `[opt-p09]`
- Start $2, fair, reach $5 → 2/5 `[x114]`
- $3 vs $3, expected flips → 3·3 = 9 `[x124]`

> Trigger: *until one of you is broke, until you reach $X, absorbing, stops at 0 or N*

Random walks on a line are the same object: "expected steps until 3 away from the origin"
is `a·b = 3·3 = 9` `[x103]`; "frog on 5 pads from the middle" is `2·2 = 4` `[x108]`.

### B2 · First-step analysis — write one equation per state

When the graph is small and irregular. Name the unknowns by state, condition on one step,
solve. Two or three states is typical; if you need more than four you have misread the
symmetry.

3×3 grid, start at the centre, expected steps to a corner `[x112]`:

```
E_centre = 1 + E_edge                (all 4 neighbours are edge nodes)
E_edge   = 1 + (1/3)E_centre         (2 of 3 neighbours are corners)
→ E_centre = 3
```

**Lump states aggressively.** A cube has 8 vertices but only 4 distance classes from your
start, so it is a 4-state chain, not an 8-state one `[x102]`.

### B3 · Competing geometrics — "first to…"

Two players alternate, first success wins. Don't sum a series — condition on the first
round:

```
P(first player wins) = p / (1 − (1−p₁)(1−p₂))
```

- First to roll a 6, you go first → `(1/6)/(1 − 25/36)` = 6/11 `[x090]`
- First to flip a Head → `(1/2)/(1 − 1/4)` = 2/3 `[x123]`

### B4 · Renewal / long-run — "what was the last step?"

When a process runs a long way and you are asked about the **final** step, the answer is
size-biased: a step of size `k` is `k` times more likely to be the one that straddles the
finish line.

```
P(last roll was k) = k / (1+2+3+4+5+6) = k/21
```

- Roll until the total exceeds 100, P(last roll was a 2) → 2/21 = 0.095 `[opt-r16]`
- Exceeds 50, P(last was a 6) → 6/21 = 0.286 `[x097]`

Same idea gives the **mean overshoot** (see the estimation section).

---

## C. Expectation, one-shot → LINEARITY

**This is the highest-leverage tool in the whole set.** If the question says "expected
number of ___", stop and try to write the quantity as a sum of 0/1 indicators.

```
E[number of events] = Σ P(event i happens)
```

**Linearity does not care about independence.** This is why it beats everything else —
the events can overlap, exclude each other, or be wildly dependent, and the sum still
holds.

- 8 people, random hats, expected number getting their own → `8 × 1/8 = 1` `[x128]`.
  The derangement structure is irrelevant. Answer is 1 for *any* number of people.
- 13 cards, expected number of Aces → `4 × 13/52 = 1` `[x070]`
- 10 dice, expected number of distinct faces → `6(1 − (5/6)¹⁰)` = 5.03 `[x040]`
  (indicator per *face*, not per die — choose the right thing to index)
- 8 coins, expected number of "HT" adjacent pairs → `7 × 1/4 = 1.75` `[x058]`
- 4 couples at a round table, expected couples adjacent → `4 × 2/7` = 1.14 `[x130]`
- 30 people, expected birthday-sharing pairs → `C(30,2)/365` = 1.19 `[x134]`
- Three cards, expected sum → `3 × 7 = 21` `[x066]` — no dependence correction needed

> Trigger: *expected number of, how many … on average, expected value of the sum*

**The choice of indicator is the whole skill.** Index over the thing whose probability is
easy: over faces not dice, over pairs not people, over positions not objects.

### C2 · Max and min — go through the CDF

Never sum over outcomes. Use `P(max ≤ k) = (k/6)ᵐ`:

```
P(max = k) = (k/6)ᵐ − ((k−1)/6)ᵐ        E[max] = Σ_{k≥0} P(max > k)
```

- 5 dice, P(max is exactly 5) → `(5⁵ − 4⁵)/6⁵` = 0.270 `[x038]`
- 2 dice, E[max] = 4.47 and E[min] = 2.53 — and note **E[max] + E[min] = 7**, because
  max + min = the sum of the two dice. Use that to get one from the other `[x031, x032]`

### C3 · Factorise through independence

If the payout is a *product* over independent trials, the expectation factorises:

- Three dice, payout `2^(sum)` → `E[2^d]³ = ((2+4+…+64)/6)³ = 21³ = 9261` `[opt-r12]`.
  Trying to sum over 216 outcomes is a trap; `2^(a+b+c) = 2^a·2^b·2^c` is the move.
- Product of two dice → `E[X]E[Y] = 3.5² = 12.25`. But the **square** of one die is
  `E[X²] = 91/6 = 15.17` — bigger by exactly `Var(X)`. That gap is the whole point of
  the "which game is better" question.

---

## D. Expectation, sequential → WAITING TIME

### D1–D3 · The three formulas you must know cold

```
first success:            E = 1/p
r-th success:             E = r/p
collect all n coupons:    E = n(1 + 1/2 + … + 1/n)
```

- Rolls until a 6 → 6 `[x025]`; until doubles → 6 `[x036]`
- Flips until 3 Heads → 3/(1/2) = 6 `[x093]`
- Rolls until all six faces → `6 × 2.45 = 14.7` `[x026]`; 5 coupons → 11.4 `[x148]`

### D4 · Patterns need a recursion, not a formula

`E[flips until HH] = 6` but `E[flips until HT] = 4`. They differ because **HH can be
partially destroyed and HT cannot**. Never assume patterns of equal length take equal
time. Set up states by "how much of the pattern do I currently have".

- Until HH or TT → after the first flip, each flip ends it with probability 1/2, so
  `1 + 2 = 3` `[x057]`
- Until two consecutive rolls sum to 7 → after the first roll, exactly one of six faces
  completes it, so `1 + 6 = 7` `[x091]`

### D5 · Wald — expected value of a stopped sum

```
E[X₁ + … + X_N] = E[N] · E[X]        (N a stopping time, X's iid)
```

This turns a hard "sum until" question into two easy ones.

- Roll until a 1; paid the sum of the rolls before it → the non-1 rolls number 5 on
  average and average 4 each → `5 × 4 = 20` `[x081]`
- The six-running-sums question `[opt-p03]`: the 6s bucket ends it after 17 sixes, so
  `E[rolls] = 17 × 6 = 102` and `E[sum] = 102 × 3.5 ≈ 357`. Estimate, then pick closest.

### D6 · Hitting times on graphs

```
n-cycle, vertices d apart:      E = d(n − d)
line, absorbing at 0 and N:     E = i(N − i)
lazy walk (moves w.p. c):       divide by c
```

- Square, opposite vertex → `2 × 2 = 4` `[x099]`
- Decagon, opposite vertex, moves only 2/3 of the time → `5 × 5 / (2/3) = 37.5` `[opt-r24]`

### D7 · Return times — the slickest formula in the set

For a random walk on a graph, the expected time to return to vertex `v` is `1/π_v`:

```
E[return to v] = 2|E| / deg(v)          (= n for a regular graph on n vertices)
```

- Hexagon → 6 `[opt-r19]`; pentagon → 5 `[x100]`; tetrahedron → 4 `[x111]`
- Rook on a chessboard: 14-regular on 64 squares → **64** `[x106]`
- King returning to a **corner**: `2(210)/3 = 140` `[x107]` — not regular, so use the
  full formula

---

## E. Strategy → BACKWARDS INDUCTION

> Trigger: *playing optimally, you may choose, should you, what can you guarantee, fair price*

Always solve from the **end state backwards**. Never forwards.

**Optimal stopping (threshold rule).** Compute the value of continuing, then accept
anything above it.

- Roll a die, one re-roll allowed → continuing is worth 3.5, so keep 4/5/6:
  `(4+5+6)/6 + (1/2)(3.5) = 4.25` `[x079]`
- Two re-rolls → now continuing is worth 4.25, so keep only 5/6: `14/3 = 4.67` `[x080]`

**Hedging (equalise the branches).** When you choose a stake and want a *guaranteed*
outcome, pick the stake that makes both branches equal.

```
V(r,b) = max_f min( (1+2f)·V(r−1,b),  (1−f)·V(r,b−1) )
with V(r,0) = 3^r  and  V(0,b) = 1
```

Two red / two black from $100 → `27/11 × 100 = $245.45` `[opt-r27]`.

**Martingale check.** Before doing any work, ask whether the quantity you can bet on is a
martingale. If it is, **no stopping rule beats stopping immediately**. The 26-red/26-black
"bet the next card is red" game is worth exactly **0** for this reason `[x120]` — the
entire question is a trap for people who start computing.

---

## The symmetry tells — when the answer is exactly 1/2

Check these before any counting. Several questions in the set are one-liners.

| Tell | Why | Example |
|---|---|---|
| Sum of dice / coins is **even** | the last die flips parity either way | 5 dice sum even = 1/2 `[opt-p05]` |
| **Odd** number of Heads in n flips | same parity argument | 7 coins = 1/2 `[opt-r20]` |
| n+1 coins vs n coins, **strictly more** Heads | classic extra-coin symmetry | 6 vs 5 = 1/2 `[x055]` |
| A vs B where a tie is possible | `(1 − P(tie))/2` | 2nd card higher = `(1−3/51)/2` = 0.471 `[x073]` |
| Second roll > first | `(1 − 1/6)/2` | 15/36 `[x039]` |

**Position symmetry** (the same idea, applied to orderings). If `k` marked items are
shuffled among `n` total, they cut the deck into `k+1` equal gaps:

```
E[position of the first marked item] = (n + 1)/(k + 1)
```

- First Ace in a 52-card deck → `53/5 = 10.6` `[x064]`
- Last Ace → `4 × 53/5 = 42.4` `[x071]`
- First red card → `53/27 = 1.96` `[x077]`
- Drawing until ball #5 out of 5 → `6/2 = 3` `[x085]`

**⚠ The trap:** "at most 3 Heads in 6 coins" is **not** 1/2. With an even number of coins
the middle term (exactly 3) sits on the fence and belongs to your side, so the answer is
`(1/2)(1 + P(exactly 3)) = 0.656` `[opt-p01]`. Parity symmetry only works cleanly with an
**odd** number of trials.

---

## Estimation — the format rewards it

You are picking the **closest** of five options, usually spaced 1.5–2× apart. Getting
within 20% beats an exact answer you never finish. Four approximations cover most of it.

**Poisson for rare collisions.** With expected count `λ`, `P(none) ≈ e^(−λ)`.
Birthdays with 23 people: `λ = C(23,2)/365 = 0.69`, so `P(match) ≈ 1 − e^(−0.69) = 0.50`.

**Central term of a binomial.** `C(2n,n)/2^(2n) ≈ 1/√(πn)`.
100 coins, exactly 50 Heads: `1/√(50π) = 0.080` `[x059]`. 20 coins, exactly 10:
`1/√(10π) = 0.178` `[x051]`.

**Mean absolute deviation.** `E|H − T|` for `n` fair coins `≈ √(2n/π)`.
100 coins → `√63.7 = 7.98` `[opt-r07]`.

**Mean overshoot.** When a running total crosses a large threshold with iid steps `X`:

```
E[overshoot] = (E[X²] + E[X]) / (2·E[X])       for a die: 8/3 ≈ 2.67
```

So "roll until the total exceeds 20, expected final total" is `20 + 2.67 = 22.67` `[x092]`.

---

## The traps, collected

1. **Ties break symmetry.** Any "is A bigger than B" question needs `(1 − P(tie))/2`, and
   `P(tie)` is rarely zero.
2. **Even vs odd trial counts.** Parity arguments are clean only for odd n. See the
   6-coins trap above.
3. **Patterns of equal length take unequal time.** HH ≠ HT.
4. **Independence for products, linearity for sums.** `E[XY] = E[X]E[Y]` needs
   independence; `E[X+Y] = E[X] + E[Y]` never does. Mixing these up is the most common
   error in this material.
5. **Expectations can be infinite.** "Keep having children until more girls than boys" is
   a symmetric random walk reaching +1: it terminates with probability 1 but the expected
   time **diverges** `[opt-p14]`.
6. **A martingale means waiting is free but worthless.** Check before optimising.
7. **Read what is being counted.** "Expected number of *rolls*" vs "expected *sum* of the
   rolls" vs "expected number of *even* rolls" are three different questions off the same
   setup — and the set asks all three.
8. **Parity can make an event impossible.** A ±1 walk cannot return to the origin after an
   odd number of steps; two particles an odd distance apart on a cycle can never meet.

---

## How to drill the recognition

The bottleneck is classification speed, not algebra. Practise the classification alone:

1. Open the quiz and, for each question, **say the quadrant and technique out loud within
   10 seconds** — then skip without solving. Do 30 in a row. You are training the triage,
   not the arithmetic.
2. Then do a timed run where, before computing, you write **one line**: the technique name
   and the single formula you intend to use. If you cannot write that line, you have
   misclassified — reread the final sentence of the question.
3. Keep a tally of misclassifications by quadrant. The pattern in your errors tells you
   which trigger words you are not yet reading. In this material, the two most commonly
   missed are *"expected number of"* (→ always try indicators first) and *"until"*
   (→ sequential, so first-step or a waiting-time formula, never brute-force counting).

The lookup below is the thing to memorise. Everything else follows from it.

| If you read… | Reach for |
|---|---|
| at least one / at least two | complement, `1 − P(none)` |
| all different | falling factorial / birthday shape |
| expected number of … | linearity of indicators |
| expected value of the sum … until | Wald, `E[N]·E[X]` |
| until the first … | `1/p` |
| until the r-th … | `r/p` |
| until all … have appeared | coupon collector, `n·H_n` |
| until pattern (HH, HT, sum 7) | state recursion — do **not** guess |
| until one of you is broke | gambler's ruin |
| first to … (alternating) | competing geometrics |
| the last roll / when it crosses | size-biasing, `k/21`, overshoot |
| return to its starting point | `2·edges/deg(v)`, `= n` if regular |
| reach the opposite vertex | `d(n−d)`, divide by the move probability |
| largest / smallest of n | CDF, `(k/6)ⁿ` |
| sum is even / odd number of heads | parity → 1/2 (odd n only) |
| position of the first / last marked item | `(n+1)/(k+1)` |
| playing optimally / can you guarantee | backwards induction, hedge to equalise |
| bet on the next card | check for a martingale first |
| a very large number in the setup | estimate: Poisson, `1/√(πn)`, overshoot |
