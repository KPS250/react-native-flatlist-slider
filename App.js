import React, {Component} from 'react';
import {Text, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import Slider from './src/Slider';
import CustomComponent from './src/CustomComponent';
import {Colors} from './src/Colors';
import Preview from './src/Preview';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:
            'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
          desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
          image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
      ],
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView>
        <Text style={styles.title}> Slider</Text>
        <Slider
          data={this.state.data}
          imageKey={'image'}
          local={false}
          width={screenWidth}
          separator={0}
          component={<CustomComponent />}
          loop={true}
          autoscroll={true}
          currentIndexCallback={index => console.log('Index', index)}
          onPress={item => alert(JSON.stringify(item))}
          indicator
          indicatorStyle={{}}
          indicatorContainerStyle={{}}
          indicatorActiveColor={Colors.active}
          indicatorInActiveColor={Colors.inactive}
          indicatorActiveWidth={30}
          animation
        />

        <Text style={styles.title}> Horizontal List</Text>

        <Slider
          data={this.state.data}
          width={275}
          timer={5000}
          component={<Preview />}
          onPress={item => alert(JSON.stringify(item))}
          indicatorActiveWidth={40}
          contentContainerStyle={styles.contentStyle}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    paddingLeft: 16,
    fontSize: 16,
  },
  contentStyle:{
    paddingHorizontal: 16,
  },
});
