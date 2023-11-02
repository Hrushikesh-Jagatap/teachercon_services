

const CreateStore = require('@root/src/apis/services/v1/CreateStore');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to create a new student
const createStore = async (req, res, next) => {
    try {
      
            const storeData = req.body;
             const newStore = await CreateStore.createStore(storeData);
             if(newStore)
             {
            return HttpResponseHandler.success(req, res, newStore);
             }
             else{
                return HttpResponseHandler.success(req, res, "null");

             }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createStore
};
