import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'personne-categorie',
    loadChildren: () => import('./personne-categorie/personne-categorie.module').then( m => m.PersonneCategoriePageModule)
  },
  {
    path: 'page-enfant',
    loadChildren: () => import('./page-enfant/page-enfant.module').then( m => m.PageEnfantPageModule)
  },
  {
    path: 'sensation',
    loadChildren: () => import('./sensation/sensation.module').then( m => m.SensationPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'produits-desc',
    loadChildren: () => import('./produits-desc/produits-desc.module').then( m => m.ProduitsDescPageModule)
  },
  {
    path: 'personne-agee',
    loadChildren: () => import('./personne-agee/personne-agee.module').then( m => m.PersonneAgeePageModule)
  },
  {
    path: 'femme-aceinte',
    loadChildren: () => import('./femme-aceinte/femme-aceinte.module').then( m => m.FemmeAceintePageModule)
  },
  {
    path: 'personne-allitee',
    loadChildren: () => import('./personne-allitee/personne-allitee.module').then( m => m.PersonneAlliteePageModule)
  },
  {
    path: 'adulte',
    loadChildren: () => import('./adulte/adulte.module').then( m => m.AdultePageModule)
  },
  {
    path: 'accueil-quiz',
    loadChildren: () => import('./accueil-quiz/accueil-quiz.module').then( m => m.AccueilQuizPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'quiz-show-response',
    loadChildren: () => import('./quiz-show-response/quiz-show-response.module').then( m => m.QuizShowResponsePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
