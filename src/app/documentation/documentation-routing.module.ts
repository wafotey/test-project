import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { DocumentationModule } from './documentation.module';

const routes: Routes = [
    { path: '', component: DocumentationComponent}
]
@NgModule({
  imports: [DocumentationModule,RouterModule.forChild(routes)],
})
export class DocumentationRoutingModule { }
