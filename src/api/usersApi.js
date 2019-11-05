import firebase from 'react-native-firebase';
import { colors } from 'react-native-elements';

export function getUser(userRetrieved){

    var userRetrieved = 'Ing';

       var data = firebase.database().ref('Users/1').on('value', function (snapshot) {
        console.log(snapshot.val());

        });

    
 
}