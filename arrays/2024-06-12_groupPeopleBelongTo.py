# https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

class Solution(object):
    def groupThePeople(self, groupSizes):
        """
        :type groupSizes: List[int]
        :rtype: List[List[int]]
        """

        groups_dict = dict()
        
        for i in range(len(groupSizes)):
            group_length = groupSizes[i]
            # print(f"group_length: {group_length} - index: {i}")

            if group_length in groups_dict.keys():
                arrays = groups_dict[group_length]
                # print(f"arrrays: {arrays}")

                last_array = arrays[-1]

                # print(f"last_array: {last_array}")

                if len(last_array) >= group_length:
                    groups_dict[group_length].append([i])
                else:
                    # last_array.append(i)
                    # print(f"last_array APPENDED!!!: {last_array}")
                    groups_dict[group_length][-1].append(i)
                    # groups_dict[group_length] = groups_dict[group_length].append(last_array)

            else:
                groups_dict[group_length] = [[i]]
            
            # print(f"current dict: {groups_dict}")
            # print()

        answer = []
        for values in groups_dict.values():
            for array in values:
                print(array)
                answer.append(array)

        return answer
    

# Best and simple solution:
# https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029972/easy-to-understand-beginner-friendly-best-approach-line-by-line-explanation-java-python/

# from collections import defaultdict

# class Solution:
#     def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
#         # Initialize an empty list to store the final result.
#         result = []
        
#         # Create a defaultdict to map group sizes to lists of people.
#         group_mapping = defaultdict(list)

#         # Iterate through the groupSizes list.
#         for i, size in enumerate(groupSizes):
#             # Append the person's index to the corresponding group size in the mapping.
#             group_mapping[size].append(i)
            
#             # If the size of the group equals the group size, add it to the result and remove it from the mapping.
#             if len(group_mapping[size]) == size:
#                 result.append(group_mapping.pop(size))
        
#         # Return the final list of groups.
#         return result



groupSizes = [3,3,3,3,3,1,3]

solution = Solution()
answer = solution.groupThePeople(groupSizes)
print("answer: {}".format(answer))
