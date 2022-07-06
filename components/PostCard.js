import React from 'react';
import {View, Text} from 'react-native';
import Font from '../constants/Font';
import Size from '../constants/Size';
import Colors from '../constants/Color';
const PostCard = ({postbody, title }) => {
  return (
    <View
      style={{
        width: '95%',
        flexDirection: 'row',
        backgroundColor:Colors.BG,
        borderRadius:10,
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}>
      <View style={{width: '90%'}}>
        <Text
          style={{
            lineHeight: 24,
            letterSpacing: 0.34,
            marginBottom:8,
            fontSize: Size.body,
            fontFamily:Font.SemiBold,
            color: Colors.Secondary
          }}>
          {title }
        </Text>
          <Text style={{lineHeight: 20,fontSize:Size.caption, letterSpacing: 0.34, color: Colors.Secondary}} textBreakStrategy="balanced">
            {postbody }
          </Text>
      </View>
    </View>
  );
};

export default PostCard;
