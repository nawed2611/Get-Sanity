from tracemalloc import reset_peak
from flask import Flask, request, render_template
import paralleldots
from flask_cors import CORS, cross_origin
import pickle
import os


app = Flask(__name__)
CORS(app, support_credentials=True)

paralleldots.set_api_key("bwQrWhxsrnOZS57WuO93Ohowv6giQt7EPBTwOhtm2BI")


@app.route('/', methods=["POST", "GET"])
@cross_origin(supports_credentials=True)
def home():
    if request.method == 'POST':

        text = request.json

        # for single sentence
        lang_code = "en"
        response = paralleldots.sentiment(text["title"], lang_code)

        # converting nested dictionary to simple dictionary
        modified_response = response['sentiment']

        # finding max value from positive, negative, neutral
        mood_type = max(modified_response, key=lambda x: modified_response[x])

        return {"mood": mood_type}
    else:
        return {"mood": "no response"}


@app.route('/survey', methods=["POST"])
def model():
    if request.method == 'POST':

        text2 = request.json
        print(text2)
        
        pickled_model = pickle.load(open("//Users//arshad//Desktop//Projects//mlh-mental-health-hacks//model//knn_model.pkl", 'rb'))
        temp = pickled_model.predict([[ text2["1"], text2["2"], text2["3"], text2["4"], text2["5"], text2["6"], text2["7"], text2["8"], text2["9"], text2["10"], text2["11"], text2["12"], text2["13"], text2["14"], text2["15"], text2["16"], text2["17"] ]])
        next = list(temp)
        answer = str(next[0])

        if answer == '0':
            return {"mood2": 'Normal'}
        elif answer == '1':
            return {"mood2": 'Loneliness'}
        elif answer == '2':
            return {"mood2": 'Anxiety'}
        elif answer == '3':
            return {"mood2": 'Stress'}
        elif answer == '4':
            return {"mood2": "Depression"}
        else: 
            return {"mood2": text2}

app.run(debug=True)
