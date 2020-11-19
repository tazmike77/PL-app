# RPNC.py
# Reverse Polish Notation Calculator

class RPNC:

    def __init__(self):
        self.stack = []

    def push(self, value):
        if type(value) == int or type(value) == float:
            self.stack.append(value)
        else:
            raise Exception("Push with non numeric arg.")

    def top(self):
        if len(self.stack) > 0:
            return self.stack[-1]
        raise Exception("Empty stack")

    def _operator(self, func):
        if len(self.stack) < 2:
            raise Exception("not enough stack arguments")
        lastValue = self.stack[-1]
        lastLastValue = self.stack[-2]
        self.stack = self.stack[:-2]
        self.push(func(lastValue, lastLastValue))

    def sum(self):
        self._operator(lambda a, b: a + b)

    def sub(self):
        self._operator(lambda a, b: a - b)

    def mul(self):
        self._operator(lambda a, b: a * b)

    def div(self):
        def myDiv(a, b):
            if b == 0:
                raise Exception("Division by zero")
            return a / b
        self._operator(myDiv)
