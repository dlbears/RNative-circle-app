export URL="$(expo url:apk)"

yarn clean
mkdir ./native-build
mkdir ./native-build/android
cd ./native-build/android/ && curl -o ./circle-signed.apk