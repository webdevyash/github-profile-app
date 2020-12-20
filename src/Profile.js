import React from 'react'
import './Header.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container">

                <aside>
                    <img className="avatar-img" src={this.props.data.avatar_url}></img>
                    <div className="vcard-container">
                        <div className="fullname">{this.props.data.name}</div>
                        <div className="login">{this.props.data.login}</div>
                    </div>
                    <div className="bio">{this.props.data.bio}</div>
                    <button className="edit-btn"> Follow</button>
                    <div>
                        {this.props.data.followers > 0 && <div className="followers">{this.props.data.followers} followers </div>}
                        {this.props.data.following > 0 && <div className="following">{this.props.data.following} following </div>}
                    </div>
                    <div className="start npm company">{this.props.data.company}</div>
                    <div className="info location">{this.props.data.location}</div>
                    <div className="info email">{this.props.data.email}</div>
                    <div className="info blog">{this.props.data.blog}</div>
                </aside>

            </div>
        )
    }
}

export default Profile;