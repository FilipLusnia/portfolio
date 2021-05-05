import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Button from './Button';

declare global {
    interface Window {
        recaptchaCallback: Function,
        recaptchaExpiredCallback: Function
    }
}

function Form() {
    const [ messageData, setMessageData ] = useState({
        nameValue: '',
        emailValue: '',
        textValue:''
    });

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const [recaptchaError, setRecaptchaError] = useState<boolean|undefined>();
    const [generalError, setGeneralError] = useState(false);

    const [messageState, setMessageState] = useState('awaiting');
    const [inputsDisabled, setInputsDisabled] = useState(false);

    const handleData = (e: any, field: string) => {
        setMessageData({...messageData, [field]: e.target.value})
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setNameErr("");
        setEmailErr("");
        setTextErr("");
        recaptchaError === undefined && setRecaptchaError(true);

        if(messageData.nameValue.length < 2 || messageData.nameValue.indexOf(" ") >= 0){
            setNameErr("That's not a valid name!")
        }

        if (messageData.emailValue.includes("@") === false || messageData.emailValue.includes(".") === false || messageData.emailValue.length < 5){
            setEmailErr("This email is incorrect!")
        }

        if(messageData.textValue.length < 50){
            setTextErr("Message needs to be at least 50 characters long!")
        }

        if(!generalError){
            setInputsDisabled(true);
            setMessageState('loading');
            emailjs.send(`${process.env.REACT_APP_mail_service}`, `${process.env.REACT_APP_mail_template}`,{
                name: messageData.nameValue,
                email: messageData.emailValue,
                text: messageData.textValue
            }, `${process.env.REACT_APP_user_id}`)
            .then(() => {
                setMessageData({
                    nameValue: '',
                    emailValue: '',
                    textValue:''
                })
                setMessageState('sent');
            })
        }
    }

    useEffect(() => {
        if(messageData.nameValue.length < 2 || 
            messageData.nameValue.indexOf(" ") >= 0 ||
            messageData.emailValue.includes("@") === false ||
            messageData.emailValue.includes(".") === false ||
            messageData.emailValue.length < 5 ||
            messageData.textValue.length < 50 ||
            recaptchaError
        ){
            setGeneralError(true);
        } else {
            setGeneralError(false);
        }
    }, [messageData, recaptchaError])

    const recaptchaCallback = () => setRecaptchaError(false);
    window.recaptchaCallback = recaptchaCallback;

    const recaptchaExpiredCallback = () => setRecaptchaError(true);
    window.recaptchaExpiredCallback = recaptchaExpiredCallback;

    return (
        <div className="form_container">
            <form className="form">
                {messageState !== 'sent'
                    ?
                        <>
                            <div className="form_data" style={inputsDisabled ? {opacity: '0.5'} : undefined}>
                                <div className="form_data_field"> 
                                    <label className="form_data_label">
                                        Name:
                                        <input onChange={e=> handleData(e, 'nameValue')} 
                                                style={nameErr.length > 0 ? {borderColor: 'red'} : undefined}
                                                placeholder="Name" 
                                                value={messageData.nameValue}
                                                disabled={inputsDisabled}
                                                className="form_data_input"
                                        />
                                        {nameErr.length > 0 && <p className="form_error">{nameErr}</p>}
                                    </label>
                                </div>
                                <div className="form_data_field"> 
                                    <label className="form_data_label">
                                        Email:
                                        <input onChange={e=> handleData(e, 'emailValue')} 
                                                type="email" 
                                                style={emailErr.length > 0 ? {borderColor: 'red'} : undefined}
                                                value={messageData.emailValue}
                                                placeholder="Email" 
                                                disabled={inputsDisabled}
                                                className="form_data_input"
                                        />
                                        {emailErr.length > 0 && <p className="form_error">{emailErr}</p>}
                                    </label>
                                </div>
                            </div>
                            <label className="form_content_label" style={inputsDisabled ? {opacity: '0.5'} : undefined}>
                                Your message:
                                <textarea onChange={e=> handleData(e, 'textValue')} 
                                        style={textErr.length > 0 ? {borderColor: 'red'} : undefined}
                                        value={messageData.textValue}
                                        placeholder="What's on your mind?" 
                                        disabled={inputsDisabled}
                                        className="form_content"
                                />
                                {textErr.length > 0 && <p className="form_error">{textErr}</p>}
                            </label>
                        </>
                    :
                        <p className="form_success_message">Message successfully sent!</p>
                }
                <div className="form_button_container">
                    <Button messageState={messageState} handleSubmit={handleSubmit} />
                </div>
            </form>
        </div>
    );
}

export default Form;