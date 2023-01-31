from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view()
def math_test(request):
    return Response('This place will contains math test')
