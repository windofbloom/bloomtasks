import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import "./Credits.css";

function Credits() {
    return(
        <div className="credits">           
            <div className="creditsUser">
                <span className='creditUser__portrait'><FontAwesomeIcon icon={faMoon} size="lg" /></span>
            </div>
            <div className='creditBody'>
                <div className='creditBody__name'>
                <p>Hello, Guest~</p>
                </div>
                <div className='creditBody__content'>
                    <p>Have a good time around.
                    </p>
                </div>
                <div className='creditBody__socials'>
                    <a href='https://www.behance.net/windofbloom' className='socials_links'><FontAwesomeIcon icon={faBehance} /></a>
                    <a href='https://www.linkedin.com/in/karla-cristina-rivas/' className='socials_links'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href='https://github.com/windofbloom' className='socials_links'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export { Credits };