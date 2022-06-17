from tracemalloc import reset_peak
from flask import Flask
import json
import paralleldots


app = Flask(__name__)


paralleldots.set_api_key("bwQrWhxsrnOZS57WuO93Ohowv6giQt7EPBTwOhtm2BI")


@app.route('/')
def home():


    # for single sentence
    text="you are a motherfucker"
    lang_code="en"
    response=paralleldots.sentiment(text,lang_code)
    # data = json.loads(response)
    # print(type(data))
    return response



app.run(debug=True)