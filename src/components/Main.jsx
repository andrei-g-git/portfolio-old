import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from './Blog.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import posts from '../data/posts/posts.json';
import PostsModel from '../js/PostsModel.js';
import '../css/Main.scss';
import hamburgerIcon from '../assets/hamburger.png';

class Main extends Component {
    constructor(){
        super();
        
        this.state = {
            postsModel: new PostsModel(posts),
            navSliderOpen: false
        }
    }
    render() {
        return (
            <div
                id="main"
            >
                <nav
                    id="nav-bar"
                >   
                    <ul 
                        //id="nav-links"
                        id={
                            this.state.navSliderOpen 
                            ?
                                "nav-links-active"
                            :
                                "nav-links"
                        }
                    >
                        <Link
                            className="nav-link"
                            to="/"
                            onClick={this.closeNavSlider}
                        >
                            Home
                        </Link>

                        <Link
                            className="nav-link"
                            to="/portfolio"
                        >
                            Portfolio
                        </Link>

                        <Link
                            className="nav-link"
                            to="/blog"
                            onClick={this.closeNavSlider}
                        >
                            Blog
                        </Link>

                        <Link
                            className="nav-link"
                            to="/about"
                            onClick={this.closeNavSlider}
                        >
                            About
                        </Link>   
                    </ul>
                    <img
                        src={hamburgerIcon}
                        alt="n/a"
                        id="hamburger-toggle"
                        onClick={this.handleHamburgerMenu}
                    />                 
                </nav>

                <Switch>
                    <Route
                        exact path="/"
                    >
                        <Home/>
                    </Route>

                    <Route
                        path="/blog"
                    >
                        <Blog
                            posts={this.state.postsModel}
                        />
                    </Route>

                    <Route
                        path="/about"
                    >
                        <About/>
                    </Route>                      
                </Switch>
                
            </div>
        );
    }

    handleHamburgerMenu = () => {
        this.setState({
            navSliderOpen: ! this.state.navSliderOpen
        })
    }

    closeNavSlider = () => { //maybe I could just use handleHamburgerMenu, can't think of a situation where clicking a link should open the slider
        this.setState({
            navSliderOpen: false
        })
    }
}

export default Main;