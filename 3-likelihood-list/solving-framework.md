# Likelihood List — a solving framework

Unlike Beat the Odds (pick the closest number) or Number Logic (evaluate an expression),
this game asks you to **rank three statements by likelihood**. The skill is not computing
exact probabilities — it is **ordering** them fast, which often requires less precision.

## The 15-second triage

For each question, do three things before you start ranking:

**1. What kind of data is given?**

| Data type | Default move |
|---|---|
| A table of observations | Compute frequencies / averages, extrapolate |
| A scatter plot | Read densities, trends, outlier effects |
| A line chart / time series | Identify trend, variance, mean-reversion |
| A directed graph / network | Trace transition probabilities, find sinks |
| Pure text (no visual) | Model with binomial / normal / basic probability |

**2. What is each statement actually asking?**

Translate each statement into a probability question. Often one statement is about a
**marginal** event (unconditional), one is **conditional**, and one is about a **joint**
or **extreme** event. Joint/extreme events are usually least likely.

**3. Is there a dominance shortcut?**

Before computing anything, check:
- Is one event a **subset** of another? (subset is less likely)
- Is one event **impossible** or **certain**? (instant ranking)
- Does one require **multiple independent conditions** to hold simultaneously? (product of
  probabilities — usually smallest)

---

## Category A: Data-driven estimation

> Trigger: a table or chart of historical data, "based on the data", "rank the outcomes"

### A1 · Frequency extrapolation

Count how often each outcome occurred in the data, estimate the probability, and compare.

- Football tournament: count team win/draw/loss rates, goal-scoring frequencies
- Student test scores: compute per-student averages and variances
- Investment funds: compute mean returns and volatility per fund

**The key insight:** variance matters as much as mean. A high-mean, high-variance fund
may underperform a low-mean, low-variance fund in any single period. Over longer horizons,
the mean dominates.

### A2 · Missing data imputation

When data is missing, use the **correlations visible in the complete rows** to estimate the
missing value. Look for the strongest predictors:

- House prices: bedrooms, bathrooms, distance to beach, block size all predict price
- Use similar rows (same number of bedrooms, similar block size) as proxies

---

## Category B: Statistical inference from samples

> Trigger: "rolled 20 times", "outcomes listed below", sample data given

### B1 · Infer the distribution from samples

When you see repeated outcomes from an unknown distribution, estimate face probabilities
from frequencies:

```
P(face = k) ≈ count(k) / total_rolls
```

For dice with repeated faces, look for:
- Which values **never appear** (those faces don't exist)
- The **relative frequencies** of values that do appear

Then compute the probability of each statement using those inferred distributions.

### B2 · Binomial / normal approximation

For "after N more trials" questions:

```
E[X] = np        SD[X] = √(npq)
P(X > k) ≈ P(Z > (k - np) / √(npq))
```

- FTP after 200 shots: use the first 100 shots to estimate p, then model the next 100

**Key trap:** check if an event is **impossible** (e.g., making more than 100 out of 100
shots). This instantly makes it the least likely.

---

## Category C: Reading charts

> Trigger: scatter plot, line chart, or any visual with data points

### C1 · Scatter plot density

For "a randomly selected X will be Y" questions, count dots in the relevant region:

```
P(event) = dots_in_region / total_dots
```

Remember conditional probability:
```
P(Brand 2 | price > $40k) = Brand_2_dots_above_40k / all_dots_above_40k
```

### C2 · Line chart trend + variance

For three time series with the same trend but different variances:
- **Low variance** series stay close to the trend → they **cross each other frequently**
  if they share the same mean
- **High variance** series swing widely → they are more likely to be **extreme** (highest
  or lowest) at any given time, but also more likely to be on the wrong side

**The crossing principle:** two series with similar means and low variance will intersect
more often than two series where one has high variance (the high-variance one tends to
stay far from the mean for extended stretches).

### C3 · Model comparison from charts

When comparing regression models (e.g., MSE vs MSLE):
- MSE is **pulled by outliers** → steep line, good for extremes, bad for the bulk
- MSLE is **robust to outliers** → flatter line, good for the bulk
- The flatter model typically predicts **higher** values for low-x observations (higher
  intercept) and **lower** for high-x observations

---

## Category D: Random walks and Markov chains

> Trigger: particles moving, signals propagating, random walks

### D1 · Random walk spread

After n steps of a ±1 random walk, the position has:
```
SD = √n
```

Use this to estimate how likely a particle is to reach a given distance.

**Joint events kill probability:** if you need X > a AND Y > b with independent
coordinates, multiply the probabilities. This product is much smaller than either alone.

### D2 · Markov chain steady state

For directed graph / network problems:
1. List outgoing edges from each node
2. Identify **sinks** (nodes with no outgoing edges or self-loops) — the signal accumulates there
3. Identify **transient** vs **recurrent** states
4. After many steps, the signal is at the stationary distribution

**Quick check:** nodes that many edges point **toward** (high in-degree relative to
out-degree) tend to accumulate probability.

---

## Category E: Weighted averages and model selection

> Trigger: "which expression best predicts", "order by likelihood of prediction"

### E1 · Matching the weighting to the regime

When predicting a future value from time-series data:
- If the future resembles **early** data → weight early observations more
- If the future resembles **recent** data → weight recent observations more
- If the future could be anything → simple average

**Read the weights carefully:** a sum Σ(21−i)·hᵢ gives weight 20 to minute 1 and weight 1
to minute 20 — it weights the **beginning** heavily, not the end.

### E2 · Linear combination from graphs

When told A = αB + βC:
- Check if A is closer to B or C visually → heavier weight on the closer one
- Check if α + β = 1 (proper convex combination) vs α + β > 1 or < 1
- Weights summing to more than 1 will **overshoot** the range of B and C

---

## The ranking shortcuts — collected

| Pattern | Instant ranking |
|---|---|
| One event is a subset of another | Subset ≤ superset |
| One event requires k independent conditions | Probably least likely (product shrinks fast) |
| One event is impossible or nearly impossible | Least likely, no computation needed |
| Two means are far apart with low variance | The higher-mean event dominates |
| Two means are equal | ≈ 50/50, this is likely the "medium" option |
| Conditional on rare subset (e.g., luxury cars) | Low probability unless the condition is common |
| "Exactly" a specific value | Point probability is usually low |
| Over a longer time horizon | Mean dominates variance → trends amplify |

---

## Common traps

1. **Joint vs marginal.** "X > 10 AND Y > 10" is much less likely than "X > 10" alone.
   People underweight the multiplication.

2. **Confusing weight direction.** Σ(21−i)·hᵢ weights minute 1 the **most**, not the
   least. Always plug in i=1 and i=n to check which end gets the heavy weight.

3. **Variance doesn't help with "exactly".** High variance makes a specific point LESS
   likely, not more. But it makes extreme events (tails) more likely.

4. **Ignoring the base rate.** "Car above $40k is Brand 2" is a conditional probability.
   "Random car is Brand 1" is a marginal. Don't compare them directly without adjusting.

5. **The impossible event.** Always check: can this event physically happen? If the maximum
   possible value is X, any threshold above X has probability 0.

6. **Confusing "any one year" with "over five years".** A volatile fund might beat a stable
   one in any single year, but the stable one's advantage compounds over many years.
