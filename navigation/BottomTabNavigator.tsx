import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ListScreen from '../screens/ListScreen';
import TrendsScreen from '../screens/TrendsScreen';
import { BottomTabParamList, ListParamList, TrendsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="List"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="List"
        component={ListNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Trends"
        component={TrendsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="trending-up" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ListStack = createStackNavigator<ListParamList>();

function ListNavigator() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ headerTitle: 'My series 🍿' }}
      />
    </ListStack.Navigator>
  );
}

const TrendsStack = createStackNavigator<TrendsParamList>();

function TrendsNavigator() {
  return (
    <TrendsStack.Navigator>
      <TrendsStack.Screen
        name="TrendsScreen"
        component={TrendsScreen}
        options={{ headerTitle: 'What is next on the list? 🥰 ' }}
      />
    </TrendsStack.Navigator>
  );
}
