import pickle
import pandas as pd
from flask import Flask, request, jsonify
from model import load_model, encode_input

# Load trained model
model, le = load_model()

app = Flask(__name__)

@app.route("/recommend", methods=["POST"])
def recommend():
    try:
        data = request.get_json()
        user_preferences = encode_input(pd.DataFrame([data]), le)
        recommendations = model.predict(user_preferences)
        return jsonify({"recommendations": recommendations.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)