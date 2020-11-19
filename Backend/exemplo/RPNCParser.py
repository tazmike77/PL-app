import ply.lex as lex
from RPNC import RPNC


class RPNCParser:
    tokens = ("NUMBER", "OPERATOR")

    def t_NUMBER(self, t):
        r"[-+]?[0-9]+(\.[0-9]+)?"
        t.value = float(t.value)
        return t

    t_OPERATOR = r"[-+*/]|ADD|SUB|MUL|DIV"

    t_ignore = "\t "

    def t_error(self, t):
        raise Exception("Not recognized: %s" % t.value)

    def __init__(self):
        self.lexer = None

    def build(self, **kwargs):
        self.lexer = lex.lex(module=self, **kwargs)

    def calc(self, query):
        self.lexer.input(query)
        rpnc = RPNC()
        for token in iter(self.lexer.token, None):
            if token.type == "NUMBER":
                rpnc.push(token.value)
            if token.type == "OPERATOR":
                if token.value == '+' or token.value == "ADD":
                    rpnc.sum()
                if token.value == '-' or token.value == "SUB":
                    rpnc.sub()
                if token.value == '*' or token.value == "MUL":
                    rpnc.mul()
                if token.value == '/' or token.value == "DIV":
                    rpnc.div()
        return rpnc.top()

