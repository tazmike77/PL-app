# main.py
from RPNCParser import RPNCParser

parser = RPNCParser()
parser.build()

for query in iter(lambda: input(">> "), "exit"):
    try:
        res = parser.calc(query)
        print(f"= {res}")
    except Exception as e:
        print(f"Erro: {e}")



