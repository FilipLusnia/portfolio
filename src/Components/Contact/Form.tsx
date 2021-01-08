import { ReactComponent as PlaneIcon } from '../../Resources/paper-plane.svg';

function Form() {
    return (
        <div className="form_container">
            <form className="form">
                <div className="form_data">
                    <div className="form_data_field"> 
                        <label className="form_data_label">
                            Name:
                            <input placeholder="Name" className="form_data_input"/>
                        </label>
                    </div>
                    <div className="form_data_field"> 
                        <label className="form_data_label">
                            Email:
                            <input placeholder="Email" className="form_data_input"/>
                        </label>
                    </div>
                </div>
                <label className="form_content_label">
                    Your message:
                    <textarea placeholder="What's on your mind?" className="form_content"/>
                </label>
                <div className="form_button_container">
                    <button className="form_button">
                        Submit
                        <PlaneIcon className="form_button_icon"/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;