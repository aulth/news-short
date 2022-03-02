import React, {useContext} from 'react'
import Modecontext from './context/mode/Modecontext';
const Newsitem = (props) => {
    const {mode, darkBg, lightBg} = useContext(Modecontext)
    const {news} = props;
    return (
        <>
        <div className="col-md-4 my-2">
            <div  className="card" style={{ width: "100%" }}>
                <img style={{height:'176px'}} src={news.imageUrl} className="card-img-top" alt="..." />
                <div style={mode==='light'?{background:lightBg}:{background:darkBg}} className="card-body">
                    <h5 className={`card-title  ${mode==='light'?'text-dark':'text-light'}`}>{news.title}  </h5>
                    <blockquote className={`blockquote mb-0 ${mode==='light'?'text-dark':'text-light'}`}>
                        <p className={`${mode==='light'?'text-dark':'text-light'}`}>{news.content.slice(0,80)+'...'} <a href={news.readMoreUrl} target="_blank" rel="noreferrer" className="badge bg-warning text-dark">Read More</a></p>
                        <footer className={`blockquote-footer  ${mode==='light'?'text-dark':'text-light'}`}>{news.author}<br/><cite title="Source Title">{news.date + ' ' + news.time}</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        </>
    )
}

export default Newsitem