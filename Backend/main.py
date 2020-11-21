from TAPParser import TAPLexer
from treelib import Node, Tree
import json
from globalstats import GlobalStats
from filesinfo import FileInfo
import sys

#Files
recebidos = sys.argv[1].split(',')

#Lexer
lex = TAPLexer()
lex.build()

<<<<<<< HEAD
for nome in recebido:
    a = TAPLexer()
    a.build()
    a.inputFile("./inputs/" + nome)
    a.execute()
    data = a.tree_manager.mainTree.to_json()
    aEnviar.append(data)
=======
#File global and individual info
globalStats = GlobalStats() 
globalStats.LoadFile("globalstats.json")
>>>>>>> 055d84f... update main

fileInfo = FileInfo()

for nome in recebidos:
    fullPath = "./inputs/" + nome
    lex.inputFile(fullPath)
    lex.execute()
    globalStats.UpdateStats(lex)
    fileInfo.UpdateFileInfo(globalStats, fullPath, lex)
    fileInfo.SaveToJSON("fileInfo.json")
    globalStats = globalStats.SaveToFile("globalstats.json")

print(globalStats.__dict__)
    


