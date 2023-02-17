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
import Searchbar from "../../Components/Searchbar";
import ProductBox from "../../Components/ProductBox";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import HomePageStyle from "../../StyleSheets/HomePageStyle";
import SearchbarStyle from "../../StyleSheets/SearchbarStyle";
import HeadingBox from "../../Components/HeadingBox";

function HomePage() {
  const date = new Date().getHours();
  const timeMsg = date < 12 ? "Good Morning" : date < 18 ? "Good Afternoon" : "Good Evening";
  const image = "https://wallpaperaccess.com/full/317501.jpg";

  return (
    <>
      <ScrollView>
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message={timeMsg}/>
          <Searchbar style={SearchbarStyle.SearchBarStyle}></Searchbar>
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
