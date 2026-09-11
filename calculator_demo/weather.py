import requests

url = "http://api.weatherapi.com/v1/current.json"
params = {
    "key": "YOUR_API_KEY",  # replace with your API key
    "q": "Kigali",          # city name
    "aqi": "no"
}

response = requests.get(url, params=params)

if response.status_code == 200:
    data = response.json()
    city = data["location"]["name"]
    country = data["location"]["country"]
    temp_c = data["current"]["temp_c"]
    condition = data["current"]["condition"]["text"]

    print(f"Weather in {city}, {country}:")
    print(f"Temperature: {temp_c}°C")
    print(f"Condition: {condition}")
else:
    print("Error fetching weather data:", response.status_code)
