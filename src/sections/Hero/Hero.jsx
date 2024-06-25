import styles from './HeroStyles.module.css';
import heroImg from '../../assets/prf.png';
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg';
import instaLight from '../../assets/insta-light.png';
import instaDark from '../../assets/insta-dark.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import {useTheme} from '../../common/ThemeContext';

function Hero() {

    const {theme,toggleTheme}=useTheme();

    const themeIcon=theme==='light'?sun:moon;
    const instaIcon=theme==='light'?instaLight:instaDark;
    const githubIcon=theme==='light'?githubLight:githubDark;
    const linkedinIcon=theme==='light'?linkedinLight:linkedinDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero}
            src={heroImg} 
            alt="Profile Picture of Meenal Patidar" />
            <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Meenal
                <br/>
                Patidar
            </h1>
            <h2>
                Software Developer
            </h2>
            <span>
                <a href="https://www.instagram.com/meenal_patidar?igsh=c3BqYzgxcjh5N2xz" target="_blank">
                    <img src={instaIcon} alt="Instagram icon"/>
                </a>
                <a href="https://www.linkedin.com/in/meenal-patidar-649209200/" target="_blank">
                    <img src={githubIcon} alt="LinkedIn icon"/>
                </a>
                <a href="https://github.com/MeenalPatidar" target="_blank">
                    <img src={linkedinIcon} alt="Github icon"/>
                </a>
            </span>
            <p className={styles.description}>
                With a passion for developing modern React web apps and Gen-AI models.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero