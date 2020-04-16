# Workout App


## Setup the project

1. After cloning the project, run at its root 
  
  ```bash
  yarn
  ```

2. Then build the app on ios
   
  ```bash
  cd ios
  pod install
  cd ..
  react-native run-ios
  ```

3. Then build the app on android


  ```bash
  react-native run-android
  ```


## Snippets

There are all in this [file](.vscode/snippets.code-snippets)

### Translations

- utrans --> useTranslation hook 
- rtrans --> for jsx translation
- ttrans --> for typescript translation

### Components

- tb --> basic typescript component
- nsc --> native styled component
- csc --> custom styled component

### Mobx

- ustore --> useStore