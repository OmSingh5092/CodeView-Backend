const config = {
    app:{
        port:process.env.PORT||8000
    },
    session:{
        // It holds the secret key for session 
        secret: 'Your_Secret_Key',
        // Forces the session to be saved 
        // back to the session store 
        resave: true, 
        // Forces a session that is "uninitialized" 
        // to be saved to the store 
        saveUninitialized: true
    },
    jwt:{
        TOKEN_SECRET:"OmSingh"
    },
    database:{
        local:{
            uri:"mongodb://localhost:27017/CodeView"
        },
        prod:{
            password:"DGUNE5sDMR88mEEB",
            uri: "mongodb+srv://code-view:DGUNE5sDMR88mEEB@cluster0.cvgzr.mongodb.net/CodeView?retryWrites=true&w=majority"
        }
    },
    gcp:{
        clientId: "41880489918-ff5sebqstbkdjru2po7gmgsepqhnuio7.apps.googleusercontent.com",
        clientSecret:"-1JWDbVE3ytYo5_qpXwPYHje"
    },
}

module.exports = config;