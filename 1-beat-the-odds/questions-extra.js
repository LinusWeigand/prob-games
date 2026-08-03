/* ============================================================================
 * BEAT THE ODDS -- EXTRA PRACTICE SET (151 questions)
 * ============================================================================
 *
 * These are NOT real Optiver questions. They were written to sit in the same
 * band as the 42 real Optiver questions in questions.js: one clean idea each,
 * solvable in 30-120 seconds by symmetry, linearity, a short recursion or a
 * quick estimate, and answered by picking the CLOSEST of five rounded options.
 *
 * They deliberately reuse the archetypes the real set is built from:
 *
 *   digits & number counting  18   dice, single shot          26
 *   coins                     15   cards                      18
 *   game / fair value / EV    20   random walks & Markov      15
 *   betting, ruin & odds      11   matching & collisions      10
 *   continuous & geometry      8   urns & coloured balls       9
 *
 * Every `answer` below was computed, not estimated -- by exhaustive
 * enumeration or an exact recursion, except x142 (point in a square) which
 * used a 4-million-sample simulation. The generator also checks that the
 * runner-up option is never within 15% of the key, so "closest" is never a
 * coin flip, and that the key index is spread across the five positions
 * (30/32/34/29/26) rather than parked on the middle option.
 *
 * Fields match questions.js so both files can be concatenated:
 *   id, source, origin ("generated"), text, options, answer, note
 * ========================================================================== */

const QUESTIONS_EXTRA = [

  {
    id: "x001",
    source: "Optiver",
    origin: "generated",
    text:
      "A three digit number is chosen at random. What is the probability that its digits " +
      "are strictly increasing?",
    options: ["0.05", "0.1", "0.2", "0.35", "0.5"],
    answer: 1,
    note:
      "C(9,3) = 84 strictly increasing triples out of 900: 0.0933"
  },

  {
    id: "x002",
    source: "Optiver",
    origin: "generated",
    text:
      "A two digit number is chosen at random. What is the probability that its digits sum " +
      "to 9?",
    options: ["0.05", "0.1", "0.15", "0.2", "0.3"],
    answer: 1,
    note:
      "18, 27, 36, 45, 54, 63, 72, 81, 90 -> 9/90 = 0.1"
  },

  {
    id: "x003",
    source: "Optiver",
    origin: "generated",
    text:
      "An integer is chosen at random from one to one thousand inclusive. What is the " +
      "probability that it is divisible by 3 or by 5?",
    options: ["0.2", "0.33", "0.47", "0.6", "0.75"],
    answer: 2,
    note:
      "333 + 200 - 66 = 467, so 0.467 (inclusion-exclusion)"
  },

  {
    id: "x004",
    source: "Optiver",
    origin: "generated",
    text:
      "A four digit number is chosen at random. What is the probability that it reads the " +
      "same forwards as backwards?",
    options: ["0.01", "0.02", "0.04", "0.08", "0.15"],
    answer: 0,
    note:
      "9 x 10 = 90 palindromes out of 9000: 0.01"
  },

  {
    id: "x005",
    source: "Optiver",
    origin: "generated",
    text:
      "An integer is randomly chosen from one to one hundred thousand inclusive. What is " +
      "the probability that none of its digits is a zero?",
    options: ["0.2", "0.4", "0.55", "0.65", "0.8"],
    answer: 3,
    note:
      "9 + 81 + 729 + 6561 + 59049 = 66429 out of 100000: 0.664"
  },

  {
    id: "x006",
    source: "Optiver",
    origin: "generated",
    text:
      "Two digits are chosen at random (independently) from 0 to 9. What is the probability " +
      "that their product is even?",
    options: ["0.25", "0.5", "0.6", "0.75", "0.9"],
    answer: 3,
    note:
      "Odd product needs both digits odd: 1 - (1/2)^2 = 0.75"
  },

  {
    id: "x007",
    source: "Optiver",
    origin: "generated",
    text:
      "A three digit number is chosen at random. What is the probability that all three of " +
      "its digits are the same?",
    options: ["0.01", "0.02", "0.03", "0.04", "0.05"],
    answer: 0,
    note:
      "111, 222, ..., 999 -> 9/900 = 0.01"
  },

  {
    id: "x008",
    source: "Optiver",
    origin: "generated",
    text:
      "An integer is chosen at random from one to ten thousand inclusive. What is the " +
      "probability that the sum of its digits is divisible by 3?",
    options: ["0.1", "0.2", "0.33", "0.45", "0.5"],
    answer: 2,
    note:
      "Digit sum divisible by 3 iff the number is: 3333/10000 = 0.333"
  },

  {
    id: "x009",
    source: "Optiver",
    origin: "generated",
    text:
      "Two two digit numbers are chosen at random. What is the probability that their sum " +
      "is a three digit number?",
    options: ["0.15", "0.25", "0.4", "0.6", "1"],
    answer: 3,
    note:
      "For a <= 89 exactly a of the 90 choices of b work, and all 90 work for a >= 90: " +
      "4860/8100 = 0.6"
  },

  {
    id: "x010",
    source: "Optiver",
    origin: "generated",
    text:
      "A two digit number is chosen at random. What is the probability that it is a " +
      "multiple of 7?",
    options: ["0.02", "0.04", "0.06", "0.1", "0.15"],
    answer: 4,
    note:
      "14, 21, ..., 98 -> 13/90 = 0.144"
  },

  {
    id: "x011",
    source: "Optiver",
    origin: "generated",
    text:
      "An integer is randomly chosen from one to one thousand inclusive. What is the " +
      "probability that it contains the digit \"1\" at least once?",
    options: ["0.1", "0.2", "0.27", "0.4", "0.55"],
    answer: 2,
    note:
      "1 - (9/10)^3 = 0.271 on 1..999, plus 1000 itself: 272/1000"
  },

  {
    id: "x012",
    source: "Optiver",
    origin: "generated",
    text:
      "Three digits are chosen at random (independently) from 1 to 9. What is the " +
      "probability that they are all different?",
    options: ["0.6", "0.7", "0.8", "0.9", "1"],
    answer: 1,
    note:
      "504/729 = 0.691"
  },

  {
    id: "x013",
    source: "Optiver",
    origin: "generated",
    text:
      "A five digit number is chosen at random. What is the probability that its digits are " +
      "in non-decreasing order?",
    options: ["0.02", "0.04", "0.06", "0.08", "0.1"],
    answer: 0,
    note:
      "Non-decreasing 5-strings from digits 1..9 (a leading 0 is impossible): C(13,5) = " +
      "1287, /90000 = 0.0143"
  },

  {
    id: "x014",
    source: "Optiver",
    origin: "generated",
    text:
      "An integer is chosen at random from one to one million inclusive. What is the " +
      "probability that it is a perfect square?",
    options: ["0.001", "0.002", "0.004", "0.008", "0.015"],
    answer: 0,
    note:
      "1000 perfect squares up to 10^6: 0.001"
  },

  {
    id: "x015",
    source: "Optiver",
    origin: "generated",
    text:
      "Two integers are chosen at random (independently) from 1 to 100 inclusive. What is " +
      "the probability that their product is odd?",
    options: ["0.1", "0.25", "0.4", "0.5", "0.75"],
    answer: 1,
    note:
      "Both must be odd: (1/2)^2 = 0.25"
  },

  {
    id: "x016",
    source: "Optiver",
    origin: "generated",
    text:
      "A four digit PIN is chosen at random (0000 to 9999 are all equally likely). What is " +
      "the probability that no digit is repeated?",
    options: ["0.2", "0.35", "0.5", "0.65", "0.8"],
    answer: 2,
    note:
      "5040/10000 = 0.504"
  },

  {
    id: "x017",
    source: "Optiver",
    origin: "generated",
    text:
      "An integer is chosen at random from one to five hundred inclusive. What is the " +
      "probability that it contains the digit \"3\" exactly once?",
    options: ["0.05", "0.1", "0.2", "0.3", "0.45"],
    answer: 3,
    note:
      "18 in 1..99, then 54 from the hundreds 1/2/4 and 81 from the 300s: 153/500 = 0.306"
  },

  {
    id: "x018",
    source: "Optiver",
    origin: "generated",
    text:
      "Two distinct integers are chosen at random from 1 to 20 inclusive. What is the " +
      "probability that their sum is even?",
    options: ["0.07", "0.1", "0.2", "0.3", "0.5"],
    answer: 4,
    note:
      "Both odd or both even: 2*C(10,2)/C(20,2) = 90/190 = 0.474"
  },

  {
    id: "x019",
    source: "Optiver",
    origin: "generated",
    text:
      "Three dice are rolled. What is the probability that they all show different numbers?",
    options: ["0.2", "0.35", "0.55", "0.7", "0.85"],
    answer: 2,
    note:
      "120/216 = 0.556"
  },

  {
    id: "x020",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled. What is the probability that the product of the two numbers is " +
      "even?",
    options: ["0.15", "0.3", "0.45", "0.6", "0.75"],
    answer: 4,
    note:
      "Odd product needs both odd: 1 - 1/4 = 0.75"
  },

  {
    id: "x021",
    source: "Optiver",
    origin: "generated",
    text:
      "Four dice are rolled. What is the probability that at least one 6 appears?",
    options: ["0.5", "0.6", "0.7", "0.8", "0.9"],
    answer: 0,
    note:
      "1 - (5/6)^4 = 0.518"
  },

  {
    id: "x022",
    source: "Optiver",
    origin: "generated",
    text:
      "Three dice are rolled. What is the probability that their sum is 10 or more?",
    options: ["0.2", "0.4", "0.6", "0.8", "1"],
    answer: 2,
    note:
      "135/216 = 0.625 (the sum distribution is symmetric about 10.5)"
  },

  {
    id: "x023",
    source: "Optiver",
    origin: "generated",
    text:
      "Five dice are rolled. What is the probability of getting exactly one pair, that is, " +
      "exactly two dice showing the same number and the other three all different from it " +
      "and from each other?",
    options: ["0.1", "0.2", "0.3", "0.4", "0.5"],
    answer: 4,
    note:
      "3600/7776 = 0.463"
  },

  {
    id: "x024",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled. What is the probability that the larger of the two numbers " +
      "shown is exactly 4?",
    options: ["0.03", "0.05", "0.08", "0.1", "0.2"],
    answer: 4,
    note:
      "(16 - 9)/36 = 7/36 = 0.194"
  },

  {
    id: "x025",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled repeatedly. What is the expected number of rolls until the first 6 " +
      "appears?",
    options: ["6", "10", "25", "50", "100"],
    answer: 0,
    note:
      "Geometric with p = 1/6: E = 6"
  },

  {
    id: "x026",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled repeatedly. What is the expected number of rolls until every one of " +
      "the six faces has appeared at least once?",
    options: ["6", "9", "12", "15", "20"],
    answer: 3,
    note:
      "Coupon collector: 6(1 + 1/2 + ... + 1/6) = 14.7"
  },

  {
    id: "x027",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled and you are told the sum is 8. What is the probability that at " +
      "least one of the dice shows a 5?",
    options: ["0.2", "0.25", "0.3", "0.35", "0.4"],
    answer: 4,
    note:
      "Sum 8: (2,6),(3,5),(4,4),(5,3),(6,2); two contain a 5 -> 0.4"
  },

  {
    id: "x028",
    source: "Optiver",
    origin: "generated",
    text:
      "Three dice are rolled. What is the probability that the product of the three numbers " +
      "is odd?",
    options: ["0.05", "0.13", "0.25", "0.4", "0.5"],
    answer: 1,
    note:
      "All three must be odd: 1/8 = 0.125"
  },

  {
    id: "x029",
    source: "Optiver",
    origin: "generated",
    text:
      "Six dice are rolled. What is the probability that all six faces appear exactly once?",
    options: ["0.015", "0.025", "0.04", "0.06", "0.1"],
    answer: 0,
    note:
      "720/46656 = 0.0154"
  },

  {
    id: "x030",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled repeatedly and the results are added up. What is the expected " +
      "number of rolls until the running total reaches 10 or more?",
    options: ["2", "3.5", "5", "7", "10"],
    answer: 1,
    note:
      "Exact recursion on the running total: 3.32 rolls (10/3.5 plus the overshoot)"
  },

  {
    id: "x031",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled. What is the expected value of the larger of the two numbers " +
      "shown?",
    options: ["3", "5", "7", "10", "20"],
    answer: 1,
    note:
      "161/36 = 4.47"
  },

  {
    id: "x032",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled. What is the expected value of the smaller of the two numbers " +
      "shown?",
    options: ["2.5", "4", "6", "10", "15"],
    answer: 0,
    note:
      "91/36 = 2.53 (and 4.47 + 2.53 = 7)"
  },

  {
    id: "x033",
    source: "Optiver",
    origin: "generated",
    text:
      "Three dice are rolled. What is the expected value of the largest number shown?",
    options: ["0.8", "1", "2", "3", "5"],
    answer: 4,
    note:
      "1071/216 = 4.96"
  },

  {
    id: "x034",
    source: "Optiver",
    origin: "generated",
    text:
      "Four dice are rolled. What is the probability that their sum is exactly 14?",
    options: ["0.05", "0.11", "0.2", "0.3", "0.4"],
    answer: 1,
    note:
      "146/1296 = 0.113 (14 is the modal sum)"
  },

  {
    id: "x035",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled 10 times. What is the probability that a 6 appears exactly twice?",
    options: ["0.1", "0.2", "0.29", "0.4", "0.55"],
    answer: 2,
    note:
      "C(10,2)(1/6)^2(5/6)^8 = 0.291"
  },

  {
    id: "x036",
    source: "Optiver",
    origin: "generated",
    text:
      "A pair of dice is rolled repeatedly. What is the expected number of rolls of the " +
      "pair until both dice show the same number?",
    options: ["6", "10", "15", "25", "40"],
    answer: 0,
    note:
      "P(doubles) = 1/6 per roll, so E = 6"
  },

  {
    id: "x037",
    source: "Optiver",
    origin: "generated",
    text:
      "Three dice are rolled. What is the probability that the three values can be the side " +
      "lengths of a triangle with positive area?",
    options: ["0.5", "0.6", "0.7", "0.8", "0.9"],
    answer: 0,
    note:
      "Exhaustive count: 111/216 = 0.514"
  },

  {
    id: "x038",
    source: "Optiver",
    origin: "generated",
    text:
      "Five dice are rolled. What is the probability that the largest number shown is " +
      "exactly 5?",
    options: ["0.1", "0.17", "0.27", "0.4", "0.55"],
    answer: 2,
    note:
      "(3125 - 1024)/7776 = 0.270"
  },

  {
    id: "x039",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled twice. What is the probability that the second roll is strictly " +
      "greater than the first?",
    options: ["0.4", "0.5", "0.6", "0.7", "0.8"],
    answer: 0,
    note:
      "(1 - 1/6)/2 = 15/36 = 0.417"
  },

  {
    id: "x040",
    source: "Optiver",
    origin: "generated",
    text:
      "Ten dice are rolled. What is the expected number of distinct faces that appear?",
    options: ["1.5", "2", "3", "5", "8"],
    answer: 3,
    note:
      "6(1 - (5/6)^10) = 5.03"
  },

  {
    id: "x041",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled. What is the probability that their sum is a prime number?",
    options: ["0.2", "0.3", "0.42", "0.55", "0.7"],
    answer: 2,
    note:
      "Sums 2, 3, 5, 7, 11 -> 15/36 = 0.417"
  },

  {
    id: "x042",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled repeatedly and the results are added up. What is the probability " +
      "that the running total is at some point exactly 10?",
    options: ["0.1", "0.2", "0.3", "0.4", "0.55"],
    answer: 2,
    note:
      "Renewal recursion: 0.289, already essentially the long-run value 2/7 = 0.286"
  },

  {
    id: "x043",
    source: "Optiver",
    origin: "generated",
    text:
      "Four dice are rolled. What is the probability that at least two of them show the " +
      "same number?",
    options: ["0.25", "0.4", "0.55", "0.72", "0.9"],
    answer: 3,
    note:
      "1 - 360/1296 = 0.722"
  },

  {
    id: "x044",
    source: "Optiver",
    origin: "generated",
    text:
      "Three dice are rolled. What is the probability that their sum is an even number?",
    options: ["0.1", "0.2", "0.3", "0.4", "0.5"],
    answer: 4,
    note:
      "The last die flips the parity either way: exactly 1/2"
  },

  {
    id: "x045",
    source: "Optiver",
    origin: "generated",
    text:
      "A dice is rolled three times. What is the probability that the three results are in " +
      "strictly increasing order?",
    options: ["0.05", "0.1", "0.2", "0.4", "0.7"],
    answer: 1,
    note:
      "C(6,3)/216 = 20/216 = 0.093"
  },

  {
    id: "x046",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 10 coins. What is the probability of getting exactly 5 Heads?",
    options: ["0.05", "0.1", "0.15", "0.2", "0.25"],
    answer: 4,
    note:
      "252/1024 = 0.246"
  },

  {
    id: "x047",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin repeatedly. What is the expected number of flips until you see " +
      "two Heads in a row?",
    options: ["2", "3", "4", "5", "6"],
    answer: 4,
    note:
      "E = 6 (standard HH waiting time)"
  },

  {
    id: "x048",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin repeatedly. What is the expected number of flips until you see " +
      "a Head immediately followed by a Tail?",
    options: ["2", "4", "6", "8", "12"],
    answer: 1,
    note:
      "E = 4 — HT is faster than HH because it cannot overlap badly"
  },

  {
    id: "x049",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 4 coins. What is the probability that you get more Heads than Tails?",
    options: ["0.15", "0.31", "0.4", "0.5", "0.6"],
    answer: 1,
    note:
      "5/16 = 0.3125"
  },

  {
    id: "x050",
    source: "Optiver",
    origin: "generated",
    text:
      "A biased coin lands Heads with probability 0.6. It is flipped 5 times. What is the " +
      "probability of getting exactly 3 Heads?",
    options: ["0.15", "0.2", "0.25", "0.3", "0.35"],
    answer: 4,
    note:
      "10 x 0.216 x 0.16 = 0.346"
  },

  {
    id: "x051",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 20 coins. What is the probability of getting exactly 10 Heads?",
    options: ["0.05", "0.1", "0.18", "0.3", "0.5"],
    answer: 2,
    note:
      "184756/1048576 = 0.176"
  },

  {
    id: "x052",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 6 coins. What is the expected length of the longest run of consecutive " +
      "Heads?",
    options: ["2", "3", "6", "8", "15"],
    answer: 0,
    note:
      "Exhaustive over all 64 sequences: 2.16"
  },

  {
    id: "x053",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin repeatedly until the first Head. What is the expected number of " +
      "flips?",
    options: ["2", "3", "5", "8", "15"],
    answer: 0,
    note:
      "Geometric with p = 1/2"
  },

  {
    id: "x054",
    source: "Optiver",
    origin: "generated",
    text:
      "You and a friend each flip 5 coins. What is the probability that you both get the " +
      "same number of Heads?",
    options: ["0.1", "0.18", "0.25", "0.35", "0.5"],
    answer: 2,
    note:
      "Vandermonde: C(10,5)/2^10 = 252/1024 = 0.246"
  },

  {
    id: "x055",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 6 coins and your opponent flips 5 coins. What is the probability that you " +
      "get strictly more Heads than your opponent?",
    options: ["0.1", "0.2", "0.3", "0.5", "0.8"],
    answer: 3,
    note:
      "Exactly 1/2 by the classic symmetry argument (one extra coin)"
  },

  {
    id: "x056",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 12 coins. What is the probability of getting at least 8 Heads?",
    options: ["0.05", "0.1", "0.19", "0.3", "0.45"],
    answer: 2,
    note:
      "794/4096 = 0.194"
  },

  {
    id: "x057",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin repeatedly until you see two Heads in a row or two Tails in a " +
      "row. What is the expected number of flips?",
    options: ["2", "3", "4", "6", "8"],
    answer: 1,
    note:
      "After the first flip, each further flip ends it with probability 1/2: 1 + 2 = 3"
  },

  {
    id: "x058",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 8 coins in a row. What is the expected number of positions where a Head is " +
      "immediately followed by a Tail?",
    options: ["0.5", "1", "1.75", "2.5", "4"],
    answer: 2,
    note:
      "7 adjacent pairs, each HT with probability 1/4: 1.75"
  },

  {
    id: "x059",
    source: "Optiver",
    origin: "generated",
    text:
      "A fair coin is flipped 100 times. What is the probability of getting exactly 50 " +
      "Heads?",
    options: ["0.01", "0.02", "0.03", "0.05", "0.08"],
    answer: 4,
    note:
      "≈ 1/sqrt(50*pi) = 0.0796"
  },

  {
    id: "x060",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip 5 coins in a row. What is the probability that no two Heads are adjacent?",
    options: ["0.4", "0.5", "0.6", "0.7", "0.8"],
    answer: 0,
    note:
      "Fibonacci count: 13/32 = 0.406"
  },

  {
    id: "x061",
    source: "Optiver",
    origin: "generated",
    text:
      "Two cards are drawn from a standard deck of 52. What is the probability that they " +
      "are of the same suit?",
    options: ["0.1", "0.24", "0.35", "0.5", "0.65"],
    answer: 1,
    note:
      "The second card matches the first with probability 12/51 = 0.235"
  },

  {
    id: "x062",
    source: "Optiver",
    origin: "generated",
    text:
      "Five cards are dealt from a standard deck of 52. What is the probability of getting " +
      "at least one Ace?",
    options: ["0.1", "0.2", "0.34", "0.5", "0.7"],
    answer: 2,
    note:
      "1 - C(48,5)/C(52,5) = 0.341"
  },

  {
    id: "x063",
    source: "Optiver",
    origin: "generated",
    text:
      "Two cards are drawn from a standard deck. What is the probability that both are face " +
      "cards (Jack, Queen or King)?",
    options: ["0.01", "0.05", "0.1", "0.2", "0.3"],
    answer: 1,
    note:
      "(12/52)(11/51) = 0.0498"
  },

  {
    id: "x064",
    source: "Optiver",
    origin: "generated",
    text:
      "A standard deck of 52 is shuffled and turned over one card at a time. What is the " +
      "expected number of cards turned over up to and including the first Ace?",
    options: ["5", "8", "10.5", "13", "17"],
    answer: 2,
    note:
      "The 4 Aces split the other 48 cards into 5 equal gaps: (52+1)/5 = 10.6"
  },

  {
    id: "x065",
    source: "Optiver",
    origin: "generated",
    text:
      "A standard deck is shuffled. What is the probability that the top two cards are both " +
      "red?",
    options: ["0.1", "0.25", "0.35", "0.5", "0.6"],
    answer: 1,
    note:
      "(26/52)(25/51) = 0.245"
  },

  {
    id: "x066",
    source: "Optiver",
    origin: "generated",
    text:
      "Three cards are pulled from a deck of 52 in which A = 1, 2 = 2, ..., K = 13. What is " +
      "the expected value of their sum?",
    options: ["7", "14", "21", "28", "39"],
    answer: 2,
    note:
      "Linearity: 3 x 7 = 21, regardless of the dependence between draws"
  },

  {
    id: "x067",
    source: "Optiver",
    origin: "generated",
    text:
      "Four cards are dealt from a standard deck. What is the probability that they are all " +
      "of different suits?",
    options: ["0.05", "0.11", "0.2", "0.3", "0.45"],
    answer: 1,
    note:
      "13^4/C(52,4) = 28561/270725 = 0.105"
  },

  {
    id: "x068",
    source: "Optiver",
    origin: "generated",
    text:
      "A standard deck of 52 is shuffled. What is the probability that the Ace of Spades " +
      "ends up immediately next to the King of Spades?",
    options: ["0.01", "0.04", "0.1", "0.2", "0.35"],
    answer: 1,
    note:
      "2 x 51 adjacent orderings out of 52 x 51 positions: 2/52 = 0.038"
  },

  {
    id: "x069",
    source: "Optiver",
    origin: "generated",
    text:
      "Two cards are drawn from a deck of 52 in which A = 1, 2 = 2, ..., K = 13. What is " +
      "the probability that their values differ by exactly 1?",
    options: ["0.05", "0.15", "0.25", "0.35", "0.5"],
    answer: 1,
    note:
      "12 adjacent rank pairs x 16 suit combinations / C(52,2) = 192/1326 = 0.145"
  },

  {
    id: "x070",
    source: "Optiver",
    origin: "generated",
    text:
      "Thirteen cards are dealt from a standard deck. What is the expected number of Aces " +
      "in the hand?",
    options: ["1", "2", "3", "4", "5"],
    answer: 0,
    note:
      "Linearity: 4 x 13/52 = 1"
  },

  {
    id: "x071",
    source: "Optiver",
    origin: "generated",
    text:
      "A standard deck of 52 is shuffled and turned over one card at a time. What is the " +
      "expected number of cards turned over up to and including the last Ace?",
    options: ["10", "15", "25", "40", "70"],
    answer: 3,
    note:
      "By the same gap symmetry, 4(52+1)/5 = 42.4"
  },

  {
    id: "x072",
    source: "Optiver",
    origin: "generated",
    text:
      "Five cards are dealt from a standard deck. What is the probability of getting " +
      "exactly one pair (two cards of one rank and three other cards of three different " +
      "ranks)?",
    options: ["0.15", "0.25", "0.42", "0.6", "0.75"],
    answer: 2,
    note:
      "1098240/2598960 = 0.423"
  },

  {
    id: "x073",
    source: "Optiver",
    origin: "generated",
    text:
      "Two cards are drawn from a deck of 52 in which A = 1, 2 = 2, ..., K = 13. What is " +
      "the probability that the second card has a strictly higher value than the first?",
    options: ["0.3", "0.4", "0.47", "0.5", "0.6"],
    answer: 2,
    note:
      "P(tie) = 3/51, and the rest splits evenly: 0.471"
  },

  {
    id: "x074",
    source: "Optiver",
    origin: "generated",
    text:
      "A shuffled deck of 52 is cut into two halves of 26 cards each. What is the " +
      "probability that all four Aces end up in the same half?",
    options: ["0.1", "0.2", "0.3", "0.5", "0.7"],
    answer: 0,
    note:
      "One specified half: C(48,22)/C(52,26) = 0.0552; either half: 0.110"
  },

  {
    id: "x075",
    source: "Optiver",
    origin: "generated",
    text:
      "Three cards are dealt from a standard deck. What is the probability that they are " +
      "all of the same suit?",
    options: ["0.05", "0.1", "0.2", "0.4", "0.8"],
    answer: 0,
    note:
      "1144/22100 = 0.052"
  },

  {
    id: "x076",
    source: "Optiver",
    origin: "generated",
    text:
      "Seven cards are dealt from a standard deck. What is the probability that at least " +
      "two of them share the same rank?",
    options: ["0.2", "0.4", "0.6", "0.79", "0.95"],
    answer: 3,
    note:
      "1 - C(13,7)4^7/C(52,7) = 0.790"
  },

  {
    id: "x077",
    source: "Optiver",
    origin: "generated",
    text:
      "A standard deck is shuffled and turned over one card at a time. What is the expected " +
      "number of cards turned over up to and including the first red card?",
    options: ["0.3", "0.5", "0.8", "1.5", "2"],
    answer: 4,
    note:
      "The 26 red cards split 26 black cards into 27 gaps: 53/27 = 1.96"
  },

  {
    id: "x078",
    source: "Optiver",
    origin: "generated",
    text:
      "Two cards are drawn from a standard deck. What is the probability that at least one " +
      "of them is a Heart?",
    options: ["0.3", "0.45", "0.6", "0.75", "0.9"],
    answer: 1,
    note:
      "1 - (39/52)(38/51) = 0.441"
  },

  {
    id: "x079",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice and are paid its value in dollars. Before seeing it you may instead " +
      "choose to re-roll once, in which case you must accept the second roll. Playing " +
      "optimally, what is the expected payout?",
    options: ["4", "7", "10", "20", "30"],
    answer: 0,
    note:
      "Keep 4, 5, 6 and re-roll 1, 2, 3: (4+5+6)/6 + (1/2)(3.5) = 4.25"
  },

  {
    id: "x080",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice and are paid its value in dollars, and you are allowed up to two re- " +
      "rolls (three rolls in total), each time having to accept the final roll. Playing " +
      "optimally, what is the expected payout?",
    options: ["1", "2", "3", "5", "7"],
    answer: 3,
    note:
      "Work backwards: with one re-roll left the game is worth 4.25, so keep 5 and 6: 14/3 " +
      "= 4.67"
  },

  {
    id: "x081",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice repeatedly, adding up the results, until you roll a 1. You are paid " +
      "the sum of all the rolls before that 1. What is the expected payout?",
    options: ["3", "5", "8", "15", "20"],
    answer: 4,
    note:
      "E[non-1 rolls] = 5, each averaging 4: 5 x 4 = 20"
  },

  {
    id: "x082",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin until the first Head appears. If it takes n flips you are paid " +
      "n squared dollars. What is the fair value of this game?",
    options: ["2", "4", "6", "9", "14"],
    answer: 2,
    note:
      "E[N^2] = (2-p)/p^2 = 1.5/0.25 = 6"
  },

  {
    id: "x083",
    source: "Optiver",
    origin: "generated",
    text:
      "Two dice are rolled and you are paid the absolute difference of the two numbers in " +
      "dollars. What is the fair value of this game?",
    options: ["0.5", "0.8", "1", "2", "3"],
    answer: 3,
    note:
      "70/36 = 1.94"
  },

  {
    id: "x084",
    source: "Optiver",
    origin: "generated",
    text:
      "Four dice are rolled and you are paid the largest number shown in dollars. What is " +
      "the fair value of this game?",
    options: ["5", "8", "15", "20", "30"],
    answer: 0,
    note:
      "6797/1296 = 5.24"
  },

  {
    id: "x085",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 5 balls numbered 1 to 5. You draw them out one at a time without " +
      "replacement until you draw the ball numbered 5. What is the expected number of " +
      "draws?",
    options: ["0.5", "0.7", "1", "2", "3"],
    answer: 4,
    note:
      "By symmetry ball 5 is equally likely to be in any position: (5+1)/2 = 3"
  },

  {
    id: "x086",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice repeatedly until a roll is strictly smaller than the roll before it. " +
      "What is the expected number of rolls?",
    options: ["0.7", "1", "2", "3", "5"],
    answer: 3,
    note:
      "E[N] = sum_k C(k+5,5)/6^k = 2.99 — longer than the continuous analogue e = 2.72 " +
      "because ties count as non-decreasing"
  },

  {
    id: "x087",
    source: "Optiver",
    origin: "generated",
    text:
      "Six dice are rolled and you are paid $1 for each distinct face that appears. What is " +
      "the fair value of this game?",
    options: ["1", "2", "3", "4", "5"],
    answer: 3,
    note:
      "6(1 - (5/6)^6) = 3.99"
  },

  {
    id: "x088",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice. If it shows an even number you are paid that many dollars and the " +
      "game ends. If it shows an odd number you must roll once more and are paid whatever " +
      "the second roll shows. What is the fair value of this game?",
    options: ["2", "4", "8", "15", "30"],
    answer: 1,
    note:
      "2 + 1.75 = 3.75"
  },

  {
    id: "x089",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin up to three times, and you are paid $1 for each Head. However " +
      "the game stops the moment you flip a Tail. What is the fair value of this game?",
    options: ["2", "4", "6", "8", "10"],
    answer: 0,
    note:
      "0.5 + 0.5 + 0.375 = 1.375"
  },

  {
    id: "x090",
    source: "Optiver",
    origin: "generated",
    text:
      "You and an opponent take turns rolling a dice, and the first person to roll a 6 " +
      "wins. You go first. What is the probability that you win?",
    options: ["0.2", "0.4", "0.6", "0.8", "1"],
    answer: 2,
    note:
      "(1/6)/(1 - 25/36) = 6/11 = 0.545"
  },

  {
    id: "x091",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice repeatedly until two consecutive rolls sum to 7. What is the " +
      "expected number of rolls?",
    options: ["3", "4", "5", "6", "7"],
    answer: 4,
    note:
      "After the first roll, each subsequent roll completes a 7 with probability 1/6: 1 + 6 " +
      "= 7"
  },

  {
    id: "x092",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice repeatedly, adding up the results, until the total is more than 20. " +
      "What is the expected value of the final total?",
    options: ["3", "6", "8", "15", "25"],
    answer: 4,
    note:
      "Exact recursion: 22.67 — 20 plus a mean overshoot of about 2.7"
  },

  {
    id: "x093",
    source: "Optiver",
    origin: "generated",
    text:
      "You flip a fair coin repeatedly. What is the expected number of flips until you have " +
      "seen three Heads in total?",
    options: ["1", "1.5", "2.5", "4", "6"],
    answer: 4,
    note:
      "Negative binomial: 3/(1/2) = 6"
  },

  {
    id: "x094",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll two dice and add them. If you roll a double you roll both dice again and " +
      "add that to your total, and you keep going as long as you roll doubles. What is the " +
      "expected final total?",
    options: ["2", "3", "5", "8", "15"],
    answer: 3,
    note:
      "E = 7 + (1/6)E, so E = 42/5 = 8.4"
  },

  {
    id: "x095",
    source: "Optiver",
    origin: "generated",
    text:
      "You have three coins in a bag: two are fair and one has Heads on both sides. You " +
      "pick a coin at random and flip it twice, getting two Heads. What is the probability " +
      "that you picked the double-headed coin?",
    options: ["0.3", "0.4", "0.5", "0.6", "0.7"],
    answer: 4,
    note:
      "Bayes: (1/3)/((1/3) + (2/3)(1/4)) = 2/3"
  },

  {
    id: "x096",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice. If it shows 4 or more you win that many dollars; otherwise you lose " +
      "$2. What is the expected profit per game?",
    options: ["1.5", "3", "6", "10", "25"],
    answer: 0,
    note:
      "2.5 - 1 = 1.5"
  },

  {
    id: "x097",
    source: "Optiver",
    origin: "generated",
    text:
      "You roll a dice and keep a running total until it exceeds fifty. What is the " +
      "probability that the last roll was a 6?",
    options: ["0.1", "0.17", "0.29", "0.4", "0.5"],
    answer: 2,
    note:
      "P(last roll = k) is proportional to k: 6/21 = 0.286"
  },

  {
    id: "x098",
    source: "Optiver",
    origin: "generated",
    text:
      "A game pays you the square of a single dice roll in dollars. What is the fair price " +
      "of one play?",
    options: ["15", "25", "40", "60", "100"],
    answer: 0,
    note:
      "E[X^2] = 91/6 = 15.17"
  },

  {
    id: "x099",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle sits on a vertex of a square. Each second it moves to one of the two " +
      "adjacent vertices at random. What is the expected time for it to reach the opposite " +
      "vertex?",
    options: ["4", "6", "10", "15", "25"],
    answer: 0,
    note:
      "Hitting time on an n-cycle between vertices i apart is i(n-i) = 2 x 2 = 4"
  },

  {
    id: "x100",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle sits on a vertex of a pentagon. Each second it moves to one of the two " +
      "adjacent vertices at random. What is the expected time for it to return to its " +
      "starting vertex?",
    options: ["0.8", "1", "2", "3", "5"],
    answer: 4,
    note:
      "Expected return time to a state of a symmetric walk on n vertices is n = 5"
  },

  {
    id: "x101",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle sits on a vertex of an equilateral triangle. Each second it moves to one " +
      "of the two other vertices at random. What is the expected time until it has visited " +
      "all three vertices?",
    options: ["3", "6", "10", "25", "50"],
    answer: 0,
    note:
      "1 step to a new vertex, then a Geometric(1/2) wait of 2: total 3"
  },

  {
    id: "x102",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle sits on a corner of a cube. Each second it moves along one of the three " +
      "edges at random. What is the expected time for it to reach the diametrically " +
      "opposite corner?",
    options: ["1.5", "2.5", "4", "6", "10"],
    answer: 4,
    note:
      "Standard 3-state lumping gives 10 steps"
  },

  {
    id: "x103",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle starts at the origin of the number line and each second moves one step " +
      "left or right with equal probability. What is the expected number of steps until it " +
      "is 3 steps away from the origin?",
    options: ["3", "6", "9", "12", "18"],
    answer: 2,
    note:
      "E = a x b = 3 x 3 = 9 for symmetric absorption at -3 and +3"
  },

  {
    id: "x104",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle starts at position 2 on the number line and each second moves one step " +
      "left or right with equal probability. It stops when it reaches 0 or 5. What is the " +
      "probability that it stops at 5?",
    options: ["0.2", "0.3", "0.4", "0.5", "0.6"],
    answer: 2,
    note:
      "Fair walk: probability of the far barrier is 2/5 = 0.4"
  },

  {
    id: "x105",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle starts at position 3 and each second moves one step up with probability " +
      "0.6 or one step down with probability 0.4. It stops on reaching 0 or 6. What is the " +
      "probability that it stops at 6?",
    options: ["0.5", "0.6", "0.7", "0.77", "0.9"],
    answer: 3,
    note:
      "Gambler's ruin with r = q/p = 2/3: (1 - r^3)/(1 - r^6) = 0.771"
  },

  {
    id: "x106",
    source: "Optiver",
    origin: "generated",
    text:
      "A rook performs a random walk on an otherwise empty chessboard, each move going to a " +
      "uniformly random square that it can currently reach. What is the expected number of " +
      "moves for it to return to its starting square?",
    options: ["14", "32", "64", "128", "256"],
    answer: 2,
    note:
      "The rook graph is 14-regular on 64 squares, so the return time is just 64"
  },

  {
    id: "x107",
    source: "Optiver",
    origin: "generated",
    text:
      "A king performs a random walk on an otherwise empty chessboard, each move going to a " +
      "uniformly random adjacent square. Starting from a corner, what is the expected " +
      "number of moves for it to return to that corner?",
    options: ["8", "24", "64", "140", "420"],
    answer: 3,
    note:
      "Return time = 2|E|/deg = 2(210)/3 = 140"
  },

  {
    id: "x108",
    source: "Optiver",
    origin: "generated",
    text:
      "A frog sits on the middle one of five lily pads in a row. Each minute it hops to an " +
      "adjacent pad at random. What is the expected number of hops until it reaches either " +
      "end pad?",
    options: ["4", "8", "15", "30", "60"],
    answer: 0,
    note:
      "E = a x b = 2 x 2 = 4"
  },

  {
    id: "x109",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle starts at the origin and each second moves one step up with probability " +
      "1/3, otherwise one step down. What is its expected position after 10 steps?",
    options: ["-6.7", "-3.3", "0", "3.3", "6.7"],
    answer: 1,
    note:
      "10 x (-1/3) = -3.33"
  },

  {
    id: "x110",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle starts at the origin and each second moves one step left or right with " +
      "equal probability. What is the probability that after 10 steps it is exactly 2 steps " +
      "to the right of the origin?",
    options: ["0.05", "0.12", "0.21", "0.3", "0.4"],
    answer: 2,
    note:
      "C(10,6)/2^10 = 210/1024 = 0.205"
  },

  {
    id: "x111",
    source: "Optiver",
    origin: "generated",
    text:
      "A particle sits on a vertex of a regular tetrahedron. Each second it moves along one " +
      "of the three edges at random. What is the expected time for it to return to its " +
      "starting vertex?",
    options: ["2", "3", "4", "6", "9"],
    answer: 2,
    note:
      "Regular graph on 4 vertices: return time = 4"
  },

  {
    id: "x112",
    source: "Optiver",
    origin: "generated",
    text:
      "A token starts on the centre node of a 3x3 grid of nodes. Each second it moves to a " +
      "uniformly random node directly adjacent to it (horizontally or vertically). What is " +
      "the expected number of moves until it reaches a corner node?",
    options: ["2", "3", "4.5", "6", "8"],
    answer: 1,
    note:
      "E_centre = 1 + E_edge and E_edge = 1 + E_centre/3, giving E_centre = 3"
  },

  {
    id: "x113",
    source: "Optiver",
    origin: "generated",
    text:
      "Two particles start at opposite vertices of a square. Each second both particles " +
      "simultaneously move to one of their two adjacent vertices at random. On average, how " +
      "many seconds pass before they occupy the same vertex?",
    options: ["1", "2", "4", "6", "8"],
    answer: 1,
    note:
      "The gap is 2 and changes to 0 with probability 1/2 each second: E = 2"
  },

  {
    id: "x114",
    source: "Optiver",
    origin: "generated",
    text:
      "You start with $2 and repeatedly bet $1 on a fair coin flip. What is the probability " +
      "that you reach $5 before going broke?",
    options: ["0.2", "0.3", "0.4", "0.5", "0.6"],
    answer: 2,
    note:
      "Fair game: 2/5 = 0.4"
  },

  {
    id: "x115",
    source: "Optiver",
    origin: "generated",
    text:
      "You start with $5 and repeatedly bet $1 on a coin that you win with probability 0.4. " +
      "What is the probability you reach $10 before going broke?",
    options: ["0.1", "0.2", "0.3", "0.5", "0.8"],
    answer: 0,
    note:
      "Gambler's ruin with r = q/p = 1.5: (1 - r^5)/(1 - r^10) = 0.116"
  },

  {
    id: "x116",
    source: "Optiver",
    origin: "generated",
    text:
      "You are repeatedly offered a bet on a fair coin that pays 2 to 1 (you win twice your " +
      "stake on Heads, lose your stake on Tails). What fraction of your bankroll should you " +
      "stake each time to maximise long-run growth?",
    options: ["0.1", "0.25", "0.4", "0.5", "1"],
    answer: 1,
    note:
      "Kelly: f = (bp - q)/b = (1 - 0.5)/2 = 0.25"
  },

  {
    id: "x117",
    source: "Optiver",
    origin: "generated",
    text:
      "You start with $100 and play double-or-nothing on fair coin flips, staking " +
      "everything each time. What is the probability that you turn it into $800 before " +
      "losing it all?",
    options: ["0.02", "0.06", "0.13", "0.25", "0.5"],
    answer: 2,
    note:
      "You need three straight wins: (1/2)^3 = 0.125"
  },

  {
    id: "x118",
    source: "Optiver",
    origin: "generated",
    text:
      "You start with $1 and bet everything on a fair coin flip three times in a row (each " +
      "flip either doubles your money or loses it all). What is the expected amount you " +
      "finish with?",
    options: ["0.5", "1", "2", "4", "8"],
    answer: 1,
    note:
      "The game is fair at every step, so E = $1 (though you keep anything only 1 time in " +
      "8)"
  },

  {
    id: "x119",
    source: "Optiver",
    origin: "generated",
    text:
      "You start with $63 and play the martingale on fair coin flips: you bet $1, and after " +
      "each loss you double your stake, stopping at your first win. What is the probability " +
      "that you go bust before ever winning?",
    options: ["0.015", "0.05", "0.1", "0.25", "0.5"],
    answer: 0,
    note:
      "You can cover stakes 1, 2, 4, 8, 16, 32; you bust only on six straight losses: 1/64 " +
      "= 0.016"
  },

  {
    id: "x120",
    source: "Optiver",
    origin: "generated",
    text:
      "A shuffled deck of 26 red and 26 black cards is turned over one at a time. At any " +
      "point you may stop and bet $1 that the next card is red, winning $1 if it is and " +
      "losing $1 if it is not. You must bet before the deck runs out. Playing optimally, " +
      "what is the value of this game?",
    options: ["0", "0.1", "0.25", "0.5", "1"],
    answer: 0,
    note:
      "Exactly 0. P(next card is red) is a martingale, so every stopping rule has the same " +
      "value as betting immediately — and at 26/26 that is zero. Backwards induction " +
      "confirms V(r,b) = (r-b)/(r+b) everywhere."
  },

  {
    id: "x121",
    source: "Optiver",
    origin: "generated",
    text:
      "A bookmaker offers 2 to 1 on Horse A and 2 to 1 on Horse B in a two horse race (a " +
      "winning $1 stake returns your $1 plus $2 of winnings). You stake $100 in total, " +
      "split so that your return is the same whichever horse wins. What is your guaranteed " +
      "profit?",
    options: ["$8", "$10", "$20", "$30", "$50"],
    answer: 4,
    note:
      "Stake $50 on each: the winner returns $150 against a $100 outlay, so $50 profit " +
      "whichever horse wins — the implied probabilities sum to only 2/3."
  },

  {
    id: "x122",
    source: "Optiver",
    origin: "generated",
    text:
      "You are given three red cards and three black cards, shuffled and placed face down, " +
      "and you turn them over one at a time. You start with $100 and before each card you " +
      "choose how much to bet. If the card is red you win double your bet; if it is black " +
      "you lose your bet. Playing optimally, what final amount can you guarantee?",
    options: ["$80", "$100", "$200", "$300", "$500"],
    answer: 3,
    note:
      "Hedging recursion V(r,b) = max_f min((1+2f)V(r-1,b), (1-f)V(r,b-1)) with V(r,0) = " +
      "3^r and V(0,b) = 1: V(3,3) = 3.129, so $312.88 guaranteed"
  },

  {
    id: "x123",
    source: "Optiver",
    origin: "generated",
    text:
      "You and an opponent take turns flipping a fair coin, and the first person to flip a " +
      "Head wins. You go first. What is the probability that you win?",
    options: ["0.3", "0.4", "0.5", "0.6", "0.7"],
    answer: 4,
    note:
      "(1/2)/(1 - 1/4) = 2/3"
  },

  {
    id: "x124",
    source: "Optiver",
    origin: "generated",
    text:
      "You start with $3 and your opponent starts with $3. You repeatedly flip a fair coin " +
      "and $1 changes hands each time, until one of you is broke. What is the expected " +
      "number of flips?",
    options: ["2", "4", "6", "10", "15"],
    answer: 3,
    note:
      "E = a x b = 3 x 3 = 9"
  },

  {
    id: "x125",
    source: "Optiver",
    origin: "generated",
    text:
      "There are 23 people in a room. What is the probability that at least two of them " +
      "share a birthday? (Ignore leap years.)",
    options: ["0.1", "0.25", "0.5", "0.7", "0.9"],
    answer: 2,
    note:
      "1 - 365!/(342! 365^23) = 0.507"
  },

  {
    id: "x126",
    source: "Optiver",
    origin: "generated",
    text:
      "Five people each independently pick a random integer from 1 to 10. What is the " +
      "probability that they all pick different numbers?",
    options: ["0.1", "0.3", "0.5", "0.7", "0.9"],
    answer: 1,
    note:
      "30240/100000 = 0.302"
  },

  {
    id: "x127",
    source: "Optiver",
    origin: "generated",
    text:
      "Five people throw their hats into a pile and each takes one back at random. What is " +
      "the probability that nobody gets their own hat?",
    options: ["0.06", "0.1", "0.15", "0.25", "0.4"],
    answer: 4,
    note:
      "Derangements: 44/120 = 0.367, already close to 1/e"
  },

  {
    id: "x128",
    source: "Optiver",
    origin: "generated",
    text:
      "Eight people throw their hats into a pile and each takes one back at random. What is " +
      "the expected number of people who get their own hat?",
    options: ["1", "2", "4", "8", "15"],
    answer: 0,
    note:
      "Linearity: 8 x 1/8 = 1, for any number of people"
  },

  {
    id: "x129",
    source: "Optiver",
    origin: "generated",
    text:
      "You and a friend each independently pick two distinct numbers from 1 to 5. What is " +
      "the probability that you have at least one number in common?",
    options: ["0.2", "0.35", "0.5", "0.7", "0.85"],
    answer: 3,
    note:
      "1 - C(3,2)/C(5,2) = 1 - 0.3 = 0.7"
  },

  {
    id: "x130",
    source: "Optiver",
    origin: "generated",
    text:
      "Four couples are seated at random around a round table of eight seats. What is the " +
      "expected number of couples that end up sitting next to each other?",
    options: ["0.5", "1.15", "2", "3", "4"],
    answer: 1,
    note:
      "P(a given couple adjacent) = 2/7, so E = 8/7 = 1.14"
  },

  {
    id: "x131",
    source: "Optiver",
    origin: "generated",
    text:
      "Four people draw names for Secret Santa, each drawing one of the four names at " +
      "random. What is the probability that nobody draws their own name?",
    options: ["0.1", "0.25", "0.37", "0.5", "0.65"],
    answer: 2,
    note:
      "Derangements of 4: 9/24 = 0.375"
  },

  {
    id: "x132",
    source: "Optiver",
    origin: "generated",
    text:
      "You and a friend each roll three dice. What is the probability that at least one " +
      "face value appears in both sets of rolls?",
    options: ["0.3", "0.5", "0.65", "0.8", "0.95"],
    answer: 3,
    note:
      "Exhaustive over all 6^3 x 6^3 pairs of rolls: 0.791"
  },

  {
    id: "x133",
    source: "Optiver",
    origin: "generated",
    text:
      "Ten people are split at random into five pairs. What is the probability that two " +
      "particular people end up paired together?",
    options: ["0.06", "0.1", "0.2", "0.4", "0.8"],
    answer: 1,
    note:
      "One specific person has 9 equally likely partners: 1/9 = 0.111"
  },

  {
    id: "x134",
    source: "Optiver",
    origin: "generated",
    text:
      "There are 30 people in a room. What is the expected number of pairs of people who " +
      "share a birthday? (Ignore leap years.)",
    options: ["0.4", "0.8", "1.2", "2", "3"],
    answer: 2,
    note:
      "435/365 = 1.19"
  },

  {
    id: "x135",
    source: "Optiver",
    origin: "generated",
    text:
      "A stick of length 1 is broken at two uniformly random points. What is the " +
      "probability that the three pieces can form a triangle?",
    options: ["0.1", "0.15", "0.2", "0.25", "0.3"],
    answer: 3,
    note:
      "Classic result: 1/4"
  },

  {
    id: "x136",
    source: "Optiver",
    origin: "generated",
    text:
      "A stick of length 1 is broken at a single uniformly random point. What is the " +
      "expected length of the longer piece?",
    options: ["0.5", "0.6", "0.67", "0.75", "0.9"],
    answer: 3,
    note:
      "E[max(U, 1-U)] = 3/4"
  },

  {
    id: "x137",
    source: "Optiver",
    origin: "generated",
    text:
      "Two people agree to meet between 12:00 and 1:00, each arriving at a uniformly random " +
      "time and waiting 15 minutes before leaving. What is the probability that they meet?",
    options: ["0.1", "0.2", "0.3", "0.4", "0.5"],
    answer: 3,
    note:
      "1 - (3/4)^2 = 0.4375"
  },

  {
    id: "x138",
    source: "Optiver",
    origin: "generated",
    text:
      "Two numbers are chosen uniformly at random from the interval [0, 1]. What is the " +
      "probability that their sum exceeds 1.5?",
    options: ["0.05", "0.13", "0.25", "0.33", "0.5"],
    answer: 1,
    note:
      "Area of the corner triangle: (1/2)(1/2)^2 = 0.125"
  },

  {
    id: "x139",
    source: "Optiver",
    origin: "generated",
    text:
      "Three points are chosen uniformly at random on the circumference of a circle. What " +
      "is the probability that the triangle they form contains the centre?",
    options: ["0.1", "0.25", "0.33", "0.5", "0.67"],
    answer: 1,
    note:
      "Classic result: 1/4"
  },

  {
    id: "x140",
    source: "Optiver",
    origin: "generated",
    text:
      "Two points are chosen uniformly at random on the circumference of a circle. What is " +
      "the probability that the chord joining them is longer than the radius?",
    options: ["0.25", "0.4", "0.5", "0.67", "0.8"],
    answer: 3,
    note:
      "Chord > R iff the angular separation exceeds 60 degrees: 2/3"
  },

  {
    id: "x141",
    source: "Optiver",
    origin: "generated",
    text:
      "Two numbers are chosen uniformly at random from [0, 1]. What is the expected value " +
      "of the absolute difference between them?",
    options: ["0.15", "0.2", "0.25", "0.3", "0.35"],
    answer: 4,
    note:
      "E|X - Y| = 1/3"
  },

  {
    id: "x142",
    source: "Optiver",
    origin: "generated",
    text:
      "A point is chosen uniformly at random inside a square. What is the probability that " +
      "it is closer to the centre of the square than to any of its four edges?",
    options: ["0.1", "0.2", "0.35", "0.5", "0.65"],
    answer: 1,
    note:
      "Region bounded by four parabolic arcs; numerically 0.219"
  },

  {
    id: "x143",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 5 red balls and 3 blue balls. Two balls are drawn without " +
      "replacement. What is the probability that both are red?",
    options: ["0.2", "0.25", "0.3", "0.35", "0.4"],
    answer: 3,
    note:
      "20/56 = 0.357"
  },

  {
    id: "x144",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 4 white balls and 6 black balls. Three balls are drawn without " +
      "replacement. What is the probability that exactly two of them are white?",
    options: ["0.1", "0.15", "0.2", "0.25", "0.3"],
    answer: 4,
    note:
      "36/120 = 0.3"
  },

  {
    id: "x145",
    source: "Optiver",
    origin: "generated",
    text:
      "You are shown three doors, one hiding a prize. You pick a door, and the host, who " +
      "knows where the prize is, opens a different door to reveal no prize. You then switch " +
      "to the remaining unopened door. What is the probability you win?",
    options: ["0.33", "0.5", "0.6", "0.67", "0.75"],
    answer: 3,
    note:
      "Switching wins exactly when your first pick was wrong: 2/3"
  },

  {
    id: "x146",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 10 balls numbered 1 to 10. Three are drawn without replacement. What " +
      "is the probability that the largest number drawn is exactly 8?",
    options: ["0.05", "0.1", "0.18", "0.3", "0.45"],
    answer: 2,
    note:
      "C(7,2)/C(10,3) = 21/120 = 0.175"
  },

  {
    id: "x147",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 10 red balls and 10 blue balls. Balls are drawn without replacement. " +
      "What is the expected number of draws up to and including the first red ball?",
    options: ["1", "2", "3", "5", "8"],
    answer: 1,
    note:
      "The 10 red balls split 10 blue into 11 gaps: (20+1)/11 = 1.91"
  },

  {
    id: "x148",
    source: "Optiver",
    origin: "generated",
    text:
      "A cereal brand includes one of five equally likely toys in each box. What is the " +
      "expected number of boxes you need to buy to collect all five toys?",
    options: ["3", "4", "7", "10", "20"],
    answer: 3,
    note:
      "5(1 + 1/2 + 1/3 + 1/4 + 1/5) = 11.4"
  },

  {
    id: "x149",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 3 red counters and 3 blue counters. All six are drawn out one at a " +
      "time. What is the probability that the colours alternate perfectly?",
    options: ["0.1", "0.15", "0.25", "0.4", "0.7"],
    answer: 0,
    note:
      "2 of the C(6,3) = 20 colour patterns alternate: 0.1"
  },

  {
    id: "x150",
    source: "Optiver",
    origin: "generated",
    text:
      "A box contains 12 balls, 3 of which are defective. Four balls are drawn without " +
      "replacement. What is the probability that at least one is defective?",
    options: ["0.25", "0.45", "0.6", "0.75", "0.9"],
    answer: 3,
    note:
      "1 - 126/495 = 0.745"
  },

  {
    id: "x151",
    source: "Optiver",
    origin: "generated",
    text:
      "A bag contains 10 red, 10 yellow and 10 blue counters. What is the probability that " +
      "the first two counters drawn (without replacement) are the same colour?",
    options: ["0.1", "0.2", "0.31", "0.45", "0.6"],
    answer: 2,
    note:
      "After the first counter, 9 of the remaining 29 match it: 0.310"
  }

];

if (typeof module !== "undefined" && module.exports) module.exports = QUESTIONS_EXTRA;
