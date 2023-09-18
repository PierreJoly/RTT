import {Component} from "react";
import progressStyle from "../../styles/progressBar.css"

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProgress : 0
        }
    }

    componentDidMount() {
        const self = this;
        let progressElement = document.querySelector(".progress");
        let progressBarElement = document.querySelector(".progress-bar");
        progressElement.style.width = "0px";

        setInterval(() => {
            let currentProgress = self.getProgress();
            progressElement.style.width = progressBarElement.clientWidth*(currentProgress/100)+"px";

            self.setState({currentProgress: currentProgress});
        }, 2000);

    }

    getProgress() {
        return this.state.currentProgress+10;
    }

    render() {
        return(
            <>
                <p>{this.state.currentProgress}</p>
                <div className="progress-bar"><div className="progress"></div></div>
            </>
        )
    }
}

export default ProgressBar;