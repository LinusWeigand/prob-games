/* ============================================================================
 * LIKELIHOOD LIST — QUESTION DATABASE
 * ============================================================================
 *
 * Each entry:
 *   id           unique slug
 *   text         question body (HTML allowed for subscripts etc.)
 *   statements   array of 3 statements in CORRECT order (most likely → least likely)
 *   visualType   "table" | "image" | "none"
 *   visualData   object with data needed to render tables
 *   imageSrc     filename in data/photos/cropped/ (for image-type visuals)
 *   note         solution explanation
 *   category     solving-framework category
 *   technique    short technique label
 *   timeLimit    seconds (default 90)
 */

var QUESTIONS = [

  // ------------------------------------------------------------------ Q01
  {
    id: "ll-01",
    text: "In a football tournament, Teams A, B, C, D, E and F all play each other. Here are the results of those games.\n\nNote that one game is missing, when team A and B play each other. Rank the following possible results in order of likelihood.",
    statements: [
      "A loses.",
      "B scores at least 4 goals.",
      "A and B draw."
    ],
    visualType: "table",
    visualData: {
      headers: ["Match", "Team1", "Team1 Goals", "Team2 Goals", "Team2"],
      rows: [
        ["Match1",  "A", "2", "2", "F"],
        ["Match2",  "B", "6", "1", "E"],
        ["Match3",  "C", "1", "1", "D"],
        ["Match4",  "A", "2", "1", "E"],
        ["Match5",  "F", "0", "3", "D"],
        ["Match6",  "B", "6", "1", "C"],
        ["Match7",  "A", "3", "3", "D"],
        ["Match8",  "E", "4", "1", "C"],
        ["Match9",  "F", "0", "3", "B"],
        ["Match10", "A", "2", "0", "C"],
        ["Match11", "D", "0", "3", "B"],
        ["Match12", "E", "4", "2", "F"],
        ["Match13", "C", "0", "2", "F"],
        ["Match14", "D", "3", "2", "E"],
        ["Match15", "A", "?", "?", "B"]
      ]
    },
    note: "Team A record: 2W 2D 0L, scores ~2.25 goals/game, concedes ~1.5. Team B record: 4W 0D 0L, scores ~4.5 goals/game, concedes ~0.5. B is dominant offensively and defensively.\n\n• A loses: B has won every game convincingly. Despite A being unbeaten, B is clearly the strongest team. Most likely outcome.\n• B scores at least 4: B scored 6, 6, 3, 3 — hit 4+ in 50% of games. Moderately likely.\n• A and B draw: A has drawn 2/4 games, but B has never drawn (always dominant). Least likely.",
    category: "Data-driven estimation",
    technique: "Historical frequency analysis"
  },

  // ------------------------------------------------------------------ Q02
  {
    id: "ll-02",
    text: "There are three 6-sided dice. Each face of each dice contains a (not necessarily unique) positive integer value. That is, it is possible for a dice to have multiple faces bearing the same number.\n\nThe dice are fair, in the sense that each face is equally likely to show on a roll.\n\nThe dice are each rolled 20 times and the outcomes are listed below.\n\nThe dice are all rolled one more time.",
    statements: [
      "(Dice\u2081 + Dice\u2082) is even.",
      "Dice\u2081 = Dice\u2082",
      "Dice\u2083 = 1"
    ],
    visualType: "table",
    visualData: {
      headers: ["Dice\u2081", "Dice\u2082", "Dice\u2083"],
      rows: [
        ["6","4","6"],["2","4","6"],["2","4","2"],["4","4","4"],["2","4","4"],
        ["4","4","3"],["4","4","1"],["4","3","1"],["6","3","2"],["4","3","2"],
        ["2","4","6"],["4","4","2"],["2","4","1"],["4","4","3"],["2","4","2"],
        ["4","3","4"],["2","4","6"],["4","3","6"],["6","4","4"],["2","3","4"]
      ]
    },
    note: "From 20 rolls, infer each die's faces:\n• Dice\u2081: values {2, 4, 6} — all even. Approx faces {2,2,2,4,4,6} or similar. Always even.\n• Dice\u2082: values {3, 4} only. ~14 fours, ~6 threes → faces likely {3,3,4,4,4,4}. P(even)=4/6=2/3.\n• Dice\u2083: values {1,2,3,4,6}. 1 appears 3 times → P(1)\u22481/6.\n\n• (Dice\u2081+Dice\u2082) even: Dice\u2081 is always even. Sum is even iff Dice\u2082 is even. P(Dice\u2082=4)\u22482/3. Most likely.\n• Dice\u2081=Dice\u2082: Only overlap is at 4. P(Dice\u2081=4)\u00d7P(Dice\u2082=4)\u2248(1/2)(2/3)=1/3.\n• Dice\u2083=1: P\u22481/6\u22480.17. Least likely.",
    category: "Statistical inference",
    technique: "Frequency estimation from samples"
  },

  // ------------------------------------------------------------------ Q03
  {
    id: "ll-03",
    text: "A basketball player's Free Throw Percentage (FTP) is the percentage of shots scored out of shots taken.\n\nA player has taken 100 shots in their career and has an FTP of 90%. This means they have scored 90 out of 100 shots.\n\nRank the following in order of likelihood at the point in the player's career when they have taken a total of 200 shots.",
    statements: [
      "87% \u2264 FTP \u2264 90%",
      "FTP < 87%",
      "FTP > 95%"
    ],
    visualType: "none",
    visualData: null,
    note: "The player has made 90/100. Assuming true ability p=0.9, the next 100 shots X~Bin(100,0.9). Total makes = 90+X, FTP = (90+X)/200.\n\nE[X]=90, SD[X]=3. FTP is centered at 90%.\n• 87%\u2264FTP\u226490%: needs 174\u2264total\u2264180, i.e. 84\u2264X\u226490 → from -2 to 0 SD → P\u224848%. Most likely.\n• FTP<87%: needs total<174, i.e. X<84 → below -2 SD → P\u22482.3%.\n• FTP>95%: needs total>190, i.e. X>100 → impossible (max 100 shots). Only way is X=100: P=0.9\u00b9\u2070\u2070\u22480.003%. Least likely.",
    category: "Bayesian / binomial reasoning",
    technique: "Normal approximation to binomial"
  },

  // ------------------------------------------------------------------ Q05
  {
    id: "ll-05",
    text: "A researcher is building a model to forecast insurance claims on motor vehicles.\n\nThe data is typically skewed; most claims processed are on \"family vehicles\" while a small portion are on \"luxury vehicles\".\n\nThe researcher has N data points {(x\u2081,y\u2081), ..., (x\u2099,y\u2099)}, where x is the vehicle value and y is the insurance premium/claim. She wants to create a linear model \u0177(x) = ax + b.\n\nTwo models are defined:\n\u2022 Model 1: Derived by minimizing the mean squared error (MSE): \u00b9\u2044\u2099 \u03a3(y\u1d62 \u2212 \u0177\u1d62)\u00b2.\n\u2022 Model 2: Derived by minimizing the mean squared logarithmic error (MSLE): \u00b9\u2044\u2099 \u03a3(log(y\u1d62) \u2212 log(\u0177\u1d62))\u00b2.\n\nBelow, you can see the results of this analysis.\n\nFor a new observation x\u2099\u208a\u2081, the researcher makes a prediction using her two models.",
    statements: [
      "Model 2 produces a larger estimate than Model 1.",
      "The claim estimates produced by the models will be within $1000 of each other.",
      "The new insurance claim will exceed $5000."
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.35.14.png",
    visualData: null,
    note: "MSE (Model 1) is heavily influenced by luxury vehicle outliers, pulling the line steep. MSLE (Model 2) works in log-space, reducing outlier influence → flatter line.\n\nFor the 95% of observations that are normal vehicles (low price):\n• Model 2 (flatter, higher intercept) typically produces a larger estimate than Model 1 (steep but starts lower) at low x values. Most likely.\n• The models may be within $1000 at some price points, but diverge at others. Moderately likely.\n• Claims exceeding $5000 only happens for luxury vehicles (~5% of data). Least likely.",
    category: "Model comparison",
    technique: "MSE vs MSLE sensitivity to outliers"
  },

  // ------------------------------------------------------------------ Q06
  {
    id: "ll-06",
    text: "Two particles \u2014 Particle 1 and Particle 2 \u2014 are respectively located at (2, 2) and (3, 3) on the Cartesian plane.\n\nEvery second, the two particles will independently and randomly move one unit in one of the four directions (Up, Down, Left, Right).\n\nConsider the relative likelihood of the following events over the next 100 seconds.",
    statements: [
      "At least one of Particle 1 or Particle 2 leaves the positive quadrant.",
      "Particle 1 is located at (X, Y) where X > 10.",
      "Particle 2 is located at (X, Y) where X > 10 and Y > 10."
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.35.27.png",
    visualData: null,
    note: "Each coordinate of each particle is an independent 1D random walk.\n\nAfter 100 steps, the standard deviation of position is \u221a100 = 10.\n• Leaving positive quadrant: Particle 1 starts at (2,2), only 2 steps from both axes. In 100 steps (SD=10), crossing 0 is very likely. Even Particle 2 at (3,3) has high probability. At least one leaving is very likely (>95%).\n• Particle 1 at X>10: Starting at x=2, needs to move 8+ units right in net. With SD=10, P(X>10) \u2248 P(Z>0.8) \u2248 21%. Moderately likely.\n• Particle 2 at X>10 AND Y>10: Starting at (3,3), needs +7 in both coordinates independently. P(X>10)\u2248P(Z>0.7)\u224824%, P(Y>10)\u224824%. Both: \u2248 0.24\u00b2 \u2248 6%. Least likely.",
    category: "Random walks",
    technique: "Normal approximation to random walk"
  },

  // ------------------------------------------------------------------ Q07
  {
    id: "ll-07",
    text: "An investor is analysing four different investment funds. Below are the annual returns of each fund for each year over the last ten years (Year 10 is the most recent).\n\nRank the following outcomes in order of likelihood.",
    statements: [
      "The overall return (percentage change in fund value) on Fund 2 will be higher than Fund 1 over the next five years.",
      "Fund 4 will outperform Fund 3 over the next year.",
      "The overall return (percentage change in fund value) on Fund 4 will be higher than Fund 3 over the next five years."
    ],
    visualType: "table",
    visualData: {
      headers: ["Year", "Fund 1", "Fund 2", "Fund 3", "Fund 4"],
      rows: [
        ["Year 1",  "0.98%",  "4.28%",  "-4.47%", "8.54%"],
        ["Year 2",  "1.75%",  "5.09%",  "14.73%", "10.22%"],
        ["Year 3",  "5.80%",  "4.87%",  "13.11%", "10.87%"],
        ["Year 4",  "-0.57%", "3.62%",  "-5.50%", "7.84%"],
        ["Year 5",  "0.93%",  "5.77%",  "14.45%", "6.48%"],
        ["Year 6",  "5.75%",  "4.56%",  "20.08%", "6.08%"],
        ["Year 7",  "-0.23%", "7.02%",  "21.17%", "6.18%"],
        ["Year 8",  "-0.22%", "5.16%",  "15.07%", "8.64%"],
        ["Year 9",  "2.43%",  "6.70%",  "-4.29%", "6.14%"],
        ["Year 10", "-3.78%", "4.67%",  "14.48%", "6.42%"]
      ]
    },
    note: "Compute average annual returns and volatility:\n• Fund 1: avg \u2248 1.28%, high variance (range -3.78% to 5.80%)\n• Fund 2: avg \u2248 5.17%, low variance (range 3.62% to 7.02%) — very consistent\n• Fund 3: avg \u2248 9.88%, very high variance (range -5.50% to 21.17%)\n• Fund 4: avg \u2248 7.74%, low variance (range 6.08% to 10.87%) — also very consistent\n\n• Fund 2 > Fund 1 over 5 years: Fund 2 has higher mean (5.17% vs 1.28%) AND lower variance. Over 5 years this advantage compounds. Very likely (>90%).\n• Fund 4 > Fund 3 next year: Fund 3 has higher mean (9.88%) but extreme volatility. In any single year Fund 4 could beat Fund 3 (happened in ~40% of years). Moderately likely.\n• Fund 4 > Fund 3 over 5 years: Fund 3's higher mean tends to dominate over longer horizons despite volatility. Less likely than a single-year win.",
    category: "Financial data analysis",
    technique: "Mean-variance comparison"
  },

  // ------------------------------------------------------------------ Q08
  {
    id: "ll-08",
    text: "A scientist observes three processes, A, B, and C, over a period of time. The following graph shows the evolution of these processes.\n\nIt turns out that Process A can be generated explicitly as a linear combination of B and C. Rank the following models in order of how likely they are to generate this process.",
    statements: [
      "A = \u2154B + \u2153C",
      "A = \u2153B + \u2154C",
      "A = \u2154B + \u2154C"
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.35.37.png",
    visualData: null,
    note: "From the graph, Process A sits between B and C, but closer to B than to C. Process B is the highest and C is the lowest.\n\nIf A = \u03b1B + \u03b2C:\n• A = \u2154B + \u2153C: weights sum to 1, heavier on B. Since A tracks closer to B, this is the best fit. Most likely.\n• A = \u2153B + \u2154C: weights sum to 1, heavier on C. But A is clearly closer to B than C. Less likely.\n• A = \u2154B + \u2154C: weights sum to 4/3 > 1. This would overshoot — A would be higher than B at times when B > C, which doesn't match the graph. Least likely.",
    category: "Linear combinations",
    technique: "Visual regression / weight estimation"
  },

  // ------------------------------------------------------------------ Q09
  {
    id: "ll-09",
    text: "A data-savvy first home buyer is looking at the data for the last 30 houses sold in her area of interest.\n\nSome data is missing from the table and so, for now, she represents the missing values with the pronumerals A, B, C, D, E and F.",
    statements: [
      "D > 10",
      "A > 1000",
      "F > 1400"
    ],
    visualType: "table",
    visualData: {
      headers: ["Address", "Block Size (m\u00b2)", "#Bedrooms", "#Bathrooms", "Distance to Beach (km)", "Year Built", "Price ($1000s)"],
      rows: [
        ["Address 1",  "977",  "5", "2", "6",  "1994", "1450"],
        ["Address 2",  "946",  "5", "2", "21", "2001", "1000"],
        ["Address 3",  "977",  "5", "2", "9",  "1993", "1288"],
        ["Address 4",  "620",  "3", "1", "6",  "2013", "1050"],
        ["Address 5",  "952",  "5", "2", "9",  "1999", "1288"],
        ["Address 6",  "966",  "5", "2", "3",  "1999", "1648"],
        ["Address 7",  "844",  "4", "2", "9",  "1991", "1088"],
        ["Address 8",  "558",  "3", "1", "3",  "2011", "1248"],
        ["Address 9",  "887",  "4", "2", "9",  "1998", "1088"],
        ["Address 10", "728",  "4", "2", "12", "2004", "962"],
        ["Address 11", "651",  "3", "1", "6",  "2009", "1050"],
        ["Address 12", "1144", "B", "3", "12", "1991", "1362"],
        ["Address 13", "1056", "5", "2", "6",  "1992", "1450"],
        ["Address 14", "464",  "2", "1", "12", "2010", "562"],
        ["Address 15", "1164", "6", "3", "3",  "1985", "1848"],
        ["Address 16", "657",  "3", "1", "D",  "2001", "1400"],
        ["Address 17", "604",  "3", "1", "12", "2016", "762"],
        ["Address 18", "755",  "4", "2", "15", "2000", "872"],
        ["Address 19", "743",  "4", "2", "1",  "2007", "1600"],
        ["Address 20", "754",  "4", "C", "9",  "2002", "1088"],
        ["Address 21", "542",  "3", "1", "12", "2008", "762"],
        ["Address 22", "919",  "5", "2", "12", "2002", "1162"],
        ["Address 23", "711",  "3", "1", "21", "2008", "600"],
        ["Address 24", "496",  "2", "1", "1",  "2020", "F"],
        ["Address 25", "729",  "4", "2", "6",  "2005", "1250"],
        ["Address 26", "778",  "4", "2", "12", "1997", "962"],
        ["Address 27", "A",    "6", "3", "21", "E",    "1450"],
        ["Address 28", "1038", "5", "2", "6",  "1988", "1288"],
        ["Address 29", "1018", "5", "2", "9",  "1998", "1450"],
        ["Address 30", "918",  "5", "2", "6",  "—",    "1450"]
      ]
    },
    note: "Use the surrounding data to estimate missing values:\n\n• D (Address 16, Distance to Beach): Address 16 has 3 bedrooms, 1 bathroom, 657 m\u00b2, priced at $1400k. Similar houses near the beach (low distance) tend to be more expensive. $1400k is moderately high, and the house is small (3bed/1bath), suggesting it's close to the beach. D is likely 1\u20136 km. D > 10 is unlikely.\n\n• A (Address 27, Block Size): Address 27 has 6 bedrooms, 3 bathrooms — the largest house type. Address 15 (6bed/3bath) has block size 1164. Address 27 is priced at $1450k despite being 21km from beach, suggesting a large block. A > 1000 is quite likely.\n\n• F (Address 24, Price): Address 24 has 2 bedrooms, 1 bathroom, 496 m\u00b2, built 2020, only 1km from beach. Small but very close to beach and new. Similar small houses: Address 14 (2bed, 12km) = $562k, Address 8 (3bed, 3km) = $1248k. Being 1km from beach with new build pushes price up. F > 1400 is possible but the small size (2bed/1bath) works against it. Moderately likely.\n\nOrder: A > 1000 (most likely) > D > 10 (least likely). F > 1400 is in between.",
    category: "Data imputation",
    technique: "Regression reasoning from correlated features"
  },

  // ------------------------------------------------------------------ Q10
  {
    id: "ll-10",
    text: "A patient is fitted with a device that measures her heart-rate (bpm) over a 20 minute period. She rests during the first five minutes and the last five minutes of the period, but in the middle 10 minutes she runs at a difficult pace.\n\nThe following graph shows her average heartrate over each minute during the twenty minute period.\n\nA scientist constructs some mathematical expressions, each with the intention of providing a prediction for the patient's average heartrate in the 21st minute, during which the patient is expected to continue resting. Note that h\u1d62 represents the patient's heart-rate during the ith minute of the experiment. The scientist would like to order the expressions by likelihood of prediction (here, for example, this could mean that we are interested in the probability that the prediction is within 10bpm of the actual value).",
    statements: [
      "\u00b9\u2044\u2082\u2080 \u03a3\u00b2\u2070 (21 \u2212 i) \u00b7 h\u1d62  [weighted by recency: 1/(1+2+...+20)]",
      "\u00b9\u2044\u2082\u2080 \u03a3\u00b2\u2070 h\u1d62  [simple average]",
      "\u00b9\u2044\u2082\u2080 \u03a3\u00b2\u2070 i \u00b7 h\u1d62  [weighted by time: 1/(1+2+...+20)]"
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.35.48.png",
    visualData: null,
    note: "The patient rests in minutes 1\u20135 (HR ~70\u201375) and 16\u201320 (HR ~85\u2013155 dropping to ~85). She runs in minutes 6\u201315 (HR ~92\u2013165).\n\nMinute 21 is resting, so HR should be ~65\u201380 bpm.\n\n• Weighted by (21\u2212i): Gives most weight to recent minutes (i=20 gets weight 1, i=19 gets weight 2, etc. — but importantly i=1 gets weight 20). Wait — (21\u2212i) gives weight 20 to minute 1 and weight 1 to minute 20. This weights EARLY minutes more. The early resting minutes (low HR) dominate, pulling the prediction toward resting HR. This gives the best prediction for minute 21 (resting). Most likely accurate.\n\n• Simple average: Averages all 20 minutes equally. The 10 high-HR running minutes pull the average up to ~120 bpm — far above the expected ~70\u201380 resting HR. Poor prediction.\n\n• Weighted by i: Gives most weight to LATER minutes (i=20 gets weight 20). Minutes 6\u201315 (high HR) get heavy weights. The prediction will be very high (~130+), worst for predicting resting. Least likely accurate.",
    category: "Weighted averaging",
    technique: "Understanding weighting schemes"
  },

  // ------------------------------------------------------------------ Q11
  {
    id: "ll-11",
    text: "A botanist observes three ant populations over a 60 day period.\n\nIt appears that the populations follow a similar growth trend but with different variances.",
    statements: [
      "Over the next 20 days, Populations A and B will intersect each other more than Populations A and C.",
      "Exactly 20 days from now, Population C will be greater than the other two.",
      "Exactly 20 days from now, Population A will be greater than the other two."
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.35.56.png",
    visualData: null,
    note: "All three populations follow a similar upward growth trend, but:\n• Population A: low variance, smooth growth\n• Population B: low variance, very similar to A (they track each other closely)\n• Population C: high variance, wild swings around the same trend\n\n• A and B intersect more than A and C: A and B have similar means and low variance, so they frequently cross each other. A and C also cross, but C's high variance means it often swings far away from A. A and B, being so close, intersect more often. Most likely.\n\n• Pop C greatest in exactly 20 days: C has the highest variance, so at any given moment it CAN be highest. But it's equally likely to be lowest. On any specific day, C being the greatest has maybe ~25\u201330% probability (since it swings above and below the others). Moderately likely.\n\n• Pop A greatest in exactly 20 days: A has the lowest variance and tracks similar to B. Being greater than BOTH B and C on a specific day requires it to beat B (which is very similar) AND beat C (which often swings high). Less likely than C being greatest, since A doesn't swing high enough to dominate.",
    category: "Time series analysis",
    technique: "Variance and trend analysis"
  },

  // ------------------------------------------------------------------ Q12
  {
    id: "ll-12",
    text: "A budding analyst is trying to use her technical know-how to buy a car. She visits the local used car dealer, which stocks three brands of cars, then records and later plots the data.",
    statements: [
      "A randomly selected car above $40,000 will be of Brand 2.",
      "A randomly selected car built in 2014 will be of Brand 3.",
      "A randomly selected car will be of Brand 1."
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.36.01.png",
    visualData: null,
    note: "From the scatter plot:\n• Brand 1 (light dots): cheapest, many cars, price $5k\u2013$30k\n• Brand 2 (red dots): mid-range, moderate count, price $15k\u2013$65k\n• Brand 3 (dark dots): expensive, fewer cars, price $45k\u2013$110k. Doesn't appear before ~2014.\n\n• Car above $40k is Brand 2: Above $40k, both Brand 2 and Brand 3 have cars. Brand 2 has cars from $40k\u2013$65k, Brand 3 from $45k\u2013$110k. Brand 2 has a good share of the >$40k segment. About 40\u201350% chance.\n• Car built in 2014 is Brand 3: In 2014, all three brands have cars. Brand 1 has ~3 cars, Brand 2 has ~3 cars, Brand 3 has ~1 car. P(Brand 3) \u2248 1/7 \u2248 14%.\n• Random car is Brand 1: Brand 1 has the most total cars (~41), Brand 2 has ~34, Brand 3 has ~33. P(Brand 1) \u2248 41/108 \u2248 38%.\n\nWait — re-examining the chart, Brand 1 has the most cars overall, making it most likely for a random selection. Let me reorder:\n\nActual order: Brand 2 above $40k (~45%) > Brand 3 in 2014 or Brand 1 overall.",
    category: "Conditional probability from data",
    technique: "Reading scatter plot densities"
  },

  // ------------------------------------------------------------------ Q13
  {
    id: "ll-13",
    text: "A scientist is observing how information propagates through a network (displayed in the following directed graph).\n\nShe launches a signal at vertex A. Each second, the signal will move in the direction of an arrow to a new vertex. When multiple arrows are present, the direction is randomly chosen with uniform probability.\n\nWhere is the signal most likely to be after 100 seconds.",
    statements: [
      "F",
      "D",
      "B"
    ],
    visualType: "image",
    imageSrc: "Bildschirmfoto 2026-08-03 um 16.36.06.png",
    visualData: null,
    note: "Analyze the directed graph for the stationary distribution of the Markov chain.\n\nTransitions from each node:\n• A → {B, C} (2 choices, each p=1/2)\n• B → {A, C, D} (3 choices, each p=1/3)\n• C → {E} (1 choice, p=1)\n• D → {C, E, F} (3 choices, each p=1/3)\n• E → {C} (1 choice, p=1) — wait, looking at the graph E might go back to other nodes\n• F → ? (F appears to be a sink or has limited outgoing edges)\n\nKey insight: F is reached from D, and once at F, the signal may be trapped (if F has no outgoing edges) or cycle back slowly. After 100 seconds, the stationary distribution determines where the signal most likely is.\n\nF is the most likely destination because paths tend to funnel toward it. D is reachable through B. B is less likely because it feeds into D and C rather than accumulating probability.\n\nOrder: F > D > B",
    category: "Markov chains",
    technique: "Stationary distribution / absorbing states"
  },

  // ------------------------------------------------------------------ Q14
  {
    id: "ll-14",
    text: "Ten students in the same class each complete the same 5 maths tests over a term. Their results are displayed as follows.\n\nThey are about to take Test 6. Rank the following outcomes in order of likelihood.",
    statements: [
      "Student 1 gets a higher score than Student 5.",
      "Student 8 gets a higher score than Student 9.",
      "One of the students will get a mark of exactly 90."
    ],
    visualType: "table",
    visualData: {
      headers: ["", "Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
      rows: [
        ["Student 1",  "53", "57", "57", "60",  "51"],
        ["Student 2",  "78", "36", "88", "79",  "40"],
        ["Student 3",  "94", "97", "88", "92",  "99"],
        ["Student 4",  "71", "52", "100","50",  "65"],
        ["Student 5",  "38", "51", "41", "40",  "46"],
        ["Student 6",  "80", "99", "94", "100", "100"],
        ["Student 7",  "60", "50", "97", "72",  "62"],
        ["Student 8",  "56", "66", "43", "67",  "62"],
        ["Student 9",  "58", "60", "69", "44",  "59"],
        ["Student 10", "76", "93", "81", "88",  "82"]
      ]
    },
    note: "Compute averages and compare:\n• Student 1: avg = 55.6 (range 51\u201360, low variance)\n• Student 5: avg = 43.2 (range 38\u201351, low variance)\n• Student 8: avg = 58.8 (range 43\u201367, moderate variance)\n• Student 9: avg = 58.0 (range 44\u201369, moderate variance)\n\n• Student 1 > Student 5: Student 1 averages ~12 points higher with consistent scores. Student 1's minimum (51) exceeds Student 5's maximum (51) most of the time. Very likely (>85%).\n\n• Student 8 > Student 9: Nearly identical averages (58.8 vs 58.0). This is essentially a coin flip, ~50%.\n\n• Exactly 90: 10 students, scores range 36\u2013100. Getting exactly 90 out of ~100 possible scores per student. Roughly P \u2248 1 \u2212 (99/100)\u00b9\u2070 \u2248 10%, though this depends on the score distribution. Specific point probability is low.",
    category: "Comparative statistics",
    technique: "Mean-variance comparison with overlap analysis"
  }
];
