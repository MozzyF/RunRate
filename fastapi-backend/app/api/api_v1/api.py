from fastapi import APIRouter

api_router = APIRouter()

@api_router.get("/test")
async def test_endpoint():
    return {"message": "Test endpoint from API v1"} 