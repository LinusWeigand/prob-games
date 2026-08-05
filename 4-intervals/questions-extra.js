/* ============================================================================
 * INTERVALS — EXTENDED QUESTION DATABASE  (50 questions)
 * ============================================================================
 * visualType: "table"       → visualData: {headers, rows}
 *             "number-grid" → gridData: [[numbers]]
 *             "dice-grid"   → diceData: [[1-6 values]]
 *             "none"        → no visual
 * ========================================================================= */

var QUESTIONS_EXTRA = [

  // ================================================================ TABLES
  // ------------------------------------------------------------------ T1
  {
    id: "iv-20",
    text: "Predict the missing output.",
    answer: 46,
    unit: "",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["t", "Input 1", "Input 2", "Input 3", "Output"],
      rows: [
        ["1", "40", "15", "8", "42"],
        ["2", "30", "20", "12", "43"],
        ["3", "60", "10", "25", "25"],
        ["4", "20", "25", "6", "54"],
        ["5", "50", "18", "15", "?"]
      ]
    },
    note: "Fit Output = a·I1 + b·I2 + c·I3.\n\nUsing rows 1 & 3 (same I2=10? No). Solve the 3×3 system from rows 1-3:\n42 = 40a + 15b + 8c\n43 = 30a + 20b + 12c\n25 = 60a + 10b + 25c\n\nRow1−Row2: −1 = 10a − 5b − 4c\nRow3−Row1: −17 = 20a − 5b + 17c\nSubtract: −16 = 10a + 21c → a = (−16−21c)/10\n\nFrom Row4 check: 54 = 20a+25b+6c confirms a=0.5, b=2, c=−1.\n\nOutput = 0.5·I1 + 2·I2 − I3\nFor t=5: 0.5×50 + 2×18 − 15 = 25 + 36 − 15 = 46.",
    category: "Linear regression",
    technique: "Three-variable linear fit"
  },

  // ------------------------------------------------------------------ T2
  {
    id: "iv-21",
    text: "Predict the missing output in the time series.",
    answer: 202,
    unit: "",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["t", "1", "2", "3", "4", "5", "6", "7"],
      rows: [
        ["Output", "12", "19", "31", "49", "79", "126", "?"]
      ]
    },
    note: "Consecutive ratios:\n19/12 = 1.583, 31/19 = 1.632, 49/31 = 1.581, 79/49 = 1.612, 126/79 = 1.595\n\nGeometric mean of ratios: (126/12)^(1/5) = 10.5^0.2 ≈ 1.600\n\nNext value ≈ 126 × 1.60 = 201.6 ≈ 202\n\nInterval [185, 220] is reasonable.",
    category: "Sequence prediction",
    technique: "Exponential ratio extrapolation"
  },

  // ------------------------------------------------------------------ T3
  {
    id: "iv-22",
    text: "What is the compound annual growth rate (CAGR) of this portfolio, as a percentage?",
    answer: 8.0,
    unit: "%",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["Year", "Portfolio Value ($)"],
      rows: [
        ["2018", "1000"],
        ["2019", "1080"],
        ["2020", "1166"],
        ["2021", "1260"],
        ["2022", "1361"],
        ["2023", "1469"]
      ]
    },
    note: "CAGR = (V_final / V_initial)^(1/n) − 1 = (1469/1000)^(1/5) − 1\n\nYear-over-year growth: 8.0%, 7.96%, 8.06%, 8.02%, 7.94%\nAll cluster tightly around 8%.\n\nOr: ln(1.469) ≈ 0.385, divide by 5 → 0.077, e^0.077 ≈ 1.080.\nCAGR ≈ 8.0%.",
    category: "Finance",
    technique: "Compound growth rate"
  },

  // ------------------------------------------------------------------ T4
  {
    id: "iv-23",
    text: "Predict the missing output in the time series.",
    answer: 382,
    unit: "",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["t", "1", "2", "3", "4", "5", "6"],
      rows: [
        ["Output", "2", "14", "46", "110", "218", "?"]
      ]
    },
    note: "First differences: 12, 32, 64, 108\nSecond differences: 20, 32, 44\nThird differences: 12, 12 (constant!)\n\nThis is a cubic sequence. Next third diff = 12.\nNext second diff = 44 + 12 = 56\nNext first diff = 108 + 56 = 164\nNext value = 218 + 164 = 382\n\nExact formula: f(n) = 2n³ − 2n² + 4n − 2.\nf(6) = 432 − 72 + 24 − 2 = 382.",
    category: "Sequence prediction",
    technique: "Constant third differences → cubic"
  },

  // ------------------------------------------------------------------ T5
  {
    id: "iv-24",
    text: "What is the portfolio's weighted average return (as a percentage)?",
    answer: 5.54,
    unit: "%",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["Asset", "Weight (%)", "Return (%)"],
      rows: [
        ["A", "25", "12.4"],
        ["B", "30", "−3.8"],
        ["C", "15", "8.6"],
        ["D", "20", "15.2"],
        ["E", "10", "−7.5"]
      ]
    },
    note: "Weighted return = Σ wᵢ × rᵢ\n= 0.25×12.4 + 0.30×(−3.8) + 0.15×8.6 + 0.20×15.2 + 0.10×(−7.5)\n= 3.10 − 1.14 + 1.29 + 3.04 − 0.75\n= 5.54%\n\nTip: pair positives and negatives.\nPositives: 3.10 + 1.29 + 3.04 = 7.43\nNegatives: 1.14 + 0.75 = 1.89\nNet: 7.43 − 1.89 = 5.54.",
    category: "Finance",
    technique: "Weighted average"
  },

  // ------------------------------------------------------------------ T6
  {
    id: "iv-25",
    text: "Predict the missing output.",
    answer: 22.5,
    unit: "",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["t", "Input 1", "Input 2", "Output"],
      rows: [
        ["1", "6", "9", "4"],
        ["2", "10", "20", "5"],
        ["3", "8", "16", "4"],
        ["4", "12", "8", "18"],
        ["5", "15", "10", "?"]
      ]
    },
    note: "The relationship is nonlinear: Output = Input1² / Input2.\n\nVerify:\n6²/9 = 36/9 = 4 ✓\n10²/20 = 100/20 = 5 ✓\n8²/16 = 64/16 = 4 ✓\n12²/8 = 144/8 = 18 ✓\n\nFor t=5: 15²/10 = 225/10 = 22.5\n\nClue: rows 1 and 3 have the same output (4) despite different inputs, ruling out a simple linear model.",
    category: "Pattern recognition",
    technique: "Nonlinear relationship detection"
  },

  // ------------------------------------------------------------------ T7
  {
    id: "iv-26",
    text: "Predict the missing score.",
    answer: 79,
    unit: "",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["Student", "Hours Studied", "Test Score"],
      rows: [
        ["1", "2", "55"],
        ["2", "5", "73"],
        ["3", "3", "61"],
        ["4", "7", "85"],
        ["5", "4", "67"],
        ["6", "8", "91"],
        ["7", "6", "?"]
      ]
    },
    note: "Fit Score = a × Hours + b.\n\nUsing (2, 55) and (8, 91):\nSlope = (91−55)/(8−2) = 36/6 = 6\nIntercept = 55 − 6×2 = 43\n\nScore = 6 × Hours + 43\n\nVerify: f(5)=73 ✓, f(3)=61 ✓, f(7)=85 ✓, f(4)=67 ✓\n\nFor Hours=6: 6×6 + 43 = 79.",
    category: "Linear regression",
    technique: "Two-point slope estimation"
  },

  // ------------------------------------------------------------------ T8
  {
    id: "iv-27",
    text: "Predict month 9's sales.",
    answer: 160,
    unit: "",
    visualType: "table",
    imageSrc: null,
    visualData: {
      headers: ["Month", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      rows: [
        ["Sales", "120", "145", "130", "155", "140", "165", "150", "175", "?"]
      ]
    },
    note: "Sawtooth pattern — alternating low and high values, each increasing by 10:\n\nLows (odd months): 120, 130, 140, 150, 160, ...\nHighs (even months): 145, 155, 165, 175, ...\n\nMonth 9 is odd → next low = 150 + 10 = 160.\n\nAlternatively, differences: +25, −15, +25, −15, +25, −15, +25, −15\nMonth 9 = 175 − 15 = 160.",
    category: "Sequence prediction",
    technique: "Alternating pattern recognition"
  },

  // =========================================================== NUMBER GRIDS
  // ------------------------------------------------------------------ NG1
  {
    id: "iv-28",
    text: "What is the median of all numbers in this grid?",
    answer: 54.5,
    unit: "",
    visualType: "number-grid",
    imageSrc: null,
    gridData: [
      [47, 82, 15, 63, 91, 38, 56, 24],
      [71, 33, 89, 44, 17, 76, 62, 51],
      [26, 58, 42, 95, 13, 67, 84, 35],
      [79, 21, 54, 36, 72, 48, 19, 93],
      [64, 87, 28, 75, 41, 55, 83, 16]
    ],
    note: "40 numbers. Median = average of the 20th and 21st values when sorted.\n\nSorted: 13, 15, 16, 17, 19, 21, 24, 26, 28, 33, 35, 36, 38, 41, 42, 44, 47, 48, 51, 54, 55, 56, 58, 62, 63, 64, 67, 71, 72, 75, 76, 79, 82, 83, 84, 87, 89, 91, 93, 95\n\n20th = 54, 21st = 55 → median = 54.5\n\nSpeed tip: don't fully sort. Estimate the middle (~50s), count numbers below 50 (there are 19: 13–48), then the 20th is 54 and 21st is 55.",
    category: "Statistics",
    technique: "Partial sort / median estimation"
  },

  // ------------------------------------------------------------------ NG2
  {
    id: "iv-29",
    text: "What is the sum of all prime numbers in this grid?",
    answer: 451,
    unit: "",
    visualType: "number-grid",
    imageSrc: null,
    gridData: [
      [73, 18, 45, 92, 31, 67],
      [28, 86, 39, 11, 74, 53],
      [42, 61, 83, 27, 15, 48],
      [57, 34, 76, 90, 22, 81],
      [14, 65, 50, 43, 88, 29]
    ],
    note: "Scan each number for primality:\n73✓, 18✗, 45✗, 92✗, 31✓, 67✓\n28✗, 86✗, 39✗(3×13), 11✓, 74✗, 53✓\n42✗, 61✓, 83✓, 27✗(3³), 15✗, 48✗\n57✗(3×19), 34✗, 76✗, 90✗, 22✗, 81✗(3⁴)\n14✗, 65✗(5×13), 50✗, 43✓, 88✗, 29✓\n\nPrimes: 73, 31, 67, 11, 53, 61, 83, 43, 29\nSum: 73+31=104, +67=171, +11=182, +53=235, +61=296, +83=379, +43=422, +29=451.",
    category: "Mental arithmetic",
    technique: "Primality testing + summation"
  },

  // ------------------------------------------------------------------ NG3
  {
    id: "iv-30",
    text: "What is the sum of all even numbers in this grid?",
    answer: 590,
    unit: "",
    visualType: "number-grid",
    imageSrc: null,
    gridData: [
      [37, 62, 19, 84, 51, 73, 46],
      [28, 95, 41, 56, 33, 87, 14],
      [63, 72, 39, 25, 91, 48, 57],
      [16, 83, 54, 67, 32, 78, 45]
    ],
    note: "Scan for even numbers (last digit 0,2,4,6,8):\nRow 1: 62, 84, 46\nRow 2: 28, 56, 14\nRow 3: 72, 48\nRow 4: 16, 54, 32, 78\n\nSum: 62+84=146, +46=192, +28=220, +56=276, +14=290, +72=362, +48=410, +16=426, +54=480, +32=512, +78=590.\n\nTip: pair to round numbers: 62+28=90, 84+16=100, 46+54=100, 56+72=128 (or 56+44? no). Sequential addition is fastest here.",
    category: "Mental arithmetic",
    technique: "Filtered scanning + summation"
  },

  // ------------------------------------------------------------------ NG4
  {
    id: "iv-31",
    text: "How many numbers in this grid have BOTH digits odd?",
    answer: 11,
    unit: "",
    visualType: "number-grid",
    imageSrc: null,
    gridData: [
      [35, 78, 93, 41, 62, 17],
      [56, 23, 84, 19, 47, 68],
      [91, 45, 32, 75, 14, 53],
      [27, 64, 51, 86, 39, 72],
      [83, 16, 59, 44, 71, 28]
    ],
    note: "Odd digits: 1, 3, 5, 7, 9. Check tens digit AND ones digit.\n\n35(3,5 ✓), 78(✗), 93(9,3 ✓), 41(✗), 62(✗), 17(1,7 ✓)\n56(✗), 23(✗), 84(✗), 19(1,9 ✓), 47(✗), 68(✗)\n91(9,1 ✓), 45(✗), 32(✗), 75(7,5 ✓), 14(✗), 53(5,3 ✓)\n27(✗), 64(✗), 51(5,1 ✓), 86(✗), 39(3,9 ✓), 72(✗)\n83(✗), 16(✗), 59(5,9 ✓), 44(✗), 71(7,1 ✓), 28(✗)\n\nCount: 35, 93, 17, 19, 91, 75, 53, 51, 39, 59, 71 = 11.",
    category: "Data processing",
    technique: "Digit-level scanning"
  },

  // ------------------------------------------------------------------ NG5
  {
    id: "iv-32",
    text: "What is the sum of the numbers on the main diagonal (top-left to bottom-right)?",
    answer: 321,
    unit: "",
    visualType: "number-grid",
    imageSrc: null,
    gridData: [
      [34, 58, 17, 82, 45, 93],
      [71, 26, 64, 39, 87, 12],
      [55, 43, 78, 21, 66, 90],
      [88, 35, 52, 47, 13, 74],
      [19, 61, 86, 33, 95, 28],
      [72, 44, 30, 69, 57, 41]
    ],
    note: "Main diagonal = positions (1,1), (2,2), (3,3), (4,4), (5,5), (6,6):\n34, 26, 78, 47, 95, 41\n\nSum: 34 + 26 = 60, + 78 = 138, + 47 = 185, + 95 = 280, + 41 = 321.",
    category: "Data processing",
    technique: "Spatial extraction + summation"
  },

  // ------------------------------------------------------------------ NG6
  {
    id: "iv-33",
    text: "What percentage of the numbers in this grid are strictly above the arithmetic mean of all the numbers?",
    answer: 47.5,
    unit: "%",
    visualType: "number-grid",
    imageSrc: null,
    gridData: [
      [45, 82, 33, 76, 51, 68, 39, 97],
      [58, 64, 41, 89, 55, 72, 37, 95],
      [48, 79, 31, 62, 44, 85, 36, 93],
      [52, 71, 38, 84, 47, 66, 42, 91],
      [29, 73, 35, 88, 46, 74, 40, 54]
    ],
    note: "Step 1 — Sum all 40 numbers:\nRow sums: 491, 511, 478, 491, 439\nTotal = 2410\n\nStep 2 — Mean = 2410/40 = 60.25\n\nStep 3 — Count numbers > 60.25:\nRow 1: 82, 76, 68, 97 → 4\nRow 2: 64, 89, 72, 95 → 4\nRow 3: 79, 62, 85, 93 → 4\nRow 4: 71, 84, 66, 91 → 4\nRow 5: 73, 88, 74 → 3 (54 ≤ 60.25)\n\nTotal above mean: 19 out of 40 = 47.5%.",
    category: "Statistics",
    technique: "Mean calculation + counting"
  },

  // ============================================================ DICE GRIDS
  // ------------------------------------------------------------------ DG1
  {
    id: "iv-34",
    text: "What is the sum of all pips on dice showing an odd number (1, 3, or 5)?",
    answer: 147,
    unit: "",
    visualType: "dice-grid",
    imageSrc: null,
    diceData: [
      [5,3,2,6,1,4,6,2,3,4],
      [3,6,4,1,5,3,2,5,1,6],
      [1,2,5,4,6,2,3,4,5,1],
      [6,4,1,3,2,5,1,6,4,3],
      [4,1,6,5,3,6,4,1,2,5],
      [2,5,3,2,4,1,5,3,6,4],
      [3,6,2,4,1,5,6,2,1,3],
      [5,1,4,3,6,2,3,4,5,6],
      [4,3,5,6,2,4,1,5,3,2],
      [6,2,1,5,4,3,2,6,4,1]
    ],
    note: "Scan the 10×10 grid for faces showing 1, 3, or 5. Sum those face values.\n\nRow-by-row odd-pip sums:\nR1: 5+3+1+3 = 12\nR2: 3+1+5+3+5+1 = 18\nR3: 1+5+3+5+1 = 15\nR4: 1+3+5+1+3 = 13\nR5: 1+5+3+1+5 = 15\nR6: 5+3+1+5+3 = 17\nR7: 3+1+5+1+3 = 13\nR8: 5+1+3+3+5 = 17\nR9: 3+5+1+5+3 = 17\nR10: 1+5+3+1 = 10\n\nTotal: 12+18+15+13+15+17+13+17+17+10 = 147.",
    category: "Data processing",
    technique: "Filtered visual scanning"
  },

  // ------------------------------------------------------------------ DG2
  {
    id: "iv-35",
    text: "How many horizontally adjacent pairs of dice sum to exactly 7?",
    answer: 16,
    unit: "",
    visualType: "dice-grid",
    imageSrc: null,
    diceData: [
      [5,3,2,6,1,4,6,2,3,4],
      [3,6,4,1,5,3,2,5,1,6],
      [1,2,5,4,6,2,3,4,5,1],
      [6,4,1,3,2,5,1,6,4,3],
      [4,1,6,5,3,6,4,1,2,5],
      [2,5,3,2,4,1,5,3,6,4],
      [3,6,2,4,1,5,6,2,1,3],
      [5,1,4,3,6,2,3,4,5,6],
      [4,3,5,6,2,4,1,5,3,2],
      [6,2,1,5,4,3,2,6,4,1]
    ],
    note: "Check each horizontally adjacent pair (9 pairs per row, 10 rows = 90 pairs).\nPairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).\n\nRow-by-row counts:\nR1: (6,1)✓, (3,4)✓ → 2\nR2: (2,5)✓, (1,6)✓ → 2\nR3: (2,5)✓, (3,4)✓ → 2\nR4: (2,5)✓, (1,6)✓, (4,3)✓ → 3\nR5: (1,6)✓, (2,5)✓ → 2\nR6: (2,5)✓ → 1\nR7: none → 0\nR8: (4,3)✓, (3,4)✓ → 2\nR9: (4,3)✓ → 1\nR10: (4,3)✓ → 1\n\nTotal: 2+2+2+3+2+1+0+2+1+1 = 16.",
    category: "Data processing",
    technique: "Adjacent pair scanning"
  },

  // ------------------------------------------------------------------ DG3
  {
    id: "iv-36",
    text: "What is the total sum of all pips (dots) on all 100 dice?",
    answer: 353,
    unit: "",
    visualType: "dice-grid",
    imageSrc: null,
    diceData: [
      [2,4,6,3,1,5,4,2,6,3],
      [4,1,3,5,6,2,1,3,5,4],
      [6,5,2,4,3,1,6,5,2,4],
      [1,3,4,6,5,4,2,6,3,1],
      [3,6,5,1,2,3,5,4,1,6],
      [5,2,1,4,6,5,3,1,4,2],
      [4,3,6,2,1,4,2,6,5,3],
      [1,5,3,6,4,2,5,3,6,1],
      [2,6,4,5,3,1,4,2,3,5],
      [3,4,1,2,5,6,1,4,2,6]
    ],
    note: "Sum each row:\nR1: 2+4+6+3+1+5+4+2+6+3 = 36\nR2: 4+1+3+5+6+2+1+3+5+4 = 34\nR3: 6+5+2+4+3+1+6+5+2+4 = 38\nR4: 1+3+4+6+5+4+2+6+3+1 = 35\nR5: 3+6+5+1+2+3+5+4+1+6 = 36\nR6: 5+2+1+4+6+5+3+1+4+2 = 33\nR7: 4+3+6+2+1+4+2+6+5+3 = 36\nR8: 1+5+3+6+4+2+5+3+6+1 = 36\nR9: 2+6+4+5+3+1+4+2+3+5 = 35\nR10: 3+4+1+2+5+6+1+4+2+6 = 34\n\nTotal: 36+34+38+35+36+33+36+36+35+34 = 353\n\nSanity check: 100 fair dice → expected total = 100 × 3.5 = 350. Answer 353 is plausible.",
    category: "Mental arithmetic",
    technique: "Row-wise summation"
  },

  // ------------------------------------------------------------------ DG4
  {
    id: "iv-37",
    text: "How many dice show a value strictly greater than the die immediately to their right? (Do not count the rightmost column.)",
    answer: 48,
    unit: "",
    visualType: "dice-grid",
    imageSrc: null,
    diceData: [
      [2,4,6,3,1,5,4,2,6,3],
      [4,1,3,5,6,2,1,3,5,4],
      [6,5,2,4,3,1,6,5,2,4],
      [1,3,4,6,5,4,2,6,3,1],
      [3,6,5,1,2,3,5,4,1,6],
      [5,2,1,4,6,5,3,1,4,2],
      [4,3,6,2,1,4,2,6,5,3],
      [1,5,3,6,4,2,5,3,6,1],
      [2,6,4,5,3,1,4,2,3,5],
      [3,4,1,2,5,6,1,4,2,6]
    ],
    note: "For each row, compare each die with the one to its right (9 comparisons per row).\n\nRow counts (left > right):\nR1: 6>3✓,3>1✓,5>4✓,4>2✓,6>3✓ → 5\nR2: 4>1✓,6>2✓,2>1✓,5>4✓ → 4\nR3: 6>5✓,5>2✓,4>3✓,3>1✓,6>5✓,5>2✓ → 6\nR4: 6>5✓,5>4✓,4>2✓,6>3✓,3>1✓ → 5\nR5: 6>5✓,5>1✓,5>4✓,4>1✓ → 4\nR6: 5>2✓,2>1✓,6>5✓,5>3✓,3>1✓,4>2✓ → 6\nR7: 4>3✓,6>2✓,2>1✓,4>2✓,6>5✓,5>3✓ → 6\nR8: 5>3✓,6>4✓,4>2✓,5>3✓,6>1✓ → 5\nR9: 6>4✓,5>3✓,3>1✓,4>2✓,3>... → 4\nR10: 4>1✓,5>... ,6>1✓,4>2✓ → 3\n\nTotal: 5+4+6+5+4+6+6+5+4+3 = 48.",
    category: "Data processing",
    technique: "Pairwise comparison scanning"
  },

  // ======================================================== PURE MATH (none)
  // ------------------------------------------------------------------ PM01
  {
    id: "iv-38",
    text: "A deck of 10 cards numbered 1–10 is shuffled into a random order. What is the probability (as a percentage) that NO card ends up in its original numbered position?",
    answer: 36.8,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "This counts derangements: D(10)/10!\n\nD(n)/n! = Σ(k=0..n) (−1)^k / k!\n= 1 − 1 + 1/2 − 1/6 + 1/24 − 1/120 + … + (−1)^10/10!\n≈ 1/e ≈ 0.36788\n\nP ≈ 36.8%\n\nThe series converges very fast to 1/e. For n ≥ 5 the answer is essentially 1/e ≈ 36.79%.",
    category: "Combinatorics",
    technique: "Derangement formula"
  },

  // ------------------------------------------------------------------ PM02
  {
    id: "iv-39",
    text: "A disease affects 0.1% of the population. A test has 99% sensitivity and 98% specificity. If a random person tests positive, what is the probability (as a percentage) they have the disease?",
    answer: 4.72,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Bayes' theorem:\nP(D|+) = P(+|D)·P(D) / [P(+|D)·P(D) + P(+|¬D)·P(¬D)]\n\n= 0.99 × 0.001 / [0.99 × 0.001 + 0.02 × 0.999]\n= 0.00099 / [0.00099 + 0.01998]\n= 0.00099 / 0.02097\n= 0.04721\n≈ 4.72%\n\nKey insight: even a good test yields many false positives when the disease is rare (base rate neglect).",
    category: "Probability",
    technique: "Bayes' theorem"
  },

  // ------------------------------------------------------------------ PM03
  {
    id: "iv-40",
    text: "You roll three fair six-sided dice. What is the expected value of the maximum of the three?",
    answer: 4.96,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "P(max = k) = (k/6)³ − ((k−1)/6)³\n\nP(max=1) = 1/216\nP(max=2) = 7/216\nP(max=3) = 19/216\nP(max=4) = 37/216\nP(max=5) = 61/216\nP(max=6) = 91/216\n\nE[max] = (1×1 + 2×7 + 3×19 + 4×37 + 5×61 + 6×91) / 216\n= (1 + 14 + 57 + 148 + 305 + 546) / 216\n= 1071/216 = 119/24 ≈ 4.958\n\nInterval [4.8, 5.1] is reasonable.",
    category: "Expected value",
    technique: "CDF of order statistics"
  },

  // ------------------------------------------------------------------ PM04
  {
    id: "iv-41",
    text: "How many integers from 1 to 1000 are divisible by 3, 5, or 7?",
    answer: 543,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Inclusion-exclusion:\n|A∪B∪C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|\n\n⌊1000/3⌋ = 333\n⌊1000/5⌋ = 200\n⌊1000/7⌋ = 142\n⌊1000/15⌋ = 66\n⌊1000/21⌋ = 47\n⌊1000/35⌋ = 28\n⌊1000/105⌋ = 9\n\nAnswer = 333 + 200 + 142 − 66 − 47 − 28 + 9 = 543.",
    category: "Combinatorics",
    technique: "Inclusion-exclusion principle"
  },

  // ------------------------------------------------------------------ PM05
  {
    id: "iv-42",
    text: "You flip a fair coin repeatedly. If the first head appears on flip k, you win k² dollars. What are your expected winnings?",
    answer: 6,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "E = Σ(k=1..∞) k² × (1/2)^k\n\nUsing the identity: Σ k²·x^k = x(1+x)/(1−x)³ for |x| < 1.\n\nAt x = 1/2:\n= (1/2)(3/2) / (1/2)³\n= (3/4) / (1/8)\n= 6\n\nAlternatively, compute partial sums:\n1/2 + 4/4 + 9/8 + 16/16 + 25/32 + …\n= 0.5 + 1 + 1.125 + 1 + 0.781 + 0.563 + … ≈ 6.",
    category: "Expected value",
    technique: "Power series identity"
  },

  // ------------------------------------------------------------------ PM06
  {
    id: "iv-43",
    text: "A gambler starts with $4. Each round they win $1 with probability 0.4 or lose $1 with probability 0.6. What is the probability (as a percentage) of reaching $8 before going broke?",
    answer: 16.5,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Gambler's ruin with p=0.4, q=0.6, start=4, target=8.\n\nr = q/p = 1.5\n\nP(reach 8) = (1 − r^4) / (1 − r^8)\n= (1 − 5.0625) / (1 − 25.6289)\n= (−4.0625) / (−24.6289)\n≈ 0.1650 = 16.5%\n\nIntuition: the unfavorable odds make it very hard to double your money.",
    category: "Probability",
    technique: "Gambler's ruin formula"
  },

  // ------------------------------------------------------------------ PM07
  {
    id: "iv-44",
    text: "A standard 52-card deck is shuffled. What is the expected position (from the top) of the first ace?",
    answer: 10.6,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "For N items with K 'special' items, E[position of first special] = (N+1)/(K+1).\n\nE = (52+1)/(4+1) = 53/5 = 10.6\n\nProof: The 4 aces divide the 48 non-aces into 5 gaps (before first ace, between aces, after last ace). By symmetry, each gap has the same expected size = 48/5 = 9.6 non-aces. The first ace comes after the first gap: position = 9.6 + 1 = 10.6.",
    category: "Expected value",
    technique: "Symmetry / gaps argument"
  },

  // ------------------------------------------------------------------ PM08
  {
    id: "iv-45",
    text: "How many distinct ways can you arrange 5 opening and 5 closing parentheses so the expression is always valid?",
    answer: 42,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "This is the 5th Catalan number:\nC₅ = C(10,5) / (5+1) = 252 / 6 = 42\n\nGeneral formula: Cₙ = C(2n,n)/(n+1) = (2n)! / [(n+1)!·n!]\n\nAlternative: Cₙ = C(2n,n) − C(2n,n+1) (ballot-style reflection argument).",
    category: "Combinatorics",
    technique: "Catalan numbers"
  },

  // ------------------------------------------------------------------ PM09
  {
    id: "iv-46",
    text: "What is the smallest number of people needed in a room for the probability of at least two sharing a birthday to exceed 99%? (Assume 365 days.)",
    answer: 57,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "P(no shared birthday among n people) = ∏(k=0..n−1) (365−k)/365\n\nUsing Poisson approximation: P(no match) ≈ e^{−n(n−1)/(2×365)}\nSet < 0.01: n(n−1)/730 > 4.605 → n(n−1) > 3362 → n ≈ 58.\n\nExact computation: P(no match) crosses below 0.01 at n = 57.\nFor n=57: P(no match) ≈ 0.0099, so P(match) ≈ 99.01%.\nFor n=56: P(match) ≈ 98.8% (just under 99%).\n\nClassic values: 23 for 50%, 57 for 99%.",
    category: "Probability",
    technique: "Birthday problem"
  },

  // ------------------------------------------------------------------ PM10
  {
    id: "iv-47",
    text: "In how many ways can 10 be written as a sum of positive integers, where order doesn't matter? (10 itself counts as one way.)",
    answer: 42,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "This is the partition function p(10).\n\np(1)=1, p(2)=2, p(3)=3, p(4)=5, p(5)=7, p(6)=11, p(7)=15, p(8)=22, p(9)=30, p(10)=42.\n\nBuilding up: p(10) can be computed by considering partitions with largest part k for k=1..10. Or use the recurrence via Euler's pentagonal theorem.\n\nSome partitions of 10: 10; 9+1; 8+2; 7+3; 7+2+1; 6+4; 6+3+1; 6+2+2; 5+5; 5+4+1; 5+3+2; 5+2+2+1; … totalling 42.",
    category: "Combinatorics",
    technique: "Integer partition counting"
  },

  // ------------------------------------------------------------------ PM11
  {
    id: "iv-48",
    text: "What is the value of 1 + 1/2 + 1/3 + 1/4 + … + 1/50? (Round to one decimal place.)",
    answer: 4.5,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "This is the 50th harmonic number H(50).\n\nApproximation: H(n) ≈ ln(n) + γ + 1/(2n)\nwhere γ = 0.5772 (Euler–Mascheroni constant).\n\nH(50) ≈ ln(50) + 0.5772 + 0.01\n= 3.912 + 0.577 + 0.01\n= 4.499\n≈ 4.5\n\nExact: H(50) = 13943237577224054960759/3099044504245996706400 ≈ 4.4992.",
    category: "Estimation",
    technique: "Harmonic series + Euler constant"
  },

  // ------------------------------------------------------------------ PM12
  {
    id: "iv-49",
    text: "From a standard 52-card deck, 5 cards are drawn. What is the probability (as a percentage) of getting exactly one pair?",
    answer: 42.3,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "P(exactly one pair) = C(13,1)·C(4,2)·C(12,3)·4³ / C(52,5)\n\nC(13,1) = 13 (choose the pair rank)\nC(4,2) = 6 (choose 2 suits for the pair)\nC(12,3) = 220 (choose 3 other ranks)\n4³ = 64 (choose suit for each remaining card)\n\nNumerator: 13 × 6 × 220 × 64 = 1,098,240\nC(52,5) = 2,598,960\n\nP = 1,098,240 / 2,598,960 ≈ 0.4226 = 42.3%.",
    category: "Combinatorics",
    technique: "Poker hand enumeration"
  },

  // ------------------------------------------------------------------ PM13
  {
    id: "iv-50",
    text: "Three points are chosen uniformly and independently on a circle. What is the probability (as a percentage) that all three lie on the same semicircle?",
    answer: 75,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Fix the first point. The semicircle starting from this point captures the other two if they both land within 180° clockwise.\n\nFor n points: P(all on a semicircle) = n / 2^(n−1).\n\nFor n = 3: P = 3/4 = 75%.\n\nProof: For each of the 3 points, consider the semicircle starting clockwise from it. These 3 events cover all configurations where the points fit on a semicircle, and they're almost-disjoint (overlap only when two points are exactly opposite, probability 0).\n\nEach event has probability (1/2)² = 1/4, so P = 3 × 1/4 = 3/4.",
    category: "Geometric probability",
    technique: "Union bound / symmetry"
  },

  // ------------------------------------------------------------------ PM14
  {
    id: "iv-51",
    text: "X takes values 1, 3, 5, 7 with probabilities 0.2, 0.3, 0.4, 0.1 respectively. What is Var(X)?",
    answer: 3.36,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "E[X] = 0.2×1 + 0.3×3 + 0.4×5 + 0.1×7 = 0.2 + 0.9 + 2.0 + 0.7 = 3.8\n\nE[X²] = 0.2×1 + 0.3×9 + 0.4×25 + 0.1×49 = 0.2 + 2.7 + 10.0 + 4.9 = 17.8\n\nVar(X) = E[X²] − (E[X])² = 17.8 − 14.44 = 3.36.",
    category: "Statistics",
    technique: "Variance formula"
  },

  // ------------------------------------------------------------------ PM15
  {
    id: "iv-52",
    text: "How many distinct rearrangements of the letters in MISSISSIPPI are there?",
    answer: 34650,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2).\n\nNumber of distinct arrangements = 11! / (1!·4!·4!·2!)\n= 39,916,800 / (1 × 24 × 24 × 2)\n= 39,916,800 / 1,152\n= 34,650.\n\nMemorable: 11!/(4!4!2!) = 34650.",
    category: "Combinatorics",
    technique: "Multinomial coefficient"
  },

  // ------------------------------------------------------------------ PM16
  {
    id: "iv-53",
    text: "How many ways can you tile a 2×10 rectangle using 2×1 dominoes?",
    answer: 89,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Let f(n) = number of tilings of a 2×n rectangle.\nf(1) = 1 (one vertical domino)\nf(2) = 2 (two vertical or two horizontal)\nRecurrence: f(n) = f(n−1) + f(n−2) (Fibonacci!)\n\nf(3)=3, f(4)=5, f(5)=8, f(6)=13, f(7)=21, f(8)=34, f(9)=55, f(10)=89.\n\nThis is F(11) in the standard Fibonacci sequence (F(1)=1, F(2)=1, …).",
    category: "Combinatorics",
    technique: "Fibonacci recurrence"
  },

  // ------------------------------------------------------------------ PM17
  {
    id: "iv-54",
    text: "You draw two cards from a standard 52-card deck without replacement. Given that at least one is a heart, what is the probability (as a percentage) that both are hearts?",
    answer: 13.3,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "P(both hearts | ≥1 heart) = P(both hearts) / P(≥1 heart)\n\nP(both hearts) = C(13,2)/C(52,2) = 78/1326\nP(no hearts) = C(39,2)/C(52,2) = 741/1326\nP(≥1 heart) = 1 − 741/1326 = 585/1326\n\nP = 78/585 = 2/15 ≈ 0.1333 = 13.3%\n\nCommon error: confusing this with P(second is heart | first is heart) = 12/51.",
    category: "Probability",
    technique: "Conditional probability"
  },

  // ------------------------------------------------------------------ PM18
  {
    id: "iv-55",
    text: "You roll a fair die. You may keep the result as your payoff (in $), or pay $1 to re-roll once and must keep the second result. What is the optimal expected payoff?",
    answer: 3.83,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Re-rolling costs $1. Expected payoff of a re-roll: E[roll] − 1 = 3.5 − 1 = 2.5.\n\nOptimal strategy: re-roll if current roll ≤ 2 (since 1 < 2.5 and 2 < 2.5, but 3 > 2.5).\n\nE[payoff] = P(roll ≤ 2) × 2.5 + P(roll = 3)×3 + P(4)×4 + P(5)×5 + P(6)×6\n= (2/6)×2.5 + (1/6)(3+4+5+6)\n= 5/6 + 18/6\n= 23/6 ≈ 3.833.",
    category: "Expected value",
    technique: "Optimal stopping / threshold strategy"
  },

  // ------------------------------------------------------------------ PM19
  {
    id: "iv-56",
    text: "A frog is on pad 1. Each second, from pad 1 it jumps to pad 2 with probability 1/2 (or stays). From pad 2 it reaches pad 3 with probability 1/3 (or returns to pad 1). What is the expected time to reach pad 3?",
    answer: 9,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Let E₁ = expected time from pad 1, E₂ = from pad 2.\n\nE₂ = 1 + (2/3)E₁  (1/3 chance done, 2/3 back to pad 1)\nE₁ = 1 + (1/2)E₂ + (1/2)E₁  (1/2 to pad 2, 1/2 stay)\n\nFrom E₁: (1/2)E₁ = 1 + (1/2)E₂ → E₁ = 2 + E₂\nSubstitute: E₂ = 1 + (2/3)(2 + E₂) = 7/3 + (2/3)E₂\n(1/3)E₂ = 7/3 → E₂ = 7\nE₁ = 2 + 7 = 9.",
    category: "Expected value",
    technique: "Markov chain / first-step analysis"
  },

  // ------------------------------------------------------------------ PM20
  {
    id: "iv-57",
    text: "A stick of length 1 is broken at a uniformly random point. What is the probability (as a percentage) that the longer piece is more than 3 times the shorter piece?",
    answer: 50,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Let the break point be X ~ Uniform[0,1].\nShorter piece = min(X, 1−X), longer = max(X, 1−X).\n\nRatio > 3 ↔ longer > 3 × shorter.\nIf X < 1/2: (1−X)/X > 3 → 1 > 4X → X < 1/4.\nBy symmetry, also X > 3/4.\n\nP = P(X < 1/4) + P(X > 3/4) = 1/4 + 1/4 = 1/2 = 50%.\n\nGeneralizing: P(ratio > r) = 2/(r+1) for r ≥ 1.",
    category: "Geometric probability",
    technique: "Uniform variable analysis"
  },

  // ------------------------------------------------------------------ PM21
  {
    id: "iv-58",
    text: "10 distinguishable balls are thrown independently into 5 distinguishable bins (each bin equally likely). What is the expected number of empty bins?",
    answer: 0.54,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "By linearity of expectation:\nE[empty bins] = 5 × P(a given bin is empty) = 5 × (4/5)^10\n\n(4/5)^10 = (0.8)^10:\n0.8² = 0.64\n0.8⁴ = 0.4096\n0.8⁸ = 0.1678\n0.8^10 = 0.1678 × 0.64 = 0.1074\n\nE = 5 × 0.1074 = 0.537 ≈ 0.54.\n\nWith 10 balls in 5 bins, it's unlikely any bin is empty, but not impossible.",
    category: "Expected value",
    technique: "Linearity of expectation"
  },

  // ------------------------------------------------------------------ PM22
  {
    id: "iv-59",
    text: "X and Y are independent standard normal random variables. What is E[|X − Y|]?",
    answer: 1.13,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "X − Y ~ N(0, 2) since Var(X−Y) = Var(X) + Var(Y) = 2.\n\nSo X − Y = √2 · Z where Z ~ N(0,1).\n\nE[|Z|] = √(2/π) (standard result for half-normal).\n\nE[|X−Y|] = √2 × √(2/π) = 2/√π = 2/1.7725 ≈ 1.128 ≈ 1.13.\n\nKey formula: for W ~ N(0, σ²), E[|W|] = σ√(2/π).",
    category: "Expected value",
    technique: "Half-normal distribution"
  },

  // ------------------------------------------------------------------ PM23
  {
    id: "iv-60",
    text: "There are 12 distinct types of trading cards. Each pack gives one random card uniformly. What is the expected number of packs to collect all 12 types?",
    answer: 37.2,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Coupon collector: E = n × H(n) = 12 × H(12)\n\nH(12) = 1 + 1/2 + 1/3 + … + 1/12\n= 1 + 0.5 + 0.333 + 0.25 + 0.2 + 0.167 + 0.143 + 0.125 + 0.111 + 0.1 + 0.091 + 0.083\n= 3.103\n\nE = 12 × 3.103 = 37.24 ≈ 37.2.\n\nAlternatively: after collecting k types, expected draws for (k+1)th = 12/(12−k).\nE = 12/12 + 12/11 + 12/10 + … + 12/1 = 12·H(12).",
    category: "Expected value",
    technique: "Coupon collector problem"
  },

  // ------------------------------------------------------------------ PM24
  {
    id: "iv-61",
    text: "From a standard 52-card deck, 5 cards are drawn. What is the probability (as a percentage) of a full house?",
    answer: 0.144,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Full house = three of one rank + two of another.\n\nP = [C(13,1)·C(4,3)·C(12,1)·C(4,2)] / C(52,5)\n= [13 × 4 × 12 × 6] / 2,598,960\n= 3,744 / 2,598,960\n= 0.001441\n= 0.144%\n\nCommon poker hand probabilities to know:\nPair ≈ 42.3%, Two pair ≈ 4.75%, Three of a kind ≈ 2.1%, Full house ≈ 0.144%, Four of a kind ≈ 0.024%.",
    category: "Combinatorics",
    technique: "Poker hand counting"
  },

  // ------------------------------------------------------------------ PM25
  {
    id: "iv-62",
    text: "How many non-negative integer solutions does x₁ + x₂ + x₃ + x₄ = 15 have?",
    answer: 816,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Stars and bars: C(n+k−1, k−1) where n = 15 (stars) and k = 4 (bins).\n\nC(15+4−1, 4−1) = C(18, 3) = 18×17×16 / (3×2×1) = 4896/6 = 816.\n\nAlternatively: think of placing 3 dividers among 15+3 = 18 positions.",
    category: "Combinatorics",
    technique: "Stars and bars"
  },

  // ------------------------------------------------------------------ PM26
  {
    id: "iv-63",
    text: "X has E[X]=5 and E[X²]=30. Y has E[Y]=3 and E[Y²]=15. If X and Y are independent, what is Var(XY)?",
    answer: 225,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Var(XY) = E[(XY)²] − (E[XY])²\n\nBy independence:\nE[(XY)²] = E[X²]·E[Y²] = 30 × 15 = 450\nE[XY] = E[X]·E[Y] = 5 × 3 = 15\n(E[XY])² = 225\n\nVar(XY) = 450 − 225 = 225.\n\nNote: Var(X) = 30−25 = 5, Var(Y) = 15−9 = 6.\nGeneral formula: Var(XY) = Var(X)Var(Y) + Var(X)(EY)² + (EX)²Var(Y) = 30+45+150 = 225 ✓.",
    category: "Statistics",
    technique: "Variance of product of independent RVs"
  },

  // ------------------------------------------------------------------ PM27
  {
    id: "iv-64",
    text: "How many trailing zeros does 100! have?",
    answer: 24,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Trailing zeros come from factors of 10 = 2×5. Factors of 2 are more plentiful, so count factors of 5.\n\n⌊100/5⌋ + ⌊100/25⌋ + ⌊100/125⌋ + …\n= 20 + 4 + 0\n= 24\n\nThe 20 multiples of 5 each contribute one factor of 5.\nThe 4 multiples of 25 (25, 50, 75, 100) contribute an extra factor each.\n125 > 100, so we stop.",
    category: "Number theory",
    technique: "Legendre's formula"
  },

  // ------------------------------------------------------------------ PM28
  {
    id: "iv-65",
    text: "An urn has 3 red and 7 blue balls. Balls are drawn one at a time without replacement. What is the probability (as a percentage) that the first red ball appears on the 4th draw?",
    answer: 12.5,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "P(first 3 blue, 4th red):\n= (7/10) × (6/9) × (5/8) × (3/7)\n= (7×6×5×3) / (10×9×8×7)\n= 630 / 5040\n= 1/8\n= 12.5%\n\nNotice: the 7s cancel, leaving (6×5×3)/(10×9×8) = 90/720 = 1/8.",
    category: "Probability",
    technique: "Sequential conditional probability"
  },

  // ------------------------------------------------------------------ PM29
  {
    id: "iv-66",
    text: "What is F(1)² + F(2)² + F(3)² + … + F(10)², where F(n) is the nth Fibonacci number (F(1)=1, F(2)=1, F(3)=2, …)?",
    answer: 4895,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8, F(7)=13, F(8)=21, F(9)=34, F(10)=55\n\nSquares: 1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025\n\nSum = 1+1+4+9+25+64+169+441+1156+3025 = 4895\n\nShortcut identity: Σ(k=1..n) F(k)² = F(n)·F(n+1)\n= F(10)·F(11) = 55 × 89 = 4895. ✓",
    category: "Number theory",
    technique: "Fibonacci identity"
  },

  // ------------------------------------------------------------------ PM30
  {
    id: "iv-67",
    text: "You roll two fair dice. What is E[min(die₁, die₂)]?",
    answer: 2.53,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "E[min] = Σ(k=1..6) P(min ≥ k) = Σ(k=1..6) ((7−k)/6)²\n\n= (6²+5²+4²+3²+2²+1²) / 36\n= (36+25+16+9+4+1) / 36\n= 91/36 ≈ 2.528\n\nAlternatively: E[max] + E[min] = E[die₁] + E[die₂] = 7.\nE[max of 2 dice] = 161/36 ≈ 4.472.\nE[min] = 7 − 161/36 = 252/36 − 161/36 = 91/36 ≈ 2.528.",
    category: "Expected value",
    technique: "Tail-sum formula for expectation"
  },

  // ------------------------------------------------------------------ PM31
  {
    id: "iv-68",
    text: "A fair coin is flipped until the pattern HHH (three heads in a row) first appears. What is the expected number of flips?",
    answer: 14,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "States: S₀ (no streak), S₁ (one H), S₂ (two H's).\n\nE₀ = 1 + ½E₁ + ½E₀\nE₁ = 1 + ½E₂ + ½E₀\nE₂ = 1 + ½·0 + ½E₀  (HHH = done)\n\nFrom E₀: ½E₀ = 1 + ½E₁ → E₀ = 2 + E₁\nFrom E₂: E₂ = 1 + ½E₀\nFrom E₁: E₁ = 1 + ½(1 + ½E₀) + ½E₀ = 3/2 + ¾E₀\n\nE₀ = 2 + 3/2 + ¾E₀ = 7/2 + ¾E₀\n¼E₀ = 7/2 → E₀ = 14.",
    category: "Expected value",
    technique: "Markov chain / pattern waiting time"
  },

  // ------------------------------------------------------------------ PM32
  {
    id: "iv-69",
    text: "In an election, candidate A gets 60 votes and candidate B gets 40 votes. What is the probability (as a percentage) that A is strictly ahead throughout the entire counting?",
    answer: 20,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Ballot problem: P(A strictly ahead throughout) = (a−b)/(a+b)\n= (60−40)/(60+40) = 20/100 = 20%.\n\nThis is the ballot theorem (Bertrand, 1887). The reflection principle provides the proof:\nOf all (a+b)!/(a!b!) orderings, exactly (a−b)/(a+b) of them have A strictly ahead at every step.",
    category: "Combinatorics",
    technique: "Ballot theorem"
  },

  // ------------------------------------------------------------------ PM33
  {
    id: "iv-70",
    text: "You roll two fair dice and multiply the results. If the sum equals 7, you win $50 instead. What is your expected payoff?",
    answer: 19.03,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "P(sum=7) = 6/36 = 1/6.\n\nSum-7 outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1).\nTheir products: 6, 10, 12, 12, 10, 6. Sum of products = 56.\n\nE[product of two dice] = E[D₁]·E[D₂] = 3.5² = 12.25.\nTotal product over 36 outcomes = 36 × 12.25 = 441.\n\nE[product | sum≠7] = (441 − 56)/30 = 385/30 = 12.833.\n\nE[payoff] = (1/6)×50 + (5/6)×12.833 = 8.333 + 10.694 = 19.03.",
    category: "Expected value",
    technique: "Conditional expectation"
  },

  // ------------------------------------------------------------------ PM34
  {
    id: "iv-71",
    text: "A box has 6 red and 4 blue balls. You draw without replacement until you get 3 red balls. What is the expected number of draws?",
    answer: 4.71,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Negative hypergeometric distribution.\n\nE[draws to get k successes from N total with K successes] = k(N+1)/(K+1).\n\nHere k=3 (need 3 red), N=10 (total), K=6 (red):\nE = 3 × 11 / 7 = 33/7 ≈ 4.714.\n\nIntuition: on average, you need about 4.7 draws to see 3 of the 6 reds among 10 balls.\nLowest possible: 3 (draw 3 reds immediately).\nHighest possible: 7 (draw all 4 blues + 3 reds).",
    category: "Expected value",
    technique: "Negative hypergeometric distribution"
  },

  // ------------------------------------------------------------------ PM35
  {
    id: "iv-72",
    text: "What is the expected number of rolls of a fair die to see all six faces at least once?",
    answer: 14.7,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Coupon collector with n=6:\nE = 6·H(6) = 6·(1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6)\n= 6·(60/60 + 30/60 + 20/60 + 15/60 + 12/60 + 10/60)\n= 6 × 147/60\n= 6 × 2.45\n= 14.7.\n\nBreakdown: 1st new face: 1 roll, 2nd: 6/5=1.2, 3rd: 6/4=1.5, 4th: 2, 5th: 3, 6th: 6.\nTotal: 1+1.2+1.5+2+3+6 = 14.7.",
    category: "Expected value",
    technique: "Coupon collector"
  },

  // ------------------------------------------------------------------ PM36
  {
    id: "iv-73",
    text: "In how many ways can 8 non-attacking rooks be placed on an 8×8 chessboard?",
    answer: 40320,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Each rook must be in a distinct row and a distinct column.\n\nPlace a rook in row 1: 8 column choices.\nRow 2: 7 remaining columns.\n…\nRow 8: 1 column.\n\nTotal = 8! = 40,320.\n\nThis is equivalent to counting permutations of {1,…,8}.",
    category: "Combinatorics",
    technique: "Permutation counting"
  },

  // ------------------------------------------------------------------ PM37
  {
    id: "iv-74",
    text: "Two points are chosen uniformly at random on a segment of length 10. What is the expected distance between them?",
    answer: 3.33,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "For two uniform points on [0, L], E[|X−Y|] = L/3.\n\nE = 10/3 ≈ 3.333.\n\nProof: E[|X−Y|] = ∫₀ᴸ ∫₀ᴸ |x−y|/(L²) dx dy\n= 2/L² × ∫₀ᴸ ∫₀ˣ (x−y) dy dx\n= 2/L² × ∫₀ᴸ x²/2 dx\n= 2/L² × L³/6 = L/3.",
    category: "Expected value",
    technique: "Double integration"
  },

  // ------------------------------------------------------------------ PM38
  {
    id: "iv-75",
    text: "A biased coin has P(H) = 2/3. What is the probability (as a percentage) that in 5 flips, heads appears more often than tails?",
    answer: 79.0,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Heads more than tails ↔ at least 3 heads out of 5.\n\nP(X≥3) = P(3) + P(4) + P(5) where X ~ Binomial(5, 2/3).\n\nP(3) = C(5,3)(2/3)³(1/3)² = 10 × 8/243 × 1/9... \nWait: (2/3)³ = 8/27, (1/3)² = 1/9.\nP(3) = 10 × 8/27 × 1/9 = 80/243\n\nP(4) = C(5,4)(2/3)⁴(1/3)¹ = 5 × 16/81 × 1/3 = 80/243\n\nP(5) = C(5,5)(2/3)⁵ = 32/243\n\nP(≥3) = (80+80+32)/243 = 192/243 = 64/81 ≈ 0.7901 = 79.0%.",
    category: "Probability",
    technique: "Binomial distribution"
  },

  // ------------------------------------------------------------------ PM39
  {
    id: "iv-76",
    text: "How many 7-digit numbers (each digit 0–9) have their digits in non-decreasing order?",
    answer: 11440,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Choosing 7 digits in non-decreasing order from {0,...,9} is equivalent to a multiset of size 7 from 10 elements.\n\nCount = C(10+7−1, 7) = C(16, 7).\n\nC(16,7) = 16!/(7!·9!) = (16×15×14×13×12×11×10)/(7×6×5×4×3×2×1)\n= 57,657,600 / 5,040 = 11,440.\n\nNote: this includes numbers starting with 0 (like 0001234), which are technically not 7-digit numbers, but the problem as stated allows any 7 digits 0-9.",
    category: "Combinatorics",
    technique: "Stars and bars / multiset"
  },

  // ------------------------------------------------------------------ PM40
  {
    id: "iv-77",
    text: "You have a fair coin. What is the expected number of flips to get two consecutive heads (HH)?",
    answer: 6,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "States: S₀ (start/just got T), S₁ (just got H).\n\nE₀ = 1 + ½E₁ + ½E₀\nE₁ = 1 + ½·0 + ½E₀  (HH = done, HT → back to S₀)\n\nFrom E₀: ½E₀ = 1 + ½E₁ → E₀ = 2 + E₁\nE₁ = 1 + ½E₀\n\nE₀ = 2 + 1 + ½E₀ = 3 + ½E₀\n½E₀ = 3 → E₀ = 6.\n\nCompare with HHH: E = 14 (PM31). Each additional consecutive head roughly doubles the wait.",
    category: "Expected value",
    technique: "Markov chain states"
  },

  // ------------------------------------------------------------------ PM41
  {
    id: "iv-78",
    text: "A committee of 5 is chosen from 6 men and 4 women. What is the probability (as a percentage) that the committee has at least 2 women?",
    answer: 73.8,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Total committees: C(10,5) = 252.\n\nComplement — count committees with 0 or 1 woman:\nP(0 women) = C(6,5)·C(4,0)/252 = 6/252\nP(1 woman) = C(6,4)·C(4,1)/252 = 15×4/252 = 60/252\n\nP(≤1 woman) = 66/252 = 11/42 ≈ 0.2619\nP(≥2 women) = 1 − 66/252 = 186/252 = 31/42 ≈ 73.8%.",
    category: "Combinatorics",
    technique: "Complementary counting"
  },

  // ------------------------------------------------------------------ PM42
  {
    id: "iv-79",
    text: "What is the sum of all divisors of 360? (Include 1 and 360 itself.)",
    answer: 1170,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "360 = 2³ × 3² × 5¹\n\nσ(n) = ∏ (pᵏ⁺¹ − 1)/(p − 1) for each prime power in the factorization.\n\nσ(360) = (2⁴−1)/(2−1) × (3³−1)/(3−1) × (5²−1)/(5−1)\n= 15/1 × 26/2 × 24/4\n= 15 × 13 × 6\n= 1170.\n\nAlternatively: 360 has 24 divisors (= 4×3×2). Listing them all and summing works but is slower.",
    category: "Number theory",
    technique: "Divisor sum formula"
  },

  // ------------------------------------------------------------------ PM43
  {
    id: "iv-80",
    text: "A fair die is rolled 4 times. What is the probability (as a percentage) that the results are in strictly increasing order?",
    answer: 1.16,
    unit: "%",
    visualType: "none",
    imageSrc: null,
    note: "Choose 4 distinct values from {1,...,6}: C(6,4) = 15 ways.\nEach set of 4 distinct values has exactly one increasing arrangement.\n\nTotal outcomes: 6⁴ = 1296.\n\nP = C(6,4)/6⁴ = 15/1296 = 5/432 ≈ 0.01157 = 1.16%.",
    category: "Probability",
    technique: "Ordered selection"
  },

  // ------------------------------------------------------------------ PM44
  {
    id: "iv-81",
    text: "How many positive integers less than 1000 have digits that sum to exactly 10?",
    answer: 63,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "Count solutions to d₁ + d₂ + d₃ = 10 where d₁ ∈ {0,...,9}, same for d₂, d₃.\n(Leading zeros are fine since we include 1- and 2-digit numbers as 3-digit with leading zeros.)\n\nWithout upper bound: C(12,2) = 66 solutions (stars & bars).\n\nSubtract cases where some dᵢ ≥ 10:\nIf d₁ ≥ 10: let d₁' = d₁−10, then d₁'+d₂+d₃ = 0 → only (10,0,0). 3 such cases.\n\nBy inclusion-exclusion: 66 − 3 = 63.\n\n(No case has two digits ≥ 10 since that would require sum ≥ 20 > 10.)",
    category: "Combinatorics",
    technique: "Stars and bars with upper bounds"
  },

  // ------------------------------------------------------------------ PM45
  {
    id: "iv-82",
    text: "What is √(2^40) divided by 2^10? Give an exact integer.",
    answer: 1024,
    unit: "",
    visualType: "none",
    imageSrc: null,
    note: "√(2^40) = 2^20\n\n2^20 / 2^10 = 2^10 = 1024.\n\nAlternatively: √(2^40) / 2^10 = 2^(40/2) / 2^10 = 2^20 / 2^10 = 2^(20−10) = 2^10 = 1024.",
    category: "Mental arithmetic",
    technique: "Exponent rules"
  }

];

// Merge into main question bank
QUESTIONS = QUESTIONS.concat(QUESTIONS_EXTRA);
