//Updating a username -------------------------------------------------------

exports.updateUserEmail = async (request, response) => {
  try {
    await User.updateOne(
      { user: request.body.username },
      { email: request.body.email }
    );
    response
      .status(200)
      .send({ msg: "You have succesfully updated your email address." });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};
