import './footer.css'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [success,setSucess] = useState(false)
    const [notification,setNot] = useState('')
    const [btnState,setBtnState] = useState('submit')
    const form = useRef();
    
    const clear = () => {
        setTimeout(()=>{
            setNot('')
        },5000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setBtnState('loading...')
        emailjs.sendForm('service_rmhtq3i', 'template_xbmg67d', form.current, '-s6cbcgwAZ_RR88P3')
        .then((result) => {
            console.log(result.text);
            setSucess(!success)
            setNot('email sent successfully')
            setBtnState('submit')
            form.current.reset();
            clear()  

        }, (error) => {
            console.log(error.text);
            setNot(error.text) && setNot('an error occurred')
            setSucess(false)
            setBtnState('submit')
        });
    }

    return (
        <section id='footer'>
            <div id='fWrap'>

                <div id='up'>
                    <div id='upWrap'>
                    <h1 className='fs-800'>Fikayo Adele</h1>

                    <div id='upWrapRight'>
                        <div className='upRightSocialConts'>
                        <h1 className='fs-400'>Navigation</h1>
                        <ul>
                            <li><Link to="/articles">articles</Link></li>
                            <li><a href='#projects'>projects</a></li>
                            <li><a href='#skills'>skills</a></li>
                        </ul>
                        </div>

                        <div className='upRightSocialConts'>
                        <h1 className='fs-400'>socials</h1>
                        <ul>
                            <li><a href='https://www.linkedin.com/in/fikayo-adele/'>linkedin</a></li>
                            <li><a href='https://www.instagram.com/fikayoadele/?hl=en'>instagram</a></li>
                            <li><a href='https://github.com/fikayo360'>github</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div id='middle'>
                    <p> you can send me a mail @ </p>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input placeholder="name"/>
                        <textarea placeholder="message" name="message" />
                        <button>{btnState}</button>
                        <p id='not' className='fs-300'> {notification} </p>
                    </form>
                </div>

                <div id='down'>
                            <h1 className='fs-400'>FIKAYO.</h1>
                            <img src='fikayo.png'/>
                </div>

   

            </div>
        </section>
    )
}

export default Footer