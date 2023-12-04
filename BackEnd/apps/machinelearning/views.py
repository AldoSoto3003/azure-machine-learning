import urllib.request
import json
import secreto

from django.contrib import auth

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from apps.machinelearning.serializers import PredictSerializer

class Predict(APIView):
    
    serializer_class = PredictSerializer
    permission_classes = [IsAuthenticated]

    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():

            data = {
                "Inputs":{
                    "Input1":{
                        "ColumnNames": ["Col1", "Col2", "Col3", "Col4", "Col5", "Col6", "Col7", "Col8", "Col9", "Col10", "Col11", "Col12", "Col13", "Col14", "Col15", "Col16", "Col17", "Col18", "Col19", "Col20", "Col21"],
                        "Values":[list(request.data.values())]
                    }
                }
            }

            body = str.encode(json.dumps(data))
            headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ secreto.API_KEY)}
            req = urllib.request.Request(secreto.API_URL, body, headers) 

            try:
                response = urllib.request.urlopen(req)
                result = json.loads(response.read())
            except urllib.request.HTTPError as error:
                result = json.loads(error.read())

            predidct = serializer.save()
            status_code = status.HTTP_201_CREATED

            data = {
                'success':True,
                'status_code':status_code,
                'data': result
            }
            return Response(data,status=status.HTTP_200_OK)
        else:
            data = {
                "status":False,
                'status_code':status.HTTP_400_BAD_REQUEST,
                "error":serializer.errors,
            }
            return Response(data)