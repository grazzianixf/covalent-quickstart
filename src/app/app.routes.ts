import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/form/form.component';

import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

import { DemoAutocompleteComponent } from './demo/demo-autocomplete/demo-autocomplete.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: DashboardComponent, //Componente para mostrar na tela inicial
      path: '',
    },
    {path: 'product', component: DashboardProductComponent, children: [
      {path: '', component: ProductOverviewComponent},
      {path: 'stats', component: ProductStatsComponent},
      {path: 'features', children: [
        {path: '', component: ProductFeaturesComponent},
        {path: 'add', component: FeaturesFormComponent},
        {path: ':id/delete', component: FeaturesFormComponent},
        {path: ':id/edit', component: FeaturesFormComponent},
      ]},
    ]},
    {path: 'item/:id', component: DetailComponent},
    {path: 'form', component: FormComponent},
    {path: 'demo', component: DemoAutocompleteComponent},
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
