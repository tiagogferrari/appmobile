import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login';
import CriarConta from './src/Screens/CriarConta';
import RecuperarSenha from './src/Screens/RecuperarSenha';
import Drawer from './src/Screens/Drawer';
import Agradecimento from './src/Screens/Agradecimento';
import Coleta from './src/Screens/Coleta';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: '#2B1D62' },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home" 
          component={Drawer} 
        />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{ headerShown: true, headerTitle:  'Nova Conta' }}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ headerShown: true, headerTitle:  'Recuperação de senha' }}
        />
        <Stack.Screen name="Agradecimento" component={Agradecimento} />
        <Stack.Screen name="Coleta" component={Coleta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
