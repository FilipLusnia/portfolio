import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ReactComponent as PlaneIcon } from '../../Resources/paper-plane.svg';
import { ReactComponent as DoneIcon } from '../../Resources/checkmark.svg';

function Form() {
    const [ messageData, setMessageData ] = useState({
        nameValue: '',
        emailValue: '',
        textValue:''
    });
    const [messageState, setMessageState] = useState('awaiting');

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const [ generalError, setGeneralError ] = useState(false);

    const mailService = process.env.REACT_APP_mail_service;
    const mailTemplate = process.env.REACT_APP_mail_template;
    const userId = process.env.REACT_APP_user_id;


    const handleData = (e: any, field: string) => {
        setMessageData({...messageData, [field]: e.target.value})
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setNameErr("");
        setEmailErr("");
        setTextErr("");

        if(messageData.nameValue.length < 2 || messageData.nameValue.indexOf(" ") >= 0){
            setNameErr("That's not a valid name!")
        }

        if (messageData.emailValue.includes("@") === false || messageData.emailValue.includes(".") === false || messageData.emailValue.length < 5){
            setEmailErr("This email is incorrect!")
        }

        if(messageData.textValue.length < 50){
            setTextErr("Message needs to be at least 50 characters long!")
        }

        if(!generalError && (messageState)){
            setMessageState('loading');
            emailjs.send(`${mailService}`, `${mailTemplate}`,{
                name: messageData.nameValue,
                email: messageData.emailValue,
                text: messageData.textValue
            }, `${userId}`)
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
            messageData.textValue.length < 50
        ){
            setGeneralError(true);
        } else {
            setGeneralError(false);
        }
    }, [messageData])

    return (
        <div className="form_container">
            <form className="form">
                {messageState !== 'sent'
                    ?
                        <>
                            <div className="form_data">
                                <div className="form_data_field"> 
                                    <label className="form_data_label">
                                        Name:
                                        <input onChange={e=> handleData(e, 'nameValue')} 
                                                style={nameErr.length > 0 ? {borderColor: 'red'} : undefined}
                                                placeholder="Name" 
                                                value={messageData.nameValue}
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
                                                className="form_data_input"
                                        />
                                        {emailErr.length > 0 && <p className="form_error">{emailErr}</p>}
                                    </label>
                                </div>
                            </div>
                            <label className="form_content_label">
                                Your message:
                                <textarea onChange={e=> handleData(e, 'textValue')} 
                                        style={textErr.length > 0 ? {borderColor: 'red'} : undefined}
                                        value={messageData.textValue}
                                        placeholder="What's on your mind?" 
                                        className="form_content"
                                />
                                {textErr.length > 0 && <p className="form_error">{textErr}</p>}
                            </label>
                        </>
                    :
                        <p className="form_success_message">Message successfully sent!</p>
                }
                <div className="form_button_container">
                    <button onClick={(messageState !== ('loading' && 'sent')) ? e=> handleSubmit(e) : e=> e.preventDefault()} 
                            type="submit" 
                            className={messageState === 'loading' ? "form_button -loading" : (messageState === 'sent' ? "form_button -done" : "form_button")}>
                        {messageState === 'loading'
                            ? 
                                <>
                                    Sending
                                    <div className="button_animation">
                                        <div className="animation_dot"></div>
                                        <div className="animation_dot"></div>
                                        <div className="animation_dot"></div>
                                    </div>
                                </>
                            : 
                                messageState === 'sent'
                                    ?
                                        <>
                                            Sent
                                            <DoneIcon className="form_button_icon"/>
                                        </>
                                    :
                                        <>
                                            Submit
                                            <PlaneIcon className="form_button_icon"/>
                                        </>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;