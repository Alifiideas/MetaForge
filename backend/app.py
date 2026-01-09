from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/metadata")
async def generate_metadata(settings: dict):
    # Gemini API later
    return {
        "title": "Sample Title",
        "keywords": ["ai", "metadata", "image"],
        "description": "Sample description"
    }

@app.post("/upload-images")
async def upload_images(files: List[UploadFile] = File(...)):
    for file in files:
        path = os.path.join(UPLOAD_DIR, file.filename)
        with open(path, "wb") as f:
            f.write(await file.read())
    return {"status": "uploaded"}
