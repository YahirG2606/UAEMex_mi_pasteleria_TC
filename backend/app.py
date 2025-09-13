from fastapi import FastAPI

app = FastAPI()

productos = [
    {"id": 1, "nombre": "Pastel de chocolate", "precio": 250},
    {"id": 2, "nombre": "Cheesecake", "precio": 300},
    {"id": 3, "nombre": "Pay de limón", "precio": 200},
    {"id": 4, "nombre": "Pastel tres leches", "precio": 280},
]

@app.get("/")
def read_root():
    return {"mensaje": "Hola desde el backend de Pastelería 🎂"}

@app.get("/productos")
def get_productos():
    return productos
