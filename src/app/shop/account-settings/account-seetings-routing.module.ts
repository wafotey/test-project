import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings.component';
import { AccountSettingsModule } from './account-settings.module';


const routes: Routes = [
    { path: '', component: AccountSettingsComponent}
]
@NgModule({
  imports: [AccountSettingsModule,RouterModule.forChild(routes)],
})
export class AccountSettintsRoutingModule { }
