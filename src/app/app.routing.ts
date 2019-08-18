import {Route} from '@angular/router';
import { CrearUsuarioComponent } from './views/usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './views/usuario/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './views/usuario/editar-usuario/editar-usuario.component';

export const router: Route[]=[
    {
        path: 'usuarios',
        component: ListarUsuarioComponent
    },
    {
        path: 'usuarios/create',
        component: CrearUsuarioComponent
    },
    {
        path: 'usuarios/:id',
        component: EditarUsuarioComponent
    },
    {
        path: '',
        redirectTo:'usuarios',
        pathMatch:'full'

    }
]

