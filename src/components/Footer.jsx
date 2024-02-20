import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id='footerWrapper'>
    <footer>
        <div>
        <section className="section-1">
            <h1 id='h1' style={{paddingLeft: '10px'}}>Mythiverse</h1>
            <p>We’re building the world’s most authoritative, online mythology resource, with engaging, accessible content that is both educational and compelling to read. After all, mythology is storytelling at its finest. Learn more about our mission.</p>
            
            
            
        </section>

        <section className="section-2">
            <ul>
                <li>
                    <header>Company</header>
                    <item><Link>Home</Link></item>
                    <item><Link>About</Link></item>
                    <item><Link>Team</Link></item>
                    <item><Link>Contribute</Link></item>
                    <item><Link>Contact</Link></item>
                </li>

                <li>
                    <header>Mythologies</header>
                    <Link to="/Aztec-mythology"><item>Aztec Mythology</item></Link>
                    <Link to="/Celtic-mythology"><item>Celtic Mythology</item></Link>
                    <Link to="/Chinese-mythology"><item>Chinese Mythology</item></Link>
                    <Link to="/Egyptian-mythology"><item>Egyptian Mythology</item></Link>
                    <Link to="/Greek-mythology"><item>Greek Mythology</item></Link>
                    <Link to="/Hindu-mythology"><item>Hindu Mythology</item></Link>
                    <Link to="/Japanese-mythology"><item>Japanese Mythology</item></Link>
                    <Link to="/Norse-mythology"><item>Norse Mythology</item></Link>
                    
                </li>

                <li>
                    <header>Pantheons</header>
                    <Link><item>Aztec Gods</item></Link>
                    <Link><item>Celtic Gods</item></Link>
                    <Link to='/chineseGodsPage'><item>Chinese Gods</item></Link>
                    <Link><item>Egyptian Gods</item></Link>
                    <Link to='/greekOlympians'><item>Greek Olympians</item></Link>
                    <Link to='/hinduGodsPage'><item>Hindu Gods</item></Link>
                    <Link><item>Japanese Gods</item></Link>
                    <Link to='/norseGodsPage'><item>Norse Gods</item></Link>
                    
                </li>
                
                

                
            </ul>
        </section>
        </div>
        <p id='lastFooterElement' style={{fontSize: '13px'}}>2024 Vladislav Wanli. All Rights Reserved. Privacy Policy.</p>
    </footer>
    </div>
  )
}

export default Footer