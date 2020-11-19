def slurp(file):
    fh = open(file, mode="r")
    contents = fh.read()
    fh.close()
    return contents

def GetTreeLevel(s):
    return int((len(s) - len(s.lstrip()))/4)