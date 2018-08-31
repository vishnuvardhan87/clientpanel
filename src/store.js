import {createStore, combineReducers,compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer} from 'redux-firestore';

//Reducer
//Todo

const firebaseConfig ={
    apiKey: "AIzaSyB6cp0QFSgcn86L1FunFiQBXJSw0BvsH6o",
    authDomain: "reactclientpanel-e7043.firebaseapp.com",
    databaseURL: "https://reactclientpanel-e7043.firebaseio.com",
    projectId: "reactclientpanel-e7043",
    storageBucket: "reactclientpanel-e7043.appspot.com",
    messagingSenderId: "560172154208"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

//Init firestore
const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

//Create Initial State
const initialState ={}

//Create Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))

export default store;