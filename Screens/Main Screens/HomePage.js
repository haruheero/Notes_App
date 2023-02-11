import React from "react";
import {
  Button,
  HStack,
  Text,
  Box,
  VStack,
  Image,
  ScrollView,
} from "native-base";
import { Avatar } from "native-base";
import SearchBar from "../../Components/Searchbar";
import ProductBox from "../../Components/ProductBox";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import HomePageStyle from "../../StyleSheets/HomePageStyle";
import SearchbarStyle from "../../StyleSheets/SearchbarStyle";

//android bug fix (alignItems left invalid value)

function HomePage() {
  const date = new Date().getHours();
  const timeMsg = date < 12 ? "Morning" : date < 18 ? "Afternoon" : "Evening";
  const image = "https://wallpaperaccess.com/full/317501.jpg";

  return (
    <>
      <ScrollView>
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HStack width={'100%'} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} >
            <Box style={HomePageStyle.SubHeadingBox}>
              <Text style={SignUpFormStyleSheet.HeadingText}>
                Good {timeMsg} !
              </Text>
            </Box>
            <Box style={HomePageStyle.AvatarBox}>
              <Avatar></Avatar>
            </Box>
          </HStack>
          <SearchBar style={SearchbarStyle.SearchBarStyle}></SearchBar>
          <Box style={HomePageStyle.BannerBox} rounded="lg">
            <HStack>
              <Box style={HomePageStyle.BannerImageBox}>
                <Image
                  resizeMode="cover"
                  borderRadius="lg"
                  src={image}
                  alt=""
                  size="xl"
                ></Image>
              </Box>
              <Box style={HomePageStyle.BannerTextBox}>Image</Box>
            </HStack>
          </Box>
          <HStack>
            <Box style={HomePageStyle.SubHeadingBox}>
              <Text style={HomePageStyle.SubHeading}>Favorites</Text>
            </Box>
            <Button
              style={HomePageStyle.ViewAllBox}
              variant="ghost"
              _text={{
                color: "#775700",
              }}
            >
              View all
            </Button>
          </HStack>
          <ProductBox
            textImage={{
              label: "B.Tech",
              image: "../../Images/notes_front.jpg",
            }}
          ></ProductBox>
          <HStack>
            <Box style={HomePageStyle.SubHeadingBox}>
              <Text style={HomePageStyle.SubHeading}>Most Liked</Text>
            </Box>
            <Button
              style={HomePageStyle.ViewAllBox}
              variant="ghost"
              _text={{
                color: "#775700",
              }}
            >
              View all
            </Button>
          </HStack>
          <HStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ProductBox
                textImage={{
                  label: "12th",
                  image: "../../Images/notes_front.jpg",
                }}
              ></ProductBox>
              <ProductBox
                textImage={{
                  label: "College",
                  image: "../../Images/notes_front.jpg",
                }}
              ></ProductBox>
              <ProductBox
                textImage={{
                  label: "School",
                  image: "../../Images/notes_front.jpg",
                }}
              ></ProductBox>
            </ScrollView>
          </HStack>
        </VStack>
      </ScrollView>
    </>
  );
}

export default HomePage;
