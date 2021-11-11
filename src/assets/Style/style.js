const React = require('react-native');

const {Dimensions} = React;

// const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;

export default {
  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  back: {
    width: 20,
    height: 20,
    padding: 5,
    marginLeft: 20,
  },
  rowdir: {
    flexDirection: 'row',
    width: '100%',
  },

  flexwrap: {
    flexWrap: 'wrap',
  },

  rowrow: {
    flexDirection: 'row',
  },

  flex1: {
    flex: 1,
  },

  col: {
    flexGrow: 1,
    flexBasis: 0,
  },

  alignItems: {
    alignItems: 'center',
  },

  alignItemsTop: {
    alignItems: 'flex-start',
  },
  alignItemsBottom: {
    alignItems: 'flex-end',
  },
  alignSelf: {
    alignSelf: 'flex-start',
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentRight: {
    justifyContent: 'flex-end',
  },
  w50: {
    width: 50,
  },
  w85: {
    width: 85,
  },
  w100: {
    width: 100,
  },
  w120: {
    width: 120,
  },
  w150: {
    width: 150,
  },
  h50: {
    height: 50,
  },

  c2: {
    width: '48%',
    margin: '1%',
  },
  c21: {
    width: deviceWidth / 2 - 20,
  },
  w48per: {
    width: '43%',
    margin: '1%',
  },
  c3: {
    width: '100%',
    marginbottom: '2%',
  },
  c31: {
    width: deviceWidth / 3 - 20,
    marginRight: 5,
  },

  displayinlineBlock: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  btnBorder: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  btnFill: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ff3e6c',
    backgroundColor: '#ff3e6c',
    borderRadius: 4,
  },
  bottomShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
};
