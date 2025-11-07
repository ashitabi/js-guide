import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'LeetCode Solutions',
  description: 'Microsoft Teams Frontend Interview Prep - Top 30 LeetCode Problems',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Problems', link: '/problems/' },
      { text: 'JavaScript Core', link: '/javascript-core' },
      { text: 'React Concepts', link: '/react-concepts' },
      { text: 'Quick Reference', link: '/quick-reference' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'JavaScript Core', link: '/javascript-core' },
          { text: 'React Concepts', link: '/react-concepts' },
          { text: 'Quick Reference', link: '/quick-reference' }
        ]
      },
      {
        text: 'Easy Problems',
        collapsed: false,
        items: [
          { text: '1. Two Sum', link: '/problems/two-sum' }
        ]
      },
      {
        text: 'Medium Problems',
        collapsed: false,
        items: [
          { text: '3. Longest Substring', link: '/problems/longest-substring' },
          { text: '5. Top K Frequent', link: '/problems/top-k-frequent' },
          { text: '7. Trie Implementation', link: '/problems/trie' },
          { text: '9. Course Schedule', link: '/problems/course-schedule' },
          { text: '10. Kth Largest Element', link: '/problems/kth-largest' },
          { text: '11. 3Sum', link: '/problems/3sum' },
          { text: '13. Edit Distance', link: '/problems/edit-distance' },
          { text: '14. Lowest Common Ancestor', link: '/problems/lca' }
        ]
      },
      {
        text: 'Hard Problems',
        collapsed: false,
        items: [
          { text: '2. LRU Cache', link: '/problems/lru-cache' },
          { text: '4. Number of Islands', link: '/problems/number-of-islands' },
          { text: '6. Binary Tree Max Path', link: '/problems/max-path-sum' },
          { text: '8. Minimum Window', link: '/problems/min-window' },
          { text: '12. Median of Two Arrays', link: '/problems/median-arrays' },
          { text: '15. Word Ladder', link: '/problems/word-ladder' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Good luck with your Microsoft interviews!',
      copyright: 'Microsoft Teams Frontend Interview Prep | Nov 6-7, 2025'
    }
  },

  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },

  mermaid: {
    theme: 'default'
  }
}))
