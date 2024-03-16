import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <div> <div class="footer-basic">
        <footer>
            <div class="social"><a href="/"><i class="icon "><InstagramIcon/></i></a><a href={"https://www.google.com"} target="'_blank'"><i class="icon " ><GoogleIcon/></i></a><a href="/"><i class="icon "><XIcon/></i></a><a href="/"><i class="icon"><FacebookIcon/></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="/">Services</a></li>
                <li class="list-inline-item"><a href="/">About</a></li>
                <li class="list-inline-item"><a href="/">Terms</a></li>
                <li class="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Mobile Care © 2024</p>
        </footer>
    </div></div>
  )
}

export default Footer