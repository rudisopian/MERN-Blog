import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
            src="https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
            alt=""
            className="writeImg"
            />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Tell your story..."
                    type="text"
                    className="writeInput writeText">

                    </textarea>
                </div>
                <div className="writeSubmit">Publish</div>
            </form>
        </div>
    )
}
