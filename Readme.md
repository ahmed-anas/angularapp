We purpose of this project is to build sample mobile application we can use internally to do a mobile app design project.  This is project is essentially going to create a live requirements document.  We are going to build a test mobile app using Angular/Bootstrp using data from our business REST API in various mobile friendly behaviors using an Angular/Bootstrap based extension called mobileangular.ui.  

After we bind data from our API to the behaviors we will convene our design team and customers to "feel" how the data renders in different behaviours.  From there we will come back to you to make new changes, etc.  Eventually this will be the finished product of a mobile implmentation that we can deploy to our customers.

The project comes with a basic angular.js SPA application in the attached .zip file.  The code in the file is just a slight reorginzation of the code at:
http://mobileangularui.com/docs/

We reconfigured the files here to create a compliant version that can be integrated in to our portal app:  

Using the login below: 
username:nancy
password:bpm

you can inspect our implementation on our test server at:

http://dev.learninghealth.io:8080/bonita/apps/l

Note that the url above shows a modified version of the mobileangularui.com code with some customizations.  

What we need to do is bind data from our REST API to the various demonstrations behaviors.  Here are the API calls to inspect the data.

First the API requires an active session, run the login service below to get an active session

URL:http://dev.learninghealth.io:8080/bonita/loginservice
Method:POST
Form
username=nancy&password=bpm&redirect=false&redirecturl=&tenant=1
Response 200OK, no payload

1.  Task 1 - The first data api returns a set of Tasks the user needs to complete.  In the URL below I have hard-coded the user_id for the sample user (nancy) user_id=101. 

URL: http://dev.learninghealth:8080/bonita/API/bpm/humanTask?p=0&c=5&d=rootContainerId&f=user_id%3D101&f=state%3Dready
Method: Get
Resonse: JSON of Tasks.

Start by using the fields "displayName" and "dueDate" to bind to the usi across there different repeating controls in the samples (resources/content/accordion.html, scroll.html).  

Add a new page that binds the data to a table and includes search, sort and filter features on the table header.

2.  Task 2 - The second data api returns "applications" that are available to the user.  Here is the REST URLfor the data:

http://dev.learninghealth.io:8080/bonita/API/bpm/process?c=5&p=0&d=deployedBy&f=user_id%3D101

Same as task one, take you best shot at creating pages with repeating controls with the data that comes back.


This represents the basic setup of this project, there is more to do once we get beyond this step.  # angularapp
