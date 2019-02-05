# real-estate
Real estate crowdfunding platform on Angular 7

Demo: https://real-estate-test.herokuapp.com/dashboard

For local starting app: *npm run install:start*

------

**Problem:** *"Mixed Content"* Frontend uses HTTPS, backend [MockApi](http://private-1b3550-phpbackend.apiary-mock.com/offerings) uses HTTP 

That's why it was used api from https://real-estate-test.herokuapp.com/api/offerings (using nodejs)

**Problem:**  *Wrong url for loading photo* 

That's why On the error on load image was using  image from mock
