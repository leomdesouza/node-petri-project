# Connecting the World Project
This project uses the Petri Net in your system modeling.

This is the server that will connect all the hardware and manage them.

# Actions
The concept of actions is asynchrounous process.

# States
The concept of state is synchronous process.

# Transitions
The concept of transitions is variable atributes, callbacks, functions, methods or third party requests.

# System Modeling 
This files to be open needs the Tapaal Software.

# Server Modeling
![alt tag](systemModeling/images/server.png)

# Application Modeling

## signUp
POST https://connectingworldproject.herokuapp.com/clientActions/signUp <br>

### Request  
body <br>
x-www-form-urlencoded <br>
<code>
    {
        name: String,
        username: String,
        password: String
    }
</code>

### Response
<code>
    {
        status: int,
        message: String
    }
</code>

![alt tag](systemModeling/images/signUp.png)

## login
POST https://connectingworldproject.herokuapp.com/clientActions/login <br>

### Request  
body <br>
x-www-form-urlencoded <br>
<code>
    {
        username: String,
        password: String
    }
</code>

### Response
<code>
    {
        status: int,
        message: String,
        token: String
    }
</code>

![alt tag](systemModeling/images/login.png)

## configDevice
POST https://connectingworldproject.herokuapp.com/clientActions/configDevice <br>

### Request  
body <br>
x-www-form-urlencoded <br>
<code>
    {
        deviceCode: String
    }
</code>

### Response
<code>
    {
        status: int,
        message: String,
        token: String
    }
</code>

![alt tag](systemModeling/images/configDevice.png)

## seeUsers
GET https://connectingworldproject.herokuapp.com/clientActions/seeUsers <br>

### Request  
header <br>
<code>
    {
        token: String
    }
</code>

### Response
<code>
    {
        status: int,
        users: [Object]
    }
</code>

![alt tag](systemModeling/images/seeUsers.png)

## thisUser
GET https://connectingworldproject.herokuapp.com/clientActions/thisUser <br>

### Request  
header <br>
<code>
    {
        token: String
    }
</code>

### Response
<code>
    {
        status: int,
        message: String,
        token: String
    }
</code>

![alt tag](systemModeling/images/thisUser.png)

## deviceSignUp
POST https://connectingworldproject.herokuapp.com/clientActions/deviceSignUp <br>

### Request  
header <br>
<code>
    {
        token: String
    }
</code>
body <br>
x-www-form-urlencoded <br>
<code>
    {
        deviceName: String,
        deviceCode: String,
        deviceVersion: String,
        deviceType: String
    }
</code>

### Response
<code>
    {
        status: int,
        message: String,
        token: String
    }
</code>

![alt tag](systemModeling/images/deviceSignUp.png)