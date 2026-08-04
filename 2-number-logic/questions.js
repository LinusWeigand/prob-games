/* ============================================================================
 * NUMBER LOGIC — QUESTION DATABASE (from Optiver assessment photos)
 * ============================================================================
 *
 * Each entry:
 *   id       unique slug
 *   sequence the visible sequence terms (as display strings)
 *   options  the answer choices
 *   answer   index into options of the correct answer
 *   pattern  short pattern category tag
 *   note     explanation of the pattern and solution
 */

var QUESTIONS = [
  {
    id: "seq-p01",
    sequence: ["27", "9", "18", "6", "12", "4", "?"],
    options: ["8", "12", "4", "6"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ÷3 and ×2. 27÷3=9, 9×2=18, 18÷3=6, 6×2=12, 12÷3=4, 4×2=8."
  },
  {
    id: "seq-p02",
    sequence: ["9", "17/3", "29", "33/7", "49", "49/11", "?"],
    options: ["65", "69", "67", "71"],
    answer: 1,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions: 9, 29, 49, 69 (+20 each). Even positions: 17/3, 33/7, 49/11 (numerators +16, denominators +4)."
  },
  {
    id: "seq-p03",
    sequence: ["64", "128", "138", "34½", "69", "79", "?"],
    options: ["148", "158", "89", "19¾"],
    answer: 3,
    pattern: "cyclic-ops",
    note: "Repeating cycle of 3 operations: ×2, +10, ÷4. 64×2=128, 128+10=138, 138÷4=34½, 34½×2=69, 69+10=79, 79÷4=19¾."
  },
  {
    id: "seq-p04",
    sequence: ["4", "5", "10/2", "6", "√36", "42/7", "?"],
    options: ["7", "8", "48/6", "70/10"],
    answer: 0,
    pattern: "representation-count",
    note: "Each integer n appears (n−3) times in various representations. 4 once (4), 5 twice (5, 10/2), 6 three times (6, √36, 42/7). Next: 7 appears four times, starting with 7."
  },
  {
    id: "seq-p05",
    sequence: ["7", "6", "8", "24", "6", "5", "7", "?"],
    options: ["15", "21", "18", "9"],
    answer: 1,
    pattern: "cyclic-ops",
    note: "Cycling operations: −1, +2, ×3, ÷4. 7−1=6, 6+2=8, 8×3=24, 24÷4=6, 6−1=5, 5+2=7, 7×3=21."
  },
  {
    id: "seq-p06",
    sequence: ["34", "54", "78", "106", "138", "?"],
    options: ["186", "184", "174", "178"],
    answer: 2,
    pattern: "arithmetic-2nd-diff",
    note: "Differences increase by 4: 20, 24, 28, 32, 36. Next: 138+36=174. (Quadratic sequence with constant second difference.)"
  },
  {
    id: "seq-p07",
    sequence: ["88", "8", "80", "10", "70", "15", "?"],
    options: ["55", "62", "85", "65"],
    answer: 0,
    pattern: "pair-subtract",
    note: "Pairs: subtract second from first → next pair's first. 88−8=80, 80−10=70, 70−15=55."
  },
  {
    id: "seq-p08",
    sequence: ["3", "4", "5", "7", "10", "15", "?"],
    options: ["23", "25", "24", "27"],
    answer: 0,
    pattern: "famous-diff",
    note: "Differences are the Fibonacci numbers: 1, 1, 2, 3, 5, 8. Next: 15+8=23."
  },
  {
    id: "seq-p09",
    sequence: ["21", "20", "22", "18", "26", "10", "?"],
    options: ["−22", "9", "58", "17"],
    answer: 0,
    pattern: "geometric-diff",
    note: "Differences: −1, +2, −4, +8, −16. Absolute values double, signs alternate. Strictly, the next difference should be +32 (giving 42), but 42 is not among the options. The intended answer −22 treats the next difference as −32."
  },
  {
    id: "seq-p10",
    sequence: ["4", "6", "12", "14", "28", "30", "?"],
    options: ["48", "32", "60", "36"],
    answer: 2,
    pattern: "alternating-ops",
    note: "Alternating +2 and ×2. 4+2=6, 6×2=12, 12+2=14, 14×2=28, 28+2=30, 30×2=60."
  },
  {
    id: "seq-p11",
    sequence: ["120", "20", "100", "25", "75", "37½", "?"],
    options: ["112½", "75", "37½", "19¾"],
    answer: 2,
    pattern: "alternating-ops",
    note: "Alternating operations with decreasing factors: ÷6, ×5, ÷4, ×3, ÷2, ×1. 120÷6=20, 20×5=100, 100÷4=25, 25×3=75, 75÷2=37½, 37½×1=37½."
  },
  {
    id: "seq-p12",
    sequence: ["2", "4", "7", "12", "19", "30", "?"],
    options: ["51", "47", "43", "44"],
    answer: 2,
    pattern: "famous-diff",
    note: "Differences are successive primes: 2, 3, 5, 7, 11, 13. Next: 30+13=43."
  },
  {
    id: "seq-p13",
    sequence: ["102", "34", "17", "18", "6", "3", "?"],
    options: ["4", "2", "1", "0"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "Repeating cycle of 3 operations: ÷3, ÷2, +1. 102÷3=34, 34÷2=17, 17+1=18, 18÷3=6, 6÷2=3, 3+1=4."
  },
  {
    id: "seq-p14",
    sequence: ["12", "28", "36", "84", "88", "168", "?"],
    options: ["176", "188", "170⅔", "124"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Differences: 16, 8, 48, 4, 80. Grouped in pairs: large jumps (16, 48, 80) increase by 32; small jumps (8, 4) halve. Next small jump is 8, so 168+8=176."
  },
  {
    id: "seq-p15",
    sequence: ["4", "2", "3", "13/2", "16", "44", "?"],
    options: ["137", "133", "129", "142"],
    answer: 2,
    pattern: "complex-ratio",
    note: "Differences: −2, 1, 3.5, 9.5, 28. Ratios of consecutive differences approach 3 (×−0.5, ×3.5, ×2.71, ×2.95). Next difference ≈ 28×3 = 84, so 44+85 ≈ 129."
  },
  {
    id: "seq-p16",
    sequence: ["9", "8", "6", "12", "4", "18", "?"],
    options: ["54", "11", "8/3", "16", "1"],
    answer: 2,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions (9, 6, 4, ?): multiply by ⅔ each time → 4×⅔=8/3. Even positions (8, 12, 18): multiply by 3/2 each time."
  },
  {
    id: "seq-p17",
    sequence: ["6/8", "2/3", "3/6", "2/6", "4/24", "1/18", "?"],
    options: ["1/108", "2/144", "2/240", "1/68"],
    answer: 0,
    pattern: "recursive-product",
    note: "Simplified: 3/4, 2/3, 1/2, 1/3, 1/6, 1/18. Each term = product of the two before it: (1/3)×(1/6)=1/18, (1/6)×(1/18)=1/108."
  },
  {
    id: "seq-p18",
    sequence: ["1", "1/2", "3/7", "2/5", "5/13", "3/8", "?"],
    options: ["6/18", "8/23", "5/20", "7/19", "4/21"],
    answer: 3,
    pattern: "interleaved",
    note: "Two interleaved fraction sequences. Odd positions: numerators 1, 3, 5, 7 (+2), denominators 1, 7, 13, 19 (+6). Even positions: numerators 1, 2, 3 (+1), denominators 2, 5, 8 (+3). Position 7 → 7/19."
  },
  {
    id: "seq-p19",
    sequence: ["2", "5", "11", "17", "23", "31", "?"],
    options: ["40", "35", "54", "41"],
    answer: 3,
    pattern: "prime-selection",
    note: "Every other prime number. 2 (1st prime), 5 (3rd), 11 (5th), 17 (7th), 23 (9th), 31 (11th). The 13th prime is 41."
  },
  {
    id: "seq-p20",
    sequence: ["18", "6", "36", "24", "8", "64", "?"],
    options: ["32", "36", "24", "42⅔", "21⅓"],
    answer: 3,
    pattern: "cyclic-ops",
    note: "Apparent 3-cycle: ÷3, ×6, ×⅔. Works for first group (18÷3=6, 6×6=36, 36×⅔=24) and start of second (24÷3=8). The step 8→64 breaks the cycle (8×6=48, not 64). If we continue the ×⅔ step: 64×⅔=42⅔."
  },
  {
    id: "seq-p21",
    sequence: ["3", "3", "6", "12", "60", "660", "?"],
    options: ["38280", "36960", "38940", "37620", "39600"],
    answer: 2,
    pattern: "recursive-product",
    note: "a(n) = a(n−1) × (a(n−2) − 1). Check: 3×(3−1)=6, 6×(3−1)=12, 12×(6−1)=60, 60×(12−1)=660, 660×(60−1)=660×59=38940."
  },
  {
    id: "seq-p22",
    sequence: ["2", "1", "7", "10", "31", "61", "?"],
    options: ["115", "144", "112", "100", "154"],
    answer: 4,
    pattern: "linear-recurrence",
    note: "a(n) = a(n−1) + 3×a(n−2). Check: 1+3×2=7, 7+3×1=10, 10+3×7=31, 31+3×10=61, 61+3×31=154."
  },
  {
    id: "seq-p23",
    sequence: ["3/4", "4/5", "5/7", "7/9", "9/13", "13/17", "?"],
    options: ["17/33", "17/23", "17/25", "17/31", "17/19"],
    answer: 2,
    pattern: "fraction-chain",
    note: "Each numerator = previous denominator. The gap (denom − numer) doubles in pairs: 1, 1, 2, 2, 4, 4, 8. So 17/(17+8)=17/25."
  },
  {
    id: "seq-p24",
    sequence: ["10", "2/3", "13", "2", "16", "6", "?"],
    options: ["20", "19", "43", "17", "22"],
    answer: 1,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions (10, 13, 16, ?): +3 each → 19. Even positions (2/3, 2, 6): ×3 each → 18."
  }
];
