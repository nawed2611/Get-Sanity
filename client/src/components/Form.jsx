import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import axios from "axios"

const Form = () => {

    // Initialising State variables for different Questions
    const [result2, setResult2] = useState('');
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);
    const [three, setThree] = useState(0);
    const [four, setFour] = useState(0);
    const [five, setFive] = useState(0);
    const [six, setSix] = useState(0);
    const [seven, setSeven] = useState(0);
    const [eight, setEight] = useState(0);
    const [nine, setNine] = useState(0);
    const [ten, setTen] = useState(0);
    const [eleven, setEleven] = useState(0);
    const [twelve, setTwelve] = useState(0);
    const [thirteen, setThirteen] = useState(0);
    const [fourteen, setFourteen] = useState(0);
    const [fifteen, setFifteen] = useState(0);
    const [sixteen, setSixteen] = useState(0);
    const [seventeen, setSeventeen] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formInput = {
            "1": one,
            "2": two,
            "3": three,
            "4": four,
            "5": five,
            "6": six,
            "7": seven,
            "8": eight,
            "9": nine,
            "10": ten,
            "11": eleven,
            "12": twelve,
            "13": thirteen,
            "14": fourteen,
            "15": fifteen,
            "16": sixteen,
            "17": seventeen,
        };

        axios('http://127.0.0.1:5000/survey ', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            // Sending Form Data
            data: formInput,
        }).then((res) => setResult2(res.data))

    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className='m-3 p-2 font-bold flex flex-col items-center formneg justify-center'>
                <Typography className="m-2 p-2" variant="h4">Well, tell me more about it, Maybe we can help</Typography>
                <Typography className="m-2 p-2" variant="h6">Choose according to your mood</Typography>
                <label>1. Are you feeling nervous?</label><Input value={one} onChange={(e) => setOne(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>2. Are you panicking even in relatively simpler situations?</label><Input value={two} onChange={(e) => setTwo(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>3. Are you having trouble in concentration or a smaller attention span?</label><Input value={three} onChange={(e) => setThree(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>4. Are you having trouble in sleeping ?</label><Input value={four} onChange={(e) => setFour(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>5. Are you having problems at your work place?</label><Input value={five} onChange={(e) => setFive(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>6. Are you feeling hopeless ? </label><Input value={six} onChange={(e) => setSix(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>7. Are you happenning to overreact in situations?</label><Input value={seven} onChange={(e) => setSeven(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>8. Are you having abnormal eating habits/routine?</label><Input value={eight} onChange={(e) => setEight(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>9. Are you having suicidal thoughts?</label><Input value={nine} onChange={(e) => setNine(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>10. Are you feeling tired today?</label><Input value={ten} onChange={(e) => setTen(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>11. Are you addicted to social media today?</label><Input value={eleven} onChange={(e) => setEleven(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>12. Have you gained weight lately?</label><Input value={twelve} onChange={(e) => setTwelve(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>13. Do you consider yourself to be materialistic?</label><Input value={thirteen} onChange={(e) => setThirteen(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>14. Are you an introvert?</label><Input value={fourteen} onChange={(e) => setFourteen(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>15. Are you having recurring episodes of previous trauma or bad experiences</label><Input value={fifteen} onChange={(e) => setFifteen(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>16. Are you usually having a pessimistic outlook on life?</label><Input value={sixteen} onChange={(e) => setSixteen(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <label>17. Are you having the habit of blaming yourself for anything that goes wrong around you?</label><Input value={seventeen} onChange={(e) => setSeventeen(e.target.value)} type="range" min="0" max="1" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />

                <button>Send</button>
            </form>
            {result2 && (
                <Container className="m-2 p-2 flex flex-col items-center justify-center">

                    <div className='m-2 p-2'>
                        <Typography variant="h4">We are sad to hear that</Typography>
                        <Typography variant="h4">Your Mood is currently in - {result2["mood2"]}</Typography>
                        <Typography variant="h4">Here are some NGOs that might help</Typography>
                    </div>

                    <a href="https://sangath.in/"><Typography variant="h5">Sangath</Typography></a>
                    <a href="https://www.mitramfoundation.org/"><Typography variant="h5">Mitram Foundation</Typography></a>
                    <a href="https://www.vandrevalafoundation.com/"><Typography variant="h5">Vandrevala Foundation</Typography></a>
                </Container>)}
        </ Container>
    )
}

export default Form