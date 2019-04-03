// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC15_yQQJb61YnImNk3fa7xFVoHIDgv7bo",
        authDomain: "iscav-dev.firebaseapp.com",
        databaseURL: "https://iscav-dev.firebaseio.com",
        projectId: "iscav-dev",
        storageBucket: "iscav-dev.appspot.com",
        messagingSenderId: "735639243228"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
