import React from 'react';
import './App.css';
import Profile from './Profile';
import Details from './Details';


class App extends React.Component {

    state = {
        apiResp: null,
        userinput: '',
        apiFailed: false
    }
    componentDidMount() {

    }

    handler = (e) => {
        console.log('handler ---', e.target.value)
        this.setState({ userinput: e.target.value })
    }

    handleClick = () => {
        fetch(`https://api.github.com/users/${this.state.userinput}`).then((response) => response.json()).then((data) => {
            console.log(data)
            if (data.message === "Not Found") {
                this.setState({ apiFailed: true })
                this.setState({ apiResp: null })
                this.setState({ userinput: '' })
            } else {
                this.setState({ apiFailed: false })
                this.setState({ apiResp: data })
                this.setState({ userinput: '' })
            }
        })
    }

    render() {
        console.log('inside of render ---- > ', this.state.apiResp)
        return (
            <div>
                <div className="header">
                    <ul>
                        <li className="search-area">
                            <label className="enter-text"> Enter git hub User name </label>
                            <input
                                value={this.state.userinput}
                                onChange={this.handler}
                                placeholder="Search or jump to ..."
                                autoFocus >
                            </input>
                            <button className="go-btn" onClick={this.handleClick}>Go</button>
                        </li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>

                {this.state.apiResp && <div className="app-container">
                    <Profile data={this.state.apiResp} />
                    <Details dataUrl={this.state.apiResp.repos_url} />
                </div>}
                {this.state.apiFailed && <div className="error-msg"> Given username does not exists. Please try again!</div>}
            </div>
        )
    }
}

export default App