function status(request, response) {
  response.status(200).json({ "API status": "valor" });
}

export default status;
