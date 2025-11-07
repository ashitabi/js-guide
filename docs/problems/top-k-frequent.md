# 5. Top K Frequent Elements ⭐

::: warning SEARCH RANKING
**Difficulty**: Medium | **Frequency**: High | **LeetCode**: [#347](https://leetcode.com/problems/top-k-frequent-elements/)

Critical for search result ranking!
:::

## Problem Statement

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

## JavaScript Solution

```javascript
function topKFrequent(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  return Array.from(freqMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}
```

**Time**: O(n log n) | **Space**: O(n)

## Algorithm Visualization

### Min Heap Approach

```mermaid
flowchart TD
    A[Start: nums, k] --> B[Count frequencies in Map]
    B --> C[Create Min Heap size k]
    C --> D{For each num, freq}
    D --> E[Push to heap]
    E --> F{Heap size > k?}
    F -->|Yes| G[Pop min from heap]
    F -->|No| D
    G --> D
    D -->|End| H[Extract k elements from heap]

    style H fill:#0f0,stroke:#333
```

### Example: [1,1,1,2,2,3], k=2

```mermaid
sequenceDiagram
    participant Array
    participant FreqMap
    participant Heap
    participant Result

    Array->>FreqMap: Count frequencies
    Note over FreqMap: {1:3, 2:2, 3:1}

    FreqMap->>Heap: Add (1, freq=3)
    FreqMap->>Heap: Add (2, freq=2)
    Note over Heap: Size = 2

    FreqMap->>Heap: Add (3, freq=1)
    Note over Heap: Size > k, pop min (3, freq=1)

    Heap->>Result: Return [1, 2]
```
