import './Footer.css';

const Footer = () => {
    return (
        <footer className="background-footer">
            <div className="footer-item gray-line position-text">
                <a>Shopping with Us</a>
                <a> {'>'} </a>
            </div>
            <br />
            <div className="footer-item gray-line position-text">
                <a>Wallpaper Guides</a>
                <a> {'>'} </a>
            </div>
            <br />
            <div className="footer-item gray-line position-text">
                <a>Visit Us</a>
                <a> {'>'} </a>
            </div>
            <br />
            <div className="footer-item gray-line position-text">
                <a>How Can We Help?</a>
                <a> {'>'} </a>
            </div>
            <br />
            <div className="newsletter">
                <h3 class="center-text">Sign up to Our Newsletter</h3>
                <input type="text" placeholder="Enter the email here" className="rounded center-text full-width email" />
                <p class="small-text center-text">By signing up you are consenting to receive the newsletter and other promotional materials from Wallpaper It.</p>
                <button class="rounded green-button center-text full-width">SUBSCRIBE</button>
            </div>
            <br />
            <div className="gray-line"></div>
            <br />

            <div class="icons">
                <a target="_blank" href="https://www.facebook.com/WallpaperITofficial/">
                    <svg width="35" height="40" class="mr-5 mt-[2px]">
                        <g transform="translate(-38 -6082)">
                            <circle data-name="Ellipse 22" cx="17.5" cy="17.5" r="17.5" transform="translate(38 6082)" fill="white"></circle>
                            <path d="m61.005 6101.375.61-3.981H57.8v-2.584a1.99 1.99 0 0 1 2.245-2.151h1.742v-3.39A21.166 21.166 0 0 0 58.7 6089c-3.146 0-5.2 1.907-5.2 5.359v3.035H50v3.981h3.5V6111h4.3v-9.625z"></path>
                        </g>
                    </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/wallpaper__it/">
                    <svg width="35" height="40" class="mr-5 mt-[2px]">
                        <g transform="translate(-102 -6082)">
                            <circle data-name="Ellipse 23" cx="17.5" cy="17.5" r="17.5" transform="translate(102 6082)" fill="white"></circle>
                            <path d="M125.825 6092.928a1.29 1.29 0 1 0 1.29 1.29 1.29 1.29 0 0 0-1.29-1.29zM120.091 6094.582a5.418 5.418 0 1 0 5.418 5.418 5.418 5.418 0 0 0-5.418-5.418zm0 8.888a3.471 3.471 0 1 1 3.47-3.47 3.471 3.471 0 0 1-3.471 3.471z"></path><path d="M124.392 6111h-8.784a6.616 6.616 0 0 1-6.608-6.608v-8.784a6.616 6.616 0 0 1 6.608-6.608h8.784a6.616 6.616 0 0 1 6.608 6.608v8.784a6.616 6.616 0 0 1-6.608 6.608zm-8.784-19.931a4.544 4.544 0 0 0-4.537 4.537v8.786a4.544 4.544 0 0 0 4.537 4.537h8.784a4.544 4.544 0 0 0 4.537-4.537v-8.784a4.544 4.544 0 0 0-4.537-4.537z"></path>
                        </g>
                    </svg>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCdksCLJ--zW3HReXhvh272w/?guided_help_flow=5">
                    <svg width="35" height="40" class="mr-5 mt-[2px]"><g transform="translate(-167 -6072)">
                    <circle data-name="Ellipse 24" cx="17.5" cy="17.5" r="17.5" transform="translate(167 6072)" fill="white"></circle>
                    <path d="M196 6087.016a5 5 0 0 0-1.478-3.547 5.063 5.063 0 0 0-3.57-1.469h-12.905a5.031 5.031 0 0 0-5.047 5.016v5.969a5.031 5.031 0 0 0 5.047 5.015h12.906a5.031 5.031 0 0 0 5.047-5.016zm-7.59 3.428-5.785 2.846c-.227.122-1-.041-1-.3v-5.843c0-.26.777-.423 1-.294l5.539 2.995c.229.139.473.473.237.6z"></path></g></svg></a><a target="_blank" href="https://www.pinterest.co.uk/wallpaper__it/">
                    <svg width="35" height="40" class="mr-5 mt-[2px]">
                        <g transform="translate(-231 -6072)">
                            <circle data-name="Ellipse 25" cx="17.5" cy="17.5" r="17.5" transform="translate(231 6072)" fill="white"></circle>
                            <path d="M249.3 6079c-6.071 0-9.3 3.864-9.3 8.077 0 1.954 1.1 4.391 2.859 5.163.267.12.413.069.472-.177.053-.187.284-1.088.4-1.513a.387.387 0 0 0-.094-.382 4.988 4.988 0 0 1-1.048-3.04c0-2.939 2.353-5.792 6.356-5.792 3.462 0 5.884 2.233 5.884 5.427 0 3.61-1.923 6.107-4.423 6.107a1.971 1.971 0 0 1-2.087-2.412c.395-1.588 1.169-3.3 1.169-4.441a1.711 1.711 0 0 0-1.782-1.877c-1.406 0-2.551 1.385-2.551 3.244a4.6 4.6 0 0 0 .421 1.979s-1.393 5.588-1.652 6.632a14.738 14.738 0 0 0 .1 4.875.146.146 0 0 0 .266.067 17.288 17.288 0 0 0 2.293-4.289c.172-.628.877-3.176.877-3.176a3.837 3.837 0 0 0 3.231 1.528c4.243 0 7.309-3.7 7.309-8.3-.015-4.4-3.812-7.7-8.7-7.7z"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <p className="rights">© 2023 WallpaperIt</p>
        </footer>
    );
};

export default Footer;
