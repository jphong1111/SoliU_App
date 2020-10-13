import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from './component/LogoImage';
import Message from './component/MainMessage';
class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 3000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Well com to SoliU App</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48b4e0',
  },
  textStyles: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

function HomeScreen({ navigation }) {
  return (
    <View>
      <Logo />
      <Message />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Learn' onPress={() => navigation.navigate('Learn')} />
        <Button title='Self Test' onPress={() => navigation.navigate('Test')} />

        <Button
          title='Community'
          onPress={() => navigation.navigate('Community')}
        />
        <Button title='Info' onPress={() => navigation.navigate('Info')} />
      </View>
    </View>
  );
}

function LearnScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> well come to learn screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> well come to info screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

function CommunityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> well come to comminity screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

function TestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> well come to test screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Learn' component={LearnScreen} />
      <Stack.Screen name='Community' component={CommunityScreen} />
      <Stack.Screen name='Info' component={InfoScreen} />
      <Stack.Screen name='Test' component={TestScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
