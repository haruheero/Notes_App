import { VStack, Text, SectionList} from 'native-base'
import React from 'react'
import HeadingBox from '../../Components/HeadingBox'
import Searchbar from "../../Components/Searchbar";
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet'
import SearchbarStyle from '../../StyleSheets/SearchbarStyle'
import SettingsBox from '../../Components/SettingsBox';
import HomePageStyle from '../../StyleSheets/HomePageStyle';
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


//Scroll Adjustment


function Settings() {
  const accountSettings = [
    {
      name: "Profile",
      logo: 
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={24}
          color="black"
        />
      ,
    },
    {
      name: "Account Information",
      logo: <AntDesign name="profile" size={24} color="black" />,
    },
  ];
  const contactDetails = [
    {
      name: "Email Address",
      logo: <Ionicons name="mail-outline" size={24} color="black" />,
    },
    {
      name: "Phone Number",
      logo: <Feather name="phone" size={24} color="black" />,
    },
  ];
  const securitySettngs = [
    {
      name: "Password reset",
      logo: <AntDesign name="unlock" size={24} color="black" />,
    },
  ];
  const appSettings = [
    {
      name: "Notifications",
      logo: <Ionicons name="notifications-outline" size={24} color="black" />,
    },
  ];
  const generalSettings = [
    {
      name: "General",
      logo: <Ionicons name="md-settings-outline" size={24} color="black" />,
    },
  ];
  const data = [
    {
      title: "Acccount Settings",
      data: accountSettings,
    },
    {
      title: "Contact Details",
      data: contactDetails,
    },
    {
      title: "Security Settings",
      data: securitySettngs,
    },
    {
      title: "App Settings",
      data: appSettings,
    },
    {
      title: "General Settings",
      data: generalSettings,
    },
  ];
  return (
    <>
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message="Settings" />
          <Searchbar style={SearchbarStyle.SearchBarStyle}></Searchbar>
          <SectionList 
          showsVerticalScrollIndicator={false}
          sections={data}
          keyExtractor={(item, index) => (item + index)}
          renderItem={({item}) => (
            <SettingsBox label={item.name} icon={item.logo}/>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={HomePageStyle.SubHeading}>{title}</Text>
          )}
          />
        </VStack>
    </>
  );
}

export default Settings