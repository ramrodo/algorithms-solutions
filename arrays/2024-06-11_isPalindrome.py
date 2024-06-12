# https://leetcode.com/problems/palindrome-number/

class Solution:
    def isPalindrome(self, x: int) -> bool:
        i_str = str(x)
        limit = round(len(i_str)/2)
        for i in range(limit):
            j = ((i+1)*-1)
            if i >= limit+1:
                return True

            if i_str[i] != i_str[j]:
                return False

        return True

# Most voted solution at Leetcode:
# https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/

# class Solution:
#     def isPalindrome(self, x: int) -> bool:
#         if x < 0:
#             return False

#         reversed_num = 0
#         temp = x

#         while temp != 0:
#             digit = temp % 10
#             reversed_num = reversed_num * 10 + digit
#             temp //= 10

#         return reversed_num == x
