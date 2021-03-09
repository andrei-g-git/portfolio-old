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
        return this.posts[index].dayMonthYear; //should be dayMonthYear for now
    }
    
    getContentAt(index){
        return this.posts[index].content; //should be ops.etc
    } 
    
    getPostById(id){ //CAREFUL THIS RETURNS A !!NEW!! ARRAY
        const postArrayWithOneElement = this.posts.filter(post => post.id === id); 
        return postArrayWithOneElement[0];
    }

    pushPost(post){
        this.posts.push(post);
    }   
    
}

export default PostsModel;