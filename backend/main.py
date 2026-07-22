from fastapi import FastAPI
from random import randint
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime

app = FastAPI(
    title="CiveX Anomaly API",
    description="Construction anomaly monitoring API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


metrics = [
    {
        "category": "Budget",
        "metric": "Material Cost Increase",
        "unit": "%"
    },
    {
        "category": "Schedule",
        "metric": "Project Delay Risk",
        "unit": "%"
    },
    {
        "category": "Resource",
        "metric": "Resource Usage Anomaly",
        "unit": "%"
    },
    {
        "category": "Quality",
        "metric": "Inspection Failure Risk",
        "unit": "%"
    }
]


class Anomaly(BaseModel):

    id: int
    category: str
    metric: str
    value: int
    unit: str
    threshold: int
    severity: str
    timestamp: datetime

@app.get(
    "/api/anomalies",
    response_model=list[Anomaly]
)
def get_anomalies():

    results = []

    for index, item in enumerate(metrics):

        value = randint(0,100)

        results.append({

            "id": index + 1,

            "category": item["category"],

            "metric": item["metric"],

            "value": value,

            "unit": item["unit"],

            "threshold":70,

            "severity":
                "Critical"
                if value >=70
                else "Normal",

            "timestamp":datetime.now()

        })


    return results