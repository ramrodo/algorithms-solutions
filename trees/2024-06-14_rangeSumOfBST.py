# https://leetcode.com/problems/range-sum-of-bst/

# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def rangeSumBST(self, root, low, high):
        """
        :type root: TreeNode
        :type low: int
        :type high: int
        :rtype: int
        """

        if root is None:
            return 0
        
        if root.val < low:
            return self.rangeSumBST(root.right, low, high)
        
        if root.val > high:
            return self.rangeSumBST(root.left, low, high)

        return root.val + self.rangeSumBST(root.left, low, high) + self.rangeSumBST(root.right, low, high)


       
root = TreeNode(10, TreeNode(5, TreeNode(3), TreeNode(7)), TreeNode(15, None, TreeNode(18)))
low = 7
high = 15

solution = Solution()
answer = solution.rangeSumBST(root, low, high)
print("answer: {}".format(answer))
