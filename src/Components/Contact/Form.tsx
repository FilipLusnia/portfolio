import { useState, useEffect } from 'react';
import { ReactComponent as PlaneIcon } from '../../Resources/paper-plane.svg';

function Form() {
    const [ messageData, setMessageData ] = useState({
        nameValue: '',
        emailValue: '',
        textValue:''
    });

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const [ generalError, setGeneralError ] = useState(false);

    const handleData = (e: any, field: string) => {
        setMessageData({...messageData, [field]: e.target.value})
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setNameErr("");
        setEmailErr("");
        setTextErr("");

        if(messageData.nameValue.length < 3 || messageData.nameValue.indexOf(" ") >= 0){
            setNameErr("That's not a valid name!")
        }

        if (messageData.emailValue.includes("@") === false || messageData.emailValue.includes(".") === false || messageData.emailValue.length < 5){
            setEmailErr("This email is incorrect!")
        }

        if(messageData.textValue.length < 50){
            setTextErr("Message needs to be at least 50 characters long!")
        }

        if(!generalError){
            console.log("sent");
        }
    }

    useEffect(() => {
        if(messageData.nameValue.length < 3 || 
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
                <div className="form_data">
                    <div className="form_data_field"> 
                        <label className="form_data_label">
                            Name:
                            <input onChange={e=> handleData(e, 'nameValue')} 
                                    style={nameErr.length > 0 ? {borderColor: 'red'} : undefined}
                                    placeholder="Name" 
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
                            placeholder="What's on your mind?" 
                            className="form_content"
                    />
                    {textErr.length > 0 && <p className="form_error">{textErr}</p>}
                </label>
                <div className="form_button_container">
                    <button onClick={e=> handleSubmit(e)} type="submit" className="form_button">
                        Submit
                        <PlaneIcon className="form_button_icon"/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;