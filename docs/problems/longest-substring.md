# 3. Longest Substring Without Repeating Characters

::: info Problem Info
**Difficulty**: Medium | **Frequency**: Very High | **LeetCode**: [#3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
:::

## Video Tutorials

- 🎥 [NeetCode](https://www.youtube.com/watch?v=wiGpQwVHdE0)
- 🎥 [Take U Forward](https://www.youtube.com/watch?v=tcTJknBzqnA)
- 🎥 [Striver](https://www.youtube.com/watch?v=AU0Ph7BN92w)

## Problem Statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with length 3.
```

**Example 2:**
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with length 3.
```

## Algorithm Visualization

### Sliding Window Approach

```mermaid
flowchart TD
    A[Start: string s] --> B[left=0, maxLen=0, charMap=empty]
    B --> C{For each right pointer}
    C --> D{char in map AND >= left?}
    D -->|Yes| E[Move left = charMap.get char + 1]
    D -->|No| F[Update charMap char:right]
    E --> F
    F --> G[maxLen = max maxLen, right-left+1]
    G --> C
    C -->|End| H[Return maxLen]

    style H fill:#0f0,stroke:#333
```

### Example: "abcabcbb"

```mermaid
stateDiagram-v2
    [*] --> Window1: left=0, right=0
    Window1 --> Window2: "a" (len=1)
    Window2 --> Window3: "ab" (len=2)
    Window3 --> Window4: "abc" (len=3)
    Window4 --> Window5: "bca" (found 'a', move left)
    Window5 --> Window6: "cab" (len=3)
    Window6 --> Window7: "abc" (found 'c', move left)
    Window7 --> [*]: Max length = 3

    state "Window: a" as Window1
    state "Window: ab" as Window2
    state "Window: abc" as Window3
    state "Window: bca" as Window5
```

### Sliding Window Visualization

```mermaid
graph TD
    subgraph "Step 1: abcabcbb"
        S1["left=0, right=2<br/>window='abc'<br/>maxLen=3"]
    end

    subgraph "Step 2: abcabcbb"
        S2["left=1, right=3<br/>window='bca'<br/>duplicate 'a' found!"]
    end

    subgraph "Step 3: abcabcbb"
        S3["left=2, right=4<br/>window='cab'<br/>maxLen=3"]
    end

    S1 --> S2
    S2 --> S3

    style S1 fill:#bbf,stroke:#333
    style S2 fill:#fbb,stroke:#333
    style S3 fill:#bbf,stroke:#333
```

## JavaScript Solution

### Sliding Window + Hash Map (Optimal) ⭐

**Time Complexity**: O(n) | **Space Complexity**: O(min(m,n))

```javascript
/**
 * Sliding Window + Hash Map
 * O(n) time, O(min(m,n)) space where m = charset size
 */
function lengthOfLongestSubstring(s) {
  const charMap = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If character exists and is in current window, move left pointer
    if (charMap.has(char) && charMap.get(char) >= left) {
      left = charMap.get(char) + 1;
    }

    // Update character's latest position
    charMap.set(char, right);

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")
console.log(lengthOfLongestSubstring("dvdf")); // 3 ("vdf")
```

## Key Insights

::: tip Why This Works
- **Sliding window** shrinks when duplicate found
- **Store character positions** for quick lookup
- **Only update left** when char is in CURRENT window
- **Single pass** through the string
:::

## Interview Tips

- Start by explaining the sliding window concept
- Draw the window movement on an example
- Explain why we need `charMap.get(char) >= left` check

---

::: info Next Problem
👉 Continue to [Top K Frequent Elements](/problems/top-k-frequent)
:::
