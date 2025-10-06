# Robot Verification App

This is a simple robot verification application built with Angular for the frontend and Node.js/Express for the backend.

## Features

- Checkbox-based robot verification
- API call to backend for verification
- Loading state during verification
- Success or error messages based on verification result

## How It Works

1. The user sees a checkbox labeled "I am not a robot".
2. When the checkbox is checked, the frontend sends a POST request to the backend API at `/verify`.
3. The backend responds with a JSON object containing `isRobot: false` (always, in this simple implementation).
4. The frontend displays "Verification successful!" if not a robot, or "Verification failed!" if robot.
5. The checkbox is unchecked after verification.

## Project Structure

- `robot-verification/`: Angular frontend
- `backend/`: Node.js backend

## Prerequisites

- Node.js and npm installed
- Angular CLI installed globally (`npm install -g @angular/cli`)

## Installation and Running

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node server.js
   ```
   The backend will run on http://localhost:3000

### Frontend

1. Navigate to the robot-verification directory:
   ```
   cd robot-verification
   ```

2. Install dependencies (if not already done):
   ```
   npm install
   ```

3. Start the development server:
   ```
   ng serve
   ```
   The frontend will run on http://localhost:4200

## Usage

1. Open http://localhost:4200 in your browser.
2. Check the "I am not a robot" checkbox.
3. The app will show "Verifying..." while processing.
4. After verification, it will display "Verification successful!" or "Verification failed!".

## API Endpoint

- POST /verify: Verifies if the user is a robot. Always returns `{"isRobot": false}`.

## Notes

- This is a basic implementation. In a real-world scenario, the backend would include actual robot detection logic.
- Ensure both servers are running simultaneously for the app to work fully.
- If you encounter connection issues, check firewall settings to allow ports 4200 and 3000.
