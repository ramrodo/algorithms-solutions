# https://leetcode.com/problems/arithmetic-subarrays/description/

class Solution():
    def checkArithmeticSubarrays(self, nums, l, r):
        """
        :type nums: List[int]
        :type l: List[int]
        :type r: List[int]
        :rtype: List[bool]
        """
        answer = []

        subarrays = []

        for i in range(len(l)):
            start = l[i]
            end = r[i]

            subarray = nums[start:end+1]

            subarray.sort()

            subarrays.append(subarray)

        # print("subarrays: {}".format(subarrays))
        for subarray in subarrays:
            # print("subarray: {}".format(subarray))

            diff_abs = subarray[1] - subarray[0]
            # print("diff_abs: {}".format(diff_abs))

            is_arithmetic = True
            for j in range(len(subarray)-1):

                diff = subarray[j+1] - subarray[j]
                # print(f"diff: {diff}")

                if diff_abs != diff:
                    is_arithmetic = False
                    break

            answer.append(is_arithmetic)

        return answer


nums = [4,6,5,9,3,7]
l_subarray = [0,0,2]
r_subarray = [2,3,5]

solution = Solution()
answer = solution.checkArithmeticSubarrays(nums, l_subarray, r_subarray)
print("answer: {}".format(answer))
