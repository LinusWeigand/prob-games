/* ============================================================================
 * BEAT THE ODDS — QUESTION DATABASE
 * ============================================================================
 *
 * Loaded by beat-the-odds.html as a plain <script> (no modules, works on file://).
 *
 * Each entry:
 *   id       unique slug
 *   source   "Optiver" | "IMC"      <- the firm the question comes from
 *   origin   "photo"    the exact question + exact options were read off a
 *                       screenshot of the real assessment
 *            "recalled" the question was written down from memory afterwards;
 *                       the options below were reconstructed in the same style
 *   text     question body ("\n\n" = paragraph break, rendered as such)
 *   options  the 5 answer choices, in the same left-to-right / top-to-bottom
 *            order as the real 3x2 grid (the 6th cell is always "Skip")
 *   answer   index into options of the choice that is closest to the truth
 *   note     the actual value + how it is derived
 *
 * DUPLICATES
 * ----------
 * The recalled lists (optiver-2026, optiver-2025) and the screenshots overlap.
 * Where a question appears in both, the PHOTO wording + PHOTO options are kept
 * and the recalled copy was dropped. Merged this way:
 *   opt-p01 6 coins / at most 3 heads .......... photo + optiver-2026
 *   opt-p02 20-sided dice x5 ................... photo + optiver-2026
 *   opt-p03 six running sums, total sum ........ photo + optiver-2026 + optiver-2025
 *   opt-p04 10/10/10 counters, 3 diff colours .. photo + optiver-2026 + optiver-2025
 *   opt-p05 five dice, even sum ................ photo + optiver-2026
 *   opt-p06 watch, all angles > 90 deg ......... photo + optiver-2026
 *   opt-p07 two 3-digit numbers, diff 2-digit .. photo + optiver-2026
 *   opt-p08 four dice, top three sum to 18 ..... photo + optiver-2026
 *   opt-p09 biased coin gambler's ruin ......... photo + optiver-2026
 *   opt-p10 3 dice, subset sums to 5 ........... photo + optiver-2026
 *   opt-p11 13 cards, no Ace ................... photo + optiver-2026 + optiver-2025
 *   opt-p12 six dice, >= 3 of a kind ........... photo + optiver-2026
 *   opt-p15 two machines, 3 numbers each ....... photo + optiver-2025
 *   opt-r01 two-digit, ones > tens ............. optiver-2026 + optiver-2025
 *   opt-r02 two dice, difference > 2 ........... optiver-2026 + optiver-2025
 *   opt-r04 1..10000, all digits different ..... optiver-2026 + optiver-2025
 *   opt-r05 three 2-digit numbers sum .......... optiver-2026 + optiver-2025
 *   opt-r10 two distinct 1..9, sum >= 10 ....... optiver-2026 + optiver-2025
 *   opt-r21 1..1e6, contains a "7" ............. optiver-2026 + optiver-2025
 *   imc-04 / imc-05 are the 3-day and 4-day versions of the same stock walk and
 *          are deliberately kept as two separate questions.
 *
 * UNCERTAIN READS (screen photos taken at an angle, right-hand column sits in a
 * reflection): only opt-p05's third option could not be recovered — "0.17" is a
 * reconstruction from the 0.5 / 0.33 / _ / 0.08 / 0.04 pattern. It is not the
 * correct answer, so scoring is unaffected.
 * ========================================================================== */

const QUESTIONS = [

  /* ------------------------------------------------------------------------
   * OPTIVER — read directly off the assessment screenshots (15 questions,
   * this was the full "15 / 15" set)
   * --------------------------------------------------------------------- */

  {
    id: "opt-p01",
    source: "Optiver",
    origin: "photo",
    text: "You flip 6 Coins. What is the probability that at most 3 of these are Heads?",
    options: ["0.55", "0.65", "0.75", "0.85", "0.95"],
    answer: 1,
    note: "P = (C(6,0)+C(6,1)+C(6,2)+C(6,3))/2^6 = (1+6+15+20)/64 = 42/64 = 0.6563"
  },

  {
    id: "opt-p02",
    source: "Optiver",
    origin: "photo",
    text: "A fair twenty sided dice (numbered from 1 through to 20) is rolled 5 times. What is the probability that at least two of these rolls are the same?",
    options: ["0.01", "0.05", "0.1", "0.2", "0.4"],
    answer: 4,
    note: "1 - (20·19·18·17·16)/20^5 = 1 - 0.5814 = 0.4186 (birthday problem)"
  },

  {
    id: "opt-p03",
    source: "Optiver",
    origin: "photo",
    text: "You keep rolling a dice and you keep track of 6 different sums: the sum of all the 1s, the sum of all the 2s, the sum of all the 3s, the sum of all the 4s, the sum of all the 5s and the sum of all the 6s. The game ends once one of these exceeds 100. What is the expected value of the sum of all the dice that have been rolled?",
    options: ["60.0", "120.0", "180.0", "240.0", "300.0"],
    answer: 4,
    note: "The 6s bucket almost always ends it: 17 sixes = 102 > 100, so E[rolls] ≈ 17·6 = 102 and E[sum] ≈ 102·3.5 = 357. Simulation gives ≈ 335 (other buckets occasionally finish first). Closest offered value: 300."
  },

  {
    id: "opt-p04",
    source: "Optiver",
    origin: "photo",
    text: "A bag contains 10 red counters, 10 yellow counters and 10 blue counters. What is the probability that the first three counters drawn (without replacement) are all of a different colour?",
    options: ["0.15", "0.25", "0.35", "0.45", "0.55"],
    answer: 1,
    note: "(10·10·10·3!)/(30·29·28) = 6000/24360 = 0.2463"
  },

  {
    id: "opt-p05",
    source: "Optiver",
    origin: "photo",
    text: "You roll five dice and sum their values. What is the probability that the sum is an even number?",
    options: ["0.5", "0.33", "0.17", "0.08", "0.04"],
    answer: 0,
    note: "Condition on the first four dice: the fifth die makes the total even with probability exactly 1/2 regardless. Answer 0.5. (Third option value uncertain in the photo — reconstructed.)"
  },

  {
    id: "opt-p06",
    source: "Optiver",
    origin: "photo",
    text: "A watch has three hands, for hours, minutes and seconds. What is the probability that you glance at your watch and all of the angles between the hands exceed 90 degrees?",
    options: ["0.03", "0.06", "0.12", "0.24", "0.48"],
    answer: 1,
    note: "Three points on a circle with every gap > 90°: (1 - 3·90/360)^2 = 0.25^2 = 0.0625. Simulating the real (dependent) hands gives 0.0624."
  },

  {
    id: "opt-p07",
    source: "Optiver",
    origin: "photo",
    text: "Two three digit numbers are chosen at random. What is the probability that their difference is a two digit number?",
    options: ["0.01", "0.02", "0.05", "0.1", "0.2"],
    answer: 4,
    note: "Ordered pairs with |a-b| = d number 2(900-d). Sum for d = 10..99 gives 152190/810000 = 0.1879"
  },

  {
    id: "opt-p08",
    source: "Optiver",
    origin: "photo",
    text: "You roll four dice and take the sum of the three highest values. What is the probability that this sum is equal to 18?",
    options: ["0.05", "0.1", "0.15", "0.25", "0.35"],
    answer: 0,
    note: "18 requires three 6s: (C(4,3)·5 + 1)/6^4 = 21/1296 = 0.0162"
  },

  {
    id: "opt-p09",
    source: "Optiver",
    origin: "photo",
    text: "You will play a coin game against an opponent. A biased coin will be continually flipped where there is a 2/3 chance of Heads and a 1/3 chance of Tails.\n\nIf Heads is flipped then you receive $1 from your opponent. If Tails is flipped then you pay $1 to your opponent.\n\nYou start with $1 and your opponent starts with $2. You keep playing until one of you is bankrupt (= has $0 left); they will be declared the loser, the other will be declared the winner.\n\nWhat is the probability that you win?",
    options: ["0.3", "0.4", "0.5", "0.6", "0.7"],
    answer: 3,
    note: "Gambler's ruin, r = q/p = 1/2, i = 1, N = 3: (1 - r^1)/(1 - r^3) = 0.5/0.875 = 0.5714"
  },

  {
    id: "opt-p10",
    source: "Optiver",
    origin: "photo",
    text: "3 Dice are rolled. What is the probability that some number of these dice (one dice, two dice, or all three dice) can be summed to give the number 5?",
    options: ["0.1", "0.3", "0.5", "0.7", "0.9"],
    answer: 3,
    note: "Exhaustive count over all 216 outcomes: 145/216 = 0.6713"
  },

  {
    id: "opt-p11",
    source: "Optiver",
    origin: "photo",
    text: "Thirteen cards are pulled from a standard deck of 52. What is the probability that you don't get an Ace?",
    options: ["0.1", "0.25", "0.4", "0.6", "0.8"],
    answer: 1,
    note: "C(48,13)/C(52,13) = (39·38·37·36)/(52·51·50·49) = 0.3038"
  },

  {
    id: "opt-p12",
    source: "Optiver",
    origin: "photo",
    text: "What is the probability of rolling six dice and getting at least three of the same number?",
    options: ["0.01", "0.05", "0.1", "0.25", "0.5"],
    answer: 3,
    note: "Exhaustive count over 6^6 outcomes: 119/324 = 0.3673 — closer to 0.25 than to 0.5"
  },

  {
    id: "opt-p13",
    source: "Optiver",
    origin: "photo",
    text: "Two people start at opposite corners of a 4x4 grid. Person A starts on the bottom left node, Person B starts on the top right node.\n\nEvery second, Person A will randomly move either one edge to the right, or one edge up. At the same time, Person B will randomly move either one edge to the left, or one edge down. Each person must always move each second, for example, if Person A cannot move right anymore, they must move up.\n\nWhat is the probability that A and B will never share the same position at some point?",
    options: ["0.05", "0.1", "0.25", "0.5", "0.75"],
    answer: 4,
    note: "A's coordinate sum is t, B's is 6-t, so they can only collide at t = 3 on the anti-diagonal. P(meet) = Σ C(3,r)C(3,3-r)/64 = C(6,3)/64 = 20/64 = 0.3125, so P(never meet) = 0.6875"
  },

  {
    id: "opt-p14",
    source: "Optiver",
    origin: "photo",
    text: "A couple decide to start having children and keep having children until they have more girls than boys (note that this means they stop having children if their first child is a girl).\n\nHow many children do they expect to have?",
    options: ["1", "2", "4", "8", "16"],
    answer: 4,
    note: "This is the first passage of a symmetric ±1 random walk to +1. It reaches +1 with probability 1, but the expected time is INFINITE. There is no finite correct answer — the largest option (16) is the closest one on offer."
  },

  {
    id: "opt-p15",
    source: "Optiver",
    origin: "photo",
    text: "You and your friend each have a machine that outputs random integers from 1 to 10 inclusive. You get three numbers and your friend does too. What is the probability that you have no numbers in common with your friend?",
    options: ["0.08", "0.16", "0.24", "0.32", "0.4"],
    answer: 4,
    note: "Condition on how many distinct values you drew: 0.01·0.9³ + 0.27·0.8³ + 0.72·0.7³ = 0.3925"
  },

  /* ------------------------------------------------------------------------
   * OPTIVER — written down from memory after the assessment.
   * Question wording is a reconstruction; options were built in the same
   * "select the answer that is closest" style around the true value.
   * --------------------------------------------------------------------- */

  {
    id: "opt-r01",
    source: "Optiver",
    origin: "recalled",
    text: "A two digit number is chosen at random. What is the probability that the ones digit is greater than the tens digit?",
    options: ["0.2", "0.3", "0.4", "0.5", "0.6"],
    answer: 2,
    note: "36 of the 90 two-digit numbers qualify: 36/90 = 0.4"
  },

  {
    id: "opt-r02",
    source: "Optiver",
    origin: "recalled",
    text: "Two dice are rolled. What is the probability the difference of the two numbers shown is greater than 2?",
    options: ["0.17", "0.25", "0.33", "0.42", "0.5"],
    answer: 2,
    note: "12 of 36 ordered outcomes have |a-b| > 2: 12/36 = 0.3333"
  },

  {
    id: "opt-r03",
    source: "Optiver",
    origin: "recalled",
    text: "Three cards are pulled from a deck of 52 in which A = 1, 2 = 2, ..., K = 13. What is the expected value of the product?",
    options: ["250", "300", "340", "400", "450"],
    answer: 2,
    note: "E[XYZ] = 337.24 (slightly under 7³ = 343 because drawing without replacement induces negative correlation)"
  },

  {
    id: "opt-r04",
    source: "Optiver",
    origin: "recalled",
    text: "An integer is randomly chosen from one to ten thousand inclusive. What is the probability that all of the digits of the number are different?",
    options: ["0.1", "0.3", "0.5", "0.7", "0.9"],
    answer: 2,
    note: "5274/10000 = 0.5274 (9 + 81 + 648 + 4536 numbers with 1/2/3/4 distinct digits)"
  },

  {
    id: "opt-r05",
    source: "Optiver",
    origin: "recalled",
    text: "Three two digit numbers are chosen at random. What is the probability that their sum is a three digit number?",
    options: ["0.5", "0.65", "0.8", "0.9", "0.99"],
    answer: 3,
    note: "P(100 ≤ a+b+c ≤ 999) = 0.9182; the sum only fails when all three are small (min sum 30)"
  },

  {
    id: "opt-r06",
    source: "Optiver",
    origin: "recalled",
    text: "You flip 8 Coins. What is the probability you get three of the same in a row at any point?",
    options: ["0.25", "0.4", "0.55", "0.75", "0.9"],
    answer: 3,
    note: "188 of the 256 number-logic contain HHH or TTT: 0.7344"
  },

  {
    id: "opt-r07",
    source: "Optiver",
    origin: "recalled",
    text: "Consider a game where 100 $1 coins are flipped onto a table. Coins are then removed in pairs (one heads and one tails) until no more pairs are available. The player receives all of the remaining coins on the table. What is the fair value of this game?",
    options: ["$4", "$6", "$8", "$10", "$12"],
    answer: 2,
    note: "The payout is |#heads - #tails|. E|H-T| for 100 fair coins = 7.96 ≈ $8 (≈ sqrt(2n/π))"
  },

  {
    id: "opt-r08",
    source: "Optiver",
    origin: "recalled",
    text: "Start at the origin of the number line and continuously roll a dice. Let X be the result of the dice roll. If X = 1, 2 or 3 then you move X to the right. If X = 4, 5 or 6 then you move X - 3 to the left. On average, how many rolls will it take before you are at least 10 steps away from the origin?",
    options: ["10", "16", "24", "35", "50"],
    answer: 2,
    note: "Simulation: 24.0 rolls. (E[X²] = 28/6 = 4.67, so ≈ 100/4.67 = 21.4 before the overshoot correction.)"
  },

  {
    id: "opt-r09",
    source: "Optiver",
    origin: "recalled",
    text: "Consider the following game. You get to roll a dice continuously until you roll the same number twice in a row. At this point, the game ends, and you are paid the sum of all your rolls. What is the expected value of this game?",
    options: ["10", "17.5", "24.5", "31.5", "42"],
    answer: 2,
    note: "E[rolls] = 1 + 6 = 7, and E[payout] = 24.45 ≈ 7 · 3.5"
  },

  {
    id: "opt-r10",
    source: "Optiver",
    origin: "recalled",
    text: "Two distinct integers from 1 to 9 (inclusive) are generated and summed. What is the probability that the sum is 10 or greater?",
    options: ["0.33", "0.44", "0.56", "0.67", "0.78"],
    answer: 2,
    note: "40 of the 72 ordered distinct pairs: 0.5556"
  },

  {
    id: "opt-r11",
    source: "Optiver",
    origin: "recalled",
    text: "You keep rolling a dice and you keep track of 6 different sums: the sum of all the 1s, the sum of all the 2s, the sum of all the 3s, the sum of all the 4s, the sum of all the 5s, and the sum of all the 6s. The game ends once one of these exceeds 100. What is the expected value of the number of even numbers that have been rolled?",
    options: ["17", "30", "48", "65", "85"],
    answer: 2,
    note: "Simulation: 47.9. Roughly half of the ≈96 rolls are even."
  },

  {
    id: "opt-r12",
    source: "Optiver",
    origin: "recalled",
    text: "Consider a game where three dice are rolled and the payout for the game is two to the power of the sum of the three rolls. What is the expected value of this game?",
    options: ["1000", "4000", "9000", "20000", "50000"],
    answer: 2,
    note: "Independence gives E[2^sum] = (E[2^d])³ = ((2+4+8+16+32+64)/6)³ = 21³ = 9261"
  },

  {
    id: "opt-r13",
    source: "Optiver",
    origin: "recalled",
    text: "Three cards are pulled from a deck of 52 in which A = 1, 2 = 2, ..., K = 13. Ignoring any ordering of suits, what is the probability that the sequence of cards is in non-decreasing order? That is, each successive card is at least the value of the previous card.",
    options: ["0.1", "0.15", "0.2", "0.25", "0.33"],
    answer: 2,
    note: "Exhaustive over ordered triples: 0.1969. (1/6 if all three values were distinct, lifted by the chance of ties.)"
  },

  {
    id: "opt-r14",
    source: "Optiver",
    origin: "recalled",
    text: "Two particles are each located at the opposite vertices of the same octagon. Each second, two coins are flipped, one for each particle, and this dictates whether that particle will move clock-wise or anticlockwise along an edge. On average, how many coins must be flipped for the two particles to meet?",
    options: ["4", "8", "16", "24", "32"],
    answer: 2,
    note: "The gap performs a lazy walk; expected meeting time is 8 seconds, and 2 coins are flipped per second = 16 coins"
  },

  {
    id: "opt-r15",
    source: "Optiver",
    origin: "recalled",
    text: "You roll 100 dice onto a table. You then repeatedly remove sets of 6 distinct dice (i.e. the set 1, 2, 3, 4, 5, and 6) until it is no longer possible to do so. What is the expected value of the sum of the dice left on the table?",
    options: ["40", "70", "105", "140", "200"],
    answer: 2,
    note: "You remove m = min face count complete sets; simulation gives E[sum left] = 104.7"
  },

  {
    id: "opt-r16",
    source: "Optiver",
    origin: "recalled",
    text: "You roll a dice and keep the sum until you have hit a number exceeding one hundred. What is the probability that the last roll was a 2?",
    options: ["0.05", "0.1", "0.17", "0.25", "0.33"],
    answer: 1,
    note: "P(last roll = k) ∝ k, so P(2) = 2/21 = 0.0952 (simulation 0.0955)"
  },

  {
    id: "opt-r17",
    source: "Optiver",
    origin: "recalled",
    text: "You start with $10 and roll a dice 10 times. Every time you roll an even number, you add it to your score. Every time you roll an odd number, you subtract it from your score. What is the probability you go bankrupt at some point?",
    options: ["0.05", "0.15", "0.25", "0.4", "0.6"],
    answer: 2,
    note: "Simulation (bankrupt = balance hits 0 or below at any point in the 10 rolls): 0.235"
  },

  {
    id: "opt-r18",
    source: "Optiver",
    origin: "recalled",
    text: "A bag contains 10 red counters, 10 yellow counters and 10 blue counters. Counters are repeatedly drawn out until only two colours remain. What is the expected number of remaining counters?",
    options: ["1", "2", "4", "7", "10"],
    answer: 2,
    note: "Simulation: 4.03 counters left when the first colour is exhausted"
  },

  {
    id: "opt-r19",
    source: "Optiver",
    origin: "recalled",
    text: "A particle is on a vertex of a hexagon. Each second, a coin is flipped. If the coin is Heads, the particle moves one length clockwise, if the coin is Tails, the particle moves one length anticlockwise. What is the expected time for it to return to its starting point?",
    options: ["2", "4", "6", "9", "12"],
    answer: 2,
    note: "Expected return time to a state in a symmetric walk on n vertices = n = 6"
  },

  {
    id: "opt-r20",
    source: "Optiver",
    origin: "recalled",
    text: "You flip 7 Coins. What is the probability you have an odd number of Heads?",
    options: ["0.35", "0.44", "0.5", "0.56", "0.65"],
    answer: 2,
    note: "Exactly 1/2 for any number of fair coins ≥ 1 (the last flip flips the parity)"
  },

  {
    id: "opt-r21",
    source: "Optiver",
    origin: "recalled",
    text: "An integer is randomly chosen from one to one million inclusive. What is the probability the number contains the digit \"7\" at least once?",
    options: ["0.1", "0.25", "0.47", "0.65", "0.8"],
    answer: 2,
    note: "1 - (9/10)^6 = 0.4686 (the 1000000 itself is negligible)"
  },

  {
    id: "opt-r22",
    source: "Optiver",
    origin: "recalled",
    text: "You and your friend each have a machine that outputs random integers from 1 to 10 inclusive. You get two numbers and sum them; your friend does the same from her machine. What is the probability that you have the same sum?",
    options: ["0.02", "0.05", "0.07", "0.1", "0.15"],
    answer: 2,
    note: "Σ p(s)² over the triangular sum distribution on 2..20 = 0.067"
  },

  {
    id: "opt-r23",
    source: "Optiver",
    origin: "recalled",
    text: "What is the probability of rolling six dice and getting at least two pairs?",
    options: ["0.2", "0.35", "0.55", "0.7", "0.85"],
    answer: 2,
    note: "Exhaustive over 6^6: 0.5562 (at least two distinct faces each appearing twice or more)"
  },

  {
    id: "opt-r24",
    source: "Optiver",
    origin: "recalled",
    text: "A particle is on a vertex of a decagon. Each second, a dice is rolled. If the dice is 1 or 2, the particle moves one length clockwise, if the dice is 3 or 4, the particle moves one length anticlockwise, if the dice is 5 or 6, the particle does not move. What is the expected time for it to reach the vertex that is initially furthest away?",
    options: ["10", "25", "37.5", "50", "75"],
    answer: 2,
    note: "Simple walk on a 10-cycle hits the opposite vertex in 5·5 = 25 moves; the particle only moves 2/3 of the time, so 25 · 3/2 = 37.5"
  },

  {
    id: "opt-r25",
    source: "Optiver",
    origin: "recalled",
    text: "You start with $30 and roll a dice 10 times. Every time you roll an even number, you add it to your score. Every time you roll an odd number, you subtract it from your score. What is your expected final bankroll?",
    options: ["25", "30", "32.5", "35", "40"],
    answer: 3,
    note: "E[change per roll] = (2+4+6-1-3-5)/6 = 0.5, so 30 + 10·0.5 = 35"
  },

  {
    id: "opt-r26",
    source: "Optiver",
    origin: "recalled",
    text: "Three cards are pulled from a deck of 52 in which A = 1, 2 = 2, ..., K = 13. What is the probability that the three numbers obtained by this process all differ from each other by at least 2?",
    options: ["0.15", "0.3", "0.48", "0.6", "0.75"],
    answer: 2,
    note: "Exhaustive over all C(52,3) hands: 0.4778"
  },

  {
    id: "opt-r27",
    source: "Optiver",
    origin: "recalled",
    text: "You're given two red cards and two black cards. The cards are shuffled and placed face down. You flip them over one at a time. You start with $100, and before revealing each card you can choose how much to bet. If the card is red, you win double your bet. If it's black, you lose the amount you bet.\n\nPlaying optimally, what final amount can you guarantee?",
    options: ["$100", "$150", "$200", "$245", "$300"],
    answer: 3,
    note: "Hedge so both branches end equal: V(r,b) = max_f min((1+2f)V(r-1,b), (1-f)V(r,b-1)), V(0,b) = 1, V(r,0) = 3^r. V(2,2) = 27/11, so $245.45 guaranteed (first bet $36.36). With a $20 entry fee it is still worth playing: guaranteed $245.45 vs $120 outlay — the fee is sunk, so the betting strategy is unchanged."
  },

  /* ------------------------------------------------------------------------
   * IMC — quick-fire quiz questions
   * --------------------------------------------------------------------- */

  {
    id: "imc-01",
    source: "IMC",
    origin: "recalled",
    text: "You toss 3 fair coins. What is the probability of getting at least one head?",
    options: ["0.125", "0.375", "0.5", "0.75", "0.875"],
    answer: 4,
    note: "1 - (1/2)³ = 7/8 = 0.875"
  },

  {
    id: "imc-02",
    source: "IMC",
    origin: "recalled",
    text: "A box contains 3 red balls and 2 green balls. You pick one at random and get €1 for red, €2 for green. What is the expected payout?",
    options: ["€1.00", "€1.20", "€1.40", "€1.50", "€1.60"],
    answer: 2,
    note: "(3·1 + 2·2)/5 = 7/5 = €1.40"
  },

  {
    id: "imc-03",
    source: "IMC",
    origin: "recalled",
    text: "A stock increases by 20% one day and drops by 20% the next. What is the overall return?",
    options: ["-8%", "-4%", "0%", "+4%", "+8%"],
    answer: 1,
    note: "1.2 · 0.8 = 0.96, i.e. -4%"
  },

  {
    id: "imc-04",
    source: "IMC",
    origin: "recalled",
    text: "A stock moves +€1 or -€1 per day with equal probability. After 3 days, what is the probability that it ends up exactly where it started?",
    options: ["0", "0.125", "0.25", "0.375", "0.5"],
    answer: 0,
    note: "After an odd number of ±1 steps the position is always odd, so returning to 0 is impossible"
  },

  {
    id: "imc-05",
    source: "IMC",
    origin: "recalled",
    text: "A stock moves +€1 or -€1 per day with equal probability. After 4 days, what is the probability that it ends up exactly where it started?",
    options: ["0.125", "0.25", "0.375", "0.5", "0.625"],
    answer: 2,
    note: "C(4,2)/2^4 = 6/16 = 0.375"
  },

  {
    id: "imc-06",
    source: "IMC",
    origin: "recalled",
    text: "You are offered two games: Game A pays out the square of a single die roll, and Game B pays out the product of two dice rolls. Which is the better deal?",
    options: [
      "Game A",
      "Game B",
      "They have the same expected value",
      "Game B, but only for a risk-seeking player",
      "Neither — both have the same distribution"
    ],
    answer: 0,
    note: "E[A] = E[X²] = 91/6 = 15.17; E[B] = E[X]E[Y] = 3.5² = 12.25. They differ by Var(X) = 35/12."
  },

  {
    id: "imc-07",
    source: "IMC",
    origin: "recalled",
    text: "A stock goes up 25% one day and down 20% the next. What is the total change?",
    options: ["-5%", "-2.5%", "0%", "+2.5%", "+5%"],
    answer: 2,
    note: "1.25 · 0.8 = 1.00, i.e. no change"
  }

];

if (typeof module !== "undefined" && module.exports) module.exports = QUESTIONS;
