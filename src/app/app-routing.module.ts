import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CotisationComponent} from "./components/cotisation/cotisation.component";
import {AlumniManagementComponent} from "./components/alumni-management/alumni-management.component";
import {PostAdComponent} from "./components/post-ad/post-ad.component";
import {TreasuryComponent} from "./components/treasury/treasury.component";
import {MailingComponent} from "./components/mailing/mailing.component";
import {MailingListsComponent} from "./components/mailing-lists/mailing-lists.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ArticleComponent} from "./components/article/article.component";
import {ArticlesComponent} from "./components/articles/articles.component";

// Import other component classes here

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'annuaire', component: AlumniManagementComponent },
  { path: 'cotisation', component: CotisationComponent },
  { path: 'deposer-annonce', component: PostAdComponent },
  { path: 'article-evenements', component: ArticlesComponent },
  { path: 'tresorerie', component: TreasuryComponent },
  { path: 'mailing', component: MailingComponent },
  { path: 'mailing-listes', component: MailingListsComponent },
  { path: 'gestion-alumnis', component: AlumniManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'deconnexion', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
