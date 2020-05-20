import React from 'react';
import {TouchableNativeFeedback, Image, StyleSheet} from 'react-native';

export default (CustomComponent = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
}) => {
  return (
    <TouchableNativeFeedback
      style={styles.container}
      onPress={() => onPress(index)}>
      <Image
        style={[styles.image, style]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
    </TouchableNativeFeedback>
  );
});

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});
