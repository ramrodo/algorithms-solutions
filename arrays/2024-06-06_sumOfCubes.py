#

# You are given a positive integer x. Check whether the number x

# is representable as the sum of the cubes of two positive integers.

# Formally, you need to check if there are two integers a
# and b (1≤a,b) such that a3+b3=x

# For example, if x=35
# , then the numbers a=2 and b=3 are suitable (23+33=8+27=35). If x=4, then no pair of numbers a and b is suitable.

def solve_func(x):
    #... # Your code goes here
    # print(10 ** 12)
    if x >= 10 ** 12:
        return "NO"

    for a in range(1, 10**4):
        if x - a**3 < 1:
            break

        b = round((x - a ** 3) ** (1/3)) ### DETALLE
        # if b == 0:
        #     return "NO"
        if a ** 3 + b ** 3 == x:
            return "YES"

    return "NO" # Replace "NO" with your solution

t = int(input())

for i in range(t):
    x = int(input())
    _sol = solve_func(x)
    print(_sol)
