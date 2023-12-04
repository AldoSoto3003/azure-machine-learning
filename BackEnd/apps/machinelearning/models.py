from django.db import models
from django.utils import timezone

class BaseModelManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted=False)

class BaseModel(models.Model):
    deleted = models.BooleanField(default=False)
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(default=timezone.now)
    
    class Meta:
        abstract = True
    
    def delete(self):
        self.deleted = True
        self.save()

class Predict(BaseModel):
    Col1 = models.CharField(max_length=50,blank=False)
    Col2 = models.IntegerField(blank=False)
    Col3 = models.CharField(max_length=50,blank=False)
    Col4 = models.CharField(max_length=50,blank=False)
    Col5 = models.IntegerField(blank=False)
    Col6 = models.CharField(max_length=50,blank=False)
    Col7 = models.CharField(max_length=50,blank=False)
    Col8 = models.IntegerField(blank=False)
    Col9 = models.CharField(max_length=50,blank=False)
    Col10 = models.CharField(max_length=50,blank=False)
    Col11 = models.IntegerField(blank=False)
    Col12 = models.CharField(max_length=50,blank=False)
    Col13 = models.IntegerField(blank=False)
    Col14 = models.CharField(max_length=50,blank=False)
    Col15 = models.CharField(max_length=50,blank=False)
    Col16 = models.IntegerField(blank=False)
    Col17 = models.CharField(max_length=50,blank=False)
    Col18 = models.IntegerField(blank=False)
    Col19 = models.CharField(max_length=50,blank=False)
    Col20 = models.CharField(max_length=50,blank=False)
    Col21 = models.IntegerField(blank=False)

    objects = BaseModelManager()



