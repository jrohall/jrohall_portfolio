import { Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
import { AbComponent } from './ab/ab.component';
import { ProjComponent } from './proj/proj.component';
import { DevComponent } from './dev/dev.component';
import { YapComponent } from './yap/yap.component';
import { HabsComponent } from './posts/habs/habs.component';

export const routes: Routes = [
    {path: '', redirectTo: 'exp', pathMatch: 'full' },
    {path: 'exp', component: ExpComponent},
    {path: 'ab', component: AbComponent },
    {path: 'proj', component: ProjComponent },
    {path: 'dev', component: DevComponent },
    {path: 'yap', component: YapComponent },
    {path: 'habsblog', component: HabsComponent},
    {path: '**', redirectTo: 'exp'},
];


