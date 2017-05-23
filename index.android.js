import React, { Component } from 'react';
import { AppRegistry, Text ,View, StyleSheet, Button ,TouchableNativeFeedback, ScrollView } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Video } from  'react-native-video';

// class imama_app extends Component {
   
// }

class VideoPage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    };
    

    // static navigationOptions = {
    
    //     title: ({ state }) => `Chat with ${state.params.user}`,
    // };
    
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text style={styler.commonStyle}>{params.category}</Text>
                <Video />
            </View>
        )
    }
}



class HomePage extends Component {
     constructor(props) {
        super(props)

        // this.state = getBacker();
        this.state = {};

    };
    static navigationOptions = {
        title: '我是HOME'
    };
    
    componentDidMount() {
         var _this = this;
         fetch('http://stage.imama.la/lesson/rebroadcastList', {
             method: 'POST',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 mpId: "30", 
                 userId: "103600"
             })
         })
        .then((response) => response.json())
        .then((responseData)=> {
            _this.setState({"lessonArray": responseData.data})
            console.log(_this.state);
        
        })
        .catch((err)=> {
            console.log('err occupied!');
        })
    };

    _goLesson() {
        // this.setState((state)=> {
        //     state.msgList.pop();
        // })
    };

    _plusHandle() {
        this.setState((state)=>{
            state.msgList.push({content:'tester'});
        })
    };

    render() {

        var {navigate} = this.props.navigation;
        var lily;
        if(!!this.state.lessonArray) {
            lily = this.state.lessonArray.map((data, index)=> {
                return (
                    <View key={index}>
                        <Text style={styler.commonStyle}>{data.name}</Text>
                        <Button 
                            onPress={()=> navigate('Video', data)} 
                            title="进入课程"
                        />
                    </View>
                )
            })
        } else {
            lily = <Text style={[styler.commonStyle, styler.johnColor]}>/*粉粉*/的请骚等</Text>
        }
        
        return (
            <ScrollView>
                <View>
                    {lily}

                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={this._plusHandle.bind(this)}>
                        <View>
                            <Text style={styler.commonStyle}>pss</Text>
                        </View>
                    </TouchableNativeFeedback >
                        
                </View>
            </ScrollView>
        );
    }
}

class John extends Component {
    constructor(props) {
        super(props);

    };
    componentDidMount(){

    };
    render() {
        return (
            <View>
                <Text style={[styler.commonStyle, styler.johnColor]}></Text>
                <Text style={styler.commonStyle}></Text>
            </View>
        )
    }
}


const imama_app = StackNavigator({
    Home: { screen: HomePage },
    Video: { screen: VideoPage}
});

const styler = StyleSheet.create({
    plusButtonStyle: {
        width: 50,
        height: 30,
        opacity: 0.5,
        borderRadius: 10,
        backgroundColor: 'blue',
    },
    displayHandle: {
        opacity: 0
    },
    commonStyle:  {
        fontSize: 24,
        textAlign: 'center',
        
    },
    johnColor: {
        color: 'pink',
         
    } 
})

AppRegistry.registerComponent('imama_app', () => imama_app);