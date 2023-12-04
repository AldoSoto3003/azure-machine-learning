from django.contrib import auth
from rest_framework import serializers
from rest_framework import status

from apps.machinelearning.models import Predict
     
class PredictSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predict
        fields = (
            "Col1",
            "Col2",
            "Col3",
            "Col4",
            "Col5",
            "Col6",
            "Col7",
            "Col8",
            "Col9",
            "Col10",
            "Col11",
            "Col12",
            "Col13",
            "Col14",
            "Col15",
            "Col16",
            "Col17",
            "Col18",
            "Col19",
            "Col20",
            "Col21"
        )

    