import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from './Blog.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import posts from '../data/posts/posts.json';
import PostsModel from '../js/PostsModel.js';
import '../css/Main.scss';
import hamburgerIcon from '../assets/hamburger.png';
import Post from './Post.jsx'; 
import { convertOpsToHtml } from '../js/contentAndUrlConversions.js';

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

                    <Route
                        path="/post/:id"
                        render={(routeProps) => {
                            const intParamId = parseInt(routeProps.match.params.id);
                            // const postArrayWithOneElement = this.state.postsModel
                            //     .getPostById(intParamId);
                            // const post = postArrayWithOneElement[0];
                            const post = this.state.postsModel
                                 .getPostById(intParamId);

                            return (post !== null) && (typeof post !== "undefined") ? (
                                <Post
                                    title={post.title}
                                    date={post.dayMonthYear} //replace with date
                                    content={convertOpsToHtml(post.ops)}
                                    key={post.id}                                        
                                />
                            )

                            :

                            <div>something went wrong</div>
                        }}
                    /> 

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


