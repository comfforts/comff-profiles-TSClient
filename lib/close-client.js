import profileClient from './client';
export var closeClient = function () {
    try {
        profileClient.close();
    }
    catch (err) {
        console.error('error closing profiles client');
        return err;
    }
};
