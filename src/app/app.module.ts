import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CotisationComponent} from './components/cotisation/cotisation.component';
import {MailingComponent} from './components/mailing/mailing.component';
import {MailingListsComponent} from './components/mailing-lists/mailing-lists.component';
import {PostAdComponent} from './components/post-ad/post-ad.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TreasuryComponent} from './components/treasury/treasury.component';
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {AlumniManagementComponent} from './components/alumni-management/alumni-management.component';
import {AppRoutingModule} from "./app-routing.module";
import {ArticleComponent} from "./components/article/article.component";
import {HttpClientModule} from '@angular/common/http';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {NgxEditorModule} from "ngx-editor";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CotisationComponent,
    MailingComponent,
    MailingListsComponent,
    PostAdComponent,
    ProfileComponent,
    TreasuryComponent,
    SidebarComponent,
    AlumniManagementComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    NgxEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
