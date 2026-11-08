# ML evaluation protocol

Use this for any phase that trains, fine-tunes, prompts or evaluates a model.

## Data
- Define the train, validation and test splits once, in code, with a fixed seed, and record them.
- Check for leakage: duplicates across splits, temporal leakage, and target leakage in features.
- Use the test set only for final numbers. All tuning happens on validation. Never peek at test.
- Record the data version: source, date, and a hash or row count.

## Baselines
Run before claiming that anything works:
- a trivial baseline (majority class, mean prediction, or random);
- a simple strong baseline (logistic regression, BM25, a small pretrained model, or a zero-shot prompt).

## Runs
- Fix all seeds: Python, NumPy, framework, and data loader.
- Report results as mean ± std over at least 3 seeds for any comparison that matters.
- Use metrics tied to the scope's success criteria, and justify the choice (e.g. F1 or PR-AUC for imbalanced data, not accuracy).

## Ablations
Every component claimed to help gets an ablation: remove it and measure.

## Error analysis
Inspect at least 20 failure cases. Group them into categories, and note what the model gets wrong and why.

## Logging
Record each run as `.dev/experiments/YYYY-MM-DD-<name>.md` with:
- the commit, config/hyperparameters, data version and seeds
- metrics, compute and time
- notes, plus a link back to the phase file

## Claims
Never say "better" or "improved" without the baseline comparison and the variance across seeds. If the difference is within noise, say that it's within noise.
