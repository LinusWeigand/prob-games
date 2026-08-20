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
  "x151":   { q: "A", t: "Sequential conditioning",             f: "(same−1) / (total−1)" },

  /* ── MEDIUM (x200 -- x249) ─────────────────────────────────────────────── */

  // Conditional Probability & Bayes
  "x200":   { q: "A", t: "Conditional counting",                  f: "Favorable (given sum) / Total (given sum)" },
  "x201":   { q: "A", t: "Bayes' theorem",                        f: "P(A|R) = P(R|A)P(A) / P(R)" },
  "x202":   { q: "A", t: "Bayes' theorem",                        f: "P(D|+) = P(+|D)P(D) / P(+)" },
  "x203":   { q: "A", t: "Bayes' theorem",                        f: "P(C|HH) = P(HH|C) / Σ P(HH|·)" },
  "x204":   { q: "A", t: "Conditional counting",                  f: "Favorable / |at least one 6|" },
  "x205":   { q: "A", t: "Conditional probability",               f: "P(exactly 1H | ≥1H) = P(1H) / (1−P(0H))" },

  // Multi-step Counting & PIE
  "x206":   { q: "A", t: "Law of total probability",              f: "Σ P(die=k) · C(k,3)/2ᵏ" },
  "x207":   { q: "A", t: "Direct count (multinomial)",            f: "C(6,1)·[C(4,3)·5 + 1] / 6⁴" },
  "x208":   { q: "A", t: "Inclusion-exclusion (PIE)",             f: "1 − Σ(−1)ⁱ C(4,i) C(13(4−i),5) / C(52,5)" },
  "x209":   { q: "A", t: "Block counting",                        f: "6! · 3! / 8!" },
  "x210":   { q: "A", t: "Direct count (exhaustive)",             f: "Favorable / Total" },
  "x211":   { q: "A", t: "Inclusion-exclusion (PIE)",             f: "Σ(−1)ⁱ C(6,i)(6−i)ⁿ / 6ⁿ" },

  // Expected Value with Conditioning
  "x212":   { q: "C", t: "Linearity of expectation",              f: "E = Σ pᵢ · vᵢ" },
  "x213":   { q: "C", t: "Linearity of expectation",              f: "E = Σ pᵢ · vᵢ" },
  "x214":   { q: "C", t: "Conditional expectation",               f: "E[X | X ≥ k] = Σ x·P(x) / P(X≥k)" },
  "x215":   { q: "D", t: "Wald's identity",                       f: "E[sum] = E[N] · E[X] + E[final]" },
  "x216":   { q: "C", t: "Tower property (iterated E)",           f: "E = E[X] + E[X] · E[die]" },
  "x217":   { q: "A", t: "Direct count (order statistics)",       f: "Enumerate median = k cases" },

  // Moderate Markov / Walks
  "x218":   { q: "D", t: "Pattern recursion",                     f: "State recursion (HHH: E = 14)" },
  "x219":   { q: "B", t: "Gambler's ruin (biased, no upper)",     f: "P(reach n from k) = (p/q)ⁿ⁻ᵏ" },
  "x220":   { q: "D", t: "Pattern recursion",                     f: "State recursion (TT with bias)" },
  "x221":   { q: "A", t: "Direct count (binomial)",               f: "C(n,k) pᵏ (1−p)ⁿ⁻ᵏ" },
  "x222":   { q: "B", t: "Geometric series (even index)",         f: "Σ (5/6)²ᵏ⁻¹ · (1/6)" },

  // Games & Mixed
  "x223":   { q: "B", t: "Geometric series (turn-based)",         f: "P = (1/6) / (1 − (5/6)³)" },
  "x224":   { q: "B", t: "Geometric series (turn-based)",         f: "P = p / (1 − (1−p)²)" },
  "x225":   { q: "A", t: "Symmetry (mod arithmetic)",             f: "Uniform residues mod 3 → P = 1/3" },
  "x226":   { q: "A", t: "Direct count (hypergeometric)",         f: "3 · C(4,2) / C(12,2)" },
  "x227":   { q: "A", t: "Circular arrangement",                  f: "Fix one group, place other in gaps" },
  "x228":   { q: "A", t: "Direct count (constrained)",            f: "Adjacent positions · (1/2)ⁿ" },
  "x229":   { q: "A", t: "Complement (Poisson approx)",           f: "1 − e⁻λ(1 + λ),  λ = np" },
  "x230":   { q: "A", t: "Complement",                            f: "1 − P(all different suits)" },
  "x231":   { q: "A", t: "Block counting",                        f: "4! · 2! / 5!" },
  "x232":   { q: "A", t: "Direct count (independent events)",     f: "Σ pᵢ · Π(1−pⱼ)" },
  "x233":   { q: "A", t: "Inclusion-exclusion (PIE)",             f: "P(A∪B) = P(A) + P(B) − P(A∩B)" },
  "x234":   { q: "A", t: "Binomial CDF (central range)",          f: "Σ C(n,k)/2ⁿ for k=8..12" },
  "x235":   { q: "C", t: "Linearity of indicators",               f: "E = 7 · (6/7)¹⁰" },
  "x236":   { q: "D", t: "Birthday / first collision",            f: "E[first duplicate] in n types" },
  "x237":   { q: "A", t: "Direct count (hypergeometric)",         f: "Σ C(R,k)C(B,n−k) / C(N,n)" },
  "x238":   { q: "A", t: "Complement (binomial tail)",            f: "1 − Σ C(n,k)(1/6)ᵏ(5/6)ⁿ⁻ᵏ for k=0..2" },
  "x239":   { q: "A", t: "Direct count (exhaustive)",             f: "Count pairs with XY > 50" },
  "x240":   { q: "A", t: "Symmetry (first relevant card)",        f: "P = (red non-aces) / (all relevant)" },
  "x241":   { q: "A", t: "Direct count (binomial)",               f: "Σ C(n,k)(1/3)ᵏ(2/3)ⁿ⁻ᵏ for k > n/2" },
  "x242":   { q: "A", t: "Inclusion-exclusion (PIE)",             f: "1 − P(no face) − P(no ace) + P(neither)" },
  "x243":   { q: "A", t: "Symmetry (ordering)",                   f: "1 / k!  (one of k! orderings)" },
  "x244":   { q: "A", t: "Direct count",                          f: "C(k−1, n−1) / C(N, n)" },
  "x245":   { q: "A", t: "Direct count (hypergeometric)",         f: "C(26,2)² / C(52,4)" },
  "x246":   { q: "A", t: "Symmetry (ordering)",                   f: "1 / 4!" },
  "x247":   { q: "D", t: "First success (geometric)",             f: "E ≈ 1/p  where p = 4/52" },
  "x248":   { q: "C", t: "Linearity of indicators",               f: "6 · P(face appears ≥ 2 times in n rolls)" },
  "x249":   { q: "C", t: "Linearity of indicators (records)",     f: "E = Hₙ = Σ 1/k" },

  /* ── HARD (x300 -- x349) ───────────────────────────────────────────────── */

  // Gambler's Ruin & Complex Walks
  "x300":   { q: "B", t: "Gambler's ruin (asymmetric steps)",     f: "System of equations P(k) with boundaries" },
  "x301":   { q: "B", t: "Gambler's ruin (biased)",               f: "P = (1 − rⁱ) / (1 − rᴺ),  r = q/p" },
  "x302":   { q: "B", t: "Renewal recurrence",                    f: "pₙ = (1/2)pₙ₋₁ + (1/2)pₙ₋₂ → 2/3" },
  "x303":   { q: "D", t: "Hitting time (drift shortcut)",         f: "E = distance / drift = 1 / E[step]" },
  "x304":   { q: "D", t: "Hitting time (biased lazy walk)",        f: "E_k = 4k  (biased lazy walk, drift -1/4)" },
  "x305":   { q: "B", t: "First-step (cube / Hamming)",           f: "Track Hamming distance, multiply transition probs" },

  // Complex Conditional Probability
  "x306":   { q: "A", t: "Bayes' theorem (multi-urn)",            f: "P(A|2R) = P(2R|A) / Σ P(2R|·)" },
  "x307":   { q: "A", t: "Bayes' theorem (likelihood ratio)",     f: "P(loaded|data) = L₁ / (L₁ + L₂)" },
  "x308":   { q: "A", t: "Symmetry (ordering)",                   f: "4!·4! / 8!  (Aces before Kings)" },

  // Non-obvious Combinatorics
  "x309":   { q: "A", t: "Lucas numbers (circular Fibonacci)",    f: "L_n / 2ⁿ" },
  "x310":   { q: "C", t: "Direct expectation (integral)",         f: "∫₀^{1/3} (1−3t)² dt = 1/9" },
  "x311":   { q: "A", t: "Estimation (vanishingly rare)",         f: "E[adjacent same-suit] ≈ 12 → P ≈ 0" },
  "x312":   { q: "C", t: "Linearity of indicators",               f: "E = n · (1/n) = 1" },
  "x313":   { q: "C", t: "Linearity of indicators",               f: "E = C(n,2) / 365" },

  // Multi-stage Optimal Strategy
  "x314":   { q: "E", t: "Optimal stopping (backwards)",          f: "Work backwards: keep ≥ E[continue]" },
  "x315":   { q: "E", t: "Hedging (backwards induction)",         f: "max_f min((1+2f)V(r−1,b), (1−f)V(r,b−1))" },
  "x316":   { q: "E", t: "Optimal stopping (risk of ruin)",       f: "Stop when sum ≥ threshold; threshold from EV" },
  "x317":   { q: "E", t: "Optimal stopping (backwards)",          f: "Vₖ = max(x, Vₖ₊₁);  threshold = Vₖ₊₁" },

  // Complex Expected Value
  "x318":   { q: "D", t: "Recursion on running max",              f: "E[next increase from max k] = 6/(6−k)" },
  "x319":   { q: "D", t: "Birthday / first triple",               f: "Markov chain on bin occupancies" },
  "x320":   { q: "C", t: "Factorize independence",                f: "E[XY] = E[X]·E[Y] = 3.5²" },
  "x321":   { q: "C", t: "Direct expectation",                    f: "E[2^|X−Y|] = Σ P(d)·2ᵈ" },
  "x322":   { q: "D", t: "First success (union of events)",       f: "P(consecutive pair) per draw, geometric" },

  // Tricky / Surprise Results
  "x323":   { q: "B", t: "Renewal theory (lattice)",              f: "P(hit n) → 1/E[X] = 2/7" },
  "x324":   { q: "C", t: "Martingale (Polya urn)",                f: "Fraction is a martingale → E = 1/2" },
  "x325":   { q: "B", t: "Reflection / cycle lemma",              f: "P(no tie) = C(2n,n) / 2²ⁿ" },
  "x326":   { q: "D", t: "Absorbing barrier (fair walk)",         f: "P(hit −k) = 1 → E[final] = −k" },

  // Optimal Stopping (continued)
  "x327":   { q: "E", t: "Optimal stopping (backwards)",          f: "Vₖ = Vₖ₊₁² + (1−Vₖ₊₁²)/2; threshold = V₂" },

  // Generating Functions / Advanced Counting
  "x328":   { q: "A", t: "Generating functions (coin change)",    f: "Coefficient of x¹⁰⁰ in product of GFs" },
  "x329":   { q: "A", t: "Multinomial (independent placement)",   f: "n! / (k!ᵐ) / mⁿ" },
  "x330":   { q: "A", t: "Stars and bars (non-decreasing)",       f: "C(n+k−1, k) / Total" },
  "x331":   { q: "C", t: "Linearity of indicators",               f: "E = C(n,2) · (1/9)²" },
  "x332":   { q: "C", t: "Linearity of indicators",               f: "E = rows · P(increasing) = 4/4!" },

  // Complex Markov Chains
  "x333":   { q: "B", t: "Renewal recurrence",                    f: "pₙ = (pₙ₋₁+pₙ₋₂+pₙ₋₃)/3 → 1/E[X]" },
  "x334":   { q: "B", t: "Renewal recurrence",                    f: "pₙ = (1/2)pₙ₋₁ + (1/2)pₙ₋₂ → 2/3" },
  "x335":   { q: "D", t: "Pattern recursion",                     f: "State recursion (HTH: E = 10)" },
  "x336":   { q: "B", t: "Renewal theory (lattice)",              f: "P(hit n) → 1/E[X] = 2/7" },

  // Geometry & Continuous Probability
  "x337":   { q: "A", t: "Direct count (geometric area)",         f: "1 − ((D−w)/D)²" },
  "x338":   { q: "A", t: "Semicircle (order statistics)",         f: "P = n / 2ⁿ⁻¹" },
  "x339":   { q: "A", t: "Buffon's needle",                       f: "P = 2L / (πD)" },
  "x340":   { q: "C", t: "Direct expectation (integral)",         f: "E[r] = ∫₀¹ r · 2r dr = 2/3" },

  // Random Permutations & Arrangements
  "x341":   { q: "A", t: "Direct count (derangements)",           f: "D(n) / n! ≈ 1/e" },
  "x342":   { q: "C", t: "Linearity of indicators (descents)",    f: "E[runs] = 1 + (n−1)/2" },
  "x343":   { q: "A", t: "Impossibility argument",                f: "Exactly n−1 fixed points is impossible" },
  "x344":   { q: "A", t: "Symmetry",                              f: "P = k / n" },

  // Multi-step Games
  "x345":   { q: "A", t: "Bayes' theorem (Monty Hall)",           f: "P = (1/3) / (1/3 + (1/3)(1/2)) = 2/3" },
  "x346":   { q: "E", t: "Best response (pure strategy)",         f: "Pick move that beats opponent's most likely" },
  "x347":   { q: "C", t: "Linearity of indicators",               f: "E = n · (1/n) = 1" },
  "x348":   { q: "E", t: "Kelly criterion",                       f: "f* = 2p−1;  E[bankroll] = W₀·(1+f·(2p−1))ⁿ" },
  "x349":   { q: "B", t: "Cycle structure (100 prisoners)",       f: "P = 1 − Σ 1/k  for k > n/2" }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUADRANT_INFO: QUADRANT_INFO, CLASSIFY: CLASSIFY };
}
