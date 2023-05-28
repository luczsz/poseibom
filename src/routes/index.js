import React from "react";
import { View, ActivityIndicator } from 'react-native';

// importar aqui o auth contexto

import AuthRoutes from "./auth.routes";
// importar aqui as rotas do app

export default function Routes(){
    // importar aqui o SINGNED e o LOADING

    // criar uma verificação com o loding
    return(
        <AuthRoutes/>
    )
}
