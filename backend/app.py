from tracemalloc import reset_peak
from flask import Flask
import paralleldots


app = Flask(__name__)


paralleldots.set_api_key("bwQrWhxsrnOZS57WuO93Ohowv6giQt7EPBTwOhtm2BI")


@app.route('/')
def home():


    # for single sentence
    text="Come on, lets play together"
    lang_code="en"
    response=paralleldots.sentiment(text,lang_code)

    return response



app.run(debug=True)