import {
  PROFILE_PAGE_UNLOADED,
  PROFILE_PAGE_LOADED,
  FOLLOW_USER,
  UNFOLLOW_USER
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  profile: {
    username: "jordan",
    email: "jordan@gmail.com",
    bio: "scientest",
    externalLink: null,
    profileImage:
      "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
    articleCount: 1,
    followers: 1,
    followings: 0,
    following: false,
    readLater: [
      {
        slug: "on-location-ma-che-siete-venuti-a-fa-in-rome-pb0rqg",
        imageUrl:
          "https://nm-upload-example.s3.us-east-2.amazonaws.com/on-location-ma-che-siete-venuti-a-fa-in-rome-mys936.jpeg",
        title: "ON LOCATION: MA CHE SIETE VENUTI A FÀ IN ROME",
        description:
          "There’s nothing fancy about the place. You enter into a tiny taproom with counter seating on one side and a small bar on the other. Together, the room seats 10 patrons. Behind the bar sits a row of a dozen copper-colored beer towers, each sporting a hand-written card with information about the beer being dispensed. A modest selection of bottled beers is on display in a refrigerated case mounted on the wall. During my visits, most of the bottles featured wild ales from Belgium and the United States. The ever-changing draft list is posted on a chalkboard on the opposite wall."
      }
    ],
    listArticles: [
      {
        name: "",
        private: false,
        description: "",
        articles: [
          {
            slug: "on-location-ma-che-siete-venuti-a-fa-in-rome-pb0rqg",
            imageUrl:
              "https://nm-upload-example.s3.us-east-2.amazonaws.com/on-location-ma-che-siete-venuti-a-fa-in-rome-mys936.jpeg",
            title: "ON LOCATION: MA CHE SIETE VENUTI A FÀ IN ROME",
            description:
              "There’s nothing fancy about the place. You enter into a tiny taproom with counter seating on one side and a small bar on the other. Together, the room seats 10 patrons. Behind the bar sits a row of a dozen copper-colored beer towers, each sporting a hand-written card with information about the beer being dispensed. A modest selection of bottled beers is on display in a refrigerated case mounted on the wall. During my visits, most of the bottles featured wild ales from Belgium and the United States. The ever-changing draft list is posted on a chalkboard on the opposite wall."
          }
        ]
      }
    ],
    social: {
      facebook: "www.facebook.com",
      linkedIn: "www.linkedIn.com",
      twitter: "www.twitter.com",
      instagram: "www.instagram.com"
    },
    type: "Pro"
  },
  suggested: [
    {
      username: "puala",
      email: "puala@gmail.com",
      bio: "profressional blogger",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/6XgjaYnFgxTmqpEuuAiqhwF5ndEoUpe5FdJsNr9bh5A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzOTcxODcuanBn.jpg",
      articleCount: 0,
      followers: 2,
      followings: 10,
      following: true,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    },
    {
      username: "Sue",
      email: "sue@gmail.com",
      bio: "Lover of art",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/5zZbXE395pIcEgLHZy2e48gXEPbVvKu6FBDUQ4GuAvc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNTk5OTAuanBn.jpg",
      articleCount: 3,
      followers: 12,
      followings: 3,
      following: false,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    }
  ],
  followers: [
    {
      username: "Sue",
      email: "sue@gmail.com",
      bio: "Lover of art",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/5zZbXE395pIcEgLHZy2e48gXEPbVvKu6FBDUQ4GuAvc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNTk5OTAuanBn.jpg",
      articleCount: 3,
      followers: 12,
      followings: 3,
      following: true,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    },
    {
      username: "puala",
      email: "puala@gmail.com",
      bio: "profressional blogger",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/6XgjaYnFgxTmqpEuuAiqhwF5ndEoUpe5FdJsNr9bh5A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzOTcxODcuanBn.jpg",
      articleCount: 0,
      followers: 2,
      followings: 10,
      following: false,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    },
    {
      username: "jordan",
      email: "jordan@gmail.com",
      bio: "scientest",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
      articleCount: 1,
      followers: 1,
      followings: 0,
      following: true,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    }
  ],
  followings: [
    {
      username: "jordan",
      email: "jordan@gmail.com",
      bio: "scientest",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
      articleCount: 1,
      followers: 1,
      followings: 0,
      following: false,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    },
    {
      username: "Sue",
      email: "sue@gmail.com",
      bio: "Lover of art",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/5zZbXE395pIcEgLHZy2e48gXEPbVvKu6FBDUQ4GuAvc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNTk5OTAuanBn.jpg",
      articleCount: 3,
      followers: 12,
      followings: 3,
      following: false,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    },
    {
      username: "puala",
      email: "puala@gmail.com",
      bio: "profressional blogger",
      externalLink: null,
      profileImage:
        "https://images.generated.photos/6XgjaYnFgxTmqpEuuAiqhwF5ndEoUpe5FdJsNr9bh5A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzOTcxODcuanBn.jpg",
      articleCount: 0,
      followers: 2,
      followings: 10,
      following: false,
      social: {
        facebook: "www.facebook.com",
        linkedIn: "www.linkedIn.com",
        twitter: "www.twitter.com",
        instagram: "www.instagram.com"
      }
    }
  ]
};

const profilePageLoaded = (state, action) => {
  const updatedState = {
    profile: action.payload[0].profile
  };

  return updatedObject(state, updatedState);
};

const profilePageUnloaded = (state, action) => {
  const updatedState = {};

  return updatedObject(state, updatedState);
};

const adjustFollow = (state, action) => {
  const updatedState = {
    profile: action.payload.profile
  };

  return updatedObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_PAGE_LOADED:
      return profilePageLoaded(state, action);
    case PROFILE_PAGE_UNLOADED:
      return profilePageUnloaded(state, action);

    case FOLLOW_USER:
    case UNFOLLOW_USER:
      return adjustFollow(state, action);
    default:
      return state;
  }
};
