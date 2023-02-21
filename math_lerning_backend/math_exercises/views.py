from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
import random
from .serializers import MathSerializer
# Create your views here.


class MathBaseViewSet(ReadOnlyModelViewSet):
    serializer_class = MathSerializer

    def __init__(self, a_max, b_max, *args, **kwargs):
        self.a_max = a_max
        self.b_max = b_max
        super().__init__(*args, **kwargs)

    def get_operator(self):
        raise NotImplementedError()

    def list(self, request):
        try:
            a, b = self.get_values()
            result = self.calculate(a, b)
            return Response({'a': a, 'b': b, 'result': int(result), 'operator': self.get_operator()})
        except result.DoesNotExist:
            return Response(status=204)

    def calculate(self, a, b):
        raise NotImplementedError()

    def get_values(self):
        a = random.randint(1, self.a_max)
        b = random.randint(1, self.b_max)
        return self.filter_values(a, b)

    def filter_values(self, a, b):
        return a, b


class EasyAddingViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=20, b_max=10, *args, **kwargs)

    def calculate(self, a, b):
        return a + b

    def get_operator(self):
        return '+'


class EasySubtractionViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=20, b_max=10, *args, **kwargs)

    def calculate(self, a, b):
        return a - b

    def get_operator(self):
        return '-'


class EasyMultiplicationViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=10, b_max=10, *args, **kwargs)

    def calculate(self, a, b):
        return a * b

    def get_operator(self):
        return '*'


class EasyDividingViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=20, b_max=10, *args, **kwargs)

    def filter_values(self, a, b):
        while a % b != 0:
            a = random.randint(1, self.a_max)
            b = random.randint(1, self.b_max)
        return a, b

    def calculate(self, a, b):
        return a / b

    def get_operator(self):
        return '/'


class MediumAddingViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=50, b_max=50, *args, **kwargs)

    def calculate(self, a, b):
        return a + b

    def get_operator(self):
        return '+'


class MediumSubtractionViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=50, b_max=50, *args, **kwargs)

    def calculate(self, a, b):
        return a - b

    def get_operator(self):
        return '-'


class MediumMultiplicationViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=50, b_max=50, *args, **kwargs)

    def calculate(self, a, b):
        return a * b

    def get_operator(self):
        return '*'


class MediumDividingViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=50, b_max=50, *args, **kwargs)

    def filter_values(self, a, b):
        while a % b != 0:
            a = random.randint(1, self.a_max)
            b = random.randint(1, self.b_max)
        return a, b

    def calculate(self, a, b):
        return a / b

    def get_operator(self):
        return '/'


class HardAddingViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=100, b_max=100, *args, **kwargs)

    def calculate(self, a, b):
        return a + b

    def get_operator(self):
        return '+'


class HardSubtractionViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=100, b_max=100, *args, **kwargs)

    def calculate(self, a, b):
        return a - b

    def get_operator(self):
        return '-'


class HardMultiplicationViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=100, b_max=100, *args, **kwargs)

    def calculate(self, a, b):
        return a * b

    def get_operator(self):
        return '*'


class HardDividingViewSet(MathBaseViewSet):
    def __init__(self, *args, **kwargs):
        super().__init__(a_max=100, b_max=100, *args, **kwargs)

    def filter_values(self, a, b):
        while a % b != 0:
            a = random.randint(1, self.a_max)
            b = random.randint(1, self.b_max)
        return a, b

    def calculate(self, a, b):
        return a / b

    def get_operator(self):
        return '/'
