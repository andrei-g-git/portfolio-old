import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from './Blog.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import '../css/Main.scss';
import hamburgerIcon from '../assets/hamburger.png';
import Post from './Post.jsx'; 
import { convertOpsToHtml } from '../js/contentAndUrlConversions.js';
import * as actions from '../js/actions.js';
import { connect } from 'react-redux';

class Main extends Component { 
    constructor(){ //delete after integrating touch coords with redux
        super();

        this.state={
            touchStartX: 0,
            touchStartY:0,
            touchMoveX: 0,
            touchMoveY: 0
        }
    }
    render() {

        // console.log(this.state.touchStartX + "   " + this.state.touchStartY);
        // console.log(this.state.touchMoveX + "   " + this.state.touchMoveY);

        return (
            <div
                id="main"
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                <nav
                    id="nav-bar"
                >   
                    <ul 
                        id={
                                this.props.navSliderOpen
                            ?
                                "nav-links-active"
                            :
                                "nav-links"
                        }
                    >
                        <Link
                            className="nav-link"
                            to="/"
                            onClick={() => this.props.closeNavSlider()}
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
                            onClick={() => this.props.closeNavSlider()}
                        >
                            Blog
                        </Link>

                        <Link
                            className="nav-link"
                            to="/about"
                            onClick={() => this.props.closeNavSlider()}
                        >
                            About
                        </Link>   
                    </ul>
                    <img
                        src={hamburgerIcon}
                        alt="n/a"
                        id="hamburger-toggle"
                        onClick={() => this.props.handleHamburgerMenu()}
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
                            posts={this.props.posts}
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
                            const posts = this.props.posts;
                            const postArrayWithOneElement = posts
                                .filter(post => post.id === intParamId);

                            const post = postArrayWithOneElement[0];

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




    //these should not be stateful and should use redux
    handleTouchStart = (event) => {
        this.setState({
            touchStartX: event.touches[0].clientX,
            touchStartY: event.touches[0].clientY,
        });
    }
    handleTouchMove = (event) => {
        this.setState({
            touchMoveX: event.touches[0].clientX,
            touchMoveY: event.touches[0].clientY,
        });
    }
    handleTouchEnd = (event) => {
        const startX = this.state.touchStartX;
        const startY = this.state.touchStartY;
        const moveX = this.state.touchMoveX;
        const moveY = this.state.touchMoveY;

        if((startX < 90)
            || (startX > (window.screen.width - 90))
        ){
            if((startX + 100) < moveX){
                console.log("right");
            } else if((startX - 100) > moveX){
                console.log("left");
                this.props.handleHamburgerMenu()
            }
        }
    }



}

const mapStateToProps = (state) => {
    return {
        navSliderOpen: state.uiReducer.navSliderOpen,
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleHamburgerMenu: () => {
            dispatch(actions.navSliderOpened());
        },
        closeNavSlider: () => {
            dispatch(actions.navSliderClosed());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


