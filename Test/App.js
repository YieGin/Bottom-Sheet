import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import axios from 'axios';
import Bottomsheet from './src/components/Bottomsheet';

export default function App() {
  const [data, setData] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(null);
  React.useEffect(() => {
    async function getStoreData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    }
    getStoreData();
  }, []);
  const bottomSheetModalRef = React.useRef(null);

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  }
  const setIsClosed = () => {
    setIsOpen(false);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: isOpen ? 'gray' : 'white'}}>
        <Button title="pres me" onPress={handlePresentModal} />
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: item.image}}
              />
              <Text>{item.price}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
        <StatusBar style="auto" />
        <Bottomsheet
          bottomSheetModalRef={bottomSheetModalRef}
          setIsClosed={setIsClosed}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
