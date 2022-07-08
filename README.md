# Gamified version of the wall of shame
A project created to save the bad historic of gameplays from our friends.

This system is based on two medias, images and videos. At first, we should focus on the images evaluation.

Our system should provide an authentication system, that allow the user to be evaluated, and vote in others evaluation.
Each week, we should rank the WORST play of the team, and that`s great. The interval must be defined later.

Project phases:

0 - Define the system diagram

# SYSTEM:
 - Should be able to register users
 - Should be able to recovery password
 - Should have a routing system to different pages ( Home page with a sorted feed, create posts page, contact and system info )
 - Should be able to filter by tags @daniel.muller
  - Design a DB with the below tables
  

# USER:
  Methods:
  - authenticate ( first login could be a simple authentication, and later we could try to: https://codeforgeek.com/refresh-token-jwt-nodejs-authentication/ )
  - create, read, update, delete posts ( NodeJS linked to a MySQL database )
  - evaluate others TAGGED posts (?) ( Front end call to nodeJs back-end )
  - 

  Properties:
   - id (auto generated, integer) 
   - login ( string ) 
   - password ( could be any, but I recommend to use SHA-256 encoded string )
   - logged / token key 
   - avatar picture
   

# POST:
 Methods:
 - 

 Properties:
 - id (auto generated integer)
 - image (string, refLink)
 - targetUser (userId)
 - createdBy (userId)
 - text (VARCHAR 255)
 - 
 
 # Evaluations:
 - id
 - postId
 - userId
 - evaluation (from 1 to 5)
 
 # Tags
 
 Property
 - id
 - postId
 - tag
 
 
