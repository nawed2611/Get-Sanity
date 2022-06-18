from tracemalloc import reset_peak
from flask import Flask, request, render_template
import paralleldots
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

paralleldots.set_api_key("bwQrWhxsrnOZS57WuO93Ohowv6giQt7EPBTwOhtm2BI")


@app.route('/', methods=["POST", "GET"])
@cross_origin(supports_credentials=True)
def home():
    if request.method == 'POST':

        # for single sentence
        text = request.json
        lang_code = "en"
        response = paralleldots.sentiment(text["title"], lang_code)

        # converting nested dictionary to simple dictionary
        modified_response = response['sentiment']

        # finding max value from positive, negative, neutral
        mood_type = max(modified_response, key=lambda x: modified_response[x])

        return { "mood" : mood_type}
    else:
        return {
            "mood" : "no response"
            }


app.run(debug=True)
