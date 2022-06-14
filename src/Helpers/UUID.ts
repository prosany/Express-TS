function UUID(length: Number) {
  var result = "";
  var characters = "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0W0X8Y7Z6";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default UUID;
