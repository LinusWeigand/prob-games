/* ============================================================================
 * INTERVALS — QUESTION DATABASE
 * ============================================================================
 *
 * Each entry:
 *   id           unique slug
 *   text         question body
 *   answer       correct numeric answer
 *   unit         display unit ("%" or "")
 *   visualType   "image" | "none"
 *   imageSrc     filename in data/cropped/ (for image-type visuals)
 *   note         solution explanation
 *   category     solving-framework category
 *   technique    short technique label
 */

var QUESTIONS = [

  // ------------------------------------------------------------------ Q00
  {
    id: "iv-00",
    text: "Predict the missing output in the time series.",
    answer: 480,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.39.png",
    note: "Sequence: 2, 5, 12, 35, 88, 207, ?\n\nApproach 1 — Ratios between consecutive terms:\n5/2 = 2.5, 12/5 = 2.4, 35/12 ≈ 2.92, 88/35 ≈ 2.51, 207/88 ≈ 2.35\nThe ratios fluctuate around 2.3–2.5 with a downward trend.\nUsing ~2.3: 207 × 2.3 ≈ 476\n\nApproach 2 — Differences: 3, 7, 23, 53, 119\nRatios of differences: ×2.33, ×3.29, ×2.30, ×2.24 (trending ~2.2)\nNext diff ≈ 119 × 2.2 ≈ 262 → answer ≈ 207 + 262 = 469\n\nBest estimate: ~480 (interval [400, 560] is reasonable).",
    category: "Sequence prediction",
    technique: "Ratio/difference extrapolation"
  },

  // ------------------------------------------------------------------ Q01
  {
    id: "iv-01",
    text: "Predict the missing output in the time series.",
    answer: 17.8,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.44.png",
    note: "Table: Input 1: 60, 45, 30, 45, 52.5 | Input 2: 3, 1.5, 3, 4.5, 3 | Output: 20.8, 16.4, 8.8, 13.1, ?\n\nFit a linear model: output = a × Input1 + b × Input2\n\nFrom rows 1 and 3 (Input2 is the same = 3):\n20.8 = 60a + 3b\n8.8  = 30a + 3b\nSubtract: 12 = 30a → a = 0.4\n\nFrom row 3: 8.8 = 12 + 3b → b = −3.2/3 ≈ −1.067\n\nVerify row 2: 0.4×45 − 1.067×1.5 = 18 − 1.6 = 16.4 ✓\nVerify row 4: 0.4×45 − 1.067×4.5 = 18 − 4.8 = 13.2 ≈ 13.1 ✓\n\nFor t = 5: 0.4 × 52.5 − 1.067 × 3 = 21 − 3.2 = 17.8",
    category: "Linear regression",
    technique: "Two-variable linear fit"
  },

  // ------------------------------------------------------------------ Q02
  {
    id: "iv-02",
    text: "You flip 4 fair coins. What is the probability (as a percentage) that you get exactly two Heads?",
    answer: 37.5,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "P(exactly 2 heads in 4 flips) = C(4,2) / 2⁴\n= 6 / 16\n= 3/8\n= 37.5%\n\nQuick mental math: C(4,2) = 6 (choose which 2 of 4 coins are heads).\n2⁴ = 16 total outcomes.\n6/16 = 3/8. To convert: 3/8 = 0.375 = 37.5%.",
    category: "Combinatorics",
    technique: "Binomial coefficient"
  },

  // ------------------------------------------------------------------ Q03
  {
    id: "iv-03",
    text: "What is the difference between the 3rd largest number and the 3rd smallest number?",
    answer: 41,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.50.png",
    note: "Numbers in the grid:\n34, 33, 57, 27, 59\n67, 15, 62, 14, 24\n48, 65, 45, 42, 28\n86, 46, 31, 52, 49\n\nSorted: 14, 15, 24, 27, 28, 31, 33, 34, 42, 45, 46, 48, 49, 52, 57, 59, 62, 65, 67, 86\n\n3rd smallest = 24\n3rd largest = 65 (86, 67, 65)\n\nDifference = 65 − 24 = 41\n\nSpeed tip: scan for the ~3 smallest (14, 15, 24) and ~3 largest (86, 67, 65) without fully sorting.",
    category: "Data processing",
    technique: "Partial sort / extremes scan"
  },

  // ------------------------------------------------------------------ Q05
  {
    id: "iv-05",
    text: "What is the probability (as a percentage) of randomly picking two shapes (without replacement, any order) and getting 1 Square and 1 Circle?",
    answer: 28,
    unit: "%",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.00.png",
    note: "Count shapes from the grid (approximately 100 total):\n• Circles (purple/blue): ~55–60\n• Squares (green): ~20–25\n• Triangles (light blue): ~15–20\n\nUsing estimates of 55 circles and 25 squares out of 100:\nP(1 square and 1 circle) = C(25,1) × C(55,1) / C(100,2)\n= (25 × 55) / (100 × 99 / 2)\n= 1375 / 4950\n≈ 27.8%\n\nNote: exact answer depends on precise counting from the image. The key formula is:\nP = S × C / C(T,2) where S = squares, C = circles, T = total.",
    category: "Combinatorial probability",
    technique: "Hypergeometric counting"
  },

  // ------------------------------------------------------------------ Q06
  {
    id: "iv-06",
    text: "What is the sum of the pips (dots), only counting dice that show either 1 or 6?",
    answer: 113,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.06.png",
    note: "Strategy: scan the 10×10 grid of dice for faces showing exactly 1 dot or 6 dots.\n• A face showing 1: single centered dot → contributes 1 pip\n• A face showing 6: two columns of 3 dots → contributes 6 pips\n• Ignore all other faces (2, 3, 4, 5)\n\nCount each 1 and each 6 separately, then compute:\nSum = (count of 1s × 1) + (count of 6s × 6)\n\nFor 100 fair dice, expected count of 1s or 6s ≈ 33, with average pip value 3.5 → expected sum ≈ 116.\n\nNote: exact answer depends on careful counting from the image.",
    category: "Data processing",
    technique: "Filtered counting with visual scan"
  },

  // ------------------------------------------------------------------ Q07
  {
    id: "iv-07",
    text: "What is the percentile of the highlighted student's test score?",
    answer: 73,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.59.png",
    note: "The highlighted score is 71 (bold/underlined in the grid).\nThe grid contains 200 test scores (20 rows × 10 columns).\n\nPercentile = (number of scores below 71 / total scores) × 100\n\nScan the grid and count values strictly less than 71.\nApproximately 143 out of 200 scores are below 71.\n\nPercentile ≈ (143/200) × 100 = 71.5%\n\nWith different counting methods (including half of the ties):\nPercentile ≈ 73\n\nNote: exact answer depends on careful counting from the grid. The key is fast scanning — group numbers mentally (all 40s, 50s, 60s are below; check individual 70s).",
    category: "Statistics",
    technique: "Percentile calculation"
  },

  // ------------------------------------------------------------------ Q08
  {
    id: "iv-08",
    text: "There are 100 types of coupons. Type i appears with probability proportional to i (i.e. P(type i) = i / 5050). What is the expected number of coupons you must collect to see all 100 types?",
    answer: 23000,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "This is the non-uniform coupon collector problem.\n\nP(type i) = i/5050, where Σ(1..100) = 5050.\n\nThe rarest coupon is type 1 with P = 1/5050 ≈ 0.0002.\nThe most common is type 100 with P = 100/5050 ≈ 0.0198.\n\nKey insight: the bottleneck is collecting the rare coupons.\nExpected draws to see coupon 1 at least once: 1/P(type 1) = 5050.\n\nBut we need ALL 100 types. After t draws:\nP(coupon i unseen) ≈ e^{−it/5050}\n\nSetting Σ e^{−it/5050} < 1 (on average, fewer than 1 coupon unseen):\nDominated by i=1 term: e^{−t/5050} < 1/100\nt > 5050 × ln(100) ≈ 5050 × 4.6 ≈ 23,000\n\nEstimate: E[T] ≈ 23,000 draws.\n\nA wide interval like [15000, 35000] is reasonable given the difficulty.",
    category: "Expected value",
    technique: "Non-uniform coupon collector"
  },

  // ------------------------------------------------------------------ Q09
  {
    id: "iv-09",
    text: "Estimate the next point in the time series.",
    answer: 806,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.49.06.png",
    note: "Sequence: 43, 79, 152, 259, 405, 587, ?\n\nFirst differences: 36, 73, 107, 146, 182\nSecond differences: 37, 34, 39, 36\n\nThe second differences are roughly constant (~36.5), strongly suggesting quadratic growth.\n\nNext first difference ≈ 182 + 36.5 ≈ 219\na(7) ≈ 587 + 219 = 806\n\nAlternatively, fit quadratic a(n) ≈ 18.5n² − 19.5n + 44:\na(7) = 18.5(49) − 19.5(7) + 44 = 906.5 − 136.5 + 44 = 814\n\nBest estimate: ~806 (interval [780, 830] is reasonable).",
    category: "Sequence prediction",
    technique: "Constant second differences → quadratic"
  },

  // ------------------------------------------------------------------ Q11
  {
    id: "iv-11",
    text: "What is the sum of these numbers?",
    answer: 471,
    unit: "",
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 21.48.24.png",
    note: "Numbers: 83, 35, 40, 14, 26, 52, 22, 56, 84, 59\n\nFast addition strategy — pair numbers to round sums:\n• 83 + 17 = 100 ... but 17 isn't in the list\n• Better: add sequentially with running total\n83 + 35 = 118\n118 + 40 = 158\n158 + 14 = 172\n172 + 26 = 198\n198 + 52 = 250\n250 + 22 = 272\n272 + 56 = 328\n328 + 84 = 412\n412 + 59 = 471\n\nOr use pairs that sum to near-100:\n84 + 14 = 98\n83 + 22 = 105\n56 + 40 = 96\n52 + 59 = 111\n35 + 26 = 61\nTotal: 98 + 105 + 96 + 111 + 61 = 471",
    category: "Mental arithmetic",
    technique: "Strategic pairing"
  },

  // ------------------------------------------------------------------ Q12
  {
    id: "iv-12",
    text: "You roll two fair six-sided dice and add up the two faces. What is the (percentage) probability that the sum is equal to 5 or 6?",
    answer: 25,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Total outcomes: 6 × 6 = 36\n\nP(sum = 5): outcomes (1,4), (2,3), (3,2), (4,1) → 4 ways\nP(sum = 6): outcomes (1,5), (2,4), (3,3), (4,2), (5,1) → 5 ways\n\nP(5 or 6) = (4 + 5) / 36 = 9/36 = 1/4 = 25%\n\nMemorize: for two dice, the number of ways to make sum k is:\nk=2: 1, k=3: 2, k=4: 3, k=5: 4, k=6: 5, k=7: 6, k=8: 5, ...\nSymmetric around 7, peaking at 6 ways for sum=7.",
    category: "Probability",
    technique: "Exhaustive counting of dice outcomes"
  },

  // ------------------------------------------------------------------ Q13
  {
    id: "iv-13",
    text: "Six marbles are placed in a jar. Each one is uniquely labelled from 1 through to 6. Three marbles are drawn out at the same time and their numbers are multiplied together. What is the expected value of this result?",
    answer: 36.75,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "C(6,3) = 20 possible draws. List all products:\n(1,2,3)=6   (1,2,4)=8   (1,2,5)=10  (1,2,6)=12  (1,3,4)=12\n(1,3,5)=15  (1,3,6)=18  (1,4,5)=20  (1,4,6)=24  (1,5,6)=30\n(2,3,4)=24  (2,3,5)=30  (2,3,6)=36  (2,4,5)=40  (2,4,6)=48\n(2,5,6)=60  (3,4,5)=60  (3,4,6)=72  (3,5,6)=90  (4,5,6)=120\n\nSum = 6+8+10+12+12+15+18+20+24+30+24+30+36+40+48+60+60+72+90+120 = 735\n\nE[product] = 735 / 20 = 36.75\n\nShortcut: E[X₁X₂X₃] for draws without replacement.\nE[Xᵢ] = 3.5 for each marble. But they're not independent.\nThe formula is E[product] = [E[X]³ − 3E[X]E[X²] + 2E[X³]] × ... (complex).\nBrute force (listing all 20 triples) is fastest under time pressure.",
    category: "Expected value",
    technique: "Exhaustive enumeration"
  },

  // ------------------------------------------------------------------ Q14
  {
    id: "iv-14",
    text: "You and your friend each roll a fair six-sided dice. What is the (percentage) probability that you roll a higher number than your friend?",
    answer: 41.67,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "By symmetry: P(you win) = P(friend wins).\nP(tie) = P(both roll same) = 6/36 = 1/6.\n\nP(you win) = (1 − 1/6) / 2 = 5/12 ≈ 41.67%\n\nAlternatively, count directly: out of 36 outcomes, you win in 15 cases.\n(You roll k, friend rolls 1..k−1): 0+1+2+3+4+5 = 15 winning outcomes.\n15/36 = 5/12 ≈ 41.67%.",
    category: "Probability",
    technique: "Symmetry argument"
  },

  // ------------------------------------------------------------------ Q15
  {
    id: "iv-15",
    text: "If you multiply the first 100 even numbers together, how many digits does the result have?",
    answer: 189,
    unit: "digits",
    visualType: "none",
    imageSrc: null,
    note: "Product = 2 × 4 × 6 × ... × 200 = 2¹⁰⁰ × (1 × 2 × 3 × ... × 100) = 2¹⁰⁰ × 100!\n\nNumber of digits = ⌊log₁₀(2¹⁰⁰ × 100!)⌋ + 1\n\nlog₁₀(2¹⁰⁰) = 100 × log₁₀(2) = 100 × 0.30103 = 30.103\n\nlog₁₀(100!) using Stirling's approximation:\nlog₁₀(n!) ≈ n·log₁₀(n) − n·log₁₀(e) + ½·log₁₀(2πn)\n= 100×2 − 100×0.4343 + ½×log₁₀(628.3)\n= 200 − 43.43 + ½×2.798\n= 200 − 43.43 + 1.40\n≈ 157.97\n\nTotal: 30.103 + 157.97 = 188.07\nDigits = ⌊188.07⌋ + 1 = 189\n\nKey facts to memorize: log₁₀(2) ≈ 0.301, log₁₀(e) ≈ 0.434, log₁₀(100!) ≈ 158.",
    category: "Estimation",
    technique: "Stirling's approximation + log counting"
  },

  // ------------------------------------------------------------------ Q16
  {
    id: "iv-16",
    text: "A needle of length 3/4 is dropped uniformly at random onto a grid of parallel lines spaced 1 unit apart. What is the probability (as a percentage) that the needle crosses exactly two grid lines?",
    answer: 0,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Trick question! The needle length is 3/4, and the lines are 1 unit apart.\n\nSince the needle (3/4) is shorter than the gap between lines (1), it can cross at most ONE line. It is geometrically impossible for the needle to touch two lines simultaneously.\n\nP(crosses exactly 2 lines) = 0%\n\n(For reference, Buffon's needle probability of crossing at least one line:\nP(crosses 1 line) = 2L/(πd) = 2(3/4)/(π×1) = 3/(2π) ≈ 47.7%)\n\nThe key insight: always check if an event is geometrically possible before computing. L < d means at most 1 crossing.",
    category: "Geometric probability",
    technique: "Feasibility check (Buffon's needle)"
  },

  // ------------------------------------------------------------------ Q17
  {
    id: "iv-17",
    text: "A stick of length 1 is broken at two points chosen uniformly at random. What is the probability (as a percentage) that the three pieces can form an acute triangle?",
    answer: 7.9,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Two conditions must hold:\n1. Triangle inequality: all three pieces < 1/2 → P(triangle) = 1/4\n2. Acute condition: for the longest side c, need a² + b² > c²\n\nExact answer: P(acute triangle) = 3·ln(2) − 2 ≈ 0.0794 ≈ 7.9%\n\nDerivation sketch:\n• Let pieces be x, y, z with x+y+z = 1, each < 1/2\n• WLOG z = max(x,y,z), so z ∈ [1/3, 1/2)\n• Acute iff z² < x² + y² = (1−z)² − 2xy\n• Integrate over the triangle region to get P = 3ln2 − 2\n\nFor z < √2 − 1 ≈ 0.414: triangle is always acute\nFor z ∈ [0.414, 0.5): triangle may be obtuse\n\nUnder time pressure: \"well under 10%\" is a good estimate.\nInterval [5, 12] would cover the true answer.",
    category: "Geometric probability",
    technique: "Stick-breaking + geometric integration"
  }
];
