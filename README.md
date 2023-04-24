<h1 align="center">
  <a href="https://github.com/haruheero/Notes_App/" style="color: black"><span>NOTEZY</span></a><br>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/react-18.1.0-green.svg" />
  <img src="https://img.shields.io/badge/react--native--expo-47.0.12-blue.svg" />
  <img src="https://img.shields.io/badge/license-MIT-red" />
</p>

## Overview

Notezy is a centralized note-taking and referencing app designed specifically for students. The app aims to simplify the process of finding and storing notes for exams and future reference. Unlike other note-taking apps, Notezy provides a filtering system that allows users to easily search for notes according to degree, college/school, branch, subject, and section.

The app is currently being developed using React Native Expo, which allows it to be available on iOS, Android, and web platforms. Firebase Firestore is used as the backend database, providing NoSQL structured data storage that is easy to scale and set up. The integration of Firebase also ensures authentication and security for users.

Notezy's basic version (v0) includes a rudimentary configuration, basic frontend, and user authentication features such as sign-up and sign-in. Users can upload and view notes, as well as switch between light and dark themes. The app is currently in progress with the addition of note filtering and storing capabilities, as well as the option to add and retrieve favorites.

In the future, Notezy will include different categories such as assignments, tests and papers, and class notes. The app will also support shared group studying and teaching, allowing users to collaborate and share notes with each other.

Notezy's biggest challenges include state management using Redux, Firebase storage fetch all files, and hierarchical tree structures for the filtering system. However, the app's innovative design and focus on student needs make it a promising tool for simplifying note-taking and referencing.

## Screenshot

<img src="https://user-images.githubusercontent.com/76216765/234062268-d3213076-dd10-4de7-bcbd-992e3fc27350.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062296-5de85490-755c-4bee-8c83-4740b731e31a.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062337-ba55ca69-3da6-4385-ae09-f1e1e5f882c8.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062445-3e0558b7-4747-464c-9db8-c0b1a776b6f3.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062466-ede9ad4f-1cf8-4ec5-ac6a-b742493c3ce6.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062524-19398004-8b9b-413b-8e6e-e08a18e77101.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062564-77436e17-a636-4915-9cb6-ad218971e814.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062588-2c29abe2-eac0-4b8b-8554-66bb6c71ffd6.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062606-7c321d0a-3148-4f2f-a96a-66934f37c813.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062629-c2e8571c-1fa3-454a-871b-e1ebdcca5cd8.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062643-dabc0b8b-8dc9-4f3a-8787-3c5bfe642221.jpg" width="200" /><img src="https://user-images.githubusercontent.com/76216765/234062664-b2c9ef4d-7bd1-4970-ab3e-47c9b6300128.jpg" width="200" />

## Features
<h4>
• Note filtering: Users can filter notes based on degree, college/school, branch, subject, and section.</br>
• Note storing: Users can store their notes in the app and retrieve them later for future reference.</br>
• User authentication: Notezy provides secure user authentication using Firebase, allowing users to sign up and sign in to their accounts.</br>
• Multiplatform: Notezy is available on iOS, Android, and web platforms using React Native Expo.</br>
• NoSQL database: Notezy uses Firebase Firestore as a backend database for structured data storage.</br>
• Light/Dark theme: Users can switch between light and dark themes for a better user experience.</br>
• Favorites: Users can mark notes as favorites for easy access later on.</br>
• Assignments: In future versions of Notezy, users will be able to add and store assignments and class notes.</br>
• Collaboration: Notezy will support shared group studying and teaching, allowing users to collaborate and share notes with each other.
</h4>
## Want to try(Installation)

Clone this repo(or download code zip file)


$ git clone https://github.com/haruheero/Notes_App.git
$ cd Notes_App


Install dependencies


$ npm install


Run android or ios


$ expo start


*First Stage functions diagram*

![First Stage functions](https://user-images.githubusercontent.com/63349641/230676709-3da81ee2-9db7-4428-ba41-39586c7803a5.png)

*Screens schema*
![Screens schema](https://user-images.githubusercontent.com/63349641/230674929-c38425f2-5ff2-4a07-9937-3dfd61c517bd.jpg)
