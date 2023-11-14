import "./Disclaimer.css";
import {disclaimer} from "../../../constants/constants.js";

function Disclaimer() {
    return (
        <div className="disclaimer">
            {disclaimer.map((item) => (
                <div className="disclaimer__content">
                    <h5 key={item.id}>{item.title}</h5>
                    <p>*{item.description}</p>
                    {item.extraInfo && <p>*{item.extraInfo}</p>}
                    {item.extraInfo2 && <p>*{item.extraInfo2}</p>}
                </div>

            ))}
        </div>
    );
}

export default Disclaimer;
