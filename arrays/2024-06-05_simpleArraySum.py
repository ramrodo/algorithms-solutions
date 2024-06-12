# https://www.hackerrank.com/challenges/simple-array-sum/problem

# Given an array of integers, find the sum of its elements.

def simpleArraySum(ar):
    # Write your code here
    total = 0
    for number in ar:
        total += number
    return total

# Time complexity: O(n)
# Space complexity: O(1)

