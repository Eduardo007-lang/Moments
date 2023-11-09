import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../models/moment';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = "Compartilhar"


  constructor(private momentService: MomentService){}

  async createHandler(moment: Moment){

    console.log("Deu boa!");
    const formData = new FormData();

    formData.append("title", moment.title );
    formData.append("description", moment.description);
  
    if(moment.image){
      formData.append("image", moment.image );
    }

    //todo

   await this.momentService.createMoment(formData).subscribe();

    //enviar para o service


    //exibir msg


    // redirect
  }
}
