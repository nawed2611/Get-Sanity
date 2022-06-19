import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import axios from "axios"

const Form = () => {

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

        console.log(formInput);

        axios('http://127.0.0.1:5000/survey ', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            data: formInput,
        }).then((res) => setResult2(res.data))

    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className='font-bold flex flex-col items-center justify-center'>
                <Typography variant="h4">Well, tell me more about it, Maybe I can help</Typography>
                <label>1. Are you feeling nervous?</label><Input value={one} onChange={(e)=> setOne(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>2. Do you panic even in relatively simpler situations?</label><Input value={two} onChange={(e)=> setTwo(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>3. Do you have trouble in concentration or have a smaller attention span?
                </label><Input value={three} onChange={(e)=> setThree(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>4. Do you have trouble in sleeping ?</label><Input value={four} onChange={(e)=> setFour(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>5. Are you having problems at your work place?</label><Input value={five} onChange={(e)=>setFive(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>6. Do you feel hopeless ? </label><Input value={six} onChange={(e)=> setSix(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>7. Do you happen to overreact in situations?</label><Input value={seven} onChange={(e)=> setSeven(e.target.value)} type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>8. Do you have abnormal eating habits/routine?</label><Input value={eight} onChange={(e)=> setEight(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>9. Do you have suicidal thoughts?</label><Input value={nine} onChange={(e)=> setNine(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>10. Do you often feel tired?</label><Input value={ten} onChange={(e)=> setTen(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>11. Are you addicted to social media?</label><Input value={eleven} onChange={(e)=> setEleven(e.target.value)} type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>12. Have you gained weight lately?</label><Input value={twelve} onChange={(e)=> setTwelve(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>13. Do you consider yourself to be materialistic?</label><Input value={thirteen} onChange={(e)=>setThirteen(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>14. Are you an introvert?</label><Input value={fourteen} onChange={(e)=> setFourteen(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>15. Do you have recurring episodes of previous trauma or bad experiences</label><Input value={fifteen} onChange={(e)=>setFifteen(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>16. Do you usually have a pessimistic outlook on life?</label><Input value={sixteen} onChange={(e)=> setSixteen(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <label>17. Do you have the habit of blaming yourself for anything that goes wrong around you?</label><Input value={seventeen} onChange={(e)=> setSeventeen(e.target.value) } type="number" className="font-bold number-4xl m-2 p-2 w-1/2 h-1/2" placeholder="" />
                <button>Send</button>
            </form>
            {result2 && <h1>{result2["mood2"]}</h1>}
        </ Container>
    )
}

export default Form