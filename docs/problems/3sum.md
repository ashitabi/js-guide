# 11. 3Sum

::: info Problem Info
**Difficulty**: Medium | **Frequency**: High | **LeetCode**: [#15](https://leetcode.com/problems/3sum/)
:::

## Video Tutorials

- 🎥 [NeetCode](https://www.youtube.com/watch?v=jzZsG8bJJZ0)
- 🎥 [Take U Forward](https://www.youtube.com/watch?v=DhFhcV7vXc0)
- 🎥 [Striver](https://www.youtube.com/watch?v=onLvA5KFEA0)

## Problem Statement

Given an integer array `nums`, return all triplets `[nums[i], nums[j], nums[k]]` where:
- `i != j != k`
- `nums[i] + nums[j] + nums[k] == 0`

The solution set must not contain duplicate triplets.

**Example:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

## JavaScript Solution

### Two Pointer (Optimal) ⭐

**Time**: O(n²) | **Space**: O(1)

```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip if positive (can't sum to 0)
    if (nums[i] > 0) break;

    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Two pointer on remaining array
    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1, -1, 2], [-1, 0, 1]]
```

## Algorithm Visualization

### Two Pointer Approach

```mermaid
flowchart TD
    A[Start: Sort array] --> B[Fix first element i]
    B --> C[Set left=i+1, right=end]
    C --> D{left < right?}
    D -->|Yes| E{sum = target?}
    E -->|Equal| F[Add triplet, skip duplicates]
    E -->|Less| G[left++]
    E -->|Greater| H[right--]
    F --> G
    G --> D
    H --> D
    D -->|No| I[Move to next i, skip duplicates]
    I --> J{More elements?}
    J -->|Yes| B
    J -->|No| K[Return result]

    style K fill:#0f0,stroke:#333
```

### Example Walkthrough

Input: `[-1, 0, 1, 2, -1, -4]` → Sorted: `[-4, -1, -1, 0, 1, 2]`

```mermaid
graph TD
    subgraph "i=-1 (first)"
        A1[-4, -1, -1, 0, 1, 2]
        A2[left=1, right=5]
        A3[-1 + 2 = 1 > 0]
        A4[right--]
    end

    subgraph "i=-1 (second)"
        B1[-4, -1, -1, 0, 1, 2]
        B2[left=2, right=5]
        B3[-1 + 2 = 1 > 0]
        B4[Found: -1, -1, 2]
    end

    style B4 fill:#0f0,stroke:#333
```

## Key Insights

- Sort first for two pointer approach
- Skip duplicates carefully
- O(n²) reduces from O(n³) brute force

---

::: info Next Problem
👉 Continue to [Median of Two Sorted Arrays](/problems/median-arrays)
:::
