import React from 'react'
import './Details.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Details extends React.Component {
    state = {
        repodata: null,
        value: 1
    }
    componentDidUpdate() {
        fetch(this.props.dataUrl).then((response) => response.json()).then((data) => {
            // console.log(data)
            this.setState({ repodata: data })
        })
    }
    componentDidMount() {
        fetch(this.props.dataUrl).then((response) => response.json()).then((data) => {
            console.log(data)
            this.setState({ repodata: data })
        })
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
    };

    render() {
        return (
            <div>
                <Paper square>
                    <Tabs
                        value={this.state.value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Overview" />
                        <Tab label="Repositories" />
                        <Tab label="Disabled" disabled />
                        <Tab label="Active" disabled />
                    </Tabs>
                </Paper>

                {(this.state.repodata && this.state.value === 1) && this.state.repodata.map((data) => (
                    <div className="repo-detail">
                        <div className="repo-name">{data.name}</div>
                        <div className="repo-description">{data.description}</div>
                        <div className="other-details">
                            {data.stargazers_count > 0 && <div className="other-details-item" >{data.stargazers_count}</div>}
                            {data.forks_count > 0 && <div className="other-details-item" >{data.forks_count}</div>}
                            {data.language && <div className="other-details-item" >{data.language}</div>}
                            {data.license && <div className="other-details-item" >{data.license.name}</div>}
                            <div className="other-details-item" >{data.updated_at.substring(0, 10)}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Details;