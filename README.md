
# Quick Guide: Install, Run, and Deploy the App

## 1. Clone the Repository
To clone the repository, run the following command:
```bash
git clone https://github.com/Buchu97/ContactsApp.git
cd ContactsApp
```
## 2. Install Dependencies
To install all necessary dependencies, run the following command:
```bash
npm install
```

## 3. Start the App in Development Mode
To start the app locally, run:
```bash
npm start
```
The app will run in development mode and can be accessed in your browser at:
[http://localhost:3000](http://localhost:3000)

## 4. Build the App for Production
To create an optimised production build, run:
```bash
npm run build
```
This command generates a `build` folder containing the files ready for deployment.

## 5. Deploy the App (Optional)
If deploying the app using GitHub Pages, run:
```bash
npm run deploy
```
This will deploy the app to the URL specified in the `homepage` field of your `package.json`.

## 6. Prerequisites
- Ensure you have Node.js (version 20.x or later) and npm installed.
- If any issues arise during installation or build, verify your environment setup and check the error logs.

## 7. Additional Notes
- Use `npm test` to run the test suite (if applicable).
- Follow best practices for configuring and deploying the app to different environments.

