const Getstoredatawithfilter = require('@services/v1/getstoredatawithfilter');

const { HttpResponseHandler } = require('intelli-utility');


const getstoredatawithfilter = async (req, res) => {
  try {
    console.log(req.query)
            const queryParameters = req.query;

            const data = await Getstoredatawithfilter.getstoredata(queryParameters);

    // const data = await GetSubjectandlocation.Getsubjectandlocation(req.query.subject,req.query.location);

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getstoredatawithfilter
}  