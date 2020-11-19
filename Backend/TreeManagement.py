'''
Tree



'''

from treelib import Node, Tree
from utils import GetTreeLevel


class TreeNode:
    def __init__(self, testNo = "", parentNo = "", status = "", comment = ""):
        self.status = status
        self.comment = comment
        self.teste = str(status) + " " + str(comment)


class TreeManagement:
    def __init__(self):
        self.nodeList = [None] * 100
        self.node = None
        self.subTree = Tree()
        self.mainTree = Tree()
        self.node_root = self.mainTree.create_node(tag = "Root", identifier= "root")

    def CreateTestOkNode(self, value):

        if self.subTree != None:
            self.node = self.mainTree.create_node(value, value, parent= self.node_root, data = TreeNode(1, 0, "OK", value))
            self.mainTree.merge(value, self.subTree)
        else:
            self.mainTree.create_node(value, value, parent= self.node_root, data = TreeNode(1, 0, "OK", value))

    def CreateSubtestOkNode(self, value):
        n = GetTreeLevel(value)
        if n == 1:
            if self.subTree != None:
                self.node = self.subTree.get_node("aux")
            if self.node == None:
                self.subTree = Tree()
                self.nodeList[n-1] = self.subTree.create_node("aux", "aux", data = TreeNode(1, 0, "OK", "aux"))
        self.nodeList[n] = self.subTree.create_node(value, value, parent=self.nodeList[n-1], data = TreeNode(1, 0, "OK", value))

    def CreateTestNotOkNode(self, value):
        if self.subTree != None:
            self.node = self.mainTree.create_node(value, value, parent= self.node_root, data = TreeNode(1, 0, "OK", value))
            self.mainTree.merge(value, self.subTree)
        else:
            self.mainTree.create_node(value, value, parent= self.node_root, data = TreeNode(1, 0, "OK", value))

    def CreateSubtestNotOkNode(self, value):
        n = GetTreeLevel(value)
        if n == 1:
            if self.subTree != None:
                self.node = self.subTree.get_node("aux")
            if self.node == None:
                self.subTree = Tree()
                self.nodeList[n-1] = self.subTree.create_node("aux", "aux", data = TreeNode(1, 0, "NOT OK", "aux"))
        self.nodeList[n] = self.subTree.create_node(value, value, parent=self.nodeList[n-1], data = TreeNode(1, 0, "NOT OK", value))

    #def AddComment(self, coment):



