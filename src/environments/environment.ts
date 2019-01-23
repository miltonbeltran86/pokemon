// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrl: "https://pokeapi.co/api/v2/",
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDABf3YL8U5Bk1nBfebUmzZkYNk9d3aMEQ",
    authDomain: "pokemon-app-mb.firebaseapp.com",
    databaseURL: "https://pokemon-app-mb.firebaseio.com",
    projectId: "pokemon-app-mb",
    storageBucket: "pokemon-app-mb.appspot.com",
    messagingSenderId: "600670954552"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
