#Essa será a classe criada que conterá as verificações:
import	ply.lex as lex
from TreeManagement import TreeManagement
from treelib import Node, Tree
from utils import slurp, GetTreeLevel



class TAPLexer:

    def __init__(self):
        self.tree_manager = TreeManagement()
        self.n_tests = 0 #quantidade total de testes
        self.n_ok_tests = 0 #quantidade total de ok testes
        self.n_nok_tests = 0 #quantidade total de not ok testes
        self.n_subtests = 0 #quantidade total de subtestes
        self.n_ok_subtests = 0 #quantidade total de ok subtestes
        self.n_nok_subtests = 0 #quantidade total de not ok subtestes
        self.lexer = None
    
    tokens = ('N_TESTS', 'OK_TEST', 'NOK_TEST', 'N_SUBTESTS', 'OK_SUBTEST', 'NOK_SUBTEST', 'COMMENT')
    
    t_ignore = "\n"

    def t_error(self, t):
        #print("Illegal character '%s'" % t.value[0])
        t.lexer.skip(1)

    def t_COMMENT(self, t):
        r"-\s.*"
        t.value = t.value.replace("- ","")
        return t

    def t_N_TESTS(self, t):
        r"[0-9]\.\.[0-9]+" 
        self.n_tests += int(t.value[3:])
        return t

    def t_N_SUBTESTS(self, t):
        r"\s[0-9]\.\.[0-9]+"
        self.n_subtests += int(t.value.strip()[3:])
        return t

    def t_OK_TEST(self, t):
        r"(ok)\s[0-9]+\s"
        self.tree_manager.CreateTestOkNode(t.value)
        self.n_ok_tests += 1
        return t

    def t_OK_SUBTEST(self, t):
        r"\s+(ok)\s[0-9]+\s"
        self.n_ok_subtests += 1
        self.tree_manager.CreateSubtestOkNode(t.value)
        return t

    def t_NOK_TEST(self, t):
        r"(not\sok)\s[0-9]+"
        self.n_nok_tests += 1
        self.tree_manager.CreateTestNotOkNode(t.value)
        return t

    def t_NOK_SUBTEST(self, t):
        r"\s+(not\sok)\s[0-9]+"
        self.n_nok_subtests += 1
        self.tree_manager.CreateSubtestNotOkNode(t.value)
        return t    
    
    def build(self, **kwargs):
        self.lexer = lex.lex(module=self, **kwargs)

    def inputFile(self, filePath):
        self.lexer.input(slurp(filePath))

    def execute(self):
        for token in iter(self.lexer.token, None):
            print(token)