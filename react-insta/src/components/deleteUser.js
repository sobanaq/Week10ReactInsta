//Deleting a user -------------------------------------------------------

import { useState } from "react";
import { deleteUser, login } from "../utils/utilities";

exports.deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ user: request.body.username });
    response.status(200).send({
      msg: `You have succesfully deleted user ${request.body.username}`,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};

export default deleteUser;
