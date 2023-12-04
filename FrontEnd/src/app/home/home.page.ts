import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  predictForm: FormGroup;
  estado: string = 'En proceso';

  constructor(private formBuilder:FormBuilder, private homeService:HomeService) {
    this.predictForm = this.formBuilder.group({
      Col1:['',Validators.required],
      Col2:['',Validators.required],
      Col3:['',Validators.required],
      Col4:['',Validators.required],
      Col5:['',Validators.required],
      Col6:['',Validators.required],
      Col7:['',Validators.required],
      Col8:['',Validators.required],
      Col9:['',Validators.required],
      Col10:['',Validators.required],
      Col11:['',Validators.required],
      Col12:['',Validators.required],
      Col13:['',Validators.required],
      Col14:['',Validators.required],
      Col15:['',Validators.required],
      Col16:['',Validators.required],
      Col17:['',Validators.required],
      Col18:['',Validators.required],
      Col19:['',Validators.required],
      Col20:['',Validators.required],
      Col21:[0,Validators.required],
    })
  }

  onCheck(){
    if (this.predictForm.valid){
      this.homeService.SendPetitiontoAzure(this.predictForm.value).subscribe( data => {
        if(data.data.Results.output1.value.Values[0][21] == 1){
          this.estado = 'Riesgo bajo'
        }else{
          this.estado = 'Riesgo alto'
        }
      })
    }else{
    }
  }

}
