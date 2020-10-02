import {
  ARTICLE_LIKED,
  ARTICLE_UNLIKED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB,
  PROFILE_LIKES_PAGE_LOADED,
  PROFILE_LIKES_PAGE_UNLOADED,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from "../constants/actionTypes";
import { updatedObject } from "../utility/utility";

const initialState = {
  pager: null,
  tags: ["alchol", "beer", "drinks", "driving", "brewing", "distance"],
  articles: [
    {
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
          facebook: "www.facebook.com",
          linkedIn: "www.linkedIn.com",
          twitter: "www.twitter.com",
          instagram: "www.instagram.com"
        }
      }
    },
    {
      slug: "driven-3e43a61da1b6",
      imageUrl: "https://miro.medium.com/max/3240/1*tm7mKAWyK8PUQJKX6yw5hw.jpeg",
      title: "Driven",
      description:
        "In an age when driving is the next frontier, a 22-year-old mother tries to become the first woman to drive cross-country. Riding into mysterious pre-highway terrain, she rewrites history and faces betrayal closer than she ever imagined.",
      body: `It looked like a storm brewing in the distance. Seconds later, out of the cloud, a band of Native Americans — shirtless and in trousers — appeared rumbling across the vista. They carried drawn bows and arrows as they rode horses parallel to the car. The women stared in awe, which promptly became fear. In unison, the riders turned their horses in the direction of the dark green auto, making its boxy metal profile look pitiful next to its rival the horse in the arid, western landscape.” The hunting party pulled up alongside, and Alice Ramsey’s mind reeled. A front page article in the New York Times a few months prior reported an “Indian Revolt” out west that left six men dead. The item took on new meaning as the thundering horses and their riders kept pace with the vehicle.`,
      tagList: ["driving", "brewing", "distance"],
      createdAt: "10/09/2020",
      updatedAt: "10/09/2020",
      liked: false,
      likeCount: 22,
      category: "History",
      author: {
        username: "jordan",
        email: "jordan@gmail.com",
        bio: "scientest",
        externalLink: null,
        profileImage:
          "https://images.generated.photos/l0yRr8jv0MGWKOrn2z188o-vFr5U4jVYaGwta7-DAEE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODM1NTYuanBn.jpg",
        articleCount: 1,
        followers: 1,
        followings: 0,
        social: {
          facebook: "www.facebook.com",
          linkedIn: "www.linkedIn.com",
          twitter: "www.twitter.com",
          instagram: "www.instagram.com"
        }
      }
    },
    {
      slug: "pamela-anderson-profile-3e43a61da1b6",
      imageUrl:
        "https://hips.hearstapps.com/ell.h-cdn.co/assets/cm/15/19/640x426/554a7721107b6-elle-pam-anderson-01-v-large-new.jpg?resize=980:*",
      title: "Have You Met The New Pamela Anderson?",
      description:
        "Boobs! Boyfriends! Baywatch! Pamela Anderson is iconic for her role as the ultimate babe. Now she would like you to know there are brains inside that body, thank you very much. But is this a woman on a quest to find her true self—or has Pam been one step ahead of us all along?",
      body: `"Omigod!" Pamela Anderson ducks behind the steering wheel of her Aston Martin, eyes widening beneath her Twiggy-blond pixie cut. "I think I just saw my ex-husband." Slipping on her oversize sunglasses, she rises up until her eyes are level with the windshield, then quickly dives back down, like the heroine of a screwball comedy. "It is! It's him! Look!" I look. Outside, another white convertible circles the parking lot of Malibu's Point Dume Plaza. The driver is wearing the obligatory beanie and sunglasses, but the long nose and weak chin are a dead giveaway: Kid Rock. His car is nearly identical to the white Aston Martin we're in, which—rather poignantly—recalls the matching white T-shirt and bikini ensembles he and Pam wore for their wedding eight years ago. Apparently they also have the same taste in juice bars. And to think it only lasted four months! Though the marriage may have been short, the bad feelings have lingered. "He's the only person I don't talk to," she explains. "We blew it, and the kids suffered." Anderson has two sons from her infamous marriage to rock star Tommy Lee—Brandon, 17, and Dylan, 16, the most consistent men in her life—and Kid Rock also has a son. "It just kind of turned their lives upside down, and it made us bitter. How do we have the same car?" she says, fingers tapping the dashboard impatiently. "We've got to get out of here." She peers in the rearview mirror at another car blocking the exit. The sunglasses, combined with her customary white ensemble—a camisole and shorts so teeny she might as well not be wearing them at all—topped with a large Aztec-print cardigan (because even Malibu gets cold in January) make her look like a tiny, glamorous ghost. "Let me out, you dumb car," she growls. "Oh my GODDDDD." Sweet relief comes and she peels out of the parking place, shivering. "I got that tingly feeling," she says.`,
      tagList: ["Pamela", "Anderson", "Boyfriends"],
      createdAt: "12/11/2019",
      updatedAt: "13/11/2019",
      liked: false,
      likeCount: 22,
      category: "Romance",
      author: {
        username: "puala",
        email: "puala@gmail.com",
        bio: "profressional blogger",
        externalLink: null,
        profileImage:
          "https://images.generated.photos/6XgjaYnFgxTmqpEuuAiqhwF5ndEoUpe5FdJsNr9bh5A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzOTcxODcuanBn.jpg",
        articleCount: 0,
        followers: 2,
        followings: 10,
        social: {
          facebook: "www.facebook.com",
          linkedIn: "www.linkedIn.com",
          twitter: "www.twitter.com",
          instagram: "www.instagram.com"
        }
      }
    },
    {
      slug: "finfisher-spyware-let-bahrain-government-hack-political-activist",
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/L4MqQ6H5aPOUeKBlHSJti04Marg=/1600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3322000/TheVerge-_HalShinnie-_DSC4925.0.jpg",
      title: "A SPY IN THE MACHINE",
      description:
        "How a brutal government used cutting-edge spyware to hijack one activist's life",
      body: `In November 2005, during the dead of night, five black cars pulled up in front of the home of Moosa Abd-Ali Ali. The doors opened, and a group of men stepped out. They could’ve been officers, or maybe they were just hired muscle — such distinctions aren’t always clear in Bahrain. But Moosa knew they were sent by the government, and they had come for him. Moosa was just 24 at the time, but he had already become a prominent anti-government activist within the small kingdom of Bahrain. He’d spent years protesting for equal employment rights and had been jailed and tortured on several occasions. When the cars pulled up outside his home that night, he had just served a nine-month prison sentence on charges that were never revealed to him. The men barged into Moosa’s house and dragged him out into the streets of Al-Akar, the seaside village where he lived with his wife and young son. They took him to a quiet, darkened alleyway and took turns beating him. Then they raped him. If he didn’t stop his activism, they told him, they would do the same to his family.`,
      tagList: ["Pamela", "Anderson", "Boyfriends"],
      createdAt: "01/1/2019",
      updatedAt: "01/1/2019",
      liked: false,
      likeCount: 12,
      category: "Spying",
      author: {
        username: "Sue",
        email: "sue@gmail.com",
        bio: "Lover of art",
        externalLink: null,
        profileImage:
          "https://images.generated.photos/5zZbXE395pIcEgLHZy2e48gXEPbVvKu6FBDUQ4GuAvc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNTk5OTAuanBn.jpg",
        articleCount: 3,
        followers: 12,
        followings: 3,
        social: {
          facebook: "www.facebook.com",
          linkedIn: "www.linkedIn.com",
          twitter: "www.twitter.com",
          instagram: "www.instagram.com"
        }
      }
    }
  ],
  articlesCount: 4,
  tab: 'feed',
  currentPage: 0
};

const articleLike = (state, action) => {
    const updatedState = {};
    // updatedState.articles = state.articles.map(article => {
    //     if (article.slug === action.payload.article.slug) {
    //         return {
    //             ...article,
    //             liked: action.payload.article.liked,
    //             likesCount: action.payload.article.likesCount
    //         }
    //     }
    //     return article;
    // });
    return updatedObject(state, updatedState);
}

const setPage = (state, action) => {
    const updatedState = {
        // articles: action.payload.articles,
        // articlesCount: action.payload.articlesCount,
        // currentPage: action.page
    }
    return updatedObject(state, updatedState);
}

const applyTagFilter = (state, action) => {
    const updatedState = {
        // pager: action.pager,
        // articles: action.payload.articles,
        // articlesCount: action.payload.articlesCount,
        // tab: null,
        // tag: action.tag,
        // currentPage: 0  
    }
    return updatedObject(state, updatedState);
}

const homePageLoaded = (state, action) => {
    const updatedState = {
        // pager: action.pager,
        // tags: action.payload[0].tags,
        // articles: action.payload[1].articles,
        // articlesCount: action.payload[1].articlesCount,
        // currentPage: 0,
        // tab: action.tab
    }
    return updatedObject(state, updatedState);
}

const changeTab = (state, action) => {
    const updatedState = {
        // pager: action.pager,
        // articles: action.payload.articles,
        // articlesCount: action.payload.articlesCount,
        // tab: action.tab,
        // currentPage: 0,
        // tag: null
    }
    return updatedObject(state, updatedState);
}

const profilePageLoaded = (state, action) => {
    const updatedState = {
        pager: action.pager,
        articles: action.payload[1].articles,
        articlesCount: action.payload[1].articlesCount,
        currentPage: 0
    }
    return updatedObject(state, updatedState);
}

const defaultState = (state, action) => {
    return {};
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_LIKED:
    case ARTICLE_UNLIKED:
      return articleLike(state, action);
    case SET_PAGE:
      return setPage(state, action);
    case APPLY_TAG_FILTER:
      return applyTagFilter(state, action);
    case HOME_PAGE_LOADED:
      return homePageLoaded(state, action);
    case CHANGE_TAB:
      return changeTab(state, action);
    case PROFILE_LIKES_PAGE_LOADED:
    case PROFILE_PAGE_LOADED:
      return profilePageLoaded(state, action);
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_LIKES_PAGE_UNLOADED:
    case HOME_PAGE_UNLOADED:
      return defaultState(state, action);
    default:
      return state;
  }
};
