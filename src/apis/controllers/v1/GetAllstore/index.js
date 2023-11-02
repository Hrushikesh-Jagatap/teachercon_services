const Getstoredata = require('@services/v1/CreateStore');

const { HttpResponseHandler } = require('intelli-utility');


const store = async (req, res) => {
  try {
    const data = await Getstoredata.getAllStores();

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  store
}  