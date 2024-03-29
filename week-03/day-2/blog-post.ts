'use strict';

// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate

class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authorName: string, title: string, text: string, publicationDate: string) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

let blogpost1 = new BlogPost('titled by John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let blogpost2 = new BlogPost('titled by Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let blogpost3 = new BlogPost('titled by William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

console.log(blogpost1, blogpost2, blogpost3);

export {};