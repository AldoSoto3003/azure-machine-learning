from django.urls import path

from apps.machinelearning.views import Predict

urlpatterns = [
    path('predict/',Predict.as_view(),name='login'),
]