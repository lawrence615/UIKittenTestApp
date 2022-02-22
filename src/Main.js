import React from 'react'
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import { Divider, TopNavigation } from '@ui-kitten/components';

import AppNavigator from 'navigation/AppNavigator';

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='UIKittenTestAppp' alignment='center' />
      <Divider />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        style={{ flex: 1 }}>
        <AppNavigator />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Main