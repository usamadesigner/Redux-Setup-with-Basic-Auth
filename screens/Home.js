import React, {useState} from 'react';
import {  

FlatList,

  SafeAreaView,


  Button,} from 'react-native';
  import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { SignOut } from '../redux/auth/action.auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation,SignOutFunc}) => {
  const [Posts, setPosts] = React.useState([]);
  const [isloading, setIsLoading] = useState(false);
const [error, seterror] = useState('')
  const getPosts=async()=>{
    setIsLoading(true);
    var config = {
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/Posts`,
    };
    await axios(config)
      .then(function (response) {
        setPosts(response.data);
        console.log(response.data)
        setIsLoading(false);
      })
      .catch(function (error) {
        seterror(error);
      });
  }
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (<Button  title='Logout' onPress={()=>SignOutFunc()}/>),
    }); 
    const posts=getPosts();
    return()=>{
posts.catch(err=>seterror(err));
    }
  }, [navigation]);
  const renderItem = ({ item }) => (
    <PostCard title={item.title} postbody={item.body}/>
  );
  return (
    <SafeAreaView style={{flex:1}}>
 <FlatList
        data={Posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching Login action to update State
    SignOutFunc: event => dispatch(SignOut(event)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
