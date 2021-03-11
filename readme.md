# Run the command to install the ngx build plux to configire the app using ngx for optimized build

ng add ngx-build-plus
# changes in angular.json

Make following changes in angular.json for ngapp1 amd ngapp2
"builder": "ngx-build-plus:browser",

Modify the server of angular.json for ngapp1 and ngapp2 as follows
 "serve": {
          "builder": "ngx-build-plus:dev-server",




npm install document-register-element

 # create a single bundle file for angular eco system

ng build --prod --output-hashing none --single-bundle true

# install dummy http server at glocal scope

npm install -g http-server

# go to the dist/ngapp1 folder and run the folowing command to host ngapp1

http-server -p 8081


# go to the dist/ngapp2 folder and run the folowing command to host ngapp2

http-server -p 8082

# use the single build file main-es2015.js in index.html of container application

  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
    <script type="text/javascript" src="http://localhost:8081/main-es2015.js"></script>
    <script type="text/javascript" src="http://localhost:8082/main-es2015.js"></script>