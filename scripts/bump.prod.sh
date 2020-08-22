## Increment BUILD number by 1
build=$(grep -Eo 'BUILD=[0-9]*' .env.prod | grep -Eo '[0-9]+')
incremented_build=`expr $build + 1`
echo "build : $incremented_build"
sed -i '' -e "s/BUILD=.*/BUILD=$incremented_build/g" .env.prod

## Update version number with the one from app-version.prod
version=$(cat app-version.prod)
echo "version : $version"
sed -i '' -e "s/VERSION=.*/VERSION=$version/g" .env.prod

## Git 
# git add .
# git commit -m "Bump version and build"
# git push