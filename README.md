# e-comCRUD

GitHub = https://github.com/KavishkaImalsha/e-comCRUD.git

### Installation
-- Frontend --
1. Navigate to the frontend directory:
```bash
cd frontend

2. Install dependencies:
```bash
npm install

3.Create a .env.local file in the root and add your backend URL
BACKEND_URL=http://localhost:4000/api

4.Start the development server
npm run dev


-- Backend --
1. Navigate to the backend directory:
```bash
cd backend
2. Install dependencies:
```bash
npm install
3.Create a .env file in the root directory:
PORT=4000
MONGO_URI=your_mongodb_connection_string
4.Start the server in development mode (using nodemon)
```bash
npm run dev

### API Endpoints
Method,Endpoint,Description
GET,/api/products,Fetch all products
GET,/api/products/:id,Fetch a single product by ID
POST,/api/products,Create a new product


