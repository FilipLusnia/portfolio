import { ReactComponent as PlaneIcon } from '../../../Resources/paper-plane.svg';
import { ReactComponent as DoneIcon } from '../../../Resources/checkmark.svg';

function Button({messageState, handleSubmit}: any) {
  return (
    <button 
        onClick={(messageState !== ('loading' && 'sent')) ? e=> handleSubmit(e) : e=> e.preventDefault()} 
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
                        <span className="button_sent_info">
                            Sent
                            <DoneIcon className="form_button_icon"/>
                        </span>
                    :
                        <>
                            Submit
                            <PlaneIcon className="form_button_icon"/>
                        </>
        }
    </button>
  );
}

export default Button;