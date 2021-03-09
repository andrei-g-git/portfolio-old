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

import { createStore, combineReducers, compose } from 'redux';
import { postsReducer } from '../js/postsReducer.js';
import { uiReducer } from '../js/uiReducer.js';

import * as actions from '../js/actions.js';

import { connect } from 'react-redux';

class Main extends Component {

    constructor(){
        super();
     
        //should clean this up after I make sure it works
        this.reducers = combineReducers({
            postsReducer: postsReducer,
            uiReducer: uiReducer
        });

        this.store = createStore(
            this.reducers,
            compose(typeof window === "object" &&
                typeof window.devToolsExtension !== "undefined" ?
                window.devToolsExtension() :
                f => f
            )
        );

        this.unsubscribe()
        //

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
                            this.store.getState().uiReducer.navSliderOpen
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


                            // const post = this.state.postsModel
                            //      .getPostById(intParamId);
                            const posts = this.store.getState().postsReducer.posts; //demeter
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

    handleHamburgerMenu = () => {
/*         this.setState({
            navSliderOpen: ! this.state.navSliderOpen
        }) */
        this.store.dispatch(actions.navSliderOpened());
    }

    closeNavSlider = () => { //maybe I could just use handleHamburgerMenu, can't think of a situation where clicking a link should open the slider
        // this.setState({
        //     navSliderOpen: false
        // })
        this.store.dispatch(actions.navSliderClosed());
    } 

    
    unsubscribe = () => {
        this.store.subscribe(
            //this.handleHamburgerMenu, //these create an infinite loop because the thing that dispatches change actions is the same thing that's listening for change
            //this.closeNavSlider         //a listener should be the thing that awaits for state change to update ui etc
            () => {
                console.log("blah") 

                this.forceUpdate(); //fuck react and fuck your face
            }           
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         navSliderOpen: state.navSliderOpen //I actually don't need props here what the fuck am I even doing
//                         //this isn't even the correct store path, unless it's acutally referring to the component state         
//     }
// }

export default /* connect()( */Main/* ) */;


