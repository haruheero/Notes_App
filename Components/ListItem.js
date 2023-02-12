import React from 'react'
import { FlatList, Box, Text, HStack, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import SignUpFormStyleSheet from '../StyleSheets/SignUpFormStyleSheet';
import ListItemStyle from '../StyleSheets/ListItemStyle';
import SVGImg from '../Images/undraw_add_notes_re_ln36.svg'

function ListItem({data}) {
  return (
    <>
      <FlatList
        style={{
          width: "100%",
        }}
        data={data}
        ListEmptyComponent={() => (
          <>
            <Box style={{
              width:'100%',
              alignItems:'center'
            }}>
              
              <SVGImg
              width='90%'
              />
            </Box>
          </>
        )}
        renderItem={({ item }) => (
          <>
            <Box style={ListItemStyle.boxSuper}>
              <HStack style={SignUpFormStyleSheet.SignUpHStack}>
                <Box style={ListItemStyle.boxLeft}>
                  <AntDesign name="filetext1" size={50} color="black" />
                </Box>
                <Box style={ListItemStyle.boxRight}>
                  <Text style={SignUpFormStyleSheet.SignUpHStackText}>
                    {item.name}
                  </Text>
                </Box>
              </HStack>
            </Box>
          </>
        )}
      ></FlatList>
    </>
  );
}

export default ListItem