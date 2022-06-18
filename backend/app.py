from tracemalloc import reset_peak
from flask import Flask, request, render_template
import paralleldots

app = Flask(__name__)

paralleldots.set_api_key("bwQrWhxsrnOZS57WuO93Ohowv6giQt7EPBTwOhtm2BI")


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':

        # for single sentence
        text = request.form.get('title')
        lang_code = "en"
        response = paralleldots.sentiment(text, lang_code)

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
