import React from 'react'
import './Footer.css'

function Footer() {
  return (
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
                    <item>Home</item>
                    <item>About</item>
                    <item>Team</item>
                    <item>Contribute</item>
                    <item>Contact</item>
                </li>

                <li>
                    <header>Mythologies</header>
                    <item>Aztec Mythology</item>
                    <item>Celtic Mythology</item>
                    <item>Chinese Mythology</item>
                    <item>Egyptian Mythology</item>
                    <item>Greek Mythology</item>
                    <item>Hindu Mythology</item>
                    <item>Japanese Mythology</item>
                    <item>Norse Mythology</item>
                    <item>Roman Mythology</item>
                </li>

                <li>
                    <header>Pantheons</header>
                    <item>Aztec Gods</item>
                    <item>Celtic Gods</item>
                    <item>Chinese Gods</item>
                    <item>Egyptian Gods</item>
                    <item>Greek Gods</item>
                    <item>Hindu Gods</item>
                    <item>Japanese Gods</item>
                    <item>Norse Gods</item>
                    <item>Roman Gods</item>
                </li>
                
                

                
            </ul>
        </section>
        </div>
        <p id='lastFooterElement' style={{fontSize: '13px'}}>2024 Vladislav Wanli. All Rights Reserved. Privacy Policy.</p>
    </footer>
  )
}

export default Footer