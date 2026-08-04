/* ============================================================================
 * NUMBER LOGIC — GENERATED PRACTICE SEQUENCES
 * ============================================================================
 *
 * Additional sequences written in the same style as the Optiver assessment.
 * Each follows one of the identified pattern categories.
 */

var QUESTIONS_EXTRA = [
  // --- ALTERNATING OPERATIONS ---
  {
    id: "seq-g01",
    sequence: ["5", "15", "10", "30", "25", "75", "?"],
    options: ["70", "60", "80", "50"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ×3 and −5. 5×3=15, 15−5=10, 10×3=30, 30−5=25, 25×3=75, 75−5=70."
  },
  {
    id: "seq-g02",
    sequence: ["2", "6", "3", "9", "6", "18", "?"],
    options: ["15", "12", "9", "21"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ×3 and −3. 2×3=6, 6−3=3, 3×3=9, 9−3=6, 6×3=18, 18−3=15."
  },
  {
    id: "seq-g03",
    sequence: ["1", "4", "8", "32", "64", "256", "?"],
    options: ["512", "1024", "768", "640"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ×4 and ×2. 1×4=4, 4×2=8, 8×4=32, 32×2=64, 64×4=256, 256×2=512."
  },
  {
    id: "seq-g04",
    sequence: ["100", "50", "55", "27½", "32½", "16¼", "?"],
    options: ["21¼", "18¼", "20¼", "24¼"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ÷2 and +5. 100÷2=50, 50+5=55, 55÷2=27½, 27½+5=32½, 32½÷2=16¼, 16¼+5=21¼."
  },
  {
    id: "seq-g05",
    sequence: ["3", "12", "8", "32", "28", "112", "?"],
    options: ["108", "96", "116", "104"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ×4 and −4. 3×4=12, 12−4=8, 8×4=32, 32−4=28, 28×4=112, 112−4=108."
  },

  // --- INTERLEAVED SEQUENCES ---
  {
    id: "seq-g06",
    sequence: ["1", "100", "4", "95", "9", "90", "?"],
    options: ["16", "85", "25", "80"],
    answer: 0,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions: 1, 4, 9, 16 (perfect squares: 1², 2², 3², 4²). Even positions: 100, 95, 90 (−5 each)."
  },
  {
    id: "seq-g07",
    sequence: ["2", "3", "4", "9", "8", "27", "?"],
    options: ["16", "81", "32", "12"],
    answer: 0,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions: 2, 4, 8, 16 (×2 each, powers of 2). Even positions: 3, 9, 27 (×3 each, powers of 3)."
  },
  {
    id: "seq-g08",
    sequence: ["5", "1", "10", "3", "15", "5", "?"],
    options: ["20", "7", "25", "15"],
    answer: 0,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions: 5, 10, 15, 20 (+5 each). Even positions: 1, 3, 5 (+2 each)."
  },
  {
    id: "seq-g09",
    sequence: ["1", "2", "1", "4", "1", "8", "?"],
    options: ["1", "16", "10", "2"],
    answer: 0,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd positions: 1, 1, 1, 1 (constant). Even positions: 2, 4, 8 (×2 each)."
  },

  // --- DIFFERENCE PATTERNS ---
  {
    id: "seq-g10",
    sequence: ["1", "2", "5", "12", "27", "58", "?"],
    options: ["121", "105", "115", "130"],
    answer: 0,
    pattern: "geometric-diff",
    note: "Differences double plus one: 1, 3, 7, 15, 31, 63. Each difference is 2×previous+1. Next: 58+63=121."
  },
  {
    id: "seq-g11",
    sequence: ["2", "3", "5", "9", "17", "33", "?"],
    options: ["65", "49", "57", "72"],
    answer: 0,
    pattern: "geometric-diff",
    note: "Differences double: 1, 2, 4, 8, 16, 32. Next: 33+32=65."
  },
  {
    id: "seq-g12",
    sequence: ["1", "3", "7", "15", "31", "63", "?"],
    options: ["127", "95", "111", "100"],
    answer: 0,
    pattern: "geometric-diff",
    note: "Each term = 2ⁿ − 1. Or: differences double (2, 4, 8, 16, 32, 64). Next: 63+64=127."
  },
  {
    id: "seq-g13",
    sequence: ["5", "6", "8", "12", "20", "36", "?"],
    options: ["68", "52", "60", "44"],
    answer: 0,
    pattern: "geometric-diff",
    note: "Differences double: 1, 2, 4, 8, 16, 32. Next: 36+32=68."
  },
  {
    id: "seq-g14",
    sequence: ["10", "13", "19", "31", "55", "103", "?"],
    options: ["199", "175", "151", "207"],
    answer: 0,
    pattern: "geometric-diff",
    note: "Differences double: 3, 6, 12, 24, 48, 96. Next: 103+96=199."
  },

  // --- CYCLIC OPERATIONS ---
  {
    id: "seq-g15",
    sequence: ["4", "8", "3", "6", "12", "7", "?"],
    options: ["10", "15", "9", "14"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "3-cycle: ×2, −5, +3. 4×2=8, 8−5=3, 3+3=6, 6×2=12, 12−5=7, 7+3=10."
  },
  {
    id: "seq-g16",
    sequence: ["1", "2", "6", "3", "4", "12", "?"],
    options: ["6", "9", "8", "15"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "3-cycle: +1, ×3, ÷2. 1+1=2, 2×3=6, 6÷2=3, 3+1=4, 4×3=12, 12÷2=6."
  },
  {
    id: "seq-g17",
    sequence: ["5", "10", "7", "14", "11", "22", "?"],
    options: ["19", "25", "15", "17"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "Cycle of 2 operations: ×2, −3. 5×2=10, 10−3=7, 7×2=14, 14−3=11, 11×2=22, 22−3=19."
  },
  {
    id: "seq-g18",
    sequence: ["1", "3", "9", "7", "21", "63", "?"],
    options: ["61", "59", "57", "65"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "Cycle of 3 operations: ×3, ×3, −2. 1×3=3, 3×3=9, 9−2=7, 7×3=21, 21×3=63, 63−2=61."
  },

  // --- PAIR / GROUP PATTERNS ---
  {
    id: "seq-g19",
    sequence: ["100", "10", "90", "15", "75", "25", "?"],
    options: ["50", "60", "45", "55"],
    answer: 0,
    pattern: "pair-subtract",
    note: "Pairs: subtract second from first → next pair's first. 100−10=90, 90−15=75, 75−25=50."
  },
  {
    id: "seq-g20",
    sequence: ["50", "5", "45", "10", "35", "20", "?"],
    options: ["15", "25", "30", "10"],
    answer: 0,
    pattern: "pair-subtract",
    note: "Pairs: subtract second from first → next pair's first. 50−5=45, 45−10=35, 35−20=15."
  },

  // --- RECURSIVE / PRODUCT ---
  {
    id: "seq-g21",
    sequence: ["1", "1", "2", "3", "5", "8", "?"],
    options: ["13", "11", "15", "10"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "Fibonacci sequence: a(n) = a(n−1) + a(n−2). 1, 1, 2, 3, 5, 8, 13."
  },
  {
    id: "seq-g22",
    sequence: ["2", "1", "3", "4", "7", "11", "?"],
    options: ["18", "15", "22", "14"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "Lucas-like: a(n) = a(n−1) + a(n−2). 2, 1, 3, 4, 7, 11, 18."
  },
  {
    id: "seq-g23",
    sequence: ["1", "2", "5", "13", "34", "89", "?"],
    options: ["233", "144", "199", "210"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "Every other Fibonacci number, or a(n) = 3a(n−1) − a(n−2). 3×89−34=267−34=233."
  },
  {
    id: "seq-g24",
    sequence: ["1", "2", "2", "4", "8", "32", "?"],
    options: ["256", "128", "64", "320"],
    answer: 0,
    pattern: "recursive-product",
    note: "a(n) = a(n−1) × a(n−2). 1×2=2, 2×2=4, 2×4=8, 4×8=32, 8×32=256."
  },

  // --- FAMOUS DIFFERENCE PATTERNS ---
  {
    id: "seq-g25",
    sequence: ["1", "4", "9", "16", "25", "36", "?"],
    options: ["49", "42", "45", "64"],
    answer: 0,
    pattern: "famous-diff",
    note: "Perfect squares: 1², 2², 3², 4², 5², 6², 7²=49."
  },
  {
    id: "seq-g26",
    sequence: ["1", "8", "27", "64", "125", "?"],
    options: ["216", "196", "200", "256"],
    answer: 0,
    pattern: "famous-diff",
    note: "Perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³=216."
  },
  {
    id: "seq-g27",
    sequence: ["2", "6", "12", "20", "30", "42", "?"],
    options: ["56", "48", "52", "60"],
    answer: 0,
    pattern: "famous-diff",
    note: "n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7, 7×8=56. Differences increase by 2: 4, 6, 8, 10, 12, 14."
  },
  {
    id: "seq-g28",
    sequence: ["1", "3", "6", "10", "15", "21", "?"],
    options: ["28", "25", "30", "24"],
    answer: 0,
    pattern: "famous-diff",
    note: "Triangular numbers: n(n+1)/2. Differences are 2, 3, 4, 5, 6, 7. Next: 21+7=28."
  },
  {
    id: "seq-g29",
    sequence: ["0", "1", "1", "2", "3", "5", "8", "?"],
    options: ["13", "11", "14", "10"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "Fibonacci starting from 0: 0, 1, 1, 2, 3, 5, 8, 13."
  },

  // --- ARITHMETIC / QUADRATIC ---
  {
    id: "seq-g30",
    sequence: ["3", "8", "15", "24", "35", "48", "?"],
    options: ["63", "55", "60", "65"],
    answer: 0,
    pattern: "arithmetic-2nd-diff",
    note: "Differences increase by 2: 5, 7, 9, 11, 13, 15. Next: 48+15=63. (These are n²−1 for n=2,3,...)"
  },
  {
    id: "seq-g31",
    sequence: ["4", "9", "16", "25", "36", "?"],
    options: ["49", "42", "45", "64"],
    answer: 0,
    pattern: "arithmetic-2nd-diff",
    note: "Perfect squares starting from 2²: 4, 9, 16, 25, 36, 49. Differences: 5, 7, 9, 11, 13."
  },
  {
    id: "seq-g32",
    sequence: ["2", "5", "10", "17", "26", "37", "?"],
    options: ["50", "44", "48", "52"],
    answer: 0,
    pattern: "arithmetic-2nd-diff",
    note: "n²+1: 1²+1, 2²+1, 3²+1, 4²+1, 5²+1, 6²+1, 7²+1=50. Differences: 3, 5, 7, 9, 11, 13."
  },

  // --- FRACTION PATTERNS ---
  {
    id: "seq-g33",
    sequence: ["1/2", "2/3", "3/5", "5/8", "8/13", "?"],
    options: ["13/21", "11/18", "10/15", "13/20"],
    answer: 0,
    pattern: "fraction-chain",
    note: "Fibonacci fractions: each numerator = previous denominator, each denominator = sum of previous num + denom. 8+13=21 → 13/21."
  },
  {
    id: "seq-g34",
    sequence: ["1/2", "2/6", "3/12", "4/20", "5/30", "?"],
    options: ["6/42", "6/36", "7/42", "5/35"],
    answer: 0,
    pattern: "fraction-chain",
    note: "Numerators: 1, 2, 3, 4, 5, 6. Denominators: n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42. Answer: 6/42."
  },

  // --- PRIME PATTERNS ---
  {
    id: "seq-g35",
    sequence: ["4", "6", "10", "14", "22", "26", "?"],
    options: ["34", "30", "38", "32"],
    answer: 0,
    pattern: "prime-selection",
    note: "Twice the primes: 2×2, 2×3, 2×5, 2×7, 2×11, 2×13, 2×17=34."
  },
  {
    id: "seq-g36",
    sequence: ["3", "7", "13", "19", "29", "37", "?"],
    options: ["43", "41", "47", "53"],
    answer: 0,
    pattern: "prime-selection",
    note: "Every other prime starting from 2nd: 3(2nd), 7(4th), 13(6th), 19(8th), 29(10th), 37(12th). 14th prime = 43."
  },

  // --- COMPLEX / MIXED ---
  {
    id: "seq-g37",
    sequence: ["1", "1", "2", "6", "24", "120", "?"],
    options: ["720", "600", "840", "480"],
    answer: 0,
    pattern: "factorial",
    note: "Factorials: 0!=1, 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720."
  },
  {
    id: "seq-g38",
    sequence: ["1", "3", "7", "13", "21", "31", "?"],
    options: ["43", "39", "45", "37"],
    answer: 0,
    pattern: "arithmetic-2nd-diff",
    note: "Differences increase by 2: 2, 4, 6, 8, 10, 12. Next: 31+12=43. (Centered hexagonal numbers.)"
  },
  {
    id: "seq-g39",
    sequence: ["2", "3", "5", "7", "11", "13", "?"],
    options: ["17", "15", "19", "16"],
    answer: 0,
    pattern: "prime-selection",
    note: "Consecutive prime numbers: 2, 3, 5, 7, 11, 13, 17."
  },
  {
    id: "seq-g40",
    sequence: ["1", "4", "27", "256", "3125", "?"],
    options: ["46656", "32768", "15625", "40000"],
    answer: 0,
    pattern: "power-pattern",
    note: "nⁿ: 1¹=1, 2²=4, 3³=27, 4⁴=256, 5⁵=3125, 6⁶=46656."
  },

  // --- MORE ALTERNATING ---
  {
    id: "seq-g41",
    sequence: ["1", "2", "6", "7", "21", "22", "?"],
    options: ["66", "44", "23", "88"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating +1 and ×3. 1+1=2, 2×3=6, 6+1=7, 7×3=21, 21+1=22, 22×3=66."
  },
  {
    id: "seq-g42",
    sequence: ["2", "4", "12", "14", "42", "44", "?"],
    options: ["132", "88", "46", "128"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating +2 and ×3. 2+2=4, 4×3=12, 12+2=14, 14×3=42, 42+2=44, 44×3=132."
  },
  {
    id: "seq-g43",
    sequence: ["1000", "500", "505", "252½", "257½", "128¾", "?"],
    options: ["133¾", "125¾", "131¼", "140"],
    answer: 0,
    pattern: "alternating-ops",
    note: "Alternating ÷2 and +5. 1000÷2=500, 500+5=505, 505÷2=252½, 252½+5=257½, 257½÷2=128¾, 128¾+5=133¾."
  },

  // --- MORE INTERLEAVED ---
  {
    id: "seq-g44",
    sequence: ["1", "64", "8", "32", "27", "16", "?"],
    options: ["64", "8", "48", "56"],
    answer: 0,
    pattern: "interleaved",
    note: "Two interleaved sequences. Odd: 1, 8, 27, 64 (cubes: 1³, 2³, 3³, 4³). Even: 64, 32, 16 (÷2 each, powers of 2 descending)."
  },
  {
    id: "seq-g45",
    sequence: ["0", "1", "1", "4", "4", "9", "?"],
    options: ["9", "16", "25", "7"],
    answer: 0,
    pattern: "interleaved",
    note: "Two interleaved. Odd: 0, 1, 4, 9 (0², 1², 2², 3²). Even: 1, 4, 9 (1², 2², 3²). Position 7 → 3²=9."
  },

  // --- MORE CYCLIC ---
  {
    id: "seq-g46",
    sequence: ["2", "4", "12", "6", "8", "24", "?"],
    options: ["12", "18", "16", "10"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "Cycle of 3 operations: +2, ×3, ÷2. 2+2=4, 4×3=12, 12÷2=6, 6+2=8, 8×3=24, 24÷2=12."
  },
  {
    id: "seq-g47",
    sequence: ["1", "2", "7", "4", "8", "13", "?"],
    options: ["10", "15", "8", "12"],
    answer: 0,
    pattern: "cyclic-ops",
    note: "3-cycle: ×2, +5, −3. 1×2=2, 2+5=7, 7−3=4, 4×2=8, 8+5=13, 13−3=10."
  },

  // --- MORE LINEAR RECURRENCE ---
  {
    id: "seq-g48",
    sequence: ["1", "3", "4", "7", "11", "18", "?"],
    options: ["29", "25", "27", "31"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "a(n) = a(n−1) + a(n−2). Like Fibonacci starting from 1, 3. 1+3=4, 3+4=7, 4+7=11, 7+11=18, 11+18=29."
  },
  {
    id: "seq-g49",
    sequence: ["1", "1", "1", "3", "5", "9", "?"],
    options: ["17", "13", "15", "19"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "Tribonacci: a(n) = a(n−1) + a(n−2) + a(n−3). 1+1+1=3, 1+1+3=5, 1+3+5=9, 3+5+9=17."
  },
  {
    id: "seq-g50",
    sequence: ["2", "5", "11", "23", "47", "?"],
    options: ["95", "85", "91", "99"],
    answer: 0,
    pattern: "linear-recurrence",
    note: "a(n) = 2×a(n−1) + 1. 2×2+1=5, 2×5+1=11, 2×11+1=23, 2×23+1=47, 2×47+1=95."
  }
];
