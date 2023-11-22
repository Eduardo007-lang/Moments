import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../models/moment';
import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = "Compartilhar"


  constructor(private momentService: MomentService, 
              private messageService: MessagesService, 
              private router: Router){}

  async createHandler(moment: Moment){
    const formData = new FormData();

    formData.append("title", moment.title );
    formData.append("description", moment.description);
  
    if(moment.image){
      formData.append("image", moment.image );
    }

   await this.momentService.createMoment(formData).subscribe();

    //enviar para o service
    this.messageService.add('Momento adicionado com Sucesso!');
    // redirect
    this.router.navigate(['/']);
  }
}
