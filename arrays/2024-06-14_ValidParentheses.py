# https://leetcode.com/problems/valid-parentheses/description/

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        valid_closing = {
            "(": ")",
            "[": "]",
            "{": "}",
        }

        closing_parentheses = (")", "}", "]")

        stack = []

        if len(s) <= 1:
            return False

        for char in s:
            # print(f"stack: {stack}")

            if char not in closing_parentheses:
                stack.append(char)
            else:
                if len(stack) == 0:
                    return False

                last_item = stack[-1]
                valid_closing_for_last_item = valid_closing[last_item]

                # print(f"char: {char} - valid_closing_for_last_item: {valid_closing_for_last_item}, ")
                if char != valid_closing_for_last_item:
                    return False
                else:
                    stack.pop()
                
        return len(stack) == 0





s = "()"
s = "()[]{}"
s = "(]"
s = "{[]}"
s = "]"

solution = Solution()
answer = solution.isValid(s)
print("answer: {}".format(answer))
