enum HTTPCode {
  Success = 200,
  Created = 201,
  ClientError = 400,
  EntityError = 422,
  ServerError = 500,
}

enum HTTPMessage {
  ValidationError = "ValidationError",
  ServerError = "Internal Server Error",
}

export { HTTPCode, HTTPMessage };
