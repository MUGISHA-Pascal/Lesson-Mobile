import React, { useState,useEffect } from 'react'
import { Dimensions, ImageBackground, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Ant from 'react-native-vector-icons/AntDesign'
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
const quizData = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
    },
    {
        id: 3,
        question: "Who wrote 'Hamlet'?",
        options: ["William Shakespeare", "J.K. Rowling", "Mark Twain", "Charles Dickens"],
    },
    {
        id: 4,
        question: "What is the boiling point of water?",
        options: ["100°C", "50°C", "200°C", "150°C"],
    },
    {
        id: 5,
        question: "Which gas do plants need for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    },
     {
        id: 6,
        question: "What do you understand by biological research",
        options: ["Option one ", "Option two", "Option three", "Option four"],
    },
];
const Quiz = ({navigation}) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [trigger,setTrigger] = useState(false);
    const [isItVisible,setIsitVisible] = useState(false)
  
    const finalloop = quizData.length;

    useEffect(() => {
        let interval;
        if (isRunning && timeLeft > 0) {
          interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
          }, 1000);
        } else if (timeLeft === 0 && isRunning) {
          setIsRunning(false);
        }
    
        return () => clearInterval(interval);
      }, [isRunning, timeLeft]);

  const startTimer = () => {
    
  
    if(trigger==false){
        setTimeLeft(3 * 60); 
        setIsRunning(true);
    }
setTrigger(true)

  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    console.log(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
    const handleOptionPress = (option) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: option,
        });
    };

    const handleNextPress = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        startTimer()
    };

    const handlePreviousPress = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    console.log(selectedAnswers)


    
const styles = StyleSheet.create({
    question: {
        fontSize: 16,
        fontWeight: "700",
        color: "#333333"
    },
    option: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"

    },
    optionCircle: {
        backgroundColor: "#D4D4D4",
        paddingHorizontal: 14,
        color: "white",
        borderRadius: 50,
        paddingVertical: 9
    },
    optionAnswer: {

        color: "#333333",
        fontSize: 14,
        fontWeight: "400"

    },
    selectedOptionAnswer: {
        color: "#1e90ff"

    },

    selectedOptionCircle: {
        backgroundColor: "#1e90ff",
    },
    selectedOption: {
        backgroundColor: "#add8e6",
    },
    progressContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottomColor: "#D4D4D480",
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    progressCircle: {
        height: 35,
        width: 35,
        borderRadius: 50,
        backgroundColor: "#d3d3d3",
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    activeProgressCircle: {
        backgroundColor: "#1e90ff",
    },
    navigation: {
        flexDirection: trigger && formatTime()== `00:00` ? "column" : "row",
        justifyContent: trigger && formatTime()== `00:00` ? "center" : "space-between",
        width: "100%",
        marginTop: 20,
        alignItems:"center",
        
        
    },

})


const direct = () =>{
    setIsitVisible(true)
    setTimeout(()=>{

        navigation.navigate("Cer");
        setIsitVisible(false)

    }, 3000)
}
    return (
        <ImageBackground style={{ height: Dimensions.get("screen").height, width: "100%" }} source={require("../../../assets/quiz.png")}>

            <View style={{ flex: 1, }}>
                <View style={{ marginTop: 30, marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                          
                            <Ant style={{ fontSize: 30, color: "#FFFFFF" }} name='arrowleft' />

                        </TouchableOpacity>
                    </View>
                    <View>

                        <Image style={{ height: 30, width: 30, borderRadius: 100 }} source={{ uri: "https://www.parentmap.com/images/article/9321/YoungBoy.jpg" }} />
                    </View>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                        <TouchableOpacity >
                        <Image style={{ width: 30, height: 30 }} source={require("../../../assets/image.png")} />

                        </TouchableOpacity>
                        <Text style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 18 }}>Ikizami cy’ibyapa</Text>
                    </View>
                    <View>
                        <View style={{ backgroundColor: "#FFFFFF", width: 60, height: 33, borderRadius: 16, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 4 }}>
                            <Ant name='clockcircleo' style={{ color: "#3550DC", fontSize: 13 }} />
                            <Text style={{ color: "#3550DC", fontSize: 14, fontWeight: 400, marginTop: -2 }}>{formatTime()}</Text>

                        </View>
                    </View>
                </View>

                <View style={{ position: "absolute", bottom: 55, width: "100%" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                        <View style={{ backgroundColor: "white", height: Dimensions.get("screen").height - 220, width: Dimensions.get("screen").width - 20, borderRadius: 32, padding: 25 }}>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <View style={{ height: 5, width: 50, backgroundColor: "#1e90ff", borderRadius: 3, marginBottom: 25 }}></View>
                            </View>
                            <View style={styles.progressContainer}>

                                {quizData.map((_, index) => (
                                    <View>
                                        <View
                                            key={index}
                                            style={[
                                                styles.progressCircle,
                                                currentQuestionIndex === index ? styles.activeProgressCircle : null,
                                            ]}
                                        >
                                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>{index + 1}</Text>
                                        </View>


                                    </View>
                                ))}
                            </View>
                            <Text style={styles.question}>
                                {quizData[currentQuestionIndex].question}
                            </Text>

                            {quizData[currentQuestionIndex].options.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.option,
                                        selectedAnswers[currentQuestionIndex] === option ? styles.selectedOption : null,
                                    ]}
                                    onPress={() => handleOptionPress(option)}
                                >
                                    <Text style={[
                                        styles.optionCircle,
                                        selectedAnswers[currentQuestionIndex] === option ? styles.selectedOptionCircle : null,
                                    ]}>{index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : index == 3 ? "D" : index == 4 ? "E" : index == 5 ? "F" : index == 6 ? "G" : index == 7 ? "H" : index == 8 ? "I" : "J"}</Text>
                                    <Text style={[
                                        styles.optionAnswer,
                                        selectedAnswers[currentQuestionIndex] === option ? styles.selectedOptionAnswer : null,
                                    ]}>{option}</Text>
                                </TouchableOpacity>
                            ))}

                            <View style={{ position: "absolute", bottom: 20, width: "100%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", display: "flex", backgroundColor: "red" }}>

                                </View>
                                <View style={styles.navigation}>

                                    {trigger && formatTime()== `00:00` ? <>


                                    <View style={{alignItems:"center",justifyContent:"center",marginLeft:30}}>
                                        <Text style={{textAlign:"center",fontSize:19,fontWeight:700}}>You have been caught up</Text>
                                        <Text style={{textAlign:"center"}}>Time is over</Text>
                                        <UIActivityIndicator />

                                  
                                    </View>
                                    
                                    </> : <>
                                        <TouchableOpacity style={{ marginLeft: 30 }} onPress={handlePreviousPress} disabled={currentQuestionIndex === 0}>
                                        {currentQuestionIndex === 0 ? (

                                            <View style={styles.placeholder}></View>
                                        ) : (
                                            <Image style={{ width: 50, height: 50 }} source={require("../../../assets/leftC.jpeg")} />
                                        )}
                                    </TouchableOpacity>
                                    {currentQuestionIndex == finalloop - 1 &&

                                        <>

                                            {selectedAnswers[currentQuestionIndex] ? (
                                                <TouchableOpacity onPress={direct} style={{ backgroundColor: "#1e90ff", width: "50%", borderRadius: 50, justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 5 ,height:50}}>
                                                    <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>Soza ikizami</Text>
                                                    <Ant name="arrowright" style={{ fontSize: 20, color: "white" }} />
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity disabled style={{ backgroundColor: "#D4D4D4", width: "50%", borderRadius: 50, justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 5,height:50 }}>
                                                    <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>Soza ikizami</Text>
                                                    <Ant name="arrowright" style={{ fontSize: 20, color: "white" }} />
                                                </TouchableOpacity>
                                            )}
                                        </>

                                    }
                                    {currentQuestionIndex == finalloop - 1 ?
                                        <>
                                            <TouchableOpacity style={{ marginRight: -20 }} onPress={handleNextPress} disabled={!selectedAnswers[currentQuestionIndex]}>

                                                <Image style={{ width: 50, height: 50 }} source={require("../../../assets/right.jpeg")} />


                                            </TouchableOpacity>
                                        </>

                                        :
                                        <>
                                            <TouchableOpacity style={{ marginRight: -20 }} onPress={handleNextPress} disabled={!selectedAnswers[currentQuestionIndex]}>
                                                {!selectedAnswers[currentQuestionIndex] ? (
                                                    <Image style={{ width: 50, height: 50 }} source={require("../../../assets/right.jpeg")} />
                                                ) : (
                                                    <Image style={{ width: 50, height: 50 }} source={require("../../../assets/rightC.jpeg")} />
                                                )}
                                            </TouchableOpacity>
                                        </>
                                    }
                                    </>}

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
      {isItVisible&&      <View style={{backgroundColor:"rgba(32, 34, 68, 0.8)=",width:"100%",height:"100%",position:"absolute"}}>

<View style={{alignItems:"center",backgroundColor:"rgba(245, 249, 255, 1)",marginTop:150,marginHorizontal:30,padding:20,borderRadius:40}}>

<Image style={{width:220,height:200}} source={require("../../../assets/congs.jpeg")} />
<Text style={{color:"rgba(32, 34, 68, 1)",fontSize:24,fontWeight:600,textAlign:"center",marginBottom:15}}>
Congratulations
</Text>
<Text style={{textAlign:"center",color:"rgba(84, 84, 84, 1)",fontSize:14,fontWeight:700}}>
You have won this quiz and directing you to certificate screen.
</Text>

<UIActivityIndicator style={{marginVertical:50}} />


</View>

</View>}
        </ImageBackground>

    )
}

export default Quiz
