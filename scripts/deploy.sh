#! /bin/bash
set -e

DEV=0
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

APP_ENV="staging"
APP_OS="ios and android"
DEPLOY_TYPE="soft"


success(){
  echo -e "✅  ${GREEN}$1${NO_COLOR}"
}

warn(){
  echo -e "⚠️  ${YELLOW}$1${NO_COLOR}"

  if [ $DEV -eq 0 ]
  then
    exit 1
  fi
}


while getopts ":e:o:t:d:m:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    o) APP_OS="$OPTARG"
    ;;
    t) DEPLOY_TYPE="$OPTARG"
    ;;
    d) DEV=1
    ;;
    \?) echo "${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

if [ $DEPLOY_TYPE == "hard" ]; then
  echo -e "${BLUE}* * * * *"
  echo -e "👷  Hard-Deploy"
  echo -e "* * * * *${NO_COLOR}"
  if [[ $APP_OS != "android" ]]; then
    echo -e "${GREEN}- - - - -"
    echo -e "Fastlane 🍎  iOS $APP_ENV"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane ios staging
  fi
  if [[ $APP_OS != "ios" ]]; then
    echo -e "${YELLOW}- - - - -"
    echo "Fastlane 🤖  Android $APP_ENV"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane android staging
  fi
fi

if [ $DEPLOY_TYPE == "soft" ]; then
  echo -e "${CYAN}* * * * *"
  echo -e "🍦  Soft-Deploy"
  echo -e "* * * * *${NO_COLOR}"

  if [[ $APP_OS != "android" ]]; then
    echo -e "${GREEN}- - - - -"
    echo -e "Codepush 🍎  iOS ${APP_ENV}"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane ios deploy codepush: --env=$APP_ENV
  fi
  if [[ $APP_OS != "ios" ]]; then
    echo -e "${YELLOW}- - - - -"
    echo -e "Codepush 🤖  Android ${APP_ENV}"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane android deploy codepush: --env=$APP_ENV
  fi
fi

git checkout .

success "📦  Deploy succeeded."
