
const undoList = {
  success: true,
  data: [
    {
      status: 'div',
      value: 'dell'
    },
    {
      status: 'div',
      value: 'dell2'
    }
  ]
};

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve) => {
        resolve(undoList);
      });
    }
  }
};
