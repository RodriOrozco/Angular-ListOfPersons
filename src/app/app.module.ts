import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonsService } from './services/PersonsService.service';
import { LoggingService } from './services/LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [PersonsService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
