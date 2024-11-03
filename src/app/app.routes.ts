import { Routes } from '@angular/router';
import { AllVideosComponent } from './routes/all-videos/all-videos.component';
import { LoginComponent } from './routes/login/login.component';
import { VideoComponent } from './routes/video/video.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginGuardService } from './auth/login-guard.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UploadComponent } from './routes/upload/upload.component';
// import { AuthGuardService } from './auth-guard.service';

export const routes: Routes = [
    {path: '', component: AllVideosComponent, canActivate: [AuthGuardService] },
    {path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
    {path: 'videos/:id', component: VideoComponent },
    {path: 'upload', component: UploadComponent, canActivate: [AuthGuardService]}
];



