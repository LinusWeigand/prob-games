/* ============================================================================
 * BEAT THE ODDS — CLASSIFICATION DATA
 * ============================================================================
 *
 * Maps every question ID to its quadrant, technique, and formula from the
 * solving framework. Used by the "Classify" flashcard mode.
 *
 * Quadrants:
 *   A  Probability, one-shot   → COUNT
 *   B  Probability, sequential → FIRST-STEP / RUIN
 *   C  Expectation, one-shot   → LINEARITY
 *   D  Expectation, sequential → WAITING TIME
 *   E  Strategy                → BACKWARDS INDUCTION
 * ========================================================================== */

var QUADRANT_INFO = {
  A: { full: "Probability · One-shot",  weapon: "COUNT" },
  B: { full: "Probability · Sequential", weapon: "FIRST-STEP / RUIN" },
  C: { full: "Expectation · One-shot",  weapon: "LINEARITY" },
  D: { full: "Expectation · Sequential", weapon: "WAITING TIME" },
  E: { full: "Strategy",                      weapon: "BACKWARDS INDUCTION" }
};

var CLASSIFY = {

  /* ── OPTIVER photo ─────────────────────────────────────────────────────── */

  "opt-p01": { q: "A", t: "Direct count (binomial sum)",        f: "Σ C(n,k) / 2ⁿ" },
  "opt-p02": { q: "A", t: "Complement (birthday shape)",        f: "1 − N!/(N−n)! · 1/Nⁿ" },
  "opt-p03": { q: "D", t: "Wald’s identity",               f: "E[sum] = E[N] · E[X]" },
  "opt-p04": { q: "A", t: "Sequential conditioning",            f: "Multiply draw-by-draw" },
  "opt-p05": { q: "A", t: "Symmetry (parity)",                  f: "P = 1/2 (last die flips parity)" },
  "opt-p06": { q: "A", t: "Direct count (geometric)",           f: "P = (1 − k·θ/360)²" },
  "opt-p07": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-p08": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-p09": { q: "B", t: "Gambler’s ruin (biased)",       f: "P = (1 − rⁱ) / (1 − rᴺ),  r = q/p" },
  "opt-p10": { q: "A", t: "Direct count (exhaustive)",          f: "Favorable / Total" },
  "opt-p11": { q: "A", t: "Sequential conditioning",            f: "C(48,13) / C(52,13)" },
  "opt-p12": { q: "A", t: "Direct count (exhaustive)",          f: "Favorable / Total" },
  "opt-p13": { q: "A", t: "Complement + Symmetry",              f: "1 − P(meet)" },
  "opt-p14": { q: "D", t: "Random walk (trap: E = ∞)",     f: "Symmetric walk to +1: E diverges" },
  "opt-p15": { q: "A", t: "Sequential conditioning",            f: "Condition on distinct values drawn" },

  /* ── OPTIVER recalled ──────────────────────────────────────────────────── */

  "opt-r01": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-r02": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-r03": { q: "C", t: "Factorize (near-independence)",      f: "E[XYZ] ≈ E[X]³" },
  "opt-r04": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-r05": { q: "A", t: "Complement",                         f: "1 − P(sum < 100)" },
  "opt-r06": { q: "A", t: "Direct count (exhaustive)",          f: "Favorable / Total" },
  "opt-r07": { q: "C", t: "Estimation (mean abs. deviation)",   f: "E|H−T| ≈ √(2n/π)" },
  "opt-r08": { q: "D", t: "Hitting time (random walk)",         f: "E ≈ d² / E[X²]" },
  "opt-r09": { q: "D", t: "Pattern recursion + Wald",           f: "E[sum] = E[N] · E[X]" },
  "opt-r10": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-r11": { q: "D", t: "Wald / Decomposition",               f: "E[evens] = E[N] · P(even)" },
  "opt-r12": { q: "C", t: "Factorize through independence",     f: "E[2ˢᵘᵐ] = E[2ˣ]³" },
  "opt-r13": { q: "A", t: "Direct count",                       f: "Favorable / Total" },
  "opt-r14": { q: "D", t: "Hitting time (lazy walk)",           f: "d(n−d) / c" },
  "opt-r15": { q: "C", t: "Simulation / Linearity",             f: "Simulation" },
  "opt-r16": { q: "B", t: "Renewal / Size-biasing",             f: "P(last = k) = k / Σk" },
  "opt-r17": { q: "A", t: "Path counting / Simulation",         f: "Simulation" },
  "opt-r18": { q: "D", t: "First-step / Simulation",            f: "Simulation" },
  "opt-r19": { q: "D", t: "Return time",                        f: "E[return] = n (regular graph)" },
  "opt-r20": { q: "A", t: "Symmetry (parity)",                  f: "P = 1/2" },
  "opt-r21": { q: "A", t: "Complement",                         f: "1 − (9/10)ⁿ" },
  "opt-r22": { q: "A", t: "Direct count",                       f: "Σ P(s)²" },
  "opt-r23": { q: "A", t: "Direct count (exhaustive)",          f: "Favorable / Total" },
  "opt-r24": { q: "D", t: "Hitting time (lazy walk)",           f: "d(n−d) · (1/c)" },
  "opt-r25": { q: "C", t: "Linearity of expectation",           f: "E = start + n · E[Δ]" },
  "opt-r26": { q: "A", t: "Direct count (exhaustive)",          f: "Favorable / Total" },
  "opt-r27": { q: "E", t: "Hedging (backwards induction)",      f: "max_f min((1+2f)V(r−1,b), (1−f)V(r,b−1))" },

  /* ── IMC ───────────────────────────────────────────────────────────────── */

  "imc-01": { q: "A", t: "Complement",                          f: "1 − (1/2)ⁿ" },
  "imc-02": { q: "C", t: "Linearity of expectation",            f: "E = Σ pᵢ · vᵢ" },
  "imc-03": { q: "C", t: "Multiplicative return",               f: "(1 + r₁)(1 + r₂) − 1" },
  "imc-04": { q: "A", t: "Symmetry (parity)",                   f: "Odd steps → return impossible" },
  "imc-05": { q: "A", t: "Direct count (binomial)",             f: "C(n, n/2) / 2ⁿ" },
  "imc-06": { q: "C", t: "Factorize independence",              f: "E[X²] vs E[X]E[Y]" },
  "imc-07": { q: "C", t: "Multiplicative return",               f: "(1 + r₁)(1 + r₂) − 1" },

  /* ── EXTRA: digits & number counting ───────────────────────────────────── */

  "x001":   { q: "A", t: "Direct count",                        f: "C(9,3) / 900" },
  "x002":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x003":   { q: "A", t: "Direct count (inclusion-exclusion)",  f: "|A∪B| = |A| + |B| − |A∩B|" },
  "x004":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x005":   { q: "A", t: "Direct count",                        f: "Count by digit length" },
  "x006":   { q: "A", t: "Complement",                          f: "1 − P(both odd)" },
  "x007":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x008":   { q: "A", t: "Symmetry",                            f: "Digit sum mod 3 is uniform: P = 1/3" },
  "x009":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x010":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x011":   { q: "A", t: "Complement",                          f: "1 − (9/10)ⁿ" },
  "x012":   { q: "A", t: "Complement (birthday shape)",         f: "Falling factorial / Nⁿ" },
  "x013":   { q: "A", t: "Direct count (stars & bars)",         f: "C(n+k−1, k) / Total" },
  "x014":   { q: "A", t: "Direct count",                        f: "⌊√N⌋ / N" },
  "x015":   { q: "A", t: "Complement",                          f: "P(both odd) = (1/2)²" },
  "x016":   { q: "A", t: "Complement (birthday shape)",         f: "Falling factorial / Nⁿ" },
  "x017":   { q: "A", t: "Direct count",                        f: "Count by digit position" },
  "x018":   { q: "A", t: "Symmetry",                            f: "P ≈ 1/2 (both odd or both even)" },
  "x019":   { q: "A", t: "Complement (birthday shape)",         f: "Falling factorial / Nⁿ" },
  "x020":   { q: "A", t: "Complement",                          f: "1 − P(both odd) = 1 − (1/2)ⁿ" },
  "x021":   { q: "A", t: "Complement",                          f: "1 − (5/6)ⁿ" },
  "x022":   { q: "A", t: "Direct count / Symmetry",             f: "Symmetric about 10.5 → P ≈ 1/2" },

  /* ── EXTRA: dice ───────────────────────────────────────────────────────── */

  "x023":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x024":   { q: "A", t: "CDF for max",                         f: "P(max = k) = (k/6)ⁿ − ((k−1)/6)ⁿ" },
  "x025":   { q: "D", t: "First success (geometric)",           f: "E = 1/p" },
  "x026":   { q: "D", t: "Coupon collector",                    f: "E = n · Hₙ" },
  "x027":   { q: "A", t: "Direct count (conditional)",          f: "Favorable / Total (given condition)" },
  "x028":   { q: "A", t: "Complement",                          f: "P(all odd) = (1/2)ⁿ" },
  "x029":   { q: "A", t: "Direct count",                        f: "n! / nⁿ" },
  "x030":   { q: "D", t: "Recursion on running total",          f: "State recursion" },
  "x031":   { q: "C", t: "Max/min via CDF",                     f: "E[max] = Σ P(max > k)" },
  "x032":   { q: "C", t: "Max/min via CDF",                     f: "E[min] = 7 − E[max]" },
  "x033":   { q: "C", t: "Max/min via CDF",                     f: "E[max] = Σ P(max > k)" },
  "x034":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x035":   { q: "A", t: "Direct count (binomial)",             f: "C(n,k) pᵏ (1−p)ⁿ⁻ᵏ" },
  "x036":   { q: "D", t: "First success (geometric)",           f: "E = 1/p" },
  "x037":   { q: "A", t: "Direct count (exhaustive)",           f: "Favorable / Total" },
  "x038":   { q: "A", t: "CDF for max",                         f: "P(max = k) = (k/6)ⁿ − ((k−1)/6)ⁿ" },
  "x039":   { q: "A", t: "Symmetry (tie correction)",           f: "(1 − P(tie)) / 2" },
  "x040":   { q: "C", t: "Linearity of indicators",             f: "n · (1 − ((n−1)/n)ᵏ)" },
  "x041":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x042":   { q: "B", t: "Renewal recursion",                   f: "State recursion on running total" },
  "x043":   { q: "A", t: "Complement (birthday shape)",         f: "1 − Falling factorial / Nⁿ" },
  "x044":   { q: "A", t: "Symmetry (parity)",                   f: "P = 1/2" },

  /* ── EXTRA: dice (continued) ───────────────────────────────────────────── */

  "x045":   { q: "A", t: "Direct count",                        f: "C(n,k) / nᵏ" },

  /* ── EXTRA: coins ──────────────────────────────────────────────────────── */

  "x046":   { q: "A", t: "Direct count (binomial)",             f: "C(n, n/2) / 2ⁿ" },
  "x047":   { q: "D", t: "Pattern recursion",                   f: "State recursion (HH: E = 6)" },
  "x048":   { q: "D", t: "Pattern recursion",                   f: "State recursion (HT: E = 4)" },
  "x049":   { q: "A", t: "Direct count (binomial)",             f: "Σ C(n,k) / 2ⁿ for k > n/2" },
  "x050":   { q: "A", t: "Direct count (binomial)",             f: "C(n,k) pᵏ (1−p)ⁿ⁻ᵏ" },
  "x051":   { q: "A", t: "Estimation (central binomial)",       f: "C(2n,n)/2²ⁿ ≈ 1/√(πn)" },
  "x052":   { q: "C", t: "Direct computation (exhaustive)",     f: "Enumerate all 2ⁿ sequences" },
  "x053":   { q: "D", t: "First success (geometric)",           f: "E = 1/p" },
  "x054":   { q: "A", t: "Direct count (Vandermonde)",          f: "C(2n, n) / 2²ⁿ" },
  "x055":   { q: "A", t: "Symmetry (extra-coin)",               f: "P = 1/2" },
  "x056":   { q: "A", t: "Direct count (binomial tail)",        f: "Σ C(n,k) / 2ⁿ for k ≥ threshold" },
  "x057":   { q: "D", t: "Pattern recursion",                   f: "After first flip, P(end) = 1/2: E = 3" },
  "x058":   { q: "C", t: "Linearity of indicators",             f: "E = (n−1) · P(HT) = (n−1)/4" },
  "x059":   { q: "A", t: "Estimation (central binomial)",       f: "≈ 1/√(πn/2)" },
  "x060":   { q: "A", t: "Direct count (Fibonacci)",            f: "F(n+2) / 2ⁿ" },

  /* ── EXTRA: cards ──────────────────────────────────────────────────────── */

  "x061":   { q: "A", t: "Sequential conditioning",             f: "12/51" },
  "x062":   { q: "A", t: "Complement",                          f: "1 − C(48,k) / C(52,k)" },
  "x063":   { q: "A", t: "Sequential conditioning",             f: "Multiply draw-by-draw" },
  "x064":   { q: "C", t: "Position symmetry",                   f: "(n+1) / (k+1)" },
  "x065":   { q: "A", t: "Sequential conditioning",             f: "Multiply draw-by-draw" },
  "x066":   { q: "C", t: "Linearity of expectation",            f: "E[sum] = n · E[card]" },
  "x067":   { q: "A", t: "Sequential conditioning",             f: "Multiply draw-by-draw" },
  "x068":   { q: "A", t: "Direct count",                        f: "2 / n (adjacent positions)" },
  "x069":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x070":   { q: "C", t: "Linearity of indicators",             f: "E = k · (hand/deck)" },
  "x071":   { q: "C", t: "Position symmetry",                   f: "k · (n+1) / (k+1)" },
  "x072":   { q: "A", t: "Direct count",                        f: "Favorable / Total" },
  "x073":   { q: "A", t: "Symmetry (tie correction)",           f: "(1 − P(tie)) / 2" },
  "x074":   { q: "A", t: "Direct count (hypergeometric)",       f: "C(48,22) / C(52,26) × 2" },
  "x075":   { q: "A", t: "Sequential conditioning",             f: "Multiply draw-by-draw" },
  "x076":   { q: "A", t: "Complement (birthday shape)",         f: "1 − C(13,k) 4ᵏ / C(52,k)" },
  "x077":   { q: "C", t: "Position symmetry",                   f: "(n+1) / (k+1)" },
  "x078":   { q: "A", t: "Complement",                          f: "1 − C(39,k) / C(52,k)" },

  /* ── EXTRA: game / fair value / EV ─────────────────────────────────────── */

  "x079":   { q: "E", t: "Optimal stopping (threshold)",        f: "Keep ≥ E[continue], re-roll rest" },
  "x080":   { q: "E", t: "Optimal stopping (backwards)",        f: "Work backwards: threshold from last re-roll" },
  "x081":   { q: "D", t: "Wald’s identity",                f: "E[sum] = E[N] · E[X]" },
  "x082":   { q: "D", t: "Waiting time (E[N²])",           f: "E[N²] = (2−p) / p²" },
  "x083":   { q: "C", t: "Direct expectation",                  f: "E = Σ |i−j| / 36" },
  "x084":   { q: "C", t: "Max/min via CDF",                     f: "E[max] = Σ P(max > k)" },
  "x085":   { q: "C", t: "Position symmetry",                   f: "(n+1) / 2" },
  "x086":   { q: "D", t: "State recursion",                     f: "Recursion on current value" },
  "x087":   { q: "C", t: "Linearity of indicators",             f: "n · (1 − ((n−1)/n)ᵏ)" },
  "x088":   { q: "C", t: "Conditional expectation",             f: "E = P(even)·E[even] + P(odd)·E[die]" },
  "x089":   { q: "C", t: "Direct expectation",                  f: "E = Σ P(reach flip k)" },
  "x090":   { q: "B", t: "Competing geometrics",                f: "P = p / (1 − (1−p₁)(1−p₂))" },
  "x091":   { q: "D", t: "Pattern recursion",                   f: "After first roll, P(7-sum) = 1/6: E = 1 + 6" },
  "x092":   { q: "D", t: "Wald + Overshoot",                    f: "E[total] = threshold + E[overshoot]" },
  "x093":   { q: "D", t: "r-th success",                        f: "E = r / p" },
  "x094":   { q: "D", t: "Recursion (E = a + bE)",              f: "E = base + P(continue) · E → solve" },
  "x095":   { q: "A", t: "Bayes’ theorem",                 f: "P(H|D) = P(D|H)P(H) / P(D)" },
  "x096":   { q: "C", t: "Linearity of expectation",            f: "E = Σ pᵢ · vᵢ" },
  "x097":   { q: "B", t: "Renewal / Size-biasing",              f: "P(last = k) = k / Σk" },
  "x098":   { q: "C", t: "Direct expectation",                  f: "E[X²] = Σ k²/6" },

  /* ── EXTRA: random walks & Markov ──────────────────────────────────────── */

  "x099":   { q: "D", t: "Hitting time (cycle)",                f: "E = d(n−d)" },
  "x100":   { q: "D", t: "Return time",                         f: "E = n (regular graph)" },
  "x101":   { q: "D", t: "Coupon collector variant",            f: "1 + Geom(1/2) = 3" },
  "x102":   { q: "D", t: "First-step analysis (lumping)",       f: "Lump by distance, solve 3-state chain" },
  "x103":   { q: "D", t: "Hitting time (line)",                 f: "E = a · b" },
  "x104":   { q: "B", t: "Gambler’s ruin (fair)",          f: "P = i / N" },
  "x105":   { q: "B", t: "Gambler’s ruin (biased)",        f: "P = (1 − rⁱ) / (1 − rᴺ),  r = q/p" },
  "x106":   { q: "D", t: "Return time",                         f: "2|E| / deg(v) = 64" },
  "x107":   { q: "D", t: "Return time",                         f: "2|E| / deg(v)" },
  "x108":   { q: "D", t: "Hitting time (line)",                 f: "E = a · b" },
  "x109":   { q: "C", t: "Linearity of expectation",            f: "E = n · E[step]" },
  "x110":   { q: "A", t: "Direct count (binomial)",             f: "C(n, (n+k)/2) / 2ⁿ" },
  "x111":   { q: "D", t: "Return time",                         f: "E = n (regular graph)" },
  "x112":   { q: "D", t: "First-step analysis",                 f: "One equation per state, solve" },
  "x113":   { q: "D", t: "Hitting time / First-step",           f: "Gap walk: E = 1/P(collapse)" },

  /* ── EXTRA: betting, ruin & odds ───────────────────────────────────────── */

  "x114":   { q: "B", t: "Gambler’s ruin (fair)",          f: "P = i / N" },
  "x115":   { q: "B", t: "Gambler’s ruin (biased)",        f: "P = (1 − rⁱ) / (1 − rᴺ),  r = q/p" },
  "x116":   { q: "E", t: "Kelly criterion",                     f: "f = (bp − q) / b" },
  "x117":   { q: "A", t: "Direct count",                        f: "(1/2)ⁿ" },
  "x118":   { q: "C", t: "Martingale (fair game)",              f: "E[final] = E[start] (fair game)" },
  "x119":   { q: "A", t: "Direct count",                        f: "(1/2)ⁿ" },
  "x120":   { q: "E", t: "Martingale check",                    f: "P(red) is a martingale → value = 0" },
  "x121":   { q: "E", t: "Hedging (arbitrage)",                 f: "Equalise payoffs across outcomes" },
  "x122":   { q: "E", t: "Hedging (backwards induction)",       f: "max_f min((1+2f)V(r−1,b), (1−f)V(r,b−1))" },
  "x123":   { q: "B", t: "Competing geometrics",                f: "P = p / (1 − (1−p₁)(1−p₂))" },
  "x124":   { q: "D", t: "Gambler’s ruin (duration)",      f: "E = a · b" },

  /* ── EXTRA: matching & collisions ──────────────────────────────────────── */

  "x125":   { q: "A", t: "Complement (birthday shape)",         f: "1 − N! / ((N−n)! Nⁿ)" },
  "x126":   { q: "A", t: "Complement (birthday shape)",         f: "Falling factorial / Nⁿ" },
  "x127":   { q: "A", t: "Direct count (derangements)",         f: "D(n) / n! ≈ 1/e" },
  "x128":   { q: "C", t: "Linearity of indicators",             f: "E = n · (1/n) = 1" },
  "x129":   { q: "A", t: "Complement",                          f: "1 − C(N−k, k) / C(N, k)" },
  "x130":   { q: "C", t: "Linearity of indicators",             f: "E = n · P(couple adjacent)" },
  "x131":   { q: "A", t: "Direct count (derangements)",         f: "D(n) / n!" },
  "x132":   { q: "A", t: "Complement (exhaustive)",             f: "1 − P(no overlap)" },
  "x133":   { q: "A", t: "Symmetry",                            f: "1 / (n − 1)" },
  "x134":   { q: "C", t: "Linearity of indicators",             f: "E = C(n,2) / 365" },

  /* ── EXTRA: continuous & geometry ──────────────────────────────────────── */

  "x135":   { q: "A", t: "Direct count (geometric area)",       f: "P = 1/4" },
  "x136":   { q: "C", t: "Direct expectation (integral)",       f: "E[max(U, 1−U)] = 3/4" },
  "x137":   { q: "A", t: "Direct count (geometric area)",       f: "1 − (1 − t)²" },
  "x138":   { q: "A", t: "Direct count (geometric area)",       f: "Area of corner triangle" },
  "x139":   { q: "A", t: "Direct count (geometric)",            f: "P = 1/4" },
  "x140":   { q: "A", t: "Direct count (geometric)",            f: "P(arc > 60°) = 2/3" },
  "x141":   { q: "C", t: "Direct expectation (integral)",       f: "E|X−Y| = 1/3" },
  "x142":   { q: "A", t: "Direct count (geometric/numerical)",  f: "Parabolic boundary → numerical" },

  /* ── EXTRA: urns & coloured balls ──────────────────────────────────────── */

  "x143":   { q: "A", t: "Sequential conditioning",             f: "Multiply draw-by-draw" },
  "x144":   { q: "A", t: "Direct count (hypergeometric)",       f: "C(W,k)C(B,n−k) / C(N,n)" },
  "x145":   { q: "A", t: "Bayes’ theorem / Symmetry",      f: "P(switch wins) = 2/3" },
  "x146":   { q: "A", t: "Direct count",                        f: "C(k−1, n−1) / C(N, n)" },
  "x147":   { q: "C", t: "Position symmetry",                   f: "(N+1) / (k+1)" },
  "x148":   { q: "D", t: "Coupon collector",                    f: "E = n · Hₙ" },
  "x149":   { q: "A", t: "Direct count",                        f: "2 / C(2n, n)" },
  "x150":   { q: "A", t: "Complement",                          f: "1 − C(good, k) / C(N, k)" },
  "x151":   { q: "A", t: "Sequential conditioning",             f: "(same−1) / (total−1)" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUADRANT_INFO: QUADRANT_INFO, CLASSIFY: CLASSIFY };
}
