# Psyche16
Psyche mobile app competition capstone project for team Arrival (2019)

### iOS
##### Note: The iOS Unity integration was crashing with thread access errors, and is therefore not included in this repository.  Look at 'react-native-unity-view' documentation to try it.
###### Setup: 
1. Clone the repository
2. Navigate into the project and run `yarn` or `npm` depending on what you have setup
3. On the command line, run `react-native start`.  If that doesn't work, run `react-native start --reset-cache`.
4. Open the xcodeproj file from the iOS folder.  Go to `file > project settings` and change the build system to `Legacy Build System`.
5. Run the app in Xcode and it will open in the simulator/device you have targeted

###### Debugging:
1. There may be XCode files that did not properly link and must be re-added to the project.  If there are, then go to `Build Phases` for the project and drag broken references back in from the local repository.  Make sure to have the Project selected as a target.  Delete the broken references.
2. If you get the error `config.h file not found`, then run `rm -rf node_modules/ && yarn cache clean && yarn install
node_modules/react-native/scripts/ios-install-third-party.sh` on the command line and try running the project again.

### Android
1. Clone the repository
2. Navigate into the project and run `yarn` or `npm` depending on what you have setup
3. On the command line, run `react-native start`.  If that doesn't work, run `react-native start --reset-cache`.
4. Run `react-native run-android`
5. Ensure you have a connected device and it should deploy to that device

### Android with Unity (Not included on github, use unity cloud to access unity game - https://unity3d.com/unity/features/cloud-build )
1. Clone the repository
2. Navigate into the project and run `yarn` or `npm` depending on what you have setup
3. https://github.com/f111fei/react-native-unity-view
4. Comment out `bundle{...}` in the build.gradle
5. On the command line, run `react-native start`.  If that doesn't work, run `react-native start --reset-cache`.
6. Run `react-native run-android`
7. Ensure you have a connected device and it should deploy to that device


