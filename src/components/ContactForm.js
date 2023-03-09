import "./ContactForm-styles.css"

function ContactForm(){
    return(
        <div className="form-container">
           <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Submit</button>
           </form>
        </div>
    )
}

export default  ContactForm;