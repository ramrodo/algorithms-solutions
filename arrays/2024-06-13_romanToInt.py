# https://leetcode.com/problems/roman-to-integer/description/

class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        roman_dict = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        sum = 0
        skip_next_value = False

        for i in range(len(s)):

            if skip_next_value:
                skip_next_value = False
                continue

            value = roman_dict[s[i]]

            if i == len(s)-1:
                next_value = 0
            else:
                next_value = roman_dict[s[i+1]]

            if next_value > value:
                sum += (next_value - value)
                skip_next_value = True
            else:
                sum += value

            print(sum)

        return sum



s = "III"
s = "LVIII"
s = "MCMXCIV"

solution = Solution()
answer = solution.romanToInt(s)
print("answer: {}".format(answer))
