import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";

            const firebaseConfig = {
                apiKey: "AIzaSyCTYtAmz0GSxDJYoc72SUITwdR7a-iuOKk",
                authDomain: "media-upload-7c171.firebaseapp.com",
                projectId: "media-upload-7c171",
                storageBucket: "media-upload-7c171.appspot.com",
                messagingSenderId: "39716356203",
                appId: "1:39716356203:web:2cbcc5d2f1409dec67b12e",
                measurementId: "G-L9LR6NKH5S"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);