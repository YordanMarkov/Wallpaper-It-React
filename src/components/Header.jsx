import './Header.css';
import React, { useState } from 'react';

const Header = () => {
    const [isFreeVisible, setFreeVisibility] = useState(true);
    const [isNavVisible, setNavVisibility] = useState(false);

    const hideFree = () => {
        setFreeVisibility(false);
    };

    const showNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header>
                {isFreeVisible && (
                    <div id="free" className="free">
                        <a>FREE DELIVERY* AND FREE RETURNS</a>
                        <span className="cross-mark" onClick={hideFree}>&times;</span>
                    </div>
                )}
                <div class="wallpaper-it-logo">
                    <img src="/src/assets/wallpaperit-Logo.png" alt="Wallpaper-it Logo" />
                    <input type="search" class="search-bar" placeholder="Search for products..." />
                    <div class="container">
                        <a>
                            <img src="/src/assets/sign in.png" alt="Sign in" />
                            SignIn
                        </a>
                        <a>
                            <img src="/src/assets/wishlist.png" alt="Wishlist" />
                            Wishlist
                        </a>
                        <a>
                            <img src="/src/assets/bag.png" alt="Bag" />
                            Bag
                        </a>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className="nav">
                            <li><a onMouseOver={showNav} className="nav-item">WALLPAPER<i className="arrow"></i></a></li>
                            <li><a onMouseOver={showNav} className="nav-item">PAINT<i className="arrow"></i></a></li>
                            <li><a onMouseOver={showNav} className="nav-item">BRANDS<i className="arrow"></i></a></li>
                            <li><a className="nav-item">WALL MURALS</a></li>
                            <li><a onMouseOver={showNav} className="nav-item">WALL ART<i className="arrow"></i></a></li>
                            <li><a className="nav-item">SALE</a></li>
                        </ul>
                    </nav>
                    {isNavVisible && (
                        <div id="nav-show" className="nav-show">
                            <ul>
                                <li><a className="nav-item">Animal </a></li>
                                <li><a className="nav-item">Bird </a></li>
                                <li><a className="nav-item">Brick </a></li>
                                <li><a className="nav-item">Damask</a></li>
                                <li><a className="nav-item">Floral </a></li>
                                <li><a className="nav-item">Geometric</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div class="info-messages">
                    <div class="info-message"><a>Free Delivery <span>On All Orders Over £50</span></a></div>
                    <div class="info-message"><a>Customers Rate Us 4.7 / 5</a></div>
                    <div class="info-message"><a>Free & Easy <span>Returns*</span></a></div>
                </div>

                <div class="px-5">
                    <nav class="text-14 my-5" aria-label="breadcrumb">
                        <ol class="flex items-center"><li><a class="undefined underline" aria-current="false" title="Home" href="/">Home</a></li>
                        <span class="flex ml-1.5 mr-1.5">/</span><li><span aria-current="false" class="undefined underline"><a class="ml-1" href="/wallpaper/">Wallpaper</a></span></li>
                        <span class="flex ml-1.5 mr-1.5">/</span><li><span aria-current="false" class="undefined underline"><a class="ml-1" href="/wallpaper/shop-by-design/">Shop By Design</a></span></li>
                        <span class="flex ml-1.5 mr-1.5">/</span><li><span aria-current="false" class="undefined underline"><a class="ml-1" href="/wallpaper/animal/">Animal</a></span></li>
                        </ol>
                    </nav>
                </div>

                <div class="px-2.5 md:px-4">
                <div class="PLPBanner_root__EYqPV">
                    <h1 class="PLPBanner_plp_banner_title__tia5O">Animal Wallpaper</h1>
                    <div class="PLPBanner_plp_banner_body__v1YsM">
                    <div class="">When it comes to adding a dose of exotic chic to your home, you can’t go wrong with our animal print wallpaper. From tiny critters to magnificent beasts, we’ve got an impressive selection of gorgeous animal wallpaper to complement every room in the house – including living rooms, <a href="/wallpaper/dining-room/">dining rooms</a> and even your bedroom! Available in a wide range of colourways, our animal print wallpaper is the perfect way to create a feature wall or used to decorate the entire space to make a bold statement.</div>
                    </div>
                </div>
                </div>
        </header>
    );
};

export default Header;