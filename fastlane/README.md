fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
### bump
```
fastlane bump
```

### pushToAppCenter
```
fastlane pushToAppCenter
```
Deploy app to appCenter

----

## iOS
### ios prod
```
fastlane ios prod
```
Build the iOS application in production environment.
### ios staging
```
fastlane ios staging
```
Build the iOS application in staging environment.

----

## Android
### android staging
```
fastlane android staging
```
Build the Android application in staging environment.

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
