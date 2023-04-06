import { Tabs } from 'expo-router'
import { House, BookmarkSimple } from 'phosphor-react-native'
import colors from 'tailwindcss/colors'
import { Platform } from 'react-native'

import { TabsHeader } from '../../components/TabsHeader'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <TabsHeader />,
        tabBarActiveTintColor: colors.purple[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: colors.zinc[800],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 88 : 94,
          paddingBottom: Platform.OS === 'android' ? 30 : 36,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'O evento',
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="ticket"
        options={{
          tabBarLabel: 'Ingresso',
          tabBarIcon: ({ color, size }) => (
            <BookmarkSimple color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}
