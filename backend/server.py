import base64
import time
from pathlib import Path
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/picture", methods=["POST"])
def savePicture():
    response = request.get_json()
    picture = response.get("Picture")
    if picture.startswith("data:image/png;base64,"):
        picture = picture.split(",")[1]
    try:
        image=base64.b64decode(picture)
        Path("./data/").mkdir(parents=True, exist_ok=True)
        with open(f"data/picture{int(time.time())}.png", "wb") as f:
            f.write(image)
    except Exception as e:
        print(str(e))

    return jsonify(""), 200

if __name__ == "__main__":
    app.run(debug=True)
