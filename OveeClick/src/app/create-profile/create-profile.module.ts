import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProfilePageRoutingModule } from './create-profile-routing.module';

import { CreateProfilePage } from './create-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProfilePageRoutingModule
  ],
  declarations: [CreateProfilePage]
})
export class CreateProfilePageModule {}
