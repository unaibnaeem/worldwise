# WorldWise 🌍

WorldWise is a travel tracking application that allows users to store and visualize the cities they have visited on an interactive map.

## 🚀 Features

- **Interactive Map**: Visualize visited cities using Leaflet.
- **City Management**: Add, view, and delete cities from your travel list.
- **Geolocation**: Detect your current location to easily add cities.
- **User Authentication**: Secure access to personal travel data.
- **Responsive Design**: Works across desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Routing**: React Router
- **Mapping**: Leaflet & React-Leaflet
- **State Management**: React Context API
- **Backend (Mock)**: JSON Server

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd worldwise
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:9000
```

### 4. Run the application

You need to run **both** the frontend and the mock backend.

**Start the Mock API (Terminal 1):**
```bash
npm run server
```

**Start the Frontend (Terminal 2):**
```bash
npm run dev
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run server`: Starts the JSON server on port 9000 to handle city data.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality.
