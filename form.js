
  const firebaseConfig = {
    apiKey: "AIzaSyCpHP4gaQ2TmmMCy0NJ8BtGAqxF3Pcir6A",
    authDomain: "login-demo-5e0ca.firebaseapp.com",
    projectId: "login-demo-5e0ca",
    storageBucket: "login-demo-5e0ca.appspot.com",
    messagingSenderId: "490233562076",
    appId: "1:490233562076:web:ace5ece488bca7b20bc519",
    measurementId: "G-5QHKQN7VGQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })