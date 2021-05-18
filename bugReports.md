# Bugs - CowinTracker

## CT001
### Description 
Session gets added and deleted to centers object infinitely
### Status 
Resolved
### Reason 
Cowin api was returning outdated slots too. So when it reaches deleteSession function
 + delete the outdated session
 + add it because it's not present in centers object
 + delete again because outdated and repeats
 ### Solution 
 change condition to check if session expired
 + change session expiration limit from Date, 13:00:00 to 23:59:59

## CT002
### Description 
Api call to cowin public api returns 403 Forbidden, even though it's returning 200 and working fine when testing locally.
### Status 
Unresolved
### Reason 
Possible reasons:
+ Cowin API only takes calls from indian IPs and Glitch and openshift ain't having indian IPs
### Solution
Hosted on AWS LightSail

## CT003
### Description
Loading the client is fine, But reloading the client side won't connect to the websocket again.
### Solution
Running websocket server as a system process on aws lightsail seems to not reproduce the problem