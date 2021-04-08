import React, { Component } from 'react';
import home from "../styles/Home.module.css"



interface State {
    userEmail: string
}
interface Props {

}


class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userEmail: ''
        };

    } 
   

    render() {
        return (
            <React.Fragment>
                <div className={home.bg_img}><h1>STAY WARM AND CHIC</h1></div>
                <h3 className={home.home}>INFLUENCED BY VARIOUS KNOWN FORMS OF ART, WE CONVEY THE ATMOSPHERE AND PHILOSOPHY OF OUR BRAND THROUGH THE<br/>
                LOOKS WE CREATE.<br/></h3><br/><br/><br/><br/><br/><br/>
                <a className={home.photo}>

                <img src="https://lichi.com/statics/images/pages/inspire/6.jpg?1" alt="image1"/>
                <img src="https://lichi.com/statics/images/pages/inspire/7.jpg?1" alt="image1"/>
                <img src="https://lichi.com/statics/images/pages/inspire/8.jpg?1" alt="image1"/>
                <h3 className={home.home}>FASHION IS MEANS OF COMMUNICATION AND SYMBOLIC REPRESENTATION IN THE SOCIETY<br/></h3><br/><br/><br/><br/><br/><br/>
                <img src="https://lichi.com/statics/images/pages/inspire/9.jpg?1" alt="image1"/>
                <img src="https://lichi.com/statics/images/pages/inspire/10.jpg?1" alt="image1"/>
                <img src="https://lichi.com/statics/images/pages/inspire/11.jpg?1" alt="image1"/>
                <h3 className={home.home}>ONE IS NEVER OVER-DRESSED OR UNDER-DRESSED WITH A LITTLE BLACK DRESS.<br/></h3><br/><br/><br/><br/><br/><br/>
                <img src="https://lichi.com/statics/images/pages/inspire/12.jpg?1" alt="image1"/>
                <img src="https://lichi.com/statics/images/pages/inspire/13.jpg?1" alt="image1"/>
                <img src="https://lichi.com/statics/images/pages/inspire/14.jpg?1" alt="image1"/>

                <div className={home.glow_wrap}>
                <i className={home.glow}></i>
                </div>
                </a>
                <a href="#" className="photo">


                <div className={home.glow_wrap}>
                <i className={home.glow}></i>
                </div>
                </a>
                <h5 className={home.home}>Have questions? Call us!</h5>
                <h2 className={home.home}>+44 1865 509555</h2>
                <div id={home.contacts}>
                    <ul>
                        <li><a href="https://lichi.com/links/redir-1/?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Instagram</a></li>
                        <li><a href="https://t.me/lichi_brand?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Telegram</a></li>
                        <li><a href="https://vk.com/lichi_brand?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Vk</a></li>
                        <li><a href="https://www.pinterest.com/lichi_brand/?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Pinterest</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;