var QUESTIONS_DIFFICULTY = [
  // ====================== MEDIUM DIFFICULTY (seq-m01 to seq-m50) ======================

  // --- Alternating Operations ---
  {
    id: "seq-m01", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["3", "6", "5", "10", "9", "18", "?"],
    options: ["17", "36", "15", "20"], answer: 0,
    note: "Alternating ×2 and −1. 3×2=6, 6−1=5, 5×2=10, 10−1=9, 9×2=18, 18−1=17."
  },
  {
    id: "seq-m02", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["5", "3", "15", "13", "65", "63", "?"],
    options: ["315", "126", "61", "189"], answer: 0,
    note: "Alternating −2 and ×5. 5−2=3, 3×5=15, 15−2=13, 13×5=65, 65−2=63, 63×5=315."
  },
  {
    id: "seq-m03", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["2", "6", "7", "21", "22", "66", "?"],
    options: ["67", "132", "65", "198"], answer: 0,
    note: "Alternating ×3 and +1. 2×3=6, 6+1=7, 7×3=21, 21+1=22, 22×3=66, 66+1=67."
  },
  {
    id: "seq-m04", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["80", "40", "50", "25", "35", "17½", "?"],
    options: ["27½", "12½", "22½", "35"], answer: 0,
    note: "Alternating ÷2 and +10. 80÷2=40, 40+10=50, 50÷2=25, 25+10=35, 35÷2=17½, 17½+10=27½."
  },
  {
    id: "seq-m05", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["6", "10", "5", "9", "4½", "8½", "?"],
    options: ["4¼", "12½", "6½", "2¼"], answer: 0,
    note: "Alternating +4 and ÷2. 6+4=10, 10÷2=5, 5+4=9, 9÷2=4½, 4½+4=8½, 8½÷2=4¼."
  },
  {
    id: "seq-m06", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["10", "20", "13", "26", "19", "38", "?"],
    options: ["31", "76", "24", "45"], answer: 0,
    note: "Alternating ×2 and −7. 10×2=20, 20−7=13, 13×2=26, 26−7=19, 19×2=38, 38−7=31."
  },
  {
    id: "seq-m07", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["1", "4", "8", "11", "22", "25", "?"],
    options: ["50", "28", "75", "30"], answer: 0,
    note: "Alternating +3 and ×2. 1+3=4, 4×2=8, 8+3=11, 11×2=22, 22+3=25, 25×2=50."
  },

  // --- Cyclic Operations ---
  {
    id: "seq-m08", difficulty: "medium", pattern: "cyclic-ops",
    sequence: ["4", "8", "11", "10", "20", "23", "?"],
    options: ["22", "46", "20", "26"], answer: 0,
    note: "3-cycle: ×2, +3, −1. 4×2=8, 8+3=11, 11−1=10, 10×2=20, 20+3=23, 23−1=22."
  },
  {
    id: "seq-m09", difficulty: "medium", pattern: "cyclic-ops",
    sequence: ["5", "6", "12", "9", "10", "20", "?"],
    options: ["17", "40", "14", "23"], answer: 0,
    note: "3-cycle: +1, ×2, −3. 5+1=6, 6×2=12, 12−3=9, 9+1=10, 10×2=20, 20−3=17."
  },
  {
    id: "seq-m10", difficulty: "medium", pattern: "cyclic-ops",
    sequence: ["1", "2", "4", "7", "14", "15", "30", "?"],
    options: ["33", "60", "31", "45"], answer: 0,
    note: "4-cycle: +1, ×2, +3, ×2. 1+1=2, 2×2=4, 4+3=7, 7×2=14, 14+1=15, 15×2=30, 30+3=33."
  },
  {
    id: "seq-m11", difficulty: "medium", pattern: "cyclic-ops",
    sequence: ["2", "6", "1", "3", "9", "4", "?"],
    options: ["6", "12", "8", "10"], answer: 0,
    note: "3-cycle: ×3, −5, +2. 2×3=6, 6−5=1, 1+2=3, 3×3=9, 9−5=4, 4+2=6."
  },
  {
    id: "seq-m12", difficulty: "medium", pattern: "cyclic-ops",
    sequence: ["1", "3", "9", "4", "6", "18", "?"],
    options: ["13", "36", "11", "23"], answer: 0,
    note: "3-cycle: +2, ×3, −5. 1+2=3, 3×3=9, 9−5=4, 4+2=6, 6×3=18, 18−5=13."
  },

  // --- Interleaved Sequences ---
  {
    id: "seq-m13", difficulty: "medium", pattern: "interleaved",
    sequence: ["1", "4", "9", "8", "25", "12", "?"],
    options: ["49", "16", "36", "64"], answer: 0,
    note: "Interleaved. Odd positions: 1², 3², 5², 7² = 1, 9, 25, 49. Even positions: 4, 8, 12 (+4)."
  },
  {
    id: "seq-m14", difficulty: "medium", pattern: "interleaved",
    sequence: ["2", "3", "5", "4", "9", "25", "?"],
    options: ["8", "27", "125", "10"], answer: 0,
    note: "Three interleaved sub-sequences. Pos 1,4: 2, 4 (×2). Pos 2,5: 3, 9 (×3). Pos 3,6: 5, 25 (×5). Next (pos 7) = 4×2 = 8."
  },
  {
    id: "seq-m15", difficulty: "medium", pattern: "interleaved",
    sequence: ["2", "1", "3", "2", "5", "6", "7", "24", "?"],
    options: ["11", "120", "9", "30"], answer: 0,
    note: "Interleaved. Odd positions: 2, 3, 5, 7, 11 (primes). Even positions: 1, 2, 6, 24, 120 (factorials: 0!, 1!, 2!, 3!, 4!... wait). Actually even: 1!=1, 2!=2, 3!=6, 4!=24. Next odd = 11."
  },
  {
    id: "seq-m16", difficulty: "medium", pattern: "interleaved",
    sequence: ["50", "1", "45", "3", "35", "6", "?"],
    options: ["20", "10", "25", "15"], answer: 0,
    note: "Interleaved. Odd positions: 50, 45, 35, 20 (diffs −5, −10, −15). Even positions: 1, 3, 6 (triangular numbers)."
  },
  {
    id: "seq-m17", difficulty: "medium", pattern: "interleaved",
    sequence: ["2", "1", "4", "4", "8", "9", "?"],
    options: ["16", "25", "12", "20"], answer: 0,
    note: "Interleaved. Odd positions: 2, 4, 8, 16 (×2, powers of 2). Even positions: 1, 4, 9 (1², 2², 3²)."
  },

  // --- Recurrences ---
  {
    id: "seq-m18", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["1", "2", "5", "14", "41", "?"],
    options: ["122", "120", "125", "82"], answer: 0,
    note: "a(n) = 3·a(n−1) − 1. 3×1−1=2, 3×2−1=5, 3×5−1=14, 3×14−1=41, 3×41−1=122."
  },
  {
    id: "seq-m19", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["1", "1", "3", "5", "11", "21", "?"],
    options: ["43", "39", "53", "35"], answer: 0,
    note: "a(n) = a(n−1) + 2·a(n−2). 1+2=3, 1+2×1=3, 3+2×1=5, 5+2×3=11, 11+2×5=21, 21+2×11=43."
  },
  {
    id: "seq-m20", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["1", "1", "1", "2", "3", "4", "6", "?"],
    options: ["9", "8", "10", "7"], answer: 0,
    note: "a(n) = a(n−1) + a(n−3). 1+1=2, 1+1=... a(4)=a(3)+a(1)=1+1=2, a(5)=a(4)+a(2)=2+1=3, a(6)=a(5)+a(3)=3+1=4, a(7)=a(6)+a(4)=4+2=6, a(8)=a(7)+a(5)=6+3=9."
  },
  {
    id: "seq-m21", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["1", "1", "2", "4", "7", "13", "?"],
    options: ["24", "20", "26", "18"], answer: 0,
    note: "a(n) = a(n−1) + a(n−2) + a(n−3). 1+1+2=4, 2+4+1=7, 4+7+2=13, 7+13+4=24."
  },
  {
    id: "seq-m22", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["2", "5", "4", "7", "6", "9", "?"],
    options: ["8", "10", "12", "7"], answer: 0,
    note: "a(n) = a(n−1) + a(n−2) − a(n−3). 4+5−2=7, 7+4−5=6, 6+7−4=9, 9+6−7=8."
  },

  // --- Difference Patterns ---
  {
    id: "seq-m23", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["1", "4", "10", "19", "31", "46", "?"],
    options: ["64", "58", "70", "55"], answer: 0,
    note: "Differences increase by 3: 3, 6, 9, 12, 15, 18. Next: 46+18=64."
  },
  {
    id: "seq-m24", difficulty: "medium", pattern: "famous-diff",
    sequence: ["2", "3", "6", "12", "22", "37", "?"],
    options: ["58", "52", "64", "47"], answer: 0,
    note: "Differences are triangular numbers: 1, 3, 6, 10, 15, 21. Next: 37+21=58."
  },
  {
    id: "seq-m25", difficulty: "medium", pattern: "famous-diff",
    sequence: ["1", "5", "14", "30", "55", "?"],
    options: ["91", "80", "85", "100"], answer: 0,
    note: "Differences are consecutive squares: 4, 9, 16, 25, 36. Next: 55+36=91."
  },
  {
    id: "seq-m26", difficulty: "medium", pattern: "geometric-diff",
    sequence: ["3", "4", "7", "16", "43", "?"],
    options: ["124", "100", "130", "86"], answer: 0,
    note: "Differences triple: 1, 3, 9, 27, 81. Next: 43+81=124."
  },
  {
    id: "seq-m27", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["1", "3", "10", "25", "51", "91", "?"],
    options: ["148", "140", "155", "131"], answer: 0,
    note: "2nd differences increase by 3: Δ = 2, 7, 15, 26, 40. Δ² = 5, 8, 11, 14 (+3). Next Δ² = 17, Δ = 57, term = 91+57=148."
  },
  {
    id: "seq-m28", difficulty: "medium", pattern: "famous-diff",
    sequence: ["1", "3", "6", "11", "18", "29", "?"],
    options: ["42", "36", "48", "31"], answer: 0,
    note: "Differences are consecutive primes: 2, 3, 5, 7, 11, 13. Next: 29+13=42."
  },
  {
    id: "seq-m29", difficulty: "medium", pattern: "geometric-diff",
    sequence: ["0", "1", "4", "13", "40", "?"],
    options: ["121", "108", "130", "94"], answer: 0,
    note: "Differences are powers of 3: 1, 3, 9, 27, 81. Next: 40+81=121."
  },

  // --- Formula / Polynomial Sequences ---
  {
    id: "seq-m30", difficulty: "medium", pattern: "famous-diff",
    sequence: ["1", "4", "10", "20", "35", "56", "?"],
    options: ["84", "78", "90", "72"], answer: 0,
    note: "Tetrahedral numbers C(n+2,3) = n(n+1)(n+2)/6 for n=1..7. Diffs are triangular: 3, 6, 10, 15, 21, 28."
  },
  {
    id: "seq-m31", difficulty: "medium", pattern: "power-pattern",
    sequence: ["1", "2", "5", "12", "27", "58", "?"],
    options: ["121", "116", "128", "109"], answer: 0,
    note: "2ⁿ − n: 2¹−1=1, 2²−2=2, 2³−3=5, 2⁴−4=12, 2⁵−5=27, 2⁶−6=58, 2⁷−7=121."
  },
  {
    id: "seq-m32", difficulty: "medium", pattern: "famous-diff",
    sequence: ["2", "12", "30", "56", "90", "?"],
    options: ["132", "110", "120", "144"], answer: 0,
    note: "Products of consecutive odd×even: 1×2=2, 3×4=12, 5×6=30, 7×8=56, 9×10=90, 11×12=132."
  },
  {
    id: "seq-m33", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["2", "5", "9", "14", "20", "27", "?"],
    options: ["35", "33", "38", "30"], answer: 0,
    note: "n(n+3)/2: differences are 3, 4, 5, 6, 7, 8. Constant 2nd difference of 1. Next: 27+8=35."
  },
  {
    id: "seq-m34", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["1", "6", "15", "28", "45", "66", "?"],
    options: ["91", "85", "96", "78"], answer: 0,
    note: "Hexagonal numbers n(2n−1). Differences increase by 4: 5, 9, 13, 17, 21, 25. Next: 66+25=91."
  },
  {
    id: "seq-m35", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["1", "5", "12", "22", "35", "51", "?"],
    options: ["70", "65", "75", "60"], answer: 0,
    note: "Pentagonal numbers n(3n−1)/2. Differences increase by 3: 4, 7, 10, 13, 16, 19. Next: 51+19=70."
  },

  // --- Fractions ---
  {
    id: "seq-m36", difficulty: "medium", pattern: "fraction-chain",
    sequence: ["1/3", "2/5", "4/9", "8/17", "?"],
    options: ["16/33", "16/31", "8/33", "16/35"], answer: 0,
    note: "Numerators ×2: 1, 2, 4, 8, 16. Denominators: d(n) = 2·d(n−1) − 1: 3, 5, 9, 17, 33."
  },
  {
    id: "seq-m37", difficulty: "medium", pattern: "fraction-chain",
    sequence: ["1/2", "3/4", "7/8", "15/16", "?"],
    options: ["31/32", "16/17", "30/32", "29/32"], answer: 0,
    note: "(2ⁿ − 1)/2ⁿ: 1/2, 3/4, 7/8, 15/16, 31/32."
  },
  {
    id: "seq-m38", difficulty: "medium", pattern: "fraction-chain",
    sequence: ["2/3", "4/5", "6/7", "8/9", "?"],
    options: ["10/11", "10/13", "12/13", "8/11"], answer: 0,
    note: "Numerators +2 (evens), denominators +2 (odds). Next: 10/11."
  },

  // --- Geometric / Mixed ---
  {
    id: "seq-m39", difficulty: "medium", pattern: "geometric-diff",
    sequence: ["8", "12", "18", "27", "40½", "?"],
    options: ["60¾", "54", "48½", "81"], answer: 0,
    note: "Geometric ×3/2. 8×3/2=12, 12×3/2=18, 18×3/2=27, 27×3/2=40½, 40½×3/2=60¾."
  },
  {
    id: "seq-m40", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["1", "2", "6", "12", "36", "72", "?"],
    options: ["216", "144", "108", "288"], answer: 0,
    note: "Alternating ×2 and ×3. 1×2=2, 2×3=6, 6×2=12, 12×3=36, 36×2=72, 72×3=216."
  },
  {
    id: "seq-m41", difficulty: "medium", pattern: "geometric-diff",
    sequence: ["3", "4", "6", "10", "18", "34", "?"],
    options: ["66", "50", "58", "68"], answer: 0,
    note: "Differences double: 1, 2, 4, 8, 16, 32. Next: 34+32=66."
  },
  {
    id: "seq-m42", difficulty: "medium", pattern: "progressive-ops",
    sequence: ["1", "2", "4", "7", "28", "33", "?"],
    options: ["198", "38", "99", "264"], answer: 0,
    note: "Operations increase: +1, ×2, +3, ×4, +5, ×6. 1+1=2, 2×2=4, 4+3=7, 7×4=28, 28+5=33, 33×6=198."
  },
  {
    id: "seq-m43", difficulty: "medium", pattern: "alternating-ops",
    sequence: ["3", "6", "7", "14", "15", "30", "?"],
    options: ["31", "60", "45", "16"], answer: 0,
    note: "Alternating ×2 and +1. 3×2=6, 6+1=7, 7×2=14, 14+1=15, 15×2=30, 30+1=31."
  },
  {
    id: "seq-m44", difficulty: "medium", pattern: "interleaved",
    sequence: ["1", "1", "4", "8", "9", "27", "16", "?"],
    options: ["64", "25", "125", "36"], answer: 0,
    note: "Interleaved squares and cubes. Odd positions: 1², 2², 3², 4² = 1, 4, 9, 16. Even positions: 1³, 2³, 3³, 4³ = 1, 8, 27, 64."
  },
  {
    id: "seq-m45", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["2", "7", "17", "32", "52", "77", "?"],
    options: ["107", "102", "112", "97"], answer: 0,
    note: "Differences increase by 5: 5, 10, 15, 20, 25, 30. Next: 77+30=107."
  },
  {
    id: "seq-m46", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["2", "3", "4", "6", "9", "14", "?"],
    options: ["22", "20", "23", "18"], answer: 0,
    note: "a(n) = a(n−1) + a(n−2) − 1. 3+2−1=4, 4+3−1=6, 6+4−1=9, 9+6−1=14, 14+9−1=22."
  },
  {
    id: "seq-m47", difficulty: "medium", pattern: "interleaved",
    sequence: ["1", "1", "3", "4", "7", "9", "15", "?"],
    options: ["16", "31", "25", "12"], answer: 0,
    note: "Interleaved. Odd positions: 2ⁿ−1 = 1, 3, 7, 15. Even positions: n² = 1, 4, 9, 16."
  },
  {
    id: "seq-m48", difficulty: "medium", pattern: "linear-recurrence",
    sequence: ["1", "4", "11", "26", "57", "?"],
    options: ["120", "114", "108", "126"], answer: 0,
    note: "a(n) = 2·a(n−1) + n. 2×1+2=4, 2×4+3=11, 2×11+4=26, 2×26+5=57, 2×57+6=120."
  },
  {
    id: "seq-m49", difficulty: "medium", pattern: "interleaved",
    sequence: ["1", "2", "3", "5", "5", "8", "7", "?"],
    options: ["11", "9", "10", "13"], answer: 0,
    note: "Two interleaved arithmetic sequences. Odd positions: 1, 3, 5, 7 (+2). Even positions: 2, 5, 8, 11 (+3)."
  },
  {
    id: "seq-m50", difficulty: "medium", pattern: "arithmetic-2nd-diff",
    sequence: ["1", "7", "19", "37", "61", "91", "?"],
    options: ["127", "121", "133", "115"], answer: 0,
    note: "Differences increase by 6: 6, 12, 18, 24, 30, 36. Next: 91+36=127."
  },

  // ====================== HARD DIFFICULTY (seq-h01 to seq-h50) ======================

  // --- Deep Recurrences ---
  {
    id: "seq-h01", difficulty: "hard", pattern: "linear-recurrence",
    sequence: ["1", "1", "1", "1", "4", "7", "13", "25", "?"],
    options: ["49", "45", "52", "38"], answer: 0,
    note: "4-term sum: a(n) = a(n−1)+a(n−2)+a(n−3)+a(n−4). 1+1+1+1=4, 4+1+1+1=7, 7+4+1+1=13, 13+7+4+1=25, 25+13+7+4=49."
  },
  {
    id: "seq-h02", difficulty: "hard", pattern: "linear-recurrence",
    sequence: ["1", "3", "7", "17", "41", "99", "?"],
    options: ["239", "199", "241", "197"], answer: 0,
    note: "a(n) = 2·a(n−1) + a(n−2). 2×3+1=7, 2×7+3=17, 2×17+7=41, 2×41+17=99, 2×99+41=239."
  },
  {
    id: "seq-h03", difficulty: "hard", pattern: "progressive-ops",
    sequence: ["1", "1", "2", "7", "33", "?"],
    options: ["191", "165", "198", "130"], answer: 0,
    note: "a(n) = a(n−1)×n − a(n−2). a(3)=1×3−1=2, a(4)=2×4−1=7, a(5)=7×5−2=33, a(6)=33×6−7=191."
  },
  {
    id: "seq-h04", difficulty: "hard", pattern: "recursive-product",
    sequence: ["1", "1", "2", "3", "5", "11", "?"],
    options: ["26", "22", "33", "16"], answer: 0,
    note: "a(n) = a(n−1) + a(n−2)×a(n−3). a(4)=2+1×1=3, a(5)=3+2×1=5, a(6)=5+3×2=11, a(7)=11+5×3=26."
  },
  {
    id: "seq-h05", difficulty: "hard", pattern: "recursive-product",
    sequence: ["1", "1", "2", "3", "7", "16", "?"],
    options: ["65", "39", "48", "72"], answer: 0,
    note: "a(n) = a(n−1) + a(n−2)². a(3)=1+1²=2, a(4)=2+1²=3, a(5)=3+2²=7, a(6)=7+3²=16, a(7)=16+7²=65."
  },
  {
    id: "seq-h06", difficulty: "hard", pattern: "recursive-product",
    sequence: ["1", "2", "3", "5", "13", "62", "?"],
    options: ["801", "310", "620", "806"], answer: 0,
    note: "a(n) = a(n−1)×a(n−2) − a(n−3). a(4)=3×2−1=5, a(5)=5×3−2=13, a(6)=13×5−3=62, a(7)=62×13−5=801."
  },
  {
    id: "seq-h07", difficulty: "hard", pattern: "recursive-product",
    sequence: ["1", "1", "2", "3", "7", "22", "?"],
    options: ["155", "44", "154", "100"], answer: 0,
    note: "a(n) = a(n−1)×a(n−2) + 1. 1×1+1=2, 1×2+1=3, 2×3+1=7, 3×7+1=22, 7×22+1=155."
  },
  {
    id: "seq-h08", difficulty: "hard", pattern: "recursive-product",
    sequence: ["1", "2", "3", "7", "46", "?"],
    options: ["2109", "2116", "2039", "1058"], answer: 0,
    note: "a(n) = a(n−1)² − a(n−2). 2²−1=3, 3²−2=7, 7²−3=46, 46²−7=2109."
  },
  {
    id: "seq-h09", difficulty: "hard", pattern: "linear-recurrence",
    sequence: ["4", "7", "2", "9", "14", "7", "?"],
    options: ["16", "12", "21", "5"], answer: 0,
    note: "a(n) = |a(n−1) − a(n−2)| + a(n−3). |2−7|+4=9, |9−2|+7=14, |14−9|+2=7, |7−14|+9=16."
  },

  // --- Famous / Combinatorial Sequences ---
  {
    id: "seq-h10", difficulty: "hard", pattern: "combinatorial",
    sequence: ["1", "1", "2", "5", "14", "42", "?"],
    options: ["132", "126", "140", "84"], answer: 0,
    note: "Catalan numbers C(n) = C(2n,n)/(n+1). C(0)..C(6) = 1, 1, 2, 5, 14, 42, 132."
  },
  {
    id: "seq-h11", difficulty: "hard", pattern: "combinatorial",
    sequence: ["1", "0", "1", "2", "9", "44", "?"],
    options: ["265", "220", "309", "180"], answer: 0,
    note: "Derangements D(n) = (n−1)·(D(n−1)+D(n−2)). D(0)=1, D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=5×(44+9)=265."
  },
  {
    id: "seq-h12", difficulty: "hard", pattern: "combinatorial",
    sequence: ["1", "1", "2", "4", "9", "21", "?"],
    options: ["51", "42", "63", "38"], answer: 0,
    note: "Motzkin numbers. M(n) = ((2n+1)·M(n−1) + 3(n−1)·M(n−2))/(n+2). M(6)=(13×21+15×9)/8=51."
  },
  {
    id: "seq-h13", difficulty: "hard", pattern: "combinatorial",
    sequence: ["1", "1", "2", "3", "5", "7", "11", "?"],
    options: ["15", "13", "17", "22"], answer: 0,
    note: "Integer partition numbers p(n). The number of ways to write n as a sum of positive integers. p(7)=15."
  },
  {
    id: "seq-h14", difficulty: "hard", pattern: "number-theoretic",
    sequence: ["1", "3", "4", "7", "6", "12", "?"],
    options: ["8", "14", "10", "16"], answer: 0,
    note: "Sum of divisors σ(n). σ(1)=1, σ(2)=3, σ(3)=4, σ(4)=7, σ(5)=6, σ(6)=12, σ(7)=1+7=8."
  },
  {
    id: "seq-h15", difficulty: "hard", pattern: "number-theoretic",
    sequence: ["1", "1", "2", "2", "4", "2", "?"],
    options: ["6", "4", "3", "8"], answer: 0,
    note: "Euler's totient φ(n). φ(1)=1, φ(2)=1, φ(3)=2, φ(4)=2, φ(5)=4, φ(6)=2, φ(7)=6."
  },
  {
    id: "seq-h16", difficulty: "hard", pattern: "prime-selection",
    sequence: ["4", "9", "25", "49", "121", "169", "?"],
    options: ["289", "196", "225", "324"], answer: 0,
    note: "Squares of primes: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, 13²=169, 17²=289."
  },
  {
    id: "seq-h17", difficulty: "hard", pattern: "factorial",
    sequence: ["2", "3", "7", "25", "121", "721", "?"],
    options: ["5041", "4321", "5040", "5000"], answer: 0,
    note: "n! + 1: 1!+1=2, 2!+1=3, 3!+1=7, 4!+1=25, 5!+1=121, 6!+1=721, 7!+1=5041."
  },

  // --- Non-obvious / Compound Patterns ---
  {
    id: "seq-h18", difficulty: "hard", pattern: "compound",
    sequence: ["1", "2", "6", "12", "25", "48", "?"],
    options: ["91", "78", "84", "96"], answer: 0,
    note: "Fibonacci(n) × n: F(1)×1=1, F(2)×2=2, F(3)×3=6, F(4)×4=12, F(5)×5=25, F(6)×6=48, F(7)×7=13×7=91."
  },
  {
    id: "seq-h19", difficulty: "hard", pattern: "compound",
    sequence: ["3", "5", "8", "11", "16", "19", "?"],
    options: ["24", "22", "26", "20"], answer: 0,
    note: "p(n) + n (n-th prime plus its index). p(1)+1=3, p(2)+2=5, p(3)+3=8, p(4)+4=11, p(5)+5=16, p(6)+6=19, p(7)+7=24."
  },
  {
    id: "seq-h20", difficulty: "hard", pattern: "digit-pattern",
    sequence: ["1", "2", "4", "8", "16", "77", "?"],
    options: ["154", "93", "100", "132"], answer: 0,
    note: "a(n) = a(n−1) + reverse(a(n−1)). 1+1=2, 2+2=4, 4+4=8, 8+8=16, 16+61=77, 77+77=154."
  },
  {
    id: "seq-h21", difficulty: "hard", pattern: "recursive-product",
    sequence: ["1", "2", "5", "17", "?"],
    options: ["107", "85", "95", "119"], answer: 0,
    note: "a(n) = a(n−1) + a(n−2) + a(n−1)×a(n−2). Equivalently (a+1)(b+1)−1. (2+1)(5+1)−1=17, (5+1)(17+1)−1=107."
  },
  {
    id: "seq-h22", difficulty: "hard", pattern: "digit-pattern",
    sequence: ["18", "17", "15", "11", "?"],
    options: ["3", "7", "9", "5"], answer: 0,
    note: "a(n) = digit_product(a(n−1)) + digit_sum(a(n−1)). 1×8 + 1+8 = 17, 1×7 + 1+7 = 15, 1×5 + 1+5 = 11, 1×1 + 1+1 = 3."
  },
  {
    id: "seq-h23", difficulty: "hard", pattern: "famous-diff",
    sequence: ["0", "1", "4", "10", "21", "39", "68", "?"],
    options: ["110", "97", "123", "104"], answer: 0,
    note: "2nd differences are primes: Δ = 1, 3, 6, 11, 18, 29. Δ² = 2, 3, 5, 7, 11, 13 (primes). Next Δ² = 13, Δ = 42, term = 68+42=110."
  },
  {
    id: "seq-h24", difficulty: "hard", pattern: "arithmetic-2nd-diff",
    sequence: ["3", "7", "13", "21", "31", "43", "?"],
    options: ["57", "53", "61", "49"], answer: 0,
    note: "n² + n + 1: 1²+1+1=3, 2²+2+1=7, 3²+3+1=13, … 7²+7+1=57. Differences: 4, 6, 8, 10, 12, 14 (+2)."
  },
  {
    id: "seq-h25", difficulty: "hard", pattern: "compound",
    sequence: ["3", "8", "17", "32", "57", "100", "?"],
    options: ["177", "164", "192", "149"], answer: 0,
    note: "2ⁿ + n²: 2¹+1=3, 2²+4=8, 2³+9=17, 2⁴+16=32, 2⁵+25=57, 2⁶+36=100, 2⁷+49=177."
  },
  {
    id: "seq-h26", difficulty: "hard", pattern: "power-pattern",
    sequence: ["1", "5", "19", "65", "211", "?"],
    options: ["665", "633", "729", "601"], answer: 0,
    note: "3ⁿ − 2ⁿ: 3¹−2¹=1, 3²−2²=5, 3³−2³=19, 3⁴−2⁴=65, 3⁵−2⁵=211, 3⁶−2⁶=665."
  },
  {
    id: "seq-h27", difficulty: "hard", pattern: "prime-selection",
    sequence: ["2", "6", "30", "210", "2310", "?"],
    options: ["30030", "27720", "30240", "25410"], answer: 0,
    note: "Primorial: product of first n primes. 2, 2×3=6, 6×5=30, 30×7=210, 210×11=2310, 2310×13=30030."
  },
  {
    id: "seq-h28", difficulty: "hard", pattern: "interleaved",
    sequence: ["1", "0", "1", "0", "2", "1", "3", "1", "5", "?"],
    options: ["2", "8", "4", "13"], answer: 0,
    note: "Interleaved Fibonacci and Tribonacci. Odd pos: F(1..5)=1,1,2,3,5. Even pos: T(1..5)=0,0,1,1,2. Position 10 = T(5) = 2."
  },
  {
    id: "seq-h29", difficulty: "hard", pattern: "progressive-ops",
    sequence: ["1", "2", "5", "25", "32", "352", "?"],
    options: ["365", "4224", "528", "378"], answer: 0,
    note: "Alternating ×/+ using successive primes: ×2, +3, ×5, +7, ×11, +13. 1×2=2, 2+3=5, 5×5=25, 25+7=32, 32×11=352, 352+13=365."
  },

  // --- Complex Cycles ---
  {
    id: "seq-h30", difficulty: "hard", pattern: "cyclic-ops",
    sequence: ["1", "3", "6", "3", "9", "4", "6", "12", "9", "27", "?"],
    options: ["22", "81", "32", "17"], answer: 0,
    note: "5-cycle: +2, ×2, −3, ×3, −5. 1+2=3, 3×2=6, 6−3=3, 3×3=9, 9−5=4, 4+2=6, 6×2=12, 12−3=9, 9×3=27, 27−5=22."
  },
  {
    id: "seq-h31", difficulty: "hard", pattern: "cyclic-ops",
    sequence: ["2", "4", "5", "15", "11", "22", "23", "69", "?"],
    options: ["65", "138", "72", "55"], answer: 0,
    note: "4-cycle: ×2, +1, ×3, −4. 2×2=4, 4+1=5, 5×3=15, 15−4=11, 11×2=22, 22+1=23, 23×3=69, 69−4=65."
  },
  {
    id: "seq-h32", difficulty: "hard", pattern: "progressive-ops",
    sequence: ["1", "1", "2", "1", "2", "4", "2", "6", "9", "?"],
    options: ["6", "3", "12", "27"], answer: 0,
    note: "Growing 3-cycle blocks. Block k uses ×k, +k, −k. Block 1: ×1,+1,−1. Block 2: ×2,+2,−2. Block 3: ×3,+3,−3. → 1,1,2,1, 1×2=2,2+2=4,4−2=2, 2×3=6,6+3=9,9−3=6."
  },
  {
    id: "seq-h33", difficulty: "hard", pattern: "progressive-ops",
    sequence: ["2", "4", "8", "16", "48", "144", "432", "?"],
    options: ["1728", "864", "1296", "2160"], answer: 0,
    note: "Multiplier changes every 3 terms: ×2, ×2, ×2, then ×3, ×3, ×3, then ×4. 2→4→8→16(×3)→48→144→432(×4)→1728."
  },

  // --- Progressive / Changing Operations ---
  {
    id: "seq-h34", difficulty: "hard", pattern: "progressive-ops",
    sequence: ["2", "2", "4", "12", "16", "80", "?"],
    options: ["86", "480", "74", "92"], answer: 0,
    note: "Operations: ×1, +2, ×3, +4, ×5, +6. 2×1=2, 2+2=4, 4×3=12, 12+4=16, 16×5=80, 80+6=86."
  },
  {
    id: "seq-h35", difficulty: "hard", pattern: "factorial",
    sequence: ["1", "−2", "6", "−24", "120", "−720", "?"],
    options: ["5040", "−5040", "4320", "−4320"], answer: 0,
    note: "Signed factorials: (−1)^(n+1) × n!. Signs alternate, magnitudes are factorials. 7! = 5040 (positive)."
  },

  // --- Higher-order Difference Patterns ---
  {
    id: "seq-h36", difficulty: "hard", pattern: "famous-diff",
    sequence: ["1", "2", "4", "8", "15", "26", "42", "?"],
    options: ["64", "58", "70", "56"], answer: 0,
    note: "Δ = 1, 2, 4, 7, 11, 16. Δ² = 1, 2, 3, 4, 5 (natural numbers). Next Δ² = 6, Δ = 22, term = 42+22=64."
  },
  {
    id: "seq-h37", difficulty: "hard", pattern: "famous-diff",
    sequence: ["0", "2", "8", "20", "40", "70", "?"],
    options: ["112", "105", "120", "98"], answer: 0,
    note: "Differences are n(n+1): 2, 6, 12, 20, 30, 42. Next diff: 7×6=42. 70+42=112."
  },
  {
    id: "seq-h38", difficulty: "hard", pattern: "famous-diff",
    sequence: ["1", "3", "8", "18", "35", "61", "?"],
    options: ["98", "86", "111", "105"], answer: 0,
    note: "Differences are n²+1: 2, 5, 10, 17, 26, 37. Next: 6²+1=37. 61+37=98."
  },
  {
    id: "seq-h39", difficulty: "hard", pattern: "geometric-diff",
    sequence: ["0", "1", "4", "11", "26", "57", "?"],
    options: ["120", "112", "126", "88"], answer: 0,
    note: "Differences are 2ⁿ−1: 1, 3, 7, 15, 31, 63. Next: 57+63=120."
  },

  // --- Advanced Famous Sequences ---
  {
    id: "seq-h40", difficulty: "hard", pattern: "combinatorial",
    sequence: ["1", "2", "4", "9", "23", "65", "?"],
    options: ["197", "107", "155", "210"], answer: 0,
    note: "Partial sums of Catalan numbers. C = 1,1,2,5,14,42,132. Sums: 1, 2, 4, 9, 23, 65, 65+132=197."
  },
  {
    id: "seq-h41", difficulty: "hard", pattern: "power-pattern",
    sequence: ["1", "9", "36", "100", "225", "?"],
    options: ["441", "400", "484", "350"], answer: 0,
    note: "Sum of first n cubes = (n(n+1)/2)². 1, 1+8=9, 9+27=36, 36+64=100, 100+125=225, 225+216=441."
  },
  {
    id: "seq-h42", difficulty: "hard", pattern: "linear-recurrence",
    sequence: ["1", "2", "4", "7", "12", "20", "?"],
    options: ["33", "28", "40", "25"], answer: 0,
    note: "Partial sums of Fibonacci: F = 1,1,2,3,5,8,13. Sums: 1, 2, 4, 7, 12, 20, 33."
  },
  {
    id: "seq-h43", difficulty: "hard", pattern: "combinatorial",
    sequence: ["1", "1", "2", "5", "15", "52", "?"],
    options: ["203", "187", "210", "180"], answer: 0,
    note: "Bell numbers: the number of ways to partition a set of n elements. B(0)..B(6) = 1, 1, 2, 5, 15, 52, 203."
  },
  {
    id: "seq-h44", difficulty: "hard", pattern: "digit-pattern",
    sequence: ["1", "2", "4", "8", "16", "23", "28", "38", "?"],
    options: ["49", "47", "56", "41"], answer: 0,
    note: "a(n) = a(n−1) + digit_sum(a(n−1)). 1+1=2, 2+2=4, 4+4=8, 8+8=16, 16+7=23, 23+5=28, 28+10=38, 38+11=49."
  },
  {
    id: "seq-h45", difficulty: "hard", pattern: "factorial",
    sequence: ["0", "1", "4", "18", "96", "600", "?"],
    options: ["4320", "5040", "3600", "4200"], answer: 0,
    note: "n! − (n−1)!. 1!−0!=0, 2!−1!=1, 3!−2!=4, 4!−3!=18, 5!−4!=96, 6!−5!=600, 7!−6!=4320."
  },
  {
    id: "seq-h46", difficulty: "hard", pattern: "famous-diff",
    sequence: ["1", "2", "7", "19", "41", "76", "?"],
    options: ["127", "111", "131", "120"], answer: 0,
    note: "Differences are pentagonal numbers: 1, 5, 12, 22, 35, 51. Next: 76+51=127."
  },
  {
    id: "seq-h47", difficulty: "hard", pattern: "progressive-ops",
    sequence: ["1", "2", "4", "10", "34", "154", "?"],
    options: ["874", "720", "840", "994"], answer: 0,
    note: "a(n) = a(n−1) + n!. 1+1!=2, 2+2!=4, 4+3!=10, 10+4!=34, 34+5!=154, 154+6!=874."
  },
  {
    id: "seq-h48", difficulty: "hard", pattern: "recursive-product",
    sequence: ["2", "3", "7", "43", "?"],
    options: ["1807", "1806", "1849", "1764"], answer: 0,
    note: "Sylvester's sequence: a(n) = a(n−1)² − a(n−1) + 1. 2²−2+1=3, 3²−3+1=7, 7²−7+1=43, 43²−43+1=1807."
  },
  {
    id: "seq-h49", difficulty: "hard", pattern: "compound",
    sequence: ["0", "1", "3", "6", "2", "7", "13", "20", "?"],
    options: ["12", "28", "8", "21"], answer: 0,
    note: "Recamán's sequence: a(n)=a(n−1)−n if positive and new, else a(n−1)+n. 0, 0+1=1, 1+2=3, 3+3=6, 6−4=2(new), 2+5=7, 7+6=13, 13+7=20, 20−8=12(new)."
  },
  {
    id: "seq-h50", difficulty: "hard", pattern: "digit-pattern",
    sequence: ["1", "1", "2", "1", "2", "2", "3", "1", "?"],
    options: ["2", "4", "3", "1"], answer: 0,
    note: "Binary popcount: number of 1-bits in n. 1=1, 10=1, 11=2, 100=1, 101=2, 110=2, 111=3, 1000=1, 1001=2."
  }
];
