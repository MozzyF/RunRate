# Full-Stack Project

This is a full-stack application using Next.js for the frontend and FastAPI for the backend.

## Project Structure

```
.
├── nextjs-frontend/     # Next.js frontend application
├── fastapi-backend/     # FastAPI backend application
└── shared/             # Shared types and utilities
```

## Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL 14+
- Docker (optional)

## Setup Instructions

### Backend Setup

1. Create and activate a virtual environment:
```bash
cd fastapi-backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Run database migrations:
```bash
alembic upgrade head
```

5. Start the backend server:
```bash
uvicorn app.main:app --reload
```

### Frontend Setup

1. Install dependencies:
```bash
cd nextjs-frontend
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. Start the development server:
```bash
npm run dev
```

## Development

- Backend API will be available at: http://localhost:8000
- Frontend will be available at: http://localhost:3000
- API documentation will be available at: http://localhost:8000/docs

## Database

The application uses PostgreSQL. Make sure to have PostgreSQL installed and running before starting the application.

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
SECRET_KEY=your-secret-key
ENVIRONMENT=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
``` 