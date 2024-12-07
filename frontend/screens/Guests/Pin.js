import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions,Image } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import { AuthContext } from '../../VAUTH/Auth';
const PinKeypad = ({ navigation, route }) => {
    const {id} = route.params
    const [isLoading, setIsLoading] = useState(false);
    const [pin, setPin] = useState(['', '', '', '']);
    const [yesdirect,setYesdirect] = useState(false)

    const handleKeyPress = (digit) => {
        const newPin = [...pin];
        const nextEmptyIndex = newPin.findIndex((p) => p === '');

        if (nextEmptyIndex !== -1) {
            newPin[nextEmptyIndex] = digit;
            setPin(newPin);
        }
    };

    const handleBackspace = () => {
        const newPin = [...pin];
        const lastFilledIndex = newPin.map((p) => p !== '').lastIndexOf(true);

        if (lastFilledIndex !== -1) {
            newPin[lastFilledIndex] = '';
            setPin(newPin);
        }
    };

    const handleClear = () => {
        setPin(['', '', '', '']);
    };
   const {change} = useContext(AuthContext)
    const goo =()=>{
        setYesdirect(true)
        setTimeout(() => {

            change()
            setYesdirect(false)
            
        }, 3000);
    }

    const handleSubmitPin = async () => {
        try {
            setIsLoading(true);
            // Convert pin array to 4 digit integer
            const pinNumber = parseInt(pin.join(''));
            
            const response = await axios.put('http://10.12.73.148:4000/user/add_pin', {
                pin: pinNumber,
                id: id
            });

            if(response.status === 201) {
                Alert.alert('Success', 'PIN created successfully!');
                goo(); // Call existing success handler
            }

        } catch (error) {
            Alert.alert('Error', 'Failed to create PIN. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 69, flexDirection: "row", alignItems: "center", marginHorizontal: 30 }}>
                <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Create New Pin</Text>
            </TouchableOpacity>


            <View style={styles.containerTwo}>

                <Text style={{ color: "#545454", fontWeight: 800, fontSize: 14, paddingLeft: 5, paddingBottom: 20, marginHorizontal: 40, textAlign: "center", top: -40 }}>Add a Pin Number to Make Your Account more Secure</Text>
                {/* PIN Boxes */}
                <View style={styles.pinContainer}>
                    {pin.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.pinBox}
                            value={digit ? '*' : ''}
                            editable={false}
                            maxLength={1}
                            textAlign="center"
                        />
                    ))}
                </View>

                <View style={styles.stepsContainer} >
                    <TouchableOpacity onPress={handleSubmitPin} style={styles.nextButton}>
                        <View>

                        </View>
                        <View>

                        </View>
                        <View style={{ marginHorizontal: 30 }}>
                            <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18, textAlign: "center" }}>Continue</Text>
                        </View>
                        <View style={styles.nextButtonInsider}>
                            <AntD name="arrowright" style={styles.arrowIcon} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Keypad */}
                <View style={styles.keypadContainer}>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit) => (
                        <TouchableOpacity key={digit} style={styles.keypadButton} onPress={() => handleKeyPress(digit)}>
                            <Text style={styles.keypadText}>{digit}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.keypadButton} onPress={handleBackspace}>
                        <Text style={styles.keypadText}>⌫</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keypadButton} onPress={handleClear}>
                        <Text style={styles.keypadText}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
       {yesdirect&&     <View style={{backgroundColor:"rgba(32, 34, 68, 0.8)=",width:"100%",height:"100%",position:"absolute"}}>

<View style={{alignItems:"center",backgroundColor:"rgba(245, 249, 255, 1)",marginTop:150,marginHorizontal:30,padding:20,borderRadius:40}}>

<Image style={{width:220,height:200}} source={require("../../assets/congs.jpeg")} />
<Text style={{color:"rgba(32, 34, 68, 1)",fontSize:24,fontWeight:600,textAlign:"center",marginBottom:15}}>
Congratulations
</Text>
<Text style={{textAlign:"center",color:"rgba(84, 84, 84, 1)",fontSize:14,fontWeight:700}}>
Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds.
</Text>

<UIActivityIndicator style={{marginVertical:50}} />


</View>

</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F9FF',
        height: "100%",
        width: "100%"
    },
    containerTwo: {

        backgroundColor: '#F5F9FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "100%",

    },
    pinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    pinBox: {
        width: 75,
        height: 60,
      
      
        textAlign: 'center',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 12,
        fontSize: 30
    },
    keypadContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: "center"
    },
    keypadButton: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      
        borderRadius: 5,
   
    },
    keypadText: {
        fontSize: 20,
    },
    nextButton: {
        backgroundColor: '#0961F5',
        width: Dimensions.get("screen").width - 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 20
    },
    nextButtonInsider: {
        backgroundColor: 'white',
        width: 47,
        height: 47,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    arrowIcon: {
        fontSize: 30,
        color: '#0961F5',
    },
});

export default PinKeypad;
