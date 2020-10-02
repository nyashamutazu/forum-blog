import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  article: {
    slug: "on-location-ma-che-siete-venuti-a-fa-in-rome-pb0rqg",
    imageUrl:
      "https://nm-upload-example.s3.us-east-2.amazonaws.com/on-location-ma-che-siete-venuti-a-fa-in-rome-mys936.jpeg",
    title: "ON LOCATION: MA CHE SIETE VENUTI A FÀ IN ROME",
    description:
      "There’s nothing fancy about the place. You enter into a tiny taproom with counter seating on one side and a small bar on the other. Together, the room seats 10 patrons. Behind the bar sits a row of a dozen copper-colored beer towers, each sporting a hand-written card with information about the beer being dispensed. A modest selection of bottled beers is on display in a refrigerated case mounted on the wall. During my visits, most of the bottles featured wild ales from Belgium and the United States. The ever-changing draft list is posted on a chalkboard on the opposite wall.",
    body: `<p>Beyond the bar area is a second compact space with table seating that might accommodate 30 people, assuming they’re not averse to close encounters of the beer kind. Televisions in each room broadcast soccer matches without sound while rock music plays in the background. The diminutive size of the two rooms is conducive to befriending fellow beer-lovers from around the world.</p> <p>The locals seem to prefer drinking on the street in front of the pub, which is quite acceptable in Rome. There’s a downstairs room with a different vibe. Upholstered chairs and cubby-like spaces evoke a more lounge-like feel, suitable for quiet conversation. While the room was seldom used during my visits, it’s here that Lazio fans gather on game days to cheer on their beloved team, according to Macchè’s founder, Manuele Colonna, a Lazio supporter and passionate beer fan who opened the pub in 2001. Colonna is a well-known figure within Italy’s tight-knit community of independent beer-makers. In addition to showcasing many small Italian breweries at Macchè, Colonna travels throughout Europe in search of beers to serve at the pub. When I ask Colonna how he selects beers, he barely mentions styles. Rather, he stresses the importance of a brewery’s philosophy and of a brewer’s heart and soul. “I like to recognize the brewer’s personality in the beer that I drink,” he explains. The draft menu lists 15 beers and a cider. Italian breweries are well-represented. Beers from small German and Belgian breweries appear frequently. Styles cover a broad spectrum of German, Belgian, British and American ales and lagers. It’s likely that most patrons, even seasoned beer travelers, will be unfamiliar with many of the featured breweries. One exception is the well-known Cantillon Brewery, whose beers are often available on draft. Colonna has a close relationship with the owners of the revered Belgian Lambic producer. Servers at Macchè are friendly to a fault and knowledgeable about the beers they serve. “We like to tell our customers a story behind the beer they are drinking,” Colonna tells me over a glass of kellerbier procured from an obscure Franconian brewery. “That’s really important for us.”`,
    tagList: ["alchol", "beer", "drinks"],
    createdAt: "22/08/2020",
    updatedAt: "24/08/2020",
    liked: true,
    likeCount: 22,
    category: "Design",
    author: {
      username: "abby",
      email: "abby@gmail.com",
      bio: "scientest",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
      articleCount: 1,
      followers: 1,
      followings: 0,
      social: {
        facebook: 'www.facebook.com',
        linkedIn: 'www.linkedIn.com',
        twitter: 'www.twitter.com',
        instagram: 'www.instagram.com',
      }
    }
  },
  comments: [
    {
      id: 1,
      body: "Amazing article thanks",
      createAt: "24/08/2020",
      author: {
        username: "abby",
        email: "abby@gmail.com",
        bio: "scientest",
        externalLink: null,
        profileImage:
          "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
        articleCount: 1,
        followers: 1,
        followings: 0
      }
    },
    {
      id: 2,
      body: "This is really really interesting",
      createAt: "25/08/2020",
      author: {
        username: "puala",
        email: "puala@gmail.com",
        bio: "profressional blogger",
        externalLink: null,
        profileImage:
          "https://images.generated.photos/6XgjaYnFgxTmqpEuuAiqhwF5ndEoUpe5FdJsNr9bh5A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzOTcxODcuanBn.jpg",
        articleCount: 0,
        followers: 2,
        followings: 10
      }
    },
    {
      id: 3,
      body: "Have you thought about getting extra likes",
      createAt: "26/08/2020",
      author: {
        username: "Sue",
        email: "sue@gmail.com",
        bio: "Lover of art",
        externalLink: null,
        profileImage:
          "https://images.generated.photos/5zZbXE395pIcEgLHZy2e48gXEPbVvKu6FBDUQ4GuAvc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNTk5OTAuanBn.jpg",
        articleCount: 3,
        followers: 12,
        followings: 3
      }
    }
  ],
  commentErrors: [""]
};

const articlePageLoaded = (state, action) => {
  const updatedState = {
    article: action.payload[0].article,
    comments: action.payload[1].comments
  };
  return updatedObject(state, updatedState);
};

const articlePageUnloaded = (state, action) => {
  return {};
};

const addComment = (state, action) => {
  const updatedState = {
    commentErrors: action.error ? action.payload.errors : null,
    comments: action.error
      ? null
      : (state.comments || []).concat([action.payload.comment])
  };
  return updatedObject(state, updatedState);
};

const deleteComment = (state, action) => {
  const commentId = action.commentId;
  const updatedState = {
    comments: state.comments.filter(comment => comment.id !== commentId)
  };
  return updatedObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return articlePageLoaded(state, action);
    case ARTICLE_PAGE_UNLOADED:
      return articlePageUnloaded(state, action);
    case ADD_COMMENT:
      return addComment(state, action);
    case DELETE_COMMENT:
      return deleteComment(state, action);
    default:
      return state;
  }
};
