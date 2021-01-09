import { useState } from 'react';
import { ReactComponent as PlaneIcon } from '../../Resources/paper-plane.svg';

function Form() {
    const [ messageData, setMessageData ] = useState({
        nameValue: '',
        emailValue: '',
        messageValue:''
    });

    const handleData= (e: any, field: string) => {
        setMessageData({...messageData, [field]: e.target.value})
    };

    return (
        <div className="form_container">
            <form className="form">
                <div className="form_data">
                    <div className="form_data_field"> 
                        <label className="form_data_label">
                            Name:
                            <input onChange={e=> handleData(e, 'nameValue')} placeholder="Name" className="form_data_input"/>
                            <p className="form_error">Fill this field!</p>
                        </label>
                    </div>
                    <div className="form_data_field"> 
                        <label className="form_data_label">
                            Email:
                            <input onChange={e=> handleData(e, 'emailValue')} type="email" placeholder="Email" className="form_data_input"/>
                            <p className="form_error">Fill this field!</p>
                        </label>
                    </div>
                </div>
                <label className="form_content_label">
                    Your message:
                    <textarea onChange={e=> handleData(e, 'messageValue')} placeholder="What's on your mind?" className="form_content"/>
                    <p className="form_error">Fill this field!</p>
                </label>
                <div className="form_button_container">
                    <button type="submit" className="form_button">
                        Submit
                        <PlaneIcon className="form_button_icon"/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;