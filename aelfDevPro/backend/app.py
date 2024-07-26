from flask import Flask, request, jsonify
from flask_cors import CORS
import openai, logging
from config import OPENAI_API_KEY
from utils.gcp_utils import upload_to_gcs

app = Flask(__name__)
CORS(app)
openai.api_key = OPENAI_API_KEY

@app.route('/')
def home():
    return "Welcome to aelfDevPro!"

logging.basicConfig(level=logging.INFO)

@app.route('/generate', methods=['POST'])
def generate_contract():
    try:
        data = request.json
        if 'prompt' not in data:
            return jsonify({'error': 'Missing prompt field'}), 400
        prompt = data['prompt']
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        contract = response.choices[0].message['content'].strip()
        url = upload_to_gcs(contract)
        return jsonify({'contract': contract, 'url': url})
    except Exception as e:
        logging.error(f'Error generating contract: {e}')
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
