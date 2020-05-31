# Workout App

- [Workout App](#workout-app)
  - [Setup the project](#setup-the-project)
  - [Coding standards](#coding-standards)
  - [Snippets](#snippets)
    - [Translations](#translations)
    - [Components](#components)
    - [Mobx](#mobx)

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

## Coding standards

- [Add svg component](./docs/AddSvgComponent.md)


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