import json
from treelib import Node, Tree
from TAPParser import TAPLexer
from utils import slurp
import ply.lex as lex
import sys

a = TAPLexer()

a.build()

a.inputFile("./inputs/" + sys.argv[1])


a.execute()

# print(a.tree_manager.mainTree.show())

data = a.tree_manager.mainTree.to_json()

with open('./data.json', 'w') as outfile:
    outfile.write(data)
    outfile.close()
