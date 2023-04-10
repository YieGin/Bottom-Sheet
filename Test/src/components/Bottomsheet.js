import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function Bottomsheet({bottomSheetModalRef, setIsClosed}) {
  const snapPoints = ['25%', '48%', '75%'];

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onDismiss={setIsClosed}
        index={0}
        snapPoints={snapPoints}>
        <View>
          <Text>yo</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({});
