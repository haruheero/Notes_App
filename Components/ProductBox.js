import { Box, HStack, VStack, Text, Image } from 'native-base'
import React, { useState } from 'react'
import ProductBoxStyle from '../StyleSheets/ProductBoxStyle';
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from 'react-native';


//Add animation in like

function ProductBox({textImage}) { 
    const image = "https://wallpaperaccess.com/full/317501.jpg";
    const [liked, setLiked] = useState(false);

  return (
    <>
      <Box rounded="lg" style={ProductBoxStyle.HeadBoxStyle}>
        <HStack>
          <Box style={ProductBoxStyle.ImageBox}>
            <Image borderRadius="lg" src={image} alt="" size="xl"></Image>
          </Box>
          <Box style={ProductBoxStyle.TextBox}>
            <VStack>
              <Text style={ProductBoxStyle.TextStyle}>{textImage.label}</Text>
            </VStack>
          </Box>
          <Pressable onPress={() => setLiked(!liked)}>
            <AntDesign name={liked ? 'heart' : 'hearto'}
            size={24}
            color={liked ? 'red' : 'black'} />
          </Pressable>
        </HStack>
      </Box>
    </>
  );
}

export default ProductBox