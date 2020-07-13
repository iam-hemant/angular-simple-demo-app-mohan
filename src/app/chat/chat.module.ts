import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './inbox/chat.component';
import { CommonMaterialModule } from '../material.module';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    CommonMaterialModule,
    
  ]
})
export class ChatModule { }
