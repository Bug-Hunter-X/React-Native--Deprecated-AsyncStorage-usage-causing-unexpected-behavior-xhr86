# React Native Deprecated AsyncStorage Bug
This repository demonstrates a common bug in React Native applications involving the use of the deprecated `AsyncStorage` API.

## Problem
The provided `bug.js` file uses `AsyncStorage` directly. This is now deprecated and can lead to unexpected behavior and crashes in newer versions of React Native.  The AsyncStorage API is known for performance issues and limitations when dealing with larger data sets.

## Solution
The `bugSolution.js` file offers a solution using a more modern and efficient storage alternative such as `MMKV`. MMKV offers improved performance and a more robust solution compared to AsyncStorage. Alternatively, a more carefully managed implementation of AsyncStorage with smaller data sets might also be used but with a strong awareness of its limitations. 

## How to run
1. Clone the repository.
2. Install the necessary dependencies: `npm install`
3. Run the application: `npx react-native run-android` or `npx react-native run-ios`
4. Observe the behavior of the app and compare the bug and solution files.  Please make sure you have the necessary development environments set up correctly for running a React Native app.
