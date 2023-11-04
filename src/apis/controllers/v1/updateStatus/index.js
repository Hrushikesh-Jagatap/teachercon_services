// const StudentService = require('@root/src/apis/services/v1/updateStatus');
const { HttpResponseHandler } = require('intelli-utility');

const StudentService = require('@services/v1/updateStatus');

// Controller function to update a teacher by ID
const updatestatus = async (req, res) => {
  try {
    const data = await StudentService.updateStudentStatus(req.params.id, req.body);

    if (!data) {
      return HttpResponseHandler.success(req, res, data);

    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
  //  next(error)
  }
};

module.exports = {
  updatestatus,
};
