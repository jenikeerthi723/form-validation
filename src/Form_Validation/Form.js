import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      email: "",
      emailError: "",
      password: ""
    }
  }
  submit() {
    let rjx = /^[0-9\b]+$/;
    let isValid = rjx.test(this.state.firstName)
    console.warn(isValid)
    if (!isValid) {
      this.setState({ firstNameError: "firstname field must be alphabatic" })
    }
    else {
      this.setState({ firstNameError: "" })
    }


    let rjx1 = /^[a-zA-Z]+$/;
    let isValid1 = rjx1.test(this.state.lastName)
    console.warn(isValid)
    if (!isValid1) {
      this.setState({ lastNameError: "lastname field must be alphabatic" })
    }
    else {
      this.setState({ lastNameError: "" })
    }
  }

  emailValidator() {
    if (this.state.email == "") {
      this.setState({ emailError: "email field cannot be empty" })
    }
    else {
      this.setState({ emailError: "" })
    }
  }
  render() {
    return (
      <View style={{ margin: 20, marginTop: 100 }}>
        <Text style={{
          fontSize: 30, marginLeft
            : 30, color: "blue"
        }}>FORM VALIDATION</Text>
        <TextInput
          placeholder='enter firstname'
          onChangeText={(text) => this.setState({ firstName: text })}
          style={{ borderWidth: 2, borderColor: "black", margin: 20 }} />
        <Text style={{ color: "red", marginLeft: 20 }}>{this.state.firstNameError}</Text>
        <TextInput
          placeholder='enter lastname'
          onChangeText={(text) => this.setState({ lastName: text })}
          style={{ borderWidth: 2, borderColor: "black", margin: 20 }} />
        <Text style={{ color: "red", marginLeft: 20 }}>{this.state.lastNameError}</Text>
        <TextInput
          placeholder='enter email'
          onBlur={() => this.emailValidator()}
          onChangeText={(text) => this.setState({ email: text })}
          style={{ borderWidth: 2, borderColor: "black", margin: 20 }} />
        <Text style={{ color: "red", marginLeft: 20 }}>{this.state.emailError}</Text>
        <TextInput
          placeholder='enter password'
          secureTextEntry={true}
          keyboardType={'numeric'}
          maxLength={5}
          onChangeText={(text) => this.setState({ password: text })}
          style={{ borderWidth: 2, borderColor: "black", margin: 20 }} />
        <View>
          <Button
            color="blue"
            title='submit'
            onPress={() => { this.submit() }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})





// onblur()==>it gets triggered after you’re out of focus from the input field.