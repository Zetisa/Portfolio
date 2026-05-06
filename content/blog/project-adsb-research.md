---
title: "ADS-B Anomaly Detection: Securing the Skies"
date: "2026-04-28"
description: "A deep dive into detecting spoofing and jamming attacks in aviation data using Autoencoders."
category: "project"
---

# ADS-B Anomaly Detection

This project is a core part of my internship at **AirNav Indonesia**. The goal is to build a robust pipeline that can identify cyber threats like spoofing and jamming in real-time aviation data.

## The Challenge

Aviation data, specifically **ADS-B (Automatic Dependent Surveillance-Broadcast)**, is often unencrypted. This makes it vulnerable to various attacks where an adversary can inject fake aircraft signals into the system. Processing a dataset of **77 million rows** requires not just accuracy, but high-performance computing and efficient algorithms.

## Tech Stack & Workflow

To handle this research, I’ve established a specific environment:
* **Environment:** Linux (WSL) for high-performance agent execution.
* **Language:** Python (Pandas, Scikit-Learn, PyArrow).
* **Modeling:** Transitioning from *Isolation Forest* to **Autoencoders** for better reconstruction error analysis.

## Implementation Snippet

Here is a glimpse of how I handle the data preprocessing using Python:

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Loading the massive ADS-B dataset
def load_data(file_path):
    # Using Parquet for efficiency with 77M+ rows
    df = pd.read_parquet(file_path)
    return df

# Scaling features for the Autoencoder
scaler = StandardScaler()
scaled_features = scaler.fit_transform(df[['alt', 'lat', 'lon', 'velocity']])