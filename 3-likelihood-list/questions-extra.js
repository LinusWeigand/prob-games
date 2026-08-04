/* ============================================================================
 * LIKELIHOOD LIST — EXTENDED QUESTION DATABASE
 * ============================================================================
 * QUESTIONS_A: 25 questions using existing table data (different questions)
 * QUESTIONS_B: 25 new questions with new data (tables, charts, graphs)
 */

// ---------------------------------------------------------------------------
// Shared table data (from original questions — referenced by QUESTIONS_A)
// ---------------------------------------------------------------------------

var FOOTBALL_VD = {
  headers: ["Match","Team1","Team1 Goals","Team2 Goals","Team2"],
  rows: [
    ["Match1","A","2","2","F"],["Match2","B","6","1","E"],
    ["Match3","C","1","1","D"],["Match4","A","2","1","E"],
    ["Match5","F","0","3","D"],["Match6","B","6","1","C"],
    ["Match7","A","3","3","D"],["Match8","E","4","1","C"],
    ["Match9","F","0","3","B"],["Match10","A","2","0","C"],
    ["Match11","D","0","3","B"],["Match12","E","4","2","F"],
    ["Match13","C","0","2","F"],["Match14","D","3","2","E"],
    ["Match15","A","?","?","B"]
  ]
};

var DICE_VD = {
  headers: ["Dice₁","Dice₂","Dice₃"],
  rows: [
    ["6","4","6"],["2","4","6"],["2","4","2"],["4","4","4"],["2","4","4"],
    ["4","4","3"],["4","4","1"],["4","3","1"],["6","3","2"],["4","3","2"],
    ["2","4","6"],["4","4","2"],["2","4","1"],["4","4","3"],["2","4","2"],
    ["4","3","4"],["2","4","6"],["4","3","6"],["6","4","4"],["2","3","4"]
  ]
};

var FUND_VD = {
  headers: ["Year","Fund 1","Fund 2","Fund 3","Fund 4"],
  rows: [
    ["Year 1","0.98%","4.28%","-4.47%","8.54%"],
    ["Year 2","1.75%","5.09%","14.73%","10.22%"],
    ["Year 3","5.80%","4.87%","13.11%","10.87%"],
    ["Year 4","-0.57%","3.62%","-5.50%","7.84%"],
    ["Year 5","0.93%","5.77%","14.45%","6.48%"],
    ["Year 6","5.75%","4.56%","20.08%","6.08%"],
    ["Year 7","-0.23%","7.02%","21.17%","6.18%"],
    ["Year 8","-0.22%","5.16%","15.07%","8.64%"],
    ["Year 9","2.43%","6.70%","-4.29%","6.14%"],
    ["Year 10","-3.78%","4.67%","14.48%","6.42%"]
  ]
};

var HOMEBUYER_VD = {
  headers: ["Address","Block Size (m²)","#Bedrooms","#Bathrooms","Distance to Beach (km)","Year Built","Price ($1000s)"],
  rows: [
    ["Address 1","977","5","2","6","1994","1450"],
    ["Address 2","946","5","2","21","2001","1000"],
    ["Address 3","977","5","2","9","1993","1288"],
    ["Address 4","620","3","1","6","2013","1050"],
    ["Address 5","952","5","2","9","1999","1288"],
    ["Address 6","966","5","2","3","1999","1648"],
    ["Address 7","844","4","2","9","1991","1088"],
    ["Address 8","558","3","1","3","2011","1248"],
    ["Address 9","887","4","2","9","1998","1088"],
    ["Address 10","728","4","2","12","2004","962"],
    ["Address 11","651","3","1","6","2009","1050"],
    ["Address 12","1144","B","3","12","1991","1362"],
    ["Address 13","1056","5","2","6","1992","1450"],
    ["Address 14","464","2","1","12","2010","562"],
    ["Address 15","1164","6","3","3","1985","1848"],
    ["Address 16","657","3","1","D","2001","1400"],
    ["Address 17","604","3","1","12","2016","762"],
    ["Address 18","755","4","2","15","2000","872"],
    ["Address 19","743","4","2","1","2007","1600"],
    ["Address 20","754","4","C","9","2002","1088"],
    ["Address 21","542","3","1","12","2008","762"],
    ["Address 22","919","5","2","12","2002","1162"],
    ["Address 23","711","3","1","21","2008","600"],
    ["Address 24","496","2","1","1","2020","F"],
    ["Address 25","729","4","2","6","2005","1250"],
    ["Address 26","778","4","2","12","1997","962"],
    ["Address 27","A","6","3","21","E","1450"],
    ["Address 28","1038","5","2","6","1988","1288"],
    ["Address 29","1018","5","2","9","1998","1450"],
    ["Address 30","918","5","2","6","—","1450"]
  ]
};

var STUDENT_VD = {
  headers: ["","Test 1","Test 2","Test 3","Test 4","Test 5"],
  rows: [
    ["Student 1","53","57","57","60","51"],
    ["Student 2","78","36","88","79","40"],
    ["Student 3","94","97","88","92","99"],
    ["Student 4","71","52","100","50","65"],
    ["Student 5","38","51","41","40","46"],
    ["Student 6","80","99","94","100","100"],
    ["Student 7","60","50","97","72","62"],
    ["Student 8","56","66","43","67","62"],
    ["Student 9","58","60","69","44","59"],
    ["Student 10","76","93","81","88","82"]
  ]
};

// ===========================================================================
// QUESTIONS_A — 25 new questions on existing table data
// ===========================================================================

var QUESTIONS_A = [

  // === FOOTBALL TOURNAMENT (5 questions) ===

  {
    id: "la-01",
    text: "In a football tournament, Teams A through F each play every other team once. The results are shown below — only the A vs B match remains. Rank the following predictions about the A vs B match.",
    statements: [
      "B scores more goals than A.",
      "The total number of goals in the match exceeds 5.",
      "A keeps a clean sheet (concedes zero goals)."
    ],
    visualType: "table", visualData: FOOTBALL_VD,
    note: "B won all 4 matches by large margins (6-1, 6-1, 3-0, 3-0) with 4.5 goals/game avg. A is 2W 2D 0L scoring ~2.25/game. B scoring more than A is very likely (~70%). B’s games averaged 5 total goals but A’s defense is better than B’s other opponents, making >5 total ~35%. B has scored 3+ in every game, so A keeping a clean sheet is extremely unlikely (~5%).",
    category: "Data-driven estimation",
    technique: "Historical frequency analysis"
  },

  {
    id: "la-02",
    text: "Using the tournament data, rank the following predictions about the final standings after all matches (including A vs B) are played.",
    statements: [
      "B’s total goals scored across all 5 matches is at least 20.",
      "A finishes with more total points than D.",
      "The A vs B match is the highest-scoring match of the tournament."
    ],
    visualType: "table", visualData: FOOTBALL_VD,
    note: "B has 18 goals in 4 games and averages 4.5/game — needs only 2 more vs A (~85%). A has 8 pts, D has 8 pts (D’s matches are complete). A needs at least a draw vs B to finish above D — difficult given B’s dominance (~30%). The current highest-scoring match has 7 total goals (B 6-1). The A vs B match would need 8+ total goals (~15%).",
    category: "Data-driven estimation",
    technique: "Record extrapolation"
  },

  {
    id: "la-03",
    text: "Consider all completed matches in the tournament. Rank the following predictions.",
    statements: [
      "B concedes the fewest total goals in the tournament.",
      "A scores at least 1 goal against B.",
      "A wins the match against B."
    ],
    visualType: "table", visualData: FOOTBALL_VD,
    note: "B has conceded only 2 goals in 4 games (0,0,1,1). Even adding A’s likely 1–2 goals, B totals ~3–4 GA — far below any other team (next lowest is A at 6+). ~95%. A has scored in every match (2,2,3,2) but B’s defense is elite (0.5 GA/game). Against weaker teams than A, B conceded 0–1. A scoring ≥1 is plausible ~70%. A winning outright against the dominant B is unlikely ~15%.",
    category: "Data-driven estimation",
    technique: "Defensive/offensive pattern analysis"
  },

  {
    id: "la-04",
    text: "Rank the following predictions about the A vs B match outcome.",
    statements: [
      "B wins by at least 2 goals.",
      "A scores exactly 2 goals.",
      "The match ends 0–0."
    ],
    visualType: "table", visualData: FOOTBALL_VD,
    note: "B won its 4 games by margins of 5, 5, 3, 3. Against A (a better opponent), a 2+ goal win is still likely ~55%. A scored exactly 2 in 3 of 4 games, but B’s defense may limit A further ~30%. A 0-0 draw requires both teams to fail to score — B has scored 3+ in every match and A always scores too ~1%.",
    category: "Data-driven estimation",
    technique: "Margin and scoring pattern analysis"
  },

  {
    id: "la-05",
    text: "Using the completed match data, rank the following for the A vs B match.",
    statements: [
      "B scores at least 2 goals.",
      "A scores at least 1 goal.",
      "The match ends in a draw."
    ],
    visualType: "table", visualData: FOOTBALL_VD,
    note: "B scored 6,6,3,3 in 4 games — minimum 3. Even against better defense, B≥2 goals is ~85%. A scored 2+ in every game, but B concedes only 0.5/game. A≥1 is likely but not guaranteed ~70%. B has never drawn (always dominates), and A has drawn only when opponents were comparable. A draw is ~10%.",
    category: "Data-driven estimation",
    technique: "Scoring floor estimation"
  },

  // === DICE (5 questions) ===

  {
    id: "la-06",
    text: "Three dice with possibly non-unique positive integer faces are each rolled 20 times (results shown). They are rolled once more. Rank the following.",
    statements: [
      "The sum of all three dice exceeds 10.",
      "Dice₁ shows a higher value than Dice₂.",
      "All three dice show the same value."
    ],
    visualType: "table", visualData: DICE_VD,
    note: "From the data: Dice₁∈{2,4,6} (avg≈3.5), Dice₂∈{3,4} (avg≈3.7), Dice₃∈{1,2,3,4,6} (avg≈3.8). Sum avg≈11, so P(sum>10)≈50%. D1>D2: if D2=3 (p≈1/3) then P(D1>3)≈65%; if D2=4 (p≈2/3) then P(D1>4)=P(D1=6)≈20%. Total≈35%. All same: only value common to all three is 4. P≈0.45×0.67×0.30≈9%.",
    category: "Statistical inference",
    technique: "Frequency estimation from samples"
  },

  {
    id: "la-07",
    text: "Using the 20 rolls of the three dice shown, the dice are rolled once more. Rank the following.",
    statements: [
      "Dice₃ shows an even number.",
      "Dice₂ shows a 4.",
      "Dice₁ shows a 2."
    ],
    visualType: "table", visualData: DICE_VD,
    note: "Dice₃ even values (2,4,6) appeared 15/20 times → P≈75%. Dice₂=4 appeared 14/20 times → P≈70%. Dice₁=2 appeared 7/20 times → P≈35%. Order: 75% > 70% > 35%.",
    category: "Statistical inference",
    technique: "Direct frequency estimation"
  },

  {
    id: "la-08",
    text: "The three dice are rolled once more. Rank the following events.",
    statements: [
      "At least one of the three dice shows a 4.",
      "The sum of Dice₁ and Dice₂ exceeds 6.",
      "Dice₃ shows a 1."
    ],
    visualType: "table", visualData: DICE_VD,
    note: "P(no die=4) ≈ P(D1≠4)×P(D2≠4)×P(D3≠4) ≈ 0.55×0.30×0.70 ≈ 0.12. So P(≥1 four) ≈ 88%. D1+D2>6: D1 always even, D2∈{3,4}. Need sum≥7. If D2=4: need D1≥3 → D1∈{4,6}≈65%. If D2=3: need D1≥4 → same 65%. Total ~65%. D3=1 appeared 3/20 → P≈15%.",
    category: "Statistical inference",
    technique: "Complement counting with estimated probabilities"
  },

  {
    id: "la-09",
    text: "The dice are rolled once more. Rank the following.",
    statements: [
      "The maximum value among all three dice is at least 4.",
      "Exactly two of the three dice show an even number.",
      "All three dice show a value of 3 or less."
    ],
    visualType: "table", visualData: DICE_VD,
    note: "P(max<4): need all three ≤3. P(D1≤3)=P(D1=2)≈35%, P(D2≤3)=P(D2=3)≈30%, P(D3≤3)≈45%. Product≈5%. So P(max≥4)≈95%. D1 is always even. ‘Exactly 2 even’ means exactly one of D2,D3 is even: P=(2/3)(1/4)+(1/3)(3/4)=5/12≈42%. P(all≤3)≈5%.",
    category: "Statistical inference",
    technique: "Joint probability from frequency data"
  },

  {
    id: "la-10",
    text: "The dice are rolled once more. Rank the following.",
    statements: [
      "The product of all three dice is even.",
      "Dice₁ shows a strictly higher value than Dice₃.",
      "Dice₂ equals Dice₃."
    ],
    visualType: "table", visualData: DICE_VD,
    note: "Product is even if any die is even. D1 is always even, so the product is always even → P≈100%. D1>D3: D1∈{2,4,6}, D3∈{1,2,3,4,6}. Computed over all combinations weighted by estimated frequencies ≈ 45%. D2=D3: D2∈{3,4}, D3∈{1,2,3,4,6}. Overlap at 3: P(D2=3)×P(D3=3)≈0.30×0.10=3%. At 4: P(D2=4)×P(D3=4)≈0.70×0.30=21%. Total≈24%.",
    category: "Statistical inference",
    technique: "Parity and joint probability"
  },

  // === FUND PERFORMANCE (5 questions) ===

  {
    id: "la-11",
    text: "An investor reviews four funds’ annual returns over 10 years. Rank the following predictions for the next year.",
    statements: [
      "Fund 2 has a positive return.",
      "Fund 3’s return exceeds 10%.",
      "Fund 1 outperforms Fund 4."
    ],
    visualType: "table", visualData: FUND_VD,
    note: "Fund 2 was positive in all 10 years (range 3.62%–7.02%) → ~95%. Fund 3 exceeded 10% in 7/10 years (14.73, 13.11, 14.45, 20.08, 21.17, 15.07, 14.48) → ~70%. Fund 1 (avg 1.28%) never outperformed Fund 4 (avg 7.74%, min 6.08%) in any of the 10 years → ~2%.",
    category: "Financial data analysis",
    technique: "Historical frequency and range analysis"
  },

  {
    id: "la-12",
    text: "Rank the following predictions for the four investment funds next year.",
    statements: [
      "Fund 4’s return is between 5% and 11%.",
      "Fund 2 outperforms Fund 1.",
      "Fund 3 has a negative return."
    ],
    visualType: "table", visualData: FUND_VD,
    note: "Fund 4 fell in 5–11% range in all 10 years (min 6.08%, max 10.87%) → ~90%. Fund 2 beat Fund 1 in 8/10 years (Fund 2 avg 5.17% vs Fund 1 avg 1.28%) → ~80%. Fund 3 was negative in 3/10 years (-4.47%, -5.50%, -4.29%) → ~30%.",
    category: "Financial data analysis",
    technique: "Range consistency and head-to-head comparison"
  },

  {
    id: "la-13",
    text: "Rank the following predictions for the investment funds next year.",
    statements: [
      "Fund 2’s return is within 2 percentage points of its 10-year average.",
      "The absolute value of Fund 3’s return exceeds 10%.",
      "Fund 1’s return exceeds 5%."
    ],
    visualType: "table", visualData: FUND_VD,
    note: "Fund 2 avg≈5.17%. Its range (3.62–7.02) falls entirely within 5.17±2, i.e. 3.17–7.17. All 10 years qualify → ~95%. |Fund 3|>10%: Fund 3 exceeded +10% in 7 years, never exceeded -10%. So 7/10 → ~70%. Fund 1>5%: only 2/10 (5.80%, 5.75%) → ~20%.",
    category: "Financial data analysis",
    technique: "Volatility and consistency comparison"
  },

  {
    id: "la-14",
    text: "Rank the following predictions about fund returns next year.",
    statements: [
      "Fund 3’s return falls between -10% and 25%.",
      "Fund 3 has the highest return among all four funds.",
      "Fund 1 has a higher return than Fund 3."
    ],
    visualType: "table", visualData: FUND_VD,
    note: "Fund 3 range over 10 years: -5.50% to 21.17%. All within [-10%,25%] → ~90%. Fund 3 had the highest return in 7/10 years (driven by its high avg 9.88%) → ~70%. Fund 1 beat Fund 3 only when Fund 3 was negative: 3/10 years → ~30%.",
    category: "Financial data analysis",
    technique: "Tail risk and dominance analysis"
  },

  {
    id: "la-15",
    text: "Rank the following predictions for the four funds next year.",
    statements: [
      "The absolute value of Fund 3’s return exceeds Fund 4’s return.",
      "At least one of the four funds has a negative return.",
      "Fund 2’s return is below 3%."
    ],
    visualType: "table", visualData: FUND_VD,
    note: "|Fund 3|>Fund 4 occurred in 7/10 years (Fund 3’s high mean and variance vs Fund 4’s moderate, consistent returns) → ~70%. Fund 1 was negative in 4/10, Fund 3 in 3/10. P(at least one negative) ≈ 1-P(both positive) ≈ 1-0.6×0.7 ≈ 58%. Fund 2 min was 3.62%, never below 3% in 10 years → ~3%.",
    category: "Financial data analysis",
    technique: "Cross-fund risk assessment"
  },

  // === HOME BUYER (5 questions) ===

  {
    id: "la-16",
    text: "A home buyer reviews data for 30 houses sold in her area. Some values are missing (A through F). Using the patterns in the data, rank the following.",
    statements: [
      "B ≥ 5  (B is the number of bedrooms at Address 12).",
      "E < 2000  (E is the year built at Address 27).",
      "C > 2  (C is the number of bathrooms at Address 20)."
    ],
    visualType: "table", visualData: HOMEBUYER_VD,
    note: "Address 12: 1144 m² block, 3 bathrooms, $1362k. All 3-bathroom houses in the data have 5–6 bedrooms. B≥5 is very likely ~95%. Address 27: 6 bed, 3 bath, 21 km from beach. Large houses (5–6 bed) were mostly built 1985–2002. E<2000 is likely ~75%. Address 20: 4 bed, 754 m². Every 4-bedroom house in the dataset has exactly 2 bathrooms. C>2 is ~5%.",
    category: "Data imputation",
    technique: "Pattern-based missing value estimation"
  },

  {
    id: "la-17",
    text: "The home buyer wants to estimate the selling price of a 5-bedroom, 2-bathroom house with a 950 m² block, 6 km from the beach, built in 2000. Using the data, rank the following price predictions.",
    statements: [
      "The price is between $1,200k and $1,500k.",
      "The price exceeds $1,300k.",
      "The price exceeds $1,600k."
    ],
    visualType: "table", visualData: HOMEBUYER_VD,
    note: "Comparable 5-bed/2-bath houses at 6 km: Address 1 (977 m², 1994, $1450k), Address 13 (1056 m², 1992, $1450k), Address 28 (1038 m², 1988, $1288k). Most are $1288–$1450k. $1200–$1500k captures the likely range ~80%. Exceeding $1300k is probable but not certain ~60%. Only houses within 3 km (Addr 6, 15) or with 6 bedrooms reach $1600+, so ~10%.",
    category: "Data imputation",
    technique: "Comparable sales estimation"
  },

  {
    id: "la-18",
    text: "A buyer randomly selects one house from the dataset. Rank the following.",
    statements: [
      "If it has 5 or more bedrooms, its price exceeds $1,100k.",
      "If it is within 6 km of the beach, its price exceeds $1,200k.",
      "If it was built after 2010, it has 4 or more bedrooms."
    ],
    visualType: "table", visualData: HOMEBUYER_VD,
    note: "5+ bed houses: 11 total. Above $1100k: all except Address 2 ($1000k) = 10/11 ≈ 91%. Within 6 km: ~10 houses with known prices. Above $1200k: 8/10 ≈ 80% (Addresses 4 and 11 at $1050k are below). Built after 2010: Addr 4 (3-bed), 8 (3-bed), 17 (3-bed), 24 (2-bed) = only 0/4 have 4+ bed. But some might have 4 bed that I’m missing. ~10%.",
    category: "Conditional probability from data",
    technique: "Conditional frequency analysis"
  },

  {
    id: "la-19",
    text: "The home buyer considers a 3-bedroom, 1-bathroom house with a 600 m² block, 9 km from the beach, built in 2015. Using the data, rank the following price predictions.",
    statements: [
      "The price is between $700k and $1,000k.",
      "The price exceeds $800k.",
      "The price exceeds $1,200k."
    ],
    visualType: "table", visualData: HOMEBUYER_VD,
    note: "Comparable 3-bed/1-bath houses: Addr 4 (620 m², 6 km, $1050k), Addr 17 (604 m², 12 km, $762k), Addr 21 (542 m², 12 km, $762k). At 9 km (between 6 and 12 km), expect ~$850–$950k. $700–$1000k captures the range ~70%. Exceeding $800k is likely but not certain ~55%. The small size makes $1200k+ very unlikely ~5%.",
    category: "Data imputation",
    technique: "Interpolation from comparable properties"
  },

  {
    id: "la-20",
    text: "For a randomly selected house from the 30 in the dataset, rank the following.",
    statements: [
      "It has at least 3 bedrooms.",
      "Its block size exceeds 700 m².",
      "It was built before 1995."
    ],
    visualType: "table", visualData: HOMEBUYER_VD,
    note: "Only 2 houses have fewer than 3 bedrooms (Addresses 14 and 24), so 28/30 ≈ 93% have 3+. Block sizes above 700 m²: counting from the data, approximately 20/30 ≈ 67%. Built before 1995 (with known years): 1994, 1993, 1991, 1991, 1992, 1985, 1988 = 7 out of ~28 with known years ≈ 25%.",
    category: "Marginal probability from data",
    technique: "Frequency counting in tabular data"
  },

  // === STUDENT SCORES (5 questions) ===

  {
    id: "la-21",
    text: "Ten students’ scores on five tests are shown. They take Test 6. Rank the following.",
    statements: [
      "Student 3 scores higher than Student 10.",
      "Student 6 scores higher than Student 3.",
      "Student 4 scores above 90."
    ],
    visualType: "table", visualData: STUDENT_VD,
    note: "Student 3 avg 94 (range 88–99) vs Student 10 avg 84 (range 76–93). Student 3 usually dominates, though ranges overlap slightly ~80%. Student 6 avg 94.6 vs Student 3 avg 94 — nearly identical means, essentially a coin flip ~52%. Student 4 avg 67.6 with extreme variance (50–100). Scored 100 once but 90+ only 1/5 → ~15%.",
    category: "Comparative statistics",
    technique: "Mean-variance comparison with overlap"
  },

  {
    id: "la-22",
    text: "Using the student test data, rank the following predictions for Test 6.",
    statements: [
      "Student 1 scores higher than Student 5.",
      "The absolute difference between Student 8 and Student 9’s scores is less than 10.",
      "Student 2 scores higher than Student 7."
    ],
    visualType: "table", visualData: STUDENT_VD,
    note: "Student 1 (avg 55.6, range 51–60) vs Student 5 (avg 43.2, range 38–51). Minimal overlap — S1’s min (51) ≥ S5’s max (51) ~90%. S8 vs S9: avg 58.8 vs 58.0. Historical differences: |2|, |6|, |26|, |23|, |3|. Within 10 in 3/5 cases ~60%. S2 (avg 64.2) vs S7 (avg 68.2): S2 beat S7 in only 2/5 tests ~40%.",
    category: "Comparative statistics",
    technique: "Historical head-to-head analysis"
  },

  {
    id: "la-23",
    text: "The students take Test 6. Rank the following.",
    statements: [
      "At least one student scores above 90.",
      "The class average on Test 6 is above 70.",
      "Student 4 scores exactly 71."
    ],
    visualType: "table", visualData: STUDENT_VD,
    note: "Students 3 and 6 both average ~94 with ranges well above 90. P(neither scores 90+) ≈ P(S3≤90)×P(S6≤90) ≈ 0.15×0.20 ≈ 3%. So P(≥90) ≈ 97%. Class avg of student averages is 68.8, just under 70 — could go either way ~45%. Exact score of 71 for Student 4 (or any student) out of ~100 possible values ≈ 1–2%.",
    category: "Comparative statistics",
    technique: "Threshold probability estimation"
  },

  {
    id: "la-24",
    text: "For Test 6, rank the following predictions.",
    statements: [
      "Student 3 scores above 85.",
      "Student 10 scores higher than Student 7.",
      "Student 8 and Student 9 score the exact same mark."
    ],
    visualType: "table", visualData: STUDENT_VD,
    note: "Student 3 has never scored below 88 in 5 tests (range 88–99). P(>85) ~95%. Student 10 avg 84 (range 76–93) vs Student 7 avg 68.2 (range 50–97). S10 consistently outperforms, though S7 once scored 97. ~85%. Exact match between S8 and S9: both have ~20-point ranges. Point probability for exact equality ~3%.",
    category: "Comparative statistics",
    technique: "Consistency and range analysis"
  },

  {
    id: "la-25",
    text: "The students take Test 6. Rank the following.",
    statements: [
      "Student 6’s cumulative average (Tests 1–6) remains above 90.",
      "Student 4 scores higher than Student 2.",
      "Student 1 scores above the class average on Test 6."
    ],
    visualType: "table", visualData: STUDENT_VD,
    note: "Student 6 has 473 total points over 5 tests (avg 94.6). To keep 6-test avg > 90, needs Test 6 > 67. S6’s minimum ever was 80 → ~95%. Student 4 (avg 67.6) vs Student 2 (avg 64.2): S4 beat S2 in 3/5 tests ~55%. Student 1 avg 55.6, max 60 vs class avg ~69. Student 1 has never scored above 60, so beating class avg is very unlikely ~5%.",
    category: "Comparative statistics",
    technique: "Cumulative performance and dominance analysis"
  }
];

// ===========================================================================
// QUESTIONS_B — 25 new questions with new data
// ===========================================================================

var QUESTIONS_B = [

  // === TEXT-ONLY QUESTIONS (5) ===

  {
    id: "lb-01",
    text: "You have three coins. Coin A is fair (50% chance of heads). Coin B has a 70% chance of heads. Coin C has a 30% chance of heads. You flip each coin exactly once. Rank the following.",
    statements: [
      "At least one coin lands heads.",
      "At least two coins land heads.",
      "All three coins land heads."
    ],
    visualType: "none", visualData: null,
    note: "P(0 heads) = 0.5×0.3×0.7 = 0.105. P(≥1 head) = 1−0.105 = 89.5%. P(all heads) = 0.5×0.7×0.3 = 10.5%. P(≥2 heads) = 1−P(0)−P(1 head) = 1−0.105−0.395 = 50%. Order: 89.5% > 50% > 10.5%.",
    category: "Basic probability",
    technique: "Complement counting with independent events"
  },

  {
    id: "lb-02",
    text: "A standard 52-card deck is shuffled and you draw 5 cards at random. Rank the following.",
    statements: [
      "At least one card is a face card (Jack, Queen, or King).",
      "At least one card is an Ace.",
      "All 5 cards are the same color (all red or all black)."
    ],
    visualType: "none", visualData: null,
    note: "12 face cards in 52. P(no face card) = C(40,5)/C(52,5) ≈ 25.4%. P(≥1 face) ≈ 74.6%. 4 aces. P(no ace) = C(48,5)/C(52,5) ≈ 65.9%. P(≥1 ace) ≈ 34.1%. P(all same color) = 2×C(26,5)/C(52,5) ≈ 5.1%. Order: 74.6% > 34.1% > 5.1%.",
    category: "Combinatorics",
    technique: "Hypergeometric probability"
  },

  {
    id: "lb-03",
    text: "A coffee shop observes an average of 3 customer arrivals per 10-minute window, modeled as a Poisson process. Rank the following for the next 10-minute window.",
    statements: [
      "At least 1 customer arrives.",
      "Between 2 and 4 customers arrive (inclusive).",
      "More than 6 customers arrive."
    ],
    visualType: "none", visualData: null,
    note: "Poisson λ=3. P(0)=e⁻³≈0.050. P(≥1)=1−0.050=95.0%. P(2)+P(3)+P(4)=0.224+0.224+0.168=61.6%. P(>6)=1−P(≤6)≈1−0.966=3.4%. Order: 95% > 62% > 3.4%.",
    category: "Probability distributions",
    technique: "Poisson distribution"
  },

  {
    id: "lb-04",
    text: "A bag contains either 8 red and 2 blue marbles (Type A) or 3 red and 7 blue marbles (Type B). You are equally likely to have received either type. You draw one marble at random and it is red. Rank the following.",
    statements: [
      "You have the Type A bag.",
      "The next marble you draw will be red.",
      "The next two marbles you draw will both be blue."
    ],
    visualType: "none", visualData: null,
    note: "After observing red: P(A|R) = P(R|A)P(A)/P(R) = (0.8×0.5)/((0.8×0.5)+(0.3×0.5)) = 0.4/0.55 = 72.7%. P(next R) = 0.8×0.727 + 0.3×0.273 = 0.582+0.082 = 66.4%. P(next 2 blue) = 0.04×0.727 + 0.49×0.273 = 0.029+0.134 = 16.3%. Order: 72.7% > 66.4% > 16.3%.",
    category: "Bayesian reasoning",
    technique: "Posterior probability and predictive probability"
  },

  {
    id: "lb-05",
    text: "A room has 25 people. Each independently flips a fair coin. Rank the following.",
    statements: [
      "More than 8 people get heads.",
      "Exactly 12 or 13 people get heads.",
      "More than 18 people get heads."
    ],
    visualType: "none", visualData: null,
    note: "X∼Bin(25,0.5). Mean=12.5, SD≈2.5. P(X>8)=P(X≥9)≈P(Z>(8.5−12.5)/2.5)=P(Z>−1.6)≈95%. P(X=12)+P(X=13)≈0.155+0.155=31%. P(X>18)=P(X≥19)≈P(Z>(18.5−12.5)/2.5)=P(Z>2.4)≈0.8%. Order: 95% > 31% > 0.8%.",
    category: "Binomial reasoning",
    technique: "Normal approximation to binomial"
  },

  // === NEW TABLE QUESTIONS (5) ===

  {
    id: "lb-06",
    text: "A meteorologist records daily temperatures (°C) at three stations over 10 days. Some readings are missing (M₁, M₂, M₃). Station X is a sheltered inland site, Station Y is on a south-facing slope, and Station Z is an exposed hilltop.\n\nRank the following predictions about the missing values.",
    statements: [
      "21 ≤ M₁ ≤ 23",
      "M₂ = 23",
      "M₃ > 25"
    ],
    visualType: "table",
    visualData: {
      headers: ["Day","Station X","Station Y","Station Z"],
      rows: [
        ["1","22","18","25"],["2","21","19","18"],["3","23","20","26"],
        ["4","22","21","15"],["5","M₁","22","24"],["6","21","M₂","20"],
        ["7","23","24","28"],["8","22","25","16"],["9","21","26","M₃"],
        ["10","23","27","22"]
      ]
    },
    note: "Station X is very stable: 21,22,23,22,21,23,22,21,23 — always 21–23. M₁ is almost certainly 21–23 (~85%). Station Y shows a clear linear increase: 18,19,20,21,22,?,24,25,26,27. M₂=23 fits perfectly (~65%). Station Z is highly volatile: 25,18,26,15,24,20,28,16,?,22 — swings widely. M₃>25 is possible but unpredictable (~30%).",
    category: "Data imputation",
    technique: "Trend and variance analysis for missing values"
  },

  {
    id: "lb-07",
    text: "Five sprinters have competed in four 100m races. Their times (in seconds) are shown. They are about to run a fifth race. Rank the following.",
    statements: [
      "Runner R finishes ahead of Runner P.",
      "Runner Q finishes ahead of Runner T.",
      "Runner S finishes in the top 2."
    ],
    visualType: "table",
    visualData: {
      headers: ["","Race 1","Race 2","Race 3","Race 4"],
      rows: [
        ["Runner P","11.0","10.8","11.4","11.1"],
        ["Runner Q","10.4","11.8","10.2","11.6"],
        ["Runner R","10.6","10.8","11.0","10.9"],
        ["Runner S","11.6","11.8","11.5","11.7"],
        ["Runner T","10.0","12.6","10.1","12.5"]
      ]
    },
    note: "R (avg 10.83, range 10.6–11.0) vs P (avg 11.08, range 10.8–11.4): R is faster with slight overlap ~80%. Q (avg 11.0, range 10.2–11.8) vs T (avg 11.3, range 10.0–12.6): Q is faster on average but both are very volatile ~60%. S (avg 11.65) is the slowest and most consistent — finishing top 2 requires beating 3 of 4 faster runners ~5%.",
    category: "Comparative statistics",
    technique: "Mean-variance comparison for predictions"
  },

  {
    id: "lb-08",
    text: "Four biased coins are each flipped 15 times. The results are shown below. All four coins are flipped once more. Rank the following.",
    statements: [
      "At least 2 of the 4 coins show Heads.",
      "Coins A and D both show Heads.",
      "Coin C shows Heads."
    ],
    visualType: "table",
    visualData: {
      headers: ["Flip","Coin A","Coin B","Coin C","Coin D"],
      rows: [
        ["1","H","T","T","H"],["2","H","H","T","H"],["3","T","T","H","T"],
        ["4","H","H","T","H"],["5","H","H","T","T"],["6","H","T","T","H"],
        ["7","H","T","H","H"],["8","T","H","T","H"],["9","H","T","T","T"],
        ["10","H","H","H","H"],["11","H","H","T","H"],["12","T","T","T","T"],
        ["13","H","H","T","H"],["14","H","T","H","H"],["15","H","H","T","H"]
      ]
    },
    note: "From 15 flips: A=12H/3T (P≈0.80), B=8H/7T (P≈0.53), C=4H/11T (P≈0.27), D=11H/4T (P≈0.73). P(≥2H) = 1−P(0H)−P(1H). P(0H)≈0.20×0.47×0.73×0.27≈1.8%. P(1H)≈15%. P(≥2H)≈83%. P(A∩D heads)=0.80×0.73≈58%. P(C=H)≈27%. Order: 83% > 58% > 27%.",
    category: "Statistical inference",
    technique: "Frequency estimation from samples"
  },

  {
    id: "lb-09",
    text: "A clinical study tracks 10 patients receiving one of two treatments. Age and recovery time (days) are recorded.\n\nA new patient, aged 30, begins Treatment A. Rank the following.",
    statements: [
      "The patient recovers in fewer than 10 days.",
      "The patient recovers faster than the average Treatment B patient.",
      "The patient recovers in exactly 6 days."
    ],
    visualType: "table",
    visualData: {
      headers: ["Patient","Treatment","Age","Recovery (days)"],
      rows: [
        ["1","A","25","5"],["2","A","35","7"],["3","A","45","8"],
        ["4","A","55","12"],["5","A","65","15"],["6","B","25","8"],
        ["7","B","35","9"],["8","B","45","10"],["9","B","55","11"],
        ["10","B","65","12"]
      ]
    },
    note: "Treatment A shows a strong age-recovery correlation: age 25→5d, 35→7d. Age 30 should be ~6 days. P(<10d) is very likely ~90%. Treatment B average = (8+9+10+11+12)/5 = 10 days. The patient’s expected ~6 days is well below 10 ~80%. Exactly 6 days is a point estimate — could be 5, 6, or 7 ~15%.",
    category: "Regression estimation",
    technique: "Interpolation from treatment data"
  },

  {
    id: "lb-10",
    text: "A farmer records crop yields (kg per hectare) for four fields over three seasons. Rank the following predictions for the next season.",
    statements: [
      "Field A yields more than Field B.",
      "Field C yields more than 100 kg/ha.",
      "Field D yields more than Field A."
    ],
    visualType: "table",
    visualData: {
      headers: ["Season","Field A","Field B","Field C","Field D"],
      rows: [
        ["Spring","120","95","180","110"],
        ["Summer","135","100","50","105"],
        ["Autumn","125","98","160","108"]
      ]
    },
    note: "A avg 127, range 120–135. B avg 98, range 95–100. A consistently above B ~85%. C avg 130 but extreme variance (50–180). C>100 in 2/3 seasons ~60%. D avg 108, range 105–110. D>A requires D>127 (never happened, max was 110) ~15%.",
    category: "Data-driven estimation",
    technique: "Mean-variance comparison from seasonal data"
  },

  // === DIRECTED GRAPH QUESTIONS (3) ===

  {
    id: "lb-11",
    text: "A signal propagates through the directed graph shown below. Starting at node A, the signal moves each second along one outgoing arrow chosen uniformly at random.\n\nAfter 200 seconds, rank where the signal is most likely to be found.",
    statements: ["C","D","B"],
    visualType: "directed-graph",
    graphData: {
      nodes: [
        {id:"A",x:150,y:40},{id:"B",x:50,y:140},{id:"C",x:250,y:140},
        {id:"D",x:100,y:260},{id:"E",x:200,y:260}
      ],
      edges: [
        {from:"A",to:"B"},
        {from:"B",to:"C"},{from:"B",to:"D"},
        {from:"C",to:"D"},{from:"C",to:"E"},
        {from:"D",to:"E"},{from:"D",to:"A"},
        {from:"E",to:"C"}
      ]
    },
    note: "Stationary distribution: πA=2/19≈10.5%, πB=2/19≈10.5%, πC=6/19≈31.6%, πD=4/19≈21.1%, πE=5/19≈26.3%. After 200 steps, the signal is near its stationary distribution. C (32%) > D (21%) > B (10.5%). C accumulates probability because E→C is a bottleneck, and both D and B feed into C’s chain.",
    category: "Markov chains",
    technique: "Stationary distribution analysis"
  },

  {
    id: "lb-12",
    text: "A data packet bounces through a network represented by the directed graph below. Starting at node W, the packet moves each second to a randomly chosen neighbor (uniform over outgoing edges).\n\nRank where the packet is most likely to be after 150 seconds.",
    statements: ["Y","X","Z"],
    visualType: "directed-graph",
    graphData: {
      nodes: [
        {id:"W",x:150,y:40},{id:"X",x:50,y:180},
        {id:"Y",x:150,y:300},{id:"Z",x:250,y:180}
      ],
      edges: [
        {from:"W",to:"X"},{from:"W",to:"Y"},{from:"W",to:"Z"},
        {from:"X",to:"Y"},
        {from:"Y",to:"Z"},{from:"Y",to:"W"},
        {from:"Z",to:"X"}
      ]
    },
    note: "Stationary distribution: πW=1/6≈16.7%, πX=5/18≈27.8%, πY=1/3≈33.3%, πZ=2/9≈22.2%. Y is the most likely because it receives flow from W (1/3), X (all), and is the convergence point. Y (33%) > X (28%) > Z (22%). W is lowest because it only receives from Y.",
    category: "Markov chains",
    technique: "Stationary distribution analysis"
  },

  {
    id: "lb-13",
    text: "A disease spreads through a population modeled by the directed graph below. A single infected individual starts at node P. Each day, the infection moves along one outgoing edge chosen uniformly at random.\n\nAfter 100 days, rank where the infection is most likely to be.",
    statements: ["S","R","Q"],
    visualType: "directed-graph",
    graphData: {
      nodes: [
        {id:"P",x:150,y:30},{id:"Q",x:50,y:130},{id:"R",x:250,y:130},
        {id:"S",x:150,y:230},{id:"T",x:50,y:320},{id:"U",x:250,y:320}
      ],
      edges: [
        {from:"P",to:"Q"},{from:"P",to:"R"},
        {from:"Q",to:"R"},{from:"Q",to:"T"},
        {from:"R",to:"S"},
        {from:"S",to:"P"},{from:"S",to:"U"},
        {from:"T",to:"S"},
        {from:"U",to:"T"},{from:"U",to:"P"}
      ]
    },
    note: "Stationary distribution: πP≈20.7%, πQ≈10.3%, πR≈15.5%, πS≈27.6%, πT≈12.1%, πU≈13.8%. S is the convergence point (receives from R, T) and feeds back into the cycle. S (28%) > R (16%) > Q (10%). R is higher than Q because R receives from both P and Q.",
    category: "Markov chains",
    technique: "Stationary distribution analysis"
  },

  // === LINE CHART QUESTIONS (4) ===

  {
    id: "lb-14",
    text: "A quality inspector monitors defect rates (%) on three production lines over 20 shifts. Line A uses automated inspection, Line B uses manual inspection, and Line C uses a hybrid system.\n\nThe inspector wants to predict the next shift. Rank the following.",
    statements: [
      "Line A produces fewer defects than Line B.",
      "Line C produces fewer defects than Line B.",
      "Line C’s defect rate is below 1%."
    ],
    visualType: "line-chart",
    chartData: {
      xLabel: "Shift", yLabel: "Defect Rate (%)",
      series: [
        {name:"Line A",color:"#2980b9",data:[[1,2.1],[2,1.8],[3,2.3],[4,1.9],[5,2.0],[6,2.4],[7,1.7],[8,2.2],[9,2.0],[10,1.8],[11,2.1],[12,2.3],[13,1.9],[14,2.0],[15,2.2],[16,1.8],[17,2.1],[18,2.0],[19,1.9],[20,2.3]]},
        {name:"Line B",color:"#e74c3c",data:[[1,3.8],[2,4.2],[3,3.5],[4,4.8],[5,4.1],[6,3.9],[7,4.5],[8,3.6],[9,4.3],[10,4.0],[11,4.6],[12,3.7],[13,4.2],[14,4.4],[15,3.8],[16,4.1],[17,3.9],[18,4.5],[19,4.0],[20,4.3]]},
        {name:"Line C",color:"#27ae60",data:[[1,1.2],[2,6.8],[3,2.5],[4,7.1],[5,0.8],[6,5.3],[7,3.2],[8,6.5],[9,1.5],[10,5.8],[11,3.8],[12,0.3],[13,7.5],[14,2.1],[15,6.2],[16,1.0],[17,5.5],[18,3.5],[19,7.0],[20,0.5]]}
      ]
    },
    note: "A (avg≈2.0%, SD≈0.2) is consistently below B (avg≈4.1%, SD≈0.4). P(A<B)≈85%. C (avg≈3.9%) has a similar mean to B but enormous variance (0.3–7.5%). P(C<B)≈50% since means are nearly equal. C dips below 1% in 3/20 shifts (0.3, 0.8, 0.5) → P(C<1%)≈15%.",
    category: "Time series analysis",
    technique: "Variance-driven comparison"
  },

  {
    id: "lb-15",
    text: "An engineer monitors two battery packs over 24 hours. Battery 1 is a standard lithium-ion cell. Battery 2 has regenerative charging capability that causes occasional voltage bumps.\n\nRank the following predictions for hour 25.",
    statements: [
      "Battery 1’s voltage is higher than Battery 2’s.",
      "Battery 2’s voltage increases from hour 24 to hour 25.",
      "Battery 1’s voltage drops below 3.40V."
    ],
    visualType: "line-chart",
    chartData: {
      xLabel: "Hour", yLabel: "Voltage (V)",
      series: [
        {name:"Battery 1",color:"#2c3e50",data:[[0,4.20],[1,4.17],[2,4.14],[3,4.11],[4,4.08],[5,4.05],[6,4.02],[7,3.99],[8,3.96],[9,3.93],[10,3.90],[11,3.87],[12,3.84],[13,3.81],[14,3.78],[15,3.75],[16,3.72],[17,3.69],[18,3.66],[19,3.63],[20,3.60],[21,3.57],[22,3.54],[23,3.51]]},
        {name:"Battery 2",color:"#e74c3c",data:[[0,4.00],[1,3.95],[2,3.98],[3,3.90],[4,3.85],[5,3.88],[6,3.82],[7,3.78],[8,3.80],[9,3.74],[10,3.70],[11,3.73],[12,3.68],[13,3.64],[14,3.67],[15,3.62],[16,3.58],[17,3.61],[18,3.56],[19,3.52],[20,3.55],[21,3.50],[22,3.46],[23,3.44]]}
      ]
    },
    note: "B1 has always been above B2 (gap ~0.07–0.20V). At hour 23: B1=3.51V, B2=3.44V. B1 declines ~0.03V/hr so hour 25 ≈ 3.45V. B2 continues to ~3.40V. B1>B2 likely ~80%. B2 increased in 7/23 transitions (~30%) due to regenerative bumps. B1 at hour 25 ≈ 3.45V, well above 3.40V. Dropping below 3.40 in one step is unlikely ~5%.",
    category: "Time series analysis",
    technique: "Trend extrapolation with noise analysis"
  },

  {
    id: "lb-16",
    text: "A trader tracks two stocks over 30 trading days. Stock X is a stable utility company. Stock Y is a volatile tech startup. Both started at $100.\n\nRank the following predictions for the next 20 trading days.",
    statements: [
      "Stock X ends higher than its current price ($115.80).",
      "Stock Y exceeds $115 at some point.",
      "Stock X experiences a single-day drop of more than $2."
    ],
    visualType: "line-chart",
    chartData: {
      xLabel: "Trading Day", yLabel: "Price ($)",
      series: [
        {name:"Stock X",color:"#2c3e50",data:[[0,100],[1,100.5],[2,101.2],[3,101.8],[4,102.5],[5,103],[6,103.8],[7,104.2],[8,104.8],[9,105.5],[10,106],[11,106.8],[12,107.2],[13,107.8],[14,108.5],[15,109],[16,109.5],[17,110.2],[18,110.8],[19,111.5],[20,112],[21,112.5],[22,113.2],[23,113.8],[24,114],[25,114.5],[26,114.8],[27,115.2],[28,115.5],[29,115.8]]},
        {name:"Stock Y",color:"#e74c3c",data:[[0,100],[1,103],[2,97],[3,105],[4,98],[5,107],[6,95],[7,110],[8,92],[9,108],[10,96],[11,112],[12,90],[13,106],[14,94],[15,111],[16,88],[17,104],[18,93],[19,109],[20,91],[21,107],[22,95],[23,113],[24,89],[25,105],[26,93],[27,110],[28,96],[29,100]]}
      ]
    },
    note: "Stock X trends up ~$0.5/day with near-zero volatility. In 20 more days: ~$125.80. Very likely to exceed $115.80 ~85%. Stock Y swings ±10 around $100. Its max was $113. In 20 more days it may swing higher; P(hitting $115)≈30%. Stock X has never dropped more than ~$0.5 in a day. A $2+ drop would be unprecedented for this stock ~5%.",
    category: "Financial data analysis",
    technique: "Trend and volatility analysis"
  },

  {
    id: "lb-17",
    text: "A retail analyst reviews a company’s monthly revenue ($k) over two years. There is a clear seasonal pattern with peaks in November–December.\n\nRank the following predictions for the third year.",
    statements: [
      "Revenue in the next January is below $100k.",
      "Total annual revenue in Year 3 exceeds Year 2.",
      "At least one month in Year 3 exceeds $175k."
    ],
    visualType: "line-chart",
    chartData: {
      xLabel: "Month", yLabel: "Revenue ($k)",
      series: [
        {name:"Revenue",color:"#8e44ad",data:[[1,80],[2,75],[3,70],[4,85],[5,95],[6,100],[7,90],[8,85],[9,95],[10,110],[11,130],[12,150],[13,85],[14,80],[15,75],[16,90],[17,100],[18,110],[19,95],[20,90],[21,100],[22,120],[23,140],[24,160]]}
      ]
    },
    note: "January revenues: Y1=$80k, Y2=$85k. Always well below $100k ~90%. Y1 total=$1165k, Y2 total=$1245k (7% growth). If trend continues, Y3≈$1330k. Likely but not guaranteed ~65%. Y2 peak was $160k (Dec). With 7% growth, Y3 Dec≈$171k. Reaching $175k requires exceeding the trend slightly ~25%.",
    category: "Time series analysis",
    technique: "Seasonal decomposition and trend extrapolation"
  },

  // === SCATTER PLOT QUESTIONS (3) ===

  {
    id: "lb-18",
    text: "Two classes take the same final exam. Class A uses structured practice problems, Class B uses self-directed study. The scatter plot shows each student’s study hours vs. their exam grade.\n\nRank the following.",
    statements: [
      "A student from Class A who studied 8+ hours scores above 85.",
      "A randomly selected Class B student scores higher than a randomly selected Class A student.",
      "A Class B student scores above 90."
    ],
    visualType: "scatter-plot",
    chartData: {
      xLabel: "Hours Studied", yLabel: "Exam Grade",
      groups: [
        {name:"Class A",color:"#2980b9",points:[[2,55],[3,62],[4,68],[5,74],[6,80],[7,85],[8,90],[9,93],[10,96],[12,99]]},
        {name:"Class B",color:"#e74c3c",points:[[1,70],[3,45],[4,85],[5,60],[6,90],[7,50],[8,75],[9,95],[10,40],[11,80]]}
      ]
    },
    note: "Class A shows strong positive correlation. Students with 8+ hours scored 90, 93, 96, 99 — all above 85 ~90%. Class A avg 80.2, Class B avg 69. A random B student beating a random A student requires overcoming an 11-point mean gap. P≈35%. Only 1 out of 10 Class B students scored above 90 (the student at 9hrs who got 95) → P≈10%.",
    category: "Conditional probability from data",
    technique: "Correlation-based prediction"
  },

  {
    id: "lb-19",
    text: "An engineer analyzes vehicle performance data. Three vehicle types are plotted: speed (km/h) vs. fuel efficiency (mpg).\n\nA vehicle is randomly selected from the dataset. Rank the following.",
    statements: [
      "If the vehicle travels above 85 km/h, it is a sports car.",
      "If the vehicle has fuel efficiency above 25 mpg, it is a sedan.",
      "The vehicle is an SUV."
    ],
    visualType: "scatter-plot",
    chartData: {
      xLabel: "Speed (km/h)", yLabel: "Fuel Efficiency (mpg)",
      groups: [
        {name:"Sedan",color:"#3498db",points:[[60,32],[70,28],[80,25],[65,30],[75,27],[85,23],[55,34],[90,22]]},
        {name:"SUV",color:"#27ae60",points:[[50,20],[60,18],[70,15],[55,19],[65,17],[75,14],[80,13],[85,12]]},
        {name:"Sports Car",color:"#e74c3c",points:[[80,28],[90,22],[100,18],[95,20],[105,16],[110,14],[70,30],[115,12]]}
      ]
    },
    note: "Above 85 km/h: Sports cars at 90,95,100,105,110,115 = 6. Sedan at 90 = 1. SUV at 85 = 1 (borderline). P(sports|>85) = 6/8 ≈ 75%. Wait, >85 strict: sports 90,95,100,105,110,115=6, sedan 90=1, SUV none. 6/7≈86%. Above 25 mpg: Sedan 32,28,30,27,34=5. Sports 28,30=2. SUV=0. P(sedan|>25mpg) = 5/7 ≈ 71%. Random SUV: 8 of each type = 8/24 = 33%.",
    category: "Conditional probability from data",
    technique: "Cluster-based conditional frequency"
  },

  {
    id: "lb-20",
    text: "A company analyzes employee performance. Department A uses a structured training program. Department B uses ad-hoc mentoring. The scatter plot shows years of experience vs. annual sales ($k).\n\nRank the following.",
    statements: [
      "A new Dept A employee with 7 years experience has sales above $250k.",
      "A randomly selected Dept B employee has sales above $250k.",
      "A Dept B employee with 2 years experience has sales above $300k."
    ],
    visualType: "scatter-plot",
    chartData: {
      xLabel: "Years of Experience", yLabel: "Annual Sales ($k)",
      groups: [
        {name:"Department A",color:"#2980b9",points:[[2,150],[3,180],[4,210],[5,240],[6,260],[7,290],[8,310],[9,340],[10,370],[12,400]]},
        {name:"Department B",color:"#e74c3c",points:[[1,300],[3,150],[4,350],[5,200],[6,400],[7,100],[8,280],[9,350],[10,180],[11,320]]}
      ]
    },
    note: "Dept A has near-perfect positive correlation. At 7 years: $290k. P(>$250k) ~90%. Dept B has no correlation — values scatter from $100–$400k. Above $250k: 300,350,400,280,350,320 = 6/10 = 60%. Dept B at 2 years experience: no correlation means experience doesn’t predict. P(>$300k) is just the base rate for B above $300k: 350,400,350,320 = 4/10 = 40%. But a single employee could be anywhere. ~30%.",
    category: "Conditional probability from data",
    technique: "Correlation strength and prediction intervals"
  },

  // === BAR CHART QUESTIONS (3) ===

  {
    id: "lb-21",
    text: "A sales manager reviews quarterly sales data for three products. Product A is a staple item, Product B is a new product gaining traction, and Product C is a legacy product being phased out.\n\nRank the following predictions for Q5.",
    statements: [
      "Product B’s Q5 sales exceed its Q1 sales.",
      "Product C’s Q5 sales are less than 35 units.",
      "Total sales of all three products exceed 180 units."
    ],
    visualType: "bar-chart",
    chartData: {
      xLabel: "Quarter", yLabel: "Units Sold",
      categories: ["Q1","Q2","Q3","Q4"],
      series: [
        {name:"Product A",color:"#3498db",values:[55,52,58,54]},
        {name:"Product B",color:"#27ae60",values:[30,40,55,70]},
        {name:"Product C",color:"#e74c3c",values:[80,65,45,30]}
      ]
    },
    note: "Product B grew from 30→70 over 4 quarters (+∼13/quarter). Q5 likely ~83. Exceeding Q1 (30) is almost certain ~95%. Product C dropped from 80→30 (-∼17/quarter). Q5 likely ~13. Below 35 is very likely ~85%. Total in Q4: 54+70+30=154. Q5: ~54+83+13=150. Exceeding 180 requires substantial deviation from trends ~10%.",
    category: "Trend extrapolation",
    technique: "Linear trend projection"
  },

  {
    id: "lb-22",
    text: "A meteorologist compares monthly rainfall (mm) for three cities over 12 months. City A has a Mediterranean climate, City B is tropical, and City C is continental.\n\nRank the following predictions for next July.",
    statements: [
      "City C receives the most rainfall of the three cities.",
      "City B receives more than 60 mm.",
      "City A receives more than 30 mm."
    ],
    visualType: "bar-chart",
    chartData: {
      xLabel: "Month", yLabel: "Rainfall (mm)",
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      series: [
        {name:"City A",color:"#e74c3c",values:[90,80,65,50,35,25,15,20,35,55,75,88]},
        {name:"City B",color:"#3498db",values:[60,55,70,80,90,85,75,80,70,65,58,62]},
        {name:"City C",color:"#27ae60",values:[40,45,55,70,85,100,110,105,85,60,45,42]}
      ]
    },
    note: "In July: City A=15mm (dry summer), City B=75mm (moderate year-round), City C=110mm (summer peak). C is clearly the highest ~90%. City B July=75mm. B is fairly consistent (55–90mm range). P(>60mm) ~80%. City A July=15mm. Mediterranean summers are very dry. P(>30mm) ~10%.",
    category: "Seasonal pattern analysis",
    technique: "Climate pattern recognition"
  },

  {
    id: "lb-23",
    text: "Three marathon runners’ split times (minutes per 10 km segment) are shown for the first four segments. They are about to run the final segment.\n\nRank the following predictions for Split 5.",
    statements: [
      "Runner B’s split is faster (lower) than Runner A’s.",
      "Runner C’s split is between 47 and 50 minutes.",
      "Runner A’s split is under 48 minutes."
    ],
    visualType: "bar-chart",
    chartData: {
      xLabel: "Segment", yLabel: "Split Time (min)",
      categories: ["Split 1","Split 2","Split 3","Split 4"],
      series: [
        {name:"Runner A",color:"#e74c3c",values:[45,47,49,52]},
        {name:"Runner B",color:"#3498db",values:[50,49,48,47]},
        {name:"Runner C",color:"#27ae60",values:[48,48,49,48]}
      ]
    },
    note: "Runner A is slowing down (+2 min/split trend → Split 5 ≈ 54 min). Runner B is speeding up (-1/split → Split 5 ≈ 46 min). B faster than A is very likely ~90%. Runner C is extremely consistent (48–49 min). P(47–50 min) ~85%. Runner A at under 48 would reverse a strong slowing trend (45→52). Very unlikely ~5%.",
    category: "Trend extrapolation",
    technique: "Monotonic trend recognition"
  },

  // === CARTESIAN / SPECIAL (2) ===

  {
    id: "lb-24",
    text: "Two particles are located at positions (3, 1) and (4, 4) on the Cartesian plane. Every second, each particle independently moves one unit in one of the four cardinal directions (Up, Down, Left, Right) with equal probability.\n\nRank the following events over the next 64 seconds.",
    statements: [
      "At least one particle leaves the first quadrant (where x > 0 and y > 0).",
      "Particle 2 is at a position where x > 12.",
      "Particle 1 is at a position where x > 12 and y > 12."
    ],
    visualType: "scatter-plot",
    chartData: {
      xLabel: "X", yLabel: "Y",
      groups: [
        {name:"Particle 1",color:"#2c3e50",points:[[3,1]]},
        {name:"Particle 2",color:"#e74c3c",points:[[4,4]]}
      ],
      xRange: [0,10], yRange: [0,10]
    },
    note: "After 64 steps, each coordinate has SD = √64 = 8. Particle 1 at (3,1): P(Y≤0) = P(Z<−1/8) ≈ 45%. P1 leaving is very likely; at least one leaving ≈ 83%. Particle 2 X>12: needs +8 from x=4. P(Z>8/8) = P(Z>1) ≈ 16%. Particle 1 X>12 AND Y>12: P(X>12)=P(Z>9/8)≈13%, P(Y>12)=P(Z>11/8)≈8.5%. P(both)≈1.1%.",
    category: "Random walks",
    technique: "Normal approximation to random walk"
  },

  {
    id: "lb-25",
    text: "A researcher observes a random experiment where 5 people each independently choose their favorite day of the week (7 days total), uniformly at random.\n\nRank the following.",
    statements: [
      "At least two people choose the same day.",
      "At least one person chooses Monday.",
      "All 5 people choose weekdays (Monday–Friday) and all choose different days."
    ],
    visualType: "none", visualData: null,
    note: "P(all different) = (7×6×5×4×3)/7⁵ = 2520/16807 ≈ 15.0%. P(≥2 same) = 85.0%. P(at least one Monday) = 1−(6/7)⁵ = 1−0.463 = 53.7%. P(all choose different weekdays) = 5!/7⁵ = 120/16807 ≈ 0.71%. Order: 85% > 54% > 0.7%.",
    category: "Combinatorics",
    technique: "Birthday problem variant"
  }
];
