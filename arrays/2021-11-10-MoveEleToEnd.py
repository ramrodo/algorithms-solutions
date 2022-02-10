def moveElementToEnd(array, toMove):
    # array = [1,1,2,3,4,5,5,2]. toMove: 2
	# result = [1,1,3,4,5,5,2,2]
    for i in range(len(array)):
        ele = array[i]
        if ele == toMove:
            array.append(ele)
            del array[i]

    return array

array = [2,1,2,2,2,3,4,2]
toMove = 2

result = moveElementToEnd(array, toMove)
print(result)
