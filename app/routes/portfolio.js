import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let project = [
      {
        'id': 1,
        'title': 'GameStreaming',
        'description': `GameStreaming is an application built with the Twitch's Api`,
        'features': [
          'Follow a games',
          'Follow a streamer',
          'See your favorited',
          'Fetch the live chat using iFrame'
        ],
        'images':[
          '/assets/images/gamestreaming-image4.png',
          '/assets/images/gamestreaming-image3.png',
          '/assets/images/gamestreaming-image2.png',
          '/assets/images/gamestreaming-image1.png',
        ],
        'url': 'http://equimper.github.io/streamingAppRedux/',
        'source': 'https://github.com/EQuimper/streamingAppRedux',
        'technologies': [
          'React',
          'Redux',
          'Webpack',
          'Material-Ui'
        ]
      },
      {
        'id': 2,
        'title': 'Waitstaff Calculator',
        'description': 'This is a app for help waitstaff to calculate their amount of tips.',
        'features': [
          'Help calculate the total of a bills',
          'Can see the total of all tips'
        ],
        'images': [
          '/assets/images/waitstaff-image2.png',
          '/assets/images/waitstaff-image1.png'
        ],
        'url': 'http://equimper.github.io/thinkful-WaitStaff/',
        'source': 'https://github.com/EQuimper/thinkful-WaitStaff',
        'technologies': [
          'Angular',
          'Material-Ui'
        ]
      },
      {
        'id': 3,
        'title': 'Simpletify',
        'description': `Simpletify is a little app build with the Spotify's Api. Was built while learning jQuery`,
        'features': [
          'Fetch a 30s music previews',
          'Search a artist',
          'Search a song'
        ],
        'images': [
          '/assets/images/simpletify-image1.png',
          '/assets/images/simpletify-image3.png',
          '/assets/images/simpletify-image2.png'
        ],
        'url': 'http://equimper.github.io/thinkful-Simpletify/',
        'source': 'https://github.com/EQuimper/thinkful-simpletify',
        'technologies': [
          'jQuery',
          'Bootstrap'
        ]
      }
    ];
    return project;
  }
});
