# Quick Reference

## Time/Space Complexity Cheat Sheet

| Problem | Time | Space | Technique | Note |
|---------|------|-------|-----------|------|
| Two Sum | O(n) | O(n) | Hash Map | Hash map for O(1) lookups |
| LRU Cache | O(1) | O(capacity) | Map + DLL | Map + Doubly Linked List |
| Number of Islands | O(m×n) | O(m×n) | DFS/BFS | Graph traversal |
| Longest Substring | O(n) | O(1) | Sliding Window | Sliding window + hash map |
| Top K Frequent | O(n log k) | O(n) | Heap | Min heap of size k |
| Max Path Sum | O(n) | O(h) | DFS | Tree recursion, h = height |
| Trie | O(m) | O(26×m) | Trie | m = word length |
| Min Window | O(m+n) | O(1) | Sliding Window | Two pointers |
| Course Schedule | O(V+E) | O(V) | Graph | Cycle detection |
| Kth Largest | O(n log k) | O(k) | Heap | Min heap |
| 3Sum | O(n²) | O(1) | Two Pointer | Sort + two pointers |
| Median 2 Arrays | O(log min(m,n)) | O(1) | Binary Search | Partition search |
| Edit Distance | O(m×n) | O(m×n) | DP | 2D dynamic programming |
| LCA | O(n) | O(h) | DFS | Tree recursion |
| Word Ladder | O(N×L²) | O(N×L²) | BFS | N=words, L=length |

## Common Patterns

### 1. Two Pointers
**When to use**: Sorted arrays, finding pairs/triplets
**Problems**: Two Sum, 3Sum, Container With Most Water

```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
  // Compare arr[left] and arr[right]
  // Move pointers based on comparison
}
```

### 2. Sliding Window
**When to use**: Contiguous subarray/substring problems
**Problems**: Longest Substring, Minimum Window

```javascript
let left = 0, maxLength = 0;
for (let right = 0; right < arr.length; right++) {
  // Expand window
  while (/* window invalid */) {
    // Shrink window from left
    left++;
  }
  maxLength = Math.max(maxLength, right - left + 1);
}
```

### 3. Hash Map
**When to use**: Fast lookups, frequency counting
**Problems**: Two Sum, Top K Frequent

```javascript
const map = new Map();
for (const item of array) {
  map.set(item, (map.get(item) || 0) + 1);
}
```

### 4. DFS (Depth-First Search)
**When to use**: Tree/graph traversal, backtracking
**Problems**: Number of Islands, Max Path Sum

```javascript
function dfs(node) {
  if (!node) return;
  // Process node
  dfs(node.left);
  dfs(node.right);
}
```

### 5. BFS (Breadth-First Search)
**When to use**: Shortest path, level-order traversal
**Problems**: Word Ladder, Number of Islands

```javascript
const queue = [startNode];
while (queue.length > 0) {
  const node = queue.shift();
  // Process node
  // Add neighbors to queue
}
```

### 6. Dynamic Programming
**When to use**: Optimization problems, overlapping subproblems
**Problems**: Edit Distance, Longest Palindrome

```javascript
const dp = Array(n).fill(0);
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i-1], dp[i-2] + arr[i]);
}
```

### 7. Heap/Priority Queue
**When to use**: Finding top K elements, maintaining order
**Problems**: Top K Frequent, Kth Largest

```javascript
class MinHeap {
  push(val) { /* heapify up */ }
  pop() { /* heapify down */ }
  peek() { return this.heap[0]; }
}
```

### 8. Binary Search
**When to use**: Sorted arrays, finding boundaries
**Problems**: Median of Two Arrays

```javascript
let left = 0, right = arr.length - 1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```

## Interview Strategy

### Before Coding
1. **Clarify requirements** - Ask about edge cases, constraints
2. **Discuss approach** - Explain your solution before coding
3. **Confirm complexity** - State time/space complexity upfront

### While Coding
4. **Write clean code** - Meaningful variable names
5. **Add comments** - For complex logic
6. **Think aloud** - Explain your thought process

### After Coding
7. **Test with examples** - Walk through your code
8. **Discuss trade-offs** - Alternative approaches
9. **Handle edge cases** - Empty input, nulls, duplicates

## Common Pitfalls to Avoid

- ❌ Off-by-one errors in loops
- ❌ Not handling empty/null input
- ❌ Forgetting to update pointers
- ❌ Not considering time complexity
- ❌ Modifying input without asking
- ❌ Not testing edge cases

## Search-Specific Topics

### Caching (LRU Cache)
- Hash map for O(1) lookups
- Doubly linked list for O(1) eviction
- Most recent at head, least recent at tail

### Autocomplete (Trie)
- Prefix-based search
- O(m) insert/search where m = word length
- Space-efficient for large dictionaries

### Ranking (Top K Frequent)
- Min heap of size K
- Frequency counting with hash map
- Used for search result ranking

### Spell Check (Edit Distance)
- Levenshtein distance
- Dynamic programming
- Suggest corrections based on edit distance

## JavaScript Cheat Sheet

### Data Structures
```javascript
// Map (Hash Map)
const map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);

// Set
const set = new Set();
set.add(value);
set.has(value);
set.delete(value);

// Array methods
arr.sort((a, b) => a - b);  // Ascending
arr.sort((a, b) => b - a);  // Descending
arr.slice(start, end);      // Copy subarray
arr.splice(start, deleteCount, ...items);  // Modify array
```

### Common Math Operations
```javascript
Math.max(...array);
Math.min(...array);
Math.floor(x);
Math.ceil(x);
Math.abs(x);
```

## Final Tips for Microsoft Interview

- 🎯 Focus on **search-relevant** problems (LRU, Trie, Top K)
- 💡 Explain **why** you chose an approach, not just **what**
- ⚡ Start with **brute force**, then **optimize**
- 🔍 Mention **real-world applications** (caching, autocomplete)
- 🗣️ **Communicate clearly** throughout the process

**You've got this! 🚀**
