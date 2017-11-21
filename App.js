import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity, 
  ScrollView, 
  ListView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import Material from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Comunity from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'

import {Dimensions} from 'react-native'
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  render() {
    return (
      <View>
        <View style={{width: '100%', flexDirection:'row', padding: 10}}>
          <View style={{width: '30%'}}>
            <Text style={styles.welcome}>
            <Image 
              style={{width: 250, height: 300}}
              source={{uri: 'http://www.grandparentsofmedialiteracy.com/sites/default/files/default_images/dummy-image_0.jpg'}} />

            </Text>
          </View>
          <View style={{width: '70%', paddingVertical: 20}}>
            <Text style={{paddingHorizontal: 15, fontSize: 20}}>
                Selamat Datang
            </Text>
            <Text style={{paddingHorizontal: 15}}>
                Sutani Dzar Ghifari
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#80DEEA', marginHorizontal: 20, borderRadius: 5, padding: 10}}>
          <View style={{borderBottomColor:'#ffffff', borderBottomWidth: 1, paddingVertical: 10}} >
          <Text style={{ fontWeight: 'bold', color:'#ffffff' }}>You Have</Text>
          </View>
          <View style={{width: '100%', flexDirection:'row'}}>
              <View style={{width: '30%', paddingHorizontal: 2, borderRightWidth: 1, borderRightColor:'#ffffff', paddingVertical: 10}}>
                <Text style={{textAlign:'center', fontSize: 12, color:'#ffffff'}}> OwnerShip </Text>
                <Text style={{textAlign:'center', paddingVertical: 20, color:'#ffffff', fontWeight: 'bold'}}> 10 </Text>
              </View>
              <View style={{width: '35%', paddingHorizontal: 2, borderRightWidth: 1, borderRightColor:'#ffffff', paddingVertical: 10}}>
                <Text style={{textAlign:'center', fontSize: 12, color:'#ffffff'}}> Harvest </Text>
                <Text style={{textAlign:'center', paddingVertical: 20, color:'#ffffff', fontWeight: 'bold'}}> 10 </Text>
              </View>
              <View style={{width: '30%', paddingHorizontal: 2, paddingVertical: 10}}>
                <Text style={{textAlign:'center', fontSize: 12, color:'#ffffff'}}> Balance </Text>
                <Text style={{textAlign:'center', fontSize: 12, color:'#ffffff', paddingVertical: 20, fontWeight: 'bold'}}> Rp. 1.000.000 </Text>
              </View>
          </View>
        </View>
        <View style={{width: '100%', flexDirection:'row'}}>
          <View style={{width: '50%'}}>
            <TouchableOpacity 
              style={{backgroundColor:'#80DEEA', padding: 10, margin: 20, borderRadius: 5}}
            >
              <Icon name='search' size={30} style={{alignSelf:'center', paddingBottom: 10, color:'#ffffff'}} />
              <Text style={{fontSize: 14, textAlign:'center', color:'#ffffff'}}> Search Project </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '50%'}}>
            <TouchableOpacity 
              style={{backgroundColor:'#80DEEA', padding: 10, margin: 20, borderRadius: 5}}
            >
              <Material name='wallet' size={30} style={{alignSelf:'center', paddingBottom: 10, color:'#ffffff'}} />
              <Text style={{fontSize: 14, textAlign:'center', color:'#ffffff'}}> Search Donation </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <View style={{width: '100%', flexDirection:'column', padding: 10, alignItems:'center',  backgroundColor: '#80DEEA'}}>
          <View>
            <TouchableOpacity
            style={{left: 180, paddingTop: 10}}
            >
             <Icon name='edit' size={20} color={'#ffffff'} />
            </TouchableOpacity>
            <Text style={styles.welcome}>
            <Image 
              style={{width: 250, height: 300}}
              source={{uri: 'http://www.grandparentsofmedialiteracy.com/sites/default/files/default_images/dummy-image_0.jpg'}} />
            </Text>
          </View>
          <View style={{paddingBottom: 15}}>
            <Text style={{padding: 5, color:'#ffffff', fontWeight: 'bold', fontSize: 16, borderWidth: 0.8, borderRadius: 5, borderColor:'#ffffff'}}>
                Sutani Dzar Ghifari
            </Text>
          </View>
          <View style={{width: '100%', flexDirection:'row', paddingTop: 10}}>
              <View style={{width: '30%', paddingHorizontal: 2, paddingVertical: 10}}>
                <Icon name='twitter' size={30} style={{color:'#ffffff', alignSelf:'center'}} />
                <Text style={{textAlign:'center', paddingVertical: 20, color:'#ffffff', fontWeight: 'bold'}}> 10 Livestock Owned  </Text>
              </View>
              <View style={{width: '35%', paddingHorizontal: 2, paddingVertical: 10}}>
                <Icon name='search' size={30} style={{color:'#ffffff', alignSelf:'center'}} />
                <Text style={{textAlign:'center', paddingVertical: 20, color:'#ffffff', fontWeight: 'bold'}}> Search Project </Text>
              </View>
              <View style={{width: '30%', paddingHorizontal: 2, paddingVertical: 10}}>
                <Comunity name='cannabis' size={30} style={{color:'#ffffff', alignSelf:'center'}} />
                <Text style={{textAlign:'center', fontSize: 12, color:'#ffffff', paddingVertical: 20, fontWeight: 'bold'}}>0 Farming Owned</Text>
              </View>
          </View>
        </View>
       
        <View style={{flex: 1, margin: 20}}>
          <View style={{borderBottomWidth: 1, borderBottomColor:'#dddddd'}}>
           <Text style={{paddingVertical: 10, fontWeight: 'bold'}}>Basic Information</Text>
          </View>
          <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
            <View style={{width: '20%'}}>
              <Material name='location-pin' size={25} color={'#80DEEA'} />
            </View>
            <View style={{width:'80%', alignSelf:'center'}}>
              <Text>Jl. Ir. H. Djuanda No. 86, Bandung</Text>
            </View>
          </View>
          <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
            <View style={{width: '20%'}}>
              <Comunity name='account-check' size={25} color={'#80DEEA'} />
            </View>
            <View style={{width:'80%', alignSelf:'center'}}>
              <Text>Active, Verified, Not yet Investing</Text>
            </View>
          </View>
          <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
            <View style={{width: '20%'}}>
              <Comunity name='email' size={25} color={'#80DEEA'} />
            </View>
            <View style={{width:'80%', alignSelf:'center'}}>
              <Text>sutanighifari@gmail.com</Text>
            </View>
          </View>
          <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
            <View style={{width: '20%'}}>
              <Comunity name='wallet' size={25} color={'#80DEEA'} />
            </View>
            <View style={{width:'80%', alignSelf:'center'}}>
              <Text>Bank Mandiri</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

class Investment extends Component {
  constructor() {
    super();
    this.state = {
      data: ds.cloneWithRows([
        {
          image: 'https://i.ytimg.com/vi/jNBRxddtNoI/maxresdefault.jpg',
          invest: 'Ternak Sapi',
          price: 'Rp. 13.000.000',
        },
        {
          image: 'http://www.faunadanflora.com/wp-content/uploads/2016/12/Cara-Ternak-Kambing-Modern-Dengan-Pakan-Buatan-Tanpa-Ngarit.jpg',
          invest: 'Ternak Kambing',
          price: 'Rp. 13.000.000',
        },
        {
          image: 'http://www.tokomesin.com/wp-content/uploads/2015/04/Konsumsi-Pakan-Ayam-Broiler-tokomesin.jpg',
          invest: 'Ternak Ayam',
          price: 'Rp. 13.000.000',
        },
        {
          image: 'https://2.bp.blogspot.com/-mNG6yfW8Dy8/WRxC0MlgDXI/AAAAAAAALYk/rtvrhv0IBZoW-s6_Giuwj0IAFgmQc2yVACLcB/s1600/10.jpg',
          invest: 'Ternak Ikan',
          price: 'Rp. 13.000.000',
        },
        {
          image: 'http://static.republika.co.id/uploads/images/inpicture_slide/lele-_150917152227-711.jpg',
          invest: 'Ternak Lele',
          price: 'Rp. 13.000.000',
        },
      ]),
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#E0E0E0'}}>
        <ScrollView>
        <View style={{backgroundColor:'#ffffff'}}>
        <View style={{width: '100%', flexDirection:'row', padding: 10}}>
        <View style={{width: '30%'}}>
          <Text style={styles.welcome}>
          <Image 
            style={{width: 250, height: 300}}
            source={{uri: 'http://www.grandparentsofmedialiteracy.com/sites/default/files/default_images/dummy-image_0.jpg'}} />

          </Text>
        </View>
        <View style={{width: '70%', paddingVertical: 20}}>
          <Text style={{paddingHorizontal: 15, fontSize: 20}}>
              Selamat Datang
          </Text>
          <Text style={{paddingHorizontal: 15}}>
              Sutani Dzar Ghifari
          </Text>
        </View>
      </View>
        <View style={{width: '100%', flexDirection:'row', borderBottomWidth: 1, borderBottomColor:'#dddddd'}}>
          <View style={{width: '50%'}}>
            <TouchableOpacity 
              style={{padding: 10, margin: 10, borderRadius: 5}}
            >
            <Icon name='twitter' size={30} style={{color:'#80DEEA', alignSelf:'center'}} />
            <Text style={{textAlign:'center', paddingVertical: 20, color:'#000000', fontWeight: 'bold'}}> 10 Livestock Owned  </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '50%'}}>
            <TouchableOpacity 
              style={{padding: 10, margin: 10, borderRadius: 5}}
            >
            <Comunity name='cannabis' size={30} style={{color:'#80DEEA', alignSelf:'center'}} />
            <Text style={{textAlign:'center', paddingVertical: 20, color:'#000000', fontWeight: 'bold'}}> 10 Farming Owned  </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        {/* Listview */}
        <View style={{padding: 5, justifyContent:'space-between', flexDirection:'row', paddingTop: 20}}>
        <Text style={{fontWeight:'bold', color:'#000000'}}> POPULER SEEDS </Text>
        </View>
        <ListView
            horizontal={true}
            dataSource={this.state.data}
            renderRow={(rowData) => 
              <View style={{flexDirection:'row'}}> 
              <View style={{width: 150, borderWidth: 1, borderColor:'#dddddd', margin: 5,   backgroundColor:'#fff'}}>
                <TouchableOpacity 
                  style={{ borderRadius: 5}}
                >
                <Image 
                style={{width: 200, height: 150}}
                source={{uri: rowData.image}} />
                <Text style={{textAlign:'center', color:'#000000', fontWeight: 'bold', paddingTop: 10}}> {rowData.invest}  </Text>
                <Text style={{fontWeight:'bold', textAlign:'center', color:'#000000', paddingBottom:10}}>{rowData.price}</Text>
                </TouchableOpacity>
              </View>
              </View>
            }
          />

          <View style={{padding: 5, justifyContent:'space-between', flexDirection:'row', paddingTop: 20}}>
          <Text style={{fontWeight:'bold', color:'#000000'}}> INVESTASI </Text>
          </View>
          <ListView
              horizontal={true}
              dataSource={this.state.data}
              renderRow={(rowData) => 
                <View style={{flexDirection:'row'}}> 
                <View style={{width: 150, borderWidth: 1, borderColor:'#dddddd', margin: 5,   backgroundColor:'#fff'}}>
                  <TouchableOpacity 
                    style={{ borderRadius: 5}}
                  >
                  <Image 
                  style={{width: 200, height: 150}}
                  source={{uri: rowData.image}} />
                  <Text style={{textAlign:'center', color:'#000000', fontWeight: 'bold', paddingTop: 10}}> {rowData.invest}  </Text>
                  <Text style={{fontWeight:'bold', textAlign:'center', color:'#000000', paddingBottom:10}}>{rowData.price}</Text>
                  </TouchableOpacity>
                </View>
                </View>
              }
            />
        </ScrollView>
      </View>
    )
  }
}

class Donasi extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <View style={{}}>
        <View style={{width: '100%', flexDirection:'row', padding: 10}}>
        <View style={{width: '30%'}}>
          <Text style={styles.welcome}>
          <Image 
            style={{width: 250, height: 300}}
            source={{uri: 'http://www.grandparentsofmedialiteracy.com/sites/default/files/default_images/dummy-image_0.jpg'}} />

          </Text>
        </View>
        <View style={{width: '70%', paddingVertical: 20}}>
          <Text style={{paddingHorizontal: 15, fontSize: 20}}>
              Selamat Datang
          </Text>
          <Text style={{paddingHorizontal: 15}}>
              Sutani Dzar Ghifari
          </Text>
        </View>
      </View>
    </View>
      <View style={{flex: 1, margin: 20}}>
          <View style={{borderBottomWidth: 1, borderBottomColor:'#dddddd'}}>
           <Text style={{paddingVertical: 10, fontWeight: 'bold'}}>List Donation</Text>
          </View>
          <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
            <View style={{width: '20%'}}>
              <Material name="wallet" size={px2dp(25)} color="#80DEEA"/>
            </View>
            <View style={{width:'80%', alignSelf:'center'}}>
              <Text>Ternak Sapi</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}
class Setting extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <View style={{flex: 1, margin: 20}}>
            <View>
            <Text style={{paddingVertical: 10, fontWeight: 'bold'}}>Settings</Text>
            </View>
            <TouchableOpacity>
            <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
              <View style={{width: '20%'}}>
                <Ionicons name="ios-information-circle-outline" size={px2dp(25)} color="#80DEEA"/>
              </View>
              <View style={{width:'80%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <Text>About iFarming</Text>
                <Icon name='angle-right' size={25} />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
              <View style={{width: '20%'}}>
                <Icon name="phone-square" size={px2dp(25)} color="#80DEEA"/>
              </View>
              <View style={{width:'80%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <Text>Contact Us</Text>
                <Icon name='angle-right' size={25} />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
              <View style={{width: '20%'}}>
                 <Ionicons name="ios-information-circle-outline" size={px2dp(25)} color="#80DEEA"/>
              </View>
              <View style={{width:'80%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <Text>FAQ</Text>
                <Icon name='angle-right' size={25} />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
              <View style={{width: '20%'}}>
                 <Ionicons name="ios-information-circle-outline" size={px2dp(25)} color="#80DEEA"/>
              </View>
              <View style={{width:'80%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <Text>Privacy Policy</Text>
                <Icon name='angle-right' size={25} />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding: 10, width: '100%', flexDirection:'row', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
              <View style={{width: '20%'}}>
                <Comunity name="logout" size={px2dp(25)} color="#FF3D00"/>
              </View>
              <View style={{width:'80%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <Text style={{color:'#FF3D00'}}>Logout</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
    )
  }
}


export default class TabDemo extends Component {
  state= {
    selectedTab: 'home'
    // cannabis
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{color: "#80DEEA"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#80DEEA"/>}
          //badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          selectedTitleStyle={{color: "#80DEEA"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#80DEEA"/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <Profile/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'investment'}
          title="Investment"
          selectedTitleStyle={{color: "#80DEEA"}}
          renderIcon={() => <Icon name="line-chart" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="line-chart" size={px2dp(22)} color="#80DEEA"/>}
          onPress={() => this.setState({selectedTab: 'investment'})}>
          <Investment/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'donasi'}
          title="Donasi"
          selectedTitleStyle={{color: "#80DEEA"}}
          renderIcon={() => <Icon name="handshake-o" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="handshake-o" size={px2dp(22)} color="#80DEEA"/>}
          onPress={() => this.setState({selectedTab: 'donasi'})}>
          <Donasi/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          title="Setting"
          selectedTitleStyle={{color: "#80DEEA"}}
          renderIcon={() => <Ionicons name="md-settings" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Ionicons name="md-settings" size={px2dp(22)} color="#80DEEA"/>}
          onPress={() => this.setState({selectedTab: 'setting'})}>
          <Setting />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TabDemo', () => TabDemo);