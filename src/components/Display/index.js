import './style.scss'
import Button from "../Button";
import {useEffect, useState} from "react";

const ButtonTitle = ['Pomodoro', 'Short Break', 'Long Break']

const Display =  ( { Minutes, Seconds, TypeSetter, Color } ) => {

    const [ type, SetType ] = useState()

    useEffect(() => {
        console.log('TypeReceived: ', type)
        TypeSetter(type)
    }, [type])

    return (
        <div className={'DisplayContainer'}>
            <div className={'DisplayHeader'}>
                <h1>{Minutes}:{Seconds}</h1>
            </div>
            <div className={'DisplayBody'}>
                { ButtonTitle.map((title, index) => {
                    return ( <Button Color={Color} SetType={SetType}  key={index} title={title} /> )
                }) }
            </div>
        </div>
    )
}

export default Display