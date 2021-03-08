import PostModel from '../js/PostsModel.js';

describe("PostModel", () =>{

    const posts123 = new Posts123(); //cannot access Posts123 before initialization, same with a simple array
    const posts = posts123.posts;
    let postModel = new PostModel(posts);

    it("gets the right post by id", () => {
        const post = postModel.getPostById(123);
        const title = post.title;
        expect(title).toBe("some titleeeeeeeeeeeeeeeeeee");
    });
});


export default class Posts123 {
    constructor(){
        this.posts = [
            {
                id: 123,
                title: "some title",
                dayMonthYear: "1/2/1234",
                ops: [
                    {
                        insert: "Lore Ipsum"
                    }
                ]
            },
            {
                id: 124,
                title: "poop",
                dayMonthYear: "0/0/0000",
                ops: [
                    {
                        insert: "lots of poop"
                    }
                ]
            }    
        ]
    }
}