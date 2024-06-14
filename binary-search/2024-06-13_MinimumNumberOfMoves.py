# https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/?envType=daily-question&envId=2024-06-13

class Solution(object):
    def minMovesToSeat(self, seats, students):
        """
        :type seats: List[int]
        :type students: List[int]
        :rtype: int
        """

        n = len(seats)

        seats.sort()
        students.sort()

        moves = 0
        for i in range(n):
            if students[i] == seats[i]:
                continue
            else:
                moves += abs(students[i] - seats[i])

        return moves
    

seats = [3,1,5]
students = [2,7,4]

seats = [4,1,5,9]
students = [1,3,2,6]

seats = [2,2,6,6]
students = [1,3,2,6]

solution = Solution()
answer = solution.minMovesToSeat(seats, students)
print("answer: {}".format(answer))
