import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { StripeProvider } from "@stripe/stripe-react-native";

import Logo from "./screens/Logo";
// Pantallas login
import HomeScreen from "./screens/login/HomeScreen";
import RegistroVendedor from "./screens/login/RegistroVendedor";
import RegistroComprador from "./screens/login/RegistroComprador";
import LoginScreen from "./screens/login/LoginScreen";
// Pantallas vendedor
import VenderHome from "./screens/vendedor/VenderHome";
import Vendidos from "./screens/vendedor/Vendidos";
import AnadirProductos from "./screens/vendedor/AnadirProductos";
import Estadisticas from "./screens/vendedor/Estadisticas";
import PerfilVendedor from "./screens/vendedor/PerfilVendedor";
import InfoProductoVender from "./screens/vendedor/InfoProductoVender";
// Pantallas comprador
import ComprarHome from "./screens/comprador/ComprarHome";
import Comprados from "./screens/comprador/Comprados";
import PerfilComprador from "./screens/comprador/PerfilComprador";
import Buscar from "./screens/comprador/Buscar";
import Favoritos from "./screens/comprador/Favoritos";
import InfoProductoComprar from "./screens/comprador/InfoProductoComprar";
import InfoComercio from "./screens/comprador/InfoComercio";

const Stack = createNativeStackNavigator();

export default function App() {
  enableScreens();
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StripeProvider publishableKey="pk_test_51RKMtXAcuR0gvLkIMi0kt8wxxXNsckhUCoq0ygMoOPjaC4bTf7NFYa9g3gqP7PiBq78egUXznAKuoxehaFQ9G1vU00g4ZX2vTL">
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Logo"
            >
              <Stack.Screen name="Logo" component={Logo} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen
                name="RegistroVendedor"
                component={RegistroVendedor}
              />
              <Stack.Screen
                name="RegistroComprador"
                component={RegistroComprador}
              />

              <Stack.Screen name="VenderHome" component={VenderHome} />
              <Stack.Screen
                name="InfoProductoVender"
                component={InfoProductoVender}
              />
              <Stack.Screen name="Vendidos" component={Vendidos} />
              <Stack.Screen
                name="AnadirProductos"
                component={AnadirProductos}
              />
              <Stack.Screen name="Estadisticas" component={Estadisticas} />
              <Stack.Screen name="PerfilVendedor" component={PerfilVendedor} />

              <Stack.Screen name="ComprarHome" component={ComprarHome} />
              <Stack.Screen name="Comprados" component={Comprados} />
              <Stack.Screen
                name="PerfilComprador"
                component={PerfilComprador}
              />
              <Stack.Screen name="Buscar" component={Buscar} />
              <Stack.Screen name="Favoritos" component={Favoritos} />
              <Stack.Screen
                name="InfoProductoComprar"
                component={InfoProductoComprar}
              />
              <Stack.Screen name="InfoComercio" component={InfoComercio} />
            </Stack.Navigator>
          </NavigationContainer>
        </StripeProvider>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}
