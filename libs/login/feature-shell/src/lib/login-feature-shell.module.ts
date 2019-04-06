import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { LoginUIModule } from '@common-nx/login/ui';
import { LoginAccessDataModule } from '@common-nx/login/access-data';

@NgModule({
  imports: [
    CommonModule,
    LoginUIModule,
    LoginAccessDataModule.forRoot(),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MainContainerComponent }
    ])
  ],
  declarations: [MainContainerComponent]
})
export class LoginFeatureShellModule { }
