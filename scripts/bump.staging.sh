## Increment BUILD number by 1
build=$(grep -Eo 'BUILD=[0-9]*' .env.staging | grep -Eo '[0-9]+')
incremented_build=`expr $build + 1`
echo "build : $incremented_build"
sed -i '' -e "s/BUILD=.*/BUILD=$incremented_build/g" .env.staging

## Update version number with the one from app-version.staging
version=$(cat app-version.staging)
echo "version : $version"
sed -i '' -e "s/VERSION=.*/VERSION=$version/g" .env.staging

## Git 
# git add .
# git commit -m "Bump version and build"
# git push