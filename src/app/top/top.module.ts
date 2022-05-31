import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { TopRoutingModule } from './top-routing.module';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, TopRoutingModule],
})
export class TopModule {}
