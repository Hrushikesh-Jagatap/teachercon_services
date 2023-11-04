const GetmailinStore = require('@services/v1/GetMailinStore');

const { HttpResponseHandler } = require('intelli-utility');


const mailinstore = async (req, res) => {
  try {
    const data = await GetmailinStore.getmail(req.params.email);

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  mailinstore
}  