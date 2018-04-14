/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
//import { Login } from "./src/components/Login";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;

var _this = this;
type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ resizeMode: 'cover' }}
          blurRadius={2}
          source={require('./src/images/9d969c03e7e0504fc3250f8b6791953b.jpg')}

          style={styles.backgroundImage}>
          <View style={styles.banner}>
            {/* <Text>Your Art Museum</Text> */}
          </View>
          <View style={styles.loginTitleBig}>
            {/* <View style={{ flex: 1, backgroundColor: '#ff6600' }}>
            
          </View>
          <View style={{ flex: 3, backgroundColor: '#cc00ff' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', fontStyle: "normal", color: '#fcfcfc' }}>
              Neguzelreksafdksdns
            </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#ff6600' }}>
         
          </View> */}
          </View>

          <View style={styles.loginInput}>
            
              <TextInput

                placeholder="username or email"

                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                underlineColorAndroid="white"
                inlineImageLeft=''
                inlineImageLeft='search_icon'
              />

              <TextInput style={styles.input}
                placeholder="password"

                returnKeyType="go"
                secureTextEntry
                ref={(input) => this.passwordInput = input}
                underlineColorAndroid="white"
              />
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 2 / 4 }}>
                  <Text
                    onPress={() => console.log('sifremi unuttum')}
                    style={styles.forgotPassword}
                  >Forgor Your Password</Text>
                </TouchableOpacity>
              </View>

            </View>



            <View style={styles.loginButton}>

              <View >

                <TouchableOpacity style={{ backgroundColor: '#EB4444', width: 210, height: 40, alignItems: 'center' }}>
                  <Text
                    style={styles.loginButton}
                    style={{ marginTop: 10, color: '#EFFDF8' }}>Log In</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  // onPress={this.onPress}
                  onPress={() => console.log('sifremi unuttum')}
                  style={{ flex: 2 / 4 }}>
                  <Text

                    style={styles.DontHaveAccount}
                  >Don't You Have Account</Text>
                </TouchableOpacity>
                <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>/>
              </View>
            </View>
        </ImageBackground>
      </View >
        );
      }
    }
    
const styles = StyleSheet.create({
          container: {
          flex: 1,
        //justifyContent: 'center',
    
        backgroundColor: '#F5FCFF',
      },
  banner: {
          flex: 1,
        // backgroundColor: '#006400',
      },
  loginTitleBig: {
          flexDirection: 'row',
        fontSize: 22,
        flex: 1,
        //backgroundColor: '#00FFFF',
      },
  loginInput: {
          flex: 4,
        alignItems: 'center',
        alignContent: 'center',
        color: '#333333',
    
        //backgroundColor: '#FF8C00',
      },
  loginButton: {
          flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //backgroundColor: '#483D8B',
      },
  backgroundImage: {
          flex: 1,
        resizeMode: 'cover',
      },
  input: {
          backgroundColor: 'white',
        height: 40,
        marginBottom: 10, width: 210, height: 40
      },
  forgotPassword: {
          fontSize: 12,
        alignItems: 'center',
        alignSelf: 'flex-end',
        alignContent: 'center',
        color: '#FCFCFC'
      },
  DontHaveAccount: {
          marginTop: 10,
        fontSize: 12,
        alignItems: 'center',
        alignSelf: 'flex-end',
        alignContent: 'center',
        color: '#FCFCFC'
      },
  FacebookLogin: {
          marginTop: 12,
        fontSize: 12,
        width: 210,
        height: 40
    
      }
    });
