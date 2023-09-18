import {Component} from "react";
import style from "../../styles/navBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.navElement = [
            "Accueil"
        ]
    }

    isSelected(element) {
        return JSON.stringify(element === this.props.currentPage);
    }

    renderNav() {
        let elements = [];
        for(let element of this.navElement) {
            elements.push(<a className="link" is-selected={this.isSelected(element)}>{element}</a>);
        }
        return elements;
    }

    render() {
        return (
            <section key="navBar" id="navBar">
                {this.renderNav()}
            </section>
        )
    }
}

export default NavBar;