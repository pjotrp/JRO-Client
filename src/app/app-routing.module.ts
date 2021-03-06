import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SubmitComponent } from './components/submit/submit.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouteGuard } from './services/route-guard.service';
import { ReviewComponent } from './components/review/review.component';
import { AuthorsGuideComponent } from './components/guides/authors-guide/authors-guide.component';
import { PapersComponent } from './components/papers/papers.component';
import { PapersPublicationViewerComponent } from './components/papers-publication-viewer/papers-publication-viewer.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'submit', component: SubmitComponent, canActivate: [RouteGuard] },
    { path: 'review', component: ReviewComponent, canActivate: [RouteGuard] },
    { path: 'papers', component: PapersComponent },
    { path: 'paper-pub', component: PapersPublicationViewerComponent },
    { path: 'authors-guide', component: AuthorsGuideComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
