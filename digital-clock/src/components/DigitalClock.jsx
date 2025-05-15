import React, {useState, useEffect} from "react";

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, (1000));//Co 1s nowy data obj

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();//let bo potem modyfikacja
        const minutes = time.getMinutes();
        const seconds = time.getSeconds(); 

        //Czas 1-12
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;