# you can write to stdout for debugging purposes, e.g.
print("This is a debug message")

class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name, obj=None):
        self.name = name
        self.items = []
        if obj != None and type(self.items) == Directory:
            self.items = self.items.append(obj)

    def insert(self, obj):
        if obj != None:
            self.items.append(obj)

root = Directory('/')
dir1 = Directory('foo')
file1 = File('foo.txt')
file2 = File('bar.txt')
root.insert(dir1)
root.insert(file1)

#root.items.insert(dir1, file2)


def printPaths(root, parent=''):
    if root == None:
        return

    if type(root) == Directory:
        print("{}{}".format(parent, root.name))
        if root.items != None:
            for e in root.items:
                printPaths(e, root.name) # foo.txt
    elif type(root) == File:
        print("{}{}".format(parent, root.name))

printPaths(root)

