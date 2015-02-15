#!/bin/sh

version="$1"
filename="$2"

echo "Downloading '$filename' (version: $version).."

PWD=$(pwd)
DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Cleanup and prepare
cd $DIR
rm -rf bin/
mkdir bin 
rm -rf download/
mkdir download

# Download
cd download
curl -LOk "http://downloads.sourceforge.net/project/wkhtmltopdf/$version/$filename"

# Extract
echo "Extracting binary.."

xar -xf $filename
rm $filename
cat Payload | gunzip -dc | cpio -i
rm Payload
cd usr/local/share/wkhtmltox-installer/
./xz --decompress app.tar.xz
tar xf app.tar
mv bin/* $DIR/bin/

# Cleanup
cd $DIR
rm -rf download
