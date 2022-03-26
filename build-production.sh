yarn prebuild
yarn build
cp package*.json dist/
cd dist/
NODE_ENV=production yarn install --production
cd ../
rm -f dist.tar.gz
tar -cf dist.tar dist
gzip -9 dist.tar