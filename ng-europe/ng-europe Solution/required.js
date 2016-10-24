/**
 * The content of this file is executed on all server-side JavaScript contexts when they are created
 */


//function myLogin(userName, password)
//{    
//        //get a reference to the current datastore of the MyDirectory application
//        //this is necessary because the myLogin function can be called from any project of the solution
//        //we 'share' the custom datastore class between all the projects of the solution
//    var dsDir = solution.getApplicationByName("MyDirectory").ds; 
// 
//    var p = dsDir.People({name:userName}); //look for the user in the People datastore class
//    if (p == null) //if the user name does not exist in our datastore class
//        return false; //let Wakanda try to find it in the solution's directory
//    else // the user name is known
//    {
//        if (p.password == password) //this is given to keep the example simple
//                    //we should have a more secured challenge here, for example 
//                    //by storing and comparing a hash key
//        {
//            var theGroups = [];
//            switch (p.accessType){
//                case 1: 
//                    theGroups = ['Internal'];
//                    break;
//                case 2: 
//                    theGroups = ['Administrator'];
//                    break;
//                case 3: 
//                    theGroups = ['Manager'];
//                    break;
//                case 4: 
//                    theGroups = ['Employee'];
//                    break;
//            }
//            var connectTime = new Date();
//            return { 
//                ID: p.userID, 
//                name: p.name, 
//                fullName:"guest "+p.name, 
//                belongsTo: theGroups,
//                storage:{
//                    time: connectTime,
//                    access: "Guest access"
//                        //in the user session, sessionStorage.access
//                        //will contain "Guest access"
//                }
//            };
//        }
//        else
//            return { error: 1024, errorMessage:"invalid login" }
//    }
//};