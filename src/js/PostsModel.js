class PostsModel{
    constructor(posts){

        this.posts = posts;
    }

    getPosts(){
        return this.posts;
    }

    getTitleAt(index){
        return this.posts[index].title;
    }

    getDateAt(index){ 
        return this.posts[index].date; //should be dayMonthYear for now
    }
    
    getContentAt(index){
        return this.posts[index].content; //should be ops.etc
    } 
    
    pushPost(post){
        this.posts.push(post);
    }    
}

export default PostsModel;