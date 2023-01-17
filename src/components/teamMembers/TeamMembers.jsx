import React from 'react'
import "./teamMembers.css"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


import team_member_1 from "../images/teamMembers/team-1.jpg"
import team_member_2 from "../images/teamMembers/team-2.jpg"
import team_member_3 from "../images/teamMembers/team-3.jpg"
import team_member_4 from "../images/teamMembers/team-4.jpg"

const TeamMembers = () => {
  return (
    <div id='team' className='team-members'>
        <h4 className='team-members-secondary-text'> Team Member </h4>
        <h2 className='team-members-title'> <span> Meet Our </span> Team Member </h2>

        <div className='team-members-container'> 
            <div className='team-member-container-item'>
                <img className='team-member-image' src={team_member_1} alt="" />
                <div className="team-member-description">
                    <div className='team-member-description-top-part'>
                        <p className='team-member-name'> Mollie Ross </p>
                        <p className='team-member-position'> Chef Executive </p>
                    </div>
                    <div className='team-member-description-bottom-part'>
                        <div className="team-member-social-icon">
                            <FaFacebook />
                        </div>
                        <div className="team-member-social-icon">
                            <FaInstagram />
                        </div>
                        <div className="team-member-social-icon">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className='team-member-container-item'>
                <img className='team-member-image' src={team_member_2} alt="" />
                <div className="team-member-description">
                    <div className='team-member-description-top-part'>
                        <p className='team-member-name'>  Kate Glover </p>
                        <p className='team-member-position'> Doctor </p>
                    </div>
                    <div className='team-member-description-bottom-part'>
                        <div className="team-member-social-icon">
                            <FaFacebook />
                        </div>
                        <div className="team-member-social-icon">
                            <FaInstagram />
                        </div>
                        <div className="team-member-social-icon">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className='team-member-container-item'>
                <img  className='team-member-image' src={team_member_3} alt="" />
                <div className="team-member-description">
                    <div className='team-member-description-top-part'>
                        <p className='team-member-name'> Lilly Fry </p>
                        <p className='team-member-position'> Trainer </p>
                    </div>
                    <div className='team-member-description-bottom-part'>
                        <div className="team-member-social-icon">
                            <FaFacebook />
                        </div>
                        <div className="team-member-social-icon">
                            <FaInstagram />
                        </div>
                        <div className="team-member-social-icon">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className='team-member-container-item'>
                <img  className='team-member-image' src={team_member_4} alt="" />
                <div className="team-member-description">
                    <div className='team-member-description-top-part'>
                        <p className='team-member-name'> Jannifer Page </p>
                        <p className='team-member-position'> Founder & CEO </p>
                    </div>
                    <div className='team-member-description-bottom-part'>
                        <div className="team-member-social-icon">
                            <FaFacebook />
                        </div>
                        <div className="team-member-social-icon">
                            <FaInstagram />
                        </div>
                        <div className="team-member-social-icon">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamMembers