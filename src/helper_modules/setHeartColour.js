export default function setHeartColour(boolean) {
  if (boolean === false) {
    return {color: "gray"}
  } else {
    return {color: "red"}
  }
}