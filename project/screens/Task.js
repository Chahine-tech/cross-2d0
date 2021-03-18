import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';


function Task ({ navigation }){
  const [task, defTask] = useState();
  const [taskItems, defItems] = useState([]);

  const Task2 = (props) => {

    return (
      <View style={style2.firstItem}>
        <View style={style2.itemLeft}>
          <Text style={style2.itemText}>{props.text}</Text>
        </View>
        <View style={style2.buttonPlus}></View>
      </View>
    )
  }

  const AddTask = () => {
    Keyboard.dismiss();
    defItems([...taskItems, task])
    defTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    defItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        ContainerStyleSheet={{
          flexGrow: 1
        }}
        keyboardTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrap}>
        <Text style={styles.title}>Liste des tâches</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task2 text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput style={styles.input} placeholder={'Ajoutez une tâche...'} value={task} onChangeText={text => defTask(text)}/>
        <TouchableOpacity onPress={() => AddTask()}>
          <View style={styles.addWrap}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8D8DE',
  },
  tasksWrap: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingLeft: 100,
  },
  items: {
    marginTop: 60,
  },
  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#84B6C0',
    borderWidth: 10,
    width: 250,
    fontSize: 15,
  },
  addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#84B6C0',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  addText: {
    fontSize: 10,
  },
  plus: {
  }
});

/*
const task = (props) => {

  return (
    <View style={style2.firstItem}>
      <View style={style2.itemLeft}>
        <Text style={style2.itemText}>{props.text}</Text>
      </View>
      <View style={style2.buttonPlus}></View>
    </View>
  )
}
*/
const style2 = StyleSheet.create({
  firstItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '100%',
  },
  buttonPlus: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;