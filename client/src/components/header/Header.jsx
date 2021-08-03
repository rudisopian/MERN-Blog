import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Personal Blog</span>
                <span className="headerTitleLg">Rudi Sopian</span>
            </div>
            <img 
            className="headerImg" 
            src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/09/10/57315.jpg"
            alt="" />
        </div>
    )
}
