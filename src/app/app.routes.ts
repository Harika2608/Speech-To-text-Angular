// import { Routes } from '@angular/router';
// import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

// import { AppModule } from './app.module'; 
// export const routes: Routes = [
//     {
//         path: "speech-to-text", component: SpeechToTextComponent
//     }
// ];

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { SpeechToTextComponent } from './path-to/speech-to-text/speech-to-text.component'; // Adjust the path as needed

// const routes: Routes = [
//   { path: 'speech-to-text', component: SpeechToTextComponent },
//   // other routes...
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'speech-to-text', component: SpeechToTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

